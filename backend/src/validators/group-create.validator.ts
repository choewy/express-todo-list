import { invalidGroupTitleException } from '../common/exceptions';
import { customResponse } from '../common/response';

export const groupCreateValidator: Middleware = (req, res, next) => {
  const response = customResponse(res);
  const { title } = req.body;

  try {
    if (!title) {
      invalidGroupTitleException();
    }
    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
