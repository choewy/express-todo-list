import db from '../db';
import { defaultOptions } from '../options';
import { databaseException } from '../../common/exceptions';

export const userRepository = {
  async findUserWithId(userId: string) {
    try {
      return await db.User.findOne({
        ...defaultOptions,
        where: { id: userId },
      });
    } catch (error) {
      return databaseException(error);
    }
  },
  async updateProfile(userUpdateProfileData: UserUpdateProfileData) {
    try {
      const { userId, ...updateData } = userUpdateProfileData;
      return await db.User.update(updateData, { where: { id: userId } });
    } catch (error) {
      return databaseException(error);
    }
  },
};
