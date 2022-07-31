import { customResponse } from '../../common/response';
import { authSignInValidator } from '../../validators/auth-signin.validator';
import { authSignUpValidator } from '../../validators/auth-signup.validator';
import { authService } from './auth.service';

export const authControllers: Controller[] = [
  {
    method: 'post',
    path: '/signup',
    middlewares: [authSignUpValidator],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        const tokens = await authService.signUpUser(req.body);
        response.success({ code: 201, data: { tokens } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },
  {
    method: 'post',
    path: '/signin',
    middlewares: [authSignInValidator],
    async callback(req, res) {
      const response = customResponse(res);
      try {
        const tokens = await authService.signInUser(req.body);
        response.success({ code: 200, data: { tokens } });
      } catch (error) {
        response.error(error as ErrorData);
      }
    },
  },
];
