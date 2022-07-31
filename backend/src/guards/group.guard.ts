import {
  invalidGroupIdException,
  notFoundGroupException,
} from '../common/exceptions';
import { customResponse } from '../common/response';
import { groupsRepository } from '../database/repositories/group.repository';

export const groupGuard: Middleware = async (req, res, next) => {
  const { groupId } = req.params;
  const response = customResponse(res);

  try {
    if (!groupId) {
      invalidGroupIdException();
    }

    const group = await groupsRepository.findGroup(groupId);
    if (!group) {
      notFoundGroupException();
    }

    req.body.groupId = groupId;
    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
