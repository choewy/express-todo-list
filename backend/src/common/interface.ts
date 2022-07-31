import { RequestHandler } from 'express';

declare global {
  type Middleware = RequestHandler;

  interface Controller {
    method: 'get' | 'post' | 'patch' | 'put' | 'delete';
    path: string;
    middlewares?: RequestHandler[];
    callback: RequestHandler;
  }

  type Service = () => {};

  interface RouteProvider {
    service: Service;
    controllers: Controller[];
  }
}
export {};
