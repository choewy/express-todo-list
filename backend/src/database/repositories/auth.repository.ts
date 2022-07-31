import db from '../db';
import { defaultOptions } from '../options';
import { databaseException } from '../../common/exceptions';

export const authRepository = {
  async findUserWithEmail(email: string) {
    try {
      return await db.User.findOne({
        ...defaultOptions,
        where: { email },
      });
    } catch (error) {
      databaseException(error);
    }
  },
  async createUser(userSignUpData: UserSignUpData) {
    try {
      return await db.User.create(userSignUpData);
    } catch (error) {
      databaseException(error);
    }
  },
};
