import {
  invalidGroupIdException,
  invalidGroupTitleException,
} from '../common/exceptions';
import { customResponse } from '../common/response';

export const todoCreateValidator: Middleware = (req, res, next) => {
  const { groupId } = req.params;
  const { content } = req.body;
  const response = customResponse(res);

  try {
    if (!groupId) {
      invalidGroupIdException();
    }

    if (!content) {
      invalidGroupTitleException();
    }

    req.body.groupId = groupId;
    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
