import { customResponse } from '../../common/response';
import { jwtGuard } from '../../guards/jwt.guards';
import { profileUpdateValidator } from '../../validators/profile-update.validator';
import { userService } from './user.service';

export const userControllers: Controller[] = [
  // Get User Profile
  {
    method: 'get',
    path: '/me',
    middlewares: [jwtGuard],
    async callback(req, res) {
      const { userId } = req.body;
      const response = customResponse(res);
      try {
        const user = await userService.getProfile(userId);
        response.success({ code: 200, data: { user } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },

  // Update User Profile
  {
    method: 'patch',
    path: '/me',
    middlewares: [jwtGuard, profileUpdateValidator],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        await userService.updateProfile(req.body);
        response.success({ code: 200 });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },
];
