import { Sequelize } from 'sequelize';
import { SEQUELIZE_CONFIGS } from '../common/constants';
import { GroupModel, GroupModelGenerator } from './models/group.model';
import { TodoModel, TodoModelGenerator } from './models/todo.model';
import { UserModel, UserModelGenerator } from './models/user.model';
import { relations } from './relations';

const sequelize = new Sequelize(SEQUELIZE_CONFIGS);

declare global {
  interface TimeStampModel {
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
  }

  interface DB {
    Sequelize: typeof Sequelize;
    sequelize: Sequelize;
    User: typeof UserModel;
    Group: typeof GroupModel;
    Todo: typeof TodoModel;
  }
}

const db: DB = {
  Sequelize,
  sequelize,
  User: UserModelGenerator(sequelize),
  Group: GroupModelGenerator(sequelize),
  Todo: TodoModelGenerator(sequelize),
};

relations(db);

export default db;
