import {
  alreadyExistAccountException,
  incorrectPasswordException,
  notFoundAccountException,
} from '../../common/exceptions';
import { authRepository } from '../../database/repositories/auth.repository';
import { hashPassword, comparePassword } from '../../utils/bcrypt.util';
import { generateAccessToken } from '../../utils/jwt.util';

declare global {
  interface UserSignUpData {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
  }

  interface UserSignInData {
    email: string;
    password: string;
  }
}

export const authService = {
  repository: authRepository,
  async signUpUser(userSignUpData: UserSignUpData) {
    const { email, password } = userSignUpData;

    const existUser = await this.repository.findUserWithEmail(email);
    if (existUser) {
      return alreadyExistAccountException();
    }

    userSignUpData.password = await hashPassword(password);
    const user = await this.repository.createUser(userSignUpData);
    return {
      accessToken: generateAccessToken(user),
    };
  },
  async signInUser(userSignInData: UserSignInData) {
    const { email, password } = userSignInData;

    const user = await this.repository.findUserWithEmail(email);
    if (user === null || user === undefined) {
      return notFoundAccountException();
    }

    const verify = await comparePassword(password, user.password);
    if (!verify) {
      return incorrectPasswordException();
    }

    return {
      accessToken: generateAccessToken(user),
    };
  },
};
