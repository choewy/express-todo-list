import {
  invalidEmailException,
  invalidPasswordException,
} from '../common/exceptions';
import { customResponse } from '../common/response';

export const authSignInValidator: Middleware = (req, res, next) => {
  const { email, password } = req.body;
  const response = customResponse(res);

  try {
    if (!email) {
      invalidEmailException();
    }

    if (!password) {
      invalidPasswordException();
    }

    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
