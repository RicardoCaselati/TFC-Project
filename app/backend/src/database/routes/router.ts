import { Router } from 'express';
import loginRouter from './login.router';

import teamsRouter from './teams.router';

import matchesRouter from './matches.router';

const routes = Router();

// Rota Login
routes.use('/login', loginRouter);

// Rotas Teams
routes.use('/teams', teamsRouter);

// Rotas Matches
routes.use('/matches', matchesRouter);

export default routes;
