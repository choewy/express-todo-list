import express, { Application } from 'express';
import cors from 'cors';

const middlewares = [
  express.json(),
  express.urlencoded({ extended: true }),
  cors({ credentials: true }),
];

export const useMiddleware = (app: Application) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
