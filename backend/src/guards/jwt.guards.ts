import { customResponse } from '../common/response';
import { userRepository } from '../database/repositories/user.repository';
import { notFoundAccountException } from '../common/exceptions';
import { verifyAccessToken } from '../utils/jwt.util';

export const jwtGuard: Middleware = async (req, res, next) => {
  const response = customResponse(res);
  try {
    const { authorization } = req.headers;
    const accessToken = (authorization || ' ').split(' ')[1];
    const { id } = verifyAccessToken(accessToken) as Payload;
    const user = await userRepository.findUserWithId(id);
    if (!user) {
      notFoundAccountException();
    }
    req.body.userId = id;
    next();
  } catch (error) {
    response.error(error as ErrorData);
  }
};
