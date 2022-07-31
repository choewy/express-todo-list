import { Application } from 'express';
import { customRouter } from '../common/router';
import { authControllers } from './auth/auth.controller';
import { groupControllers } from './group/group.controller';
import { userControllers } from './users/user.controller';

const routers = [
  customRouter('/auth', authControllers),
  customRouter('/users', userControllers),
  customRouter('/groups', groupControllers),
];

export const useRouter = (app: Application) => {
  routers.forEach(([prefix, router]) => {
    app.use(prefix, router);
  });
};
