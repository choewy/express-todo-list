import {
  incorrectPasswordException,
  invalidEmailException,
  invalidNameException,
  invalidPasswordException,
} from '../common/exceptions';
import { customResponse } from '../common/response';

export const authSignUpValidator: Middleware = (req, res, next) => {
  const { email, password, confirmPassword, name } = req.body;
  const response = customResponse(res);

  try {
    if (!email) {
      invalidEmailException();
    }

    if (!name) {
      invalidNameException();
    }

    if (!password) {
      invalidPasswordException();
    }

    if (!confirmPassword) {
      invalidPasswordException();
    }

    if (password !== confirmPassword) {
      incorrectPasswordException();
    }
    next();
  } catch (error) {
    return response.error(error as ErrorData);
  }
};
