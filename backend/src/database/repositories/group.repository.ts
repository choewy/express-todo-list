import db from '../db';
import { defaultOptions } from '../options';
import { databaseException } from '../../common/exceptions';

export const groupsRepository = {
  // Get User's Todo Groups
  async findAllGroups(groupFindAllData: GroupFindAllData) {
    const { userId } = groupFindAllData;
    try {
      const groups = await db.Group.findAll({
        ...defaultOptions,
        attributes: {
          exclude: ['userId', 'deletedAt'],
        },
        where: { userId },
      });
      return groups ? groups : [];
    } catch (error) {
      return databaseException(error);
    }
  },

  // Get Todo Group(using at groupGuard)
  async findGroup(groupId: string) {
    try {
      return await db.Group.findOne({
        ...defaultOptions,
        attributes: {
          exclude: ['userId', 'deletedAt'],
        },
        where: { id: groupId },
      });
    } catch (error) {
      return databaseException(error);
    }
  },

  // Get User's Todo Group(using at groupService)
  async findGroupAbsolutely(groupFindData: GroupFindOneData) {
    const { groupId, userId } = groupFindData;
    try {
      return await db.Group.findOne({
        ...defaultOptions,
        attributes: {
          exclude: ['userId', 'deletedAt'],
        },
        where: { id: groupId, userId },
      });
    } catch (error) {
      return databaseException(error);
    }
  },

  // Get Users's Todo Group's Todos
  async findTodos(groupFindOneData: GroupFindOneData) {
    const { groupId, userId } = groupFindOneData;
    try {
      return await db.Todo.findAll({
        ...defaultOptions,
        attributes: {
          exclude: ['userId', 'groupId', 'deletedAt'],
        },
        where: { groupId, userId },
      });
    } catch (error) {
      return databaseException(error);
    }
  },

  // Create User's New Todo Group
  async createGroup(groupCreateData: GroupCreateData) {
    try {
      await db.Group.create(groupCreateData);
    } catch (error) {
      return databaseException(error);
    }
  },

  // Update User's Todo Group
  async updateGroup() {
    try {
    } catch (error) {
      return databaseException(error);
    }
  },

  // Delete User's Todo Group
  async deleteGroup(userId: string, groupId: string) {
    try {
    } catch (error) {
      return databaseException(error);
    }
  },

  // Create User's Todo Group's Todo
  async createTodo(todoCreateData: TodoCreateData) {
    try {
      await db.Todo.create(todoCreateData);
    } catch (error) {
      return databaseException(error);
    }
  },
};
