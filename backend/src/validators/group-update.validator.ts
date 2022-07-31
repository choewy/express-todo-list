import { invalidGroupTitleException } from '../common/exceptions';
import { customResponse } from '../common/response';

export const groupUpdateValidator: Middleware = (req, res, next) => {
  const { title } = req.body;
  const response = customResponse(res);

  try {
    if (!title) {
      invalidGroupTitleException();
    }
    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
