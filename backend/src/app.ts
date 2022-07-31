import './common/interface';
import express from 'express';
import { useRouter } from './routers';
import { useMiddleware } from './middlewares';

const app = express();

useMiddleware(app);
useRouter(app);

export default app;
