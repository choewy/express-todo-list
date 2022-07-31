import db from '../db';
import { defaultOptions } from '../options';
import { databaseException } from '../../common/exceptions';

export const todoRepository = {
  // Get User's Todo Items
  async findAllTodos(userId: string, groupId: string) {
    try {
      const todos = await db.Todo.findAll({
        ...defaultOptions,
        where: { userId, groupId },
      });

      return todos
        ? todos.map((todo: Todo) => {
            const { userId, groupId, ...todoData } = todo;
            return todoData;
          })
        : [];
    } catch (error) {
      return databaseException(error);
    }
  },

  // Create User's Todo Items
  async createTodo(todoCreateData: TodoCreateData) {
    console.log(todoCreateData);
    try {
      return await db.Todo.create(todoCreateData);
    } catch (error) {
      return databaseException(error);
    }
  },
};
