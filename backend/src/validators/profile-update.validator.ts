import { invalidNameException } from '../common/exceptions';
import { customResponse } from '../common/response';

export const profileUpdateValidator: Middleware = (req, res, next) => {
  const { name } = req.body;
  const response = customResponse(res);

  try {
    if (name !== undefined && !name) {
      invalidNameException();
    }
    next();
  } catch (error) {
    return response.error(error as ErrorData);
  }
};
