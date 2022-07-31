import { Router } from 'express';

export const customRouter = (
  prefix: string = '/',
  controllers: Controller[],
): [string, Router] => {
  const router = Router();
  controllers.forEach((controller) => {
    const { method, path, callback, middlewares } = controller;
    const callbacks = middlewares ? middlewares : [];
    router[method](path, ...callbacks, callback);
  });
  return [prefix, router];
};
