// import * as express from 'express';
import { Router } from 'express';
import login from './login.router';

const router = Router();

const routes = (): void => {
  router.use('/login', login);
};

export default routes;
