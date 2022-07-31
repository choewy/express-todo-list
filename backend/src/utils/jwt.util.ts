import * as jwt from 'jsonwebtoken';
import { SECRET } from '../common/constants';
import {
  expiredTokenException,
  invalidTokenException,
  needSignInException,
} from '../common/exceptions';
import { UserModel } from '../database/models/user.model';

declare global {
  interface Payload {
    id: string;
  }
}

export const generateAccessToken = (user: UserModel | undefined) => {
  if (user) {
    return jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
  }
};

export const generateRefreshToken = () => {
  return jwt.sign({}, SECRET, { expiresIn: '14d' });
};

export const verifyAccessToken = (accessToken: string) => {
  try {
    return jwt.verify(accessToken, SECRET) as Payload;
  } catch (error) {
    const { name } = error as jwt.JsonWebTokenError;
    switch (name) {
      case 'TypeError':
        return needSignInException(error);
      case 'JsonWebTokenError':
        return invalidTokenException(error);
      case 'TokenExpiredError':
        return expiredTokenException(error);
    }
  }
};
