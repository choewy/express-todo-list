import { customResponse } from '../../common/response';
import { groupGuard } from '../../guards/group.guard';
import { jwtGuard } from '../../guards/jwt.guards';
import { groupCreateValidator } from '../../validators/group-create.validator';
import { todoCreateValidator } from '../../validators/todo-create.validator';
import { groupService } from './group.service';

export const groupControllers: Controller[] = [
  // Get User's Todo Groups
  {
    method: 'get',
    path: '',
    middlewares: [jwtGuard],
    async callback(req, res) {
      const response = customResponse(res);
      const { userId } = req.body;
      try {
        const groups = await groupService.getAllGroups(userId);
        response.success({ code: 200, data: { groups } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },

  // Get User's Todo Group
  {
    method: 'get',
    path: '/:groupId',
    middlewares: [jwtGuard],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        const groups = await groupService.getGroup(req.body);
        response.success({ code: 200, data: { groups } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },

  // Create User's New Todo Group
  {
    method: 'post',
    path: '',
    middlewares: [jwtGuard, groupGuard, groupCreateValidator],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        await groupService.createGroup(req.body);
        response.success({ code: 201 });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },

  // Update User's Todo Group
  {
    method: 'patch',
    path: '/:groupId',
    middlewares: [jwtGuard, groupGuard],
    async callback() {},
  },

  // Get User's Todo Group's Todos
  {
    method: 'get',
    path: '/:groupId/todos',
    middlewares: [jwtGuard],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        const todos = await groupService.getTodos(req.body);
        response.success({ code: 200, data: { todos } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },

  // Create User's Todo Group's Todo
  {
    method: 'post',
    path: '/:groupId/todos',
    middlewares: [jwtGuard, todoCreateValidator],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        await groupService.createTodo(req.body);
        response.success({ code: 201 });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },
];
