import { Router } from 'express';
import leaderboardController from '../controller/LeaderboardController';

const router = Router();

router.get('/home', leaderboardController);

export default router;
