import { groupsRepository } from '../../database/repositories/group.repository';

declare global {
  interface GroupFindAllData {
    userId: string;
  }

  interface GroupFindOneData {
    userId: string;
    groupId: string;
  }

  interface GroupCreateData {
    userId: string;
    title: string;
    summary?: string;
  }

  interface TodoCreateData {
    userId: string;
    groupId: string;
    content: string;
  }
}

export const groupService = {
  repository: groupsRepository,

  // Get User's Todo Groups
  async getAllGroups(groupFindAllData: GroupFindAllData) {
    return await this.repository.findAllGroups(groupFindAllData);
  },

  // Get User's Todo Group Details & Todos
  async getGroup(groupFindOneData: GroupFindOneData) {
    return await this.repository.findGroupAbsolutely(groupFindOneData);
  },

  // Create User's Todo Group
  async createGroup(groupCreateData: GroupCreateData) {
    const { userId, ...groupData } = groupCreateData;
    return await this.repository.createGroup({ ...groupData, userId });
  },

  // Update User's Todo Group
  async updateGroup() {},

  // Delete User's Todo Group
  async deleteGroup() {},

  // Get User's Todo Group's Todos
  async getTodos(groupFindOneData: GroupFindOneData) {
    return await this.repository.findTodos(groupFindOneData);
  },

  // Create User's Todo Group's Todo
  async createTodo(todoCreateData: TodoCreateData) {
    return await this.repository.createTodo(todoCreateData);
  },
};
