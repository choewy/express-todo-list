import { notFoundAccountException } from '../../common/exceptions';
import { userRepository } from '../../database/repositories/user.repository';

declare global {
  interface UserUpdateProfileData {
    userId: string;
    name: string;
  }
}

export const userService = {
  repository: userRepository,

  // Get User Profile
  async getProfile(id: string) {
    const user = await this.repository.findUserWithId(id);
    if (!user) {
      return notFoundAccountException();
    }
    const { password, ...data } = user;
    return data;
  },

  // Update User Profile
  async updateProfile(userUpdateProfileData: UserUpdateProfileData) {
    const [effectedRows] = await this.repository.updateProfile(
      userUpdateProfileData,
    );
    if (!effectedRows) {
      return notFoundAccountException();
    }
  },
};
