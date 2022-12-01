import { Router } from 'express';
import {
  leaderboardHomeController,
  leaderboardAwayController,
} from '../controller/LeaderboardController';

const router = Router();

router.get('/home', leaderboardHomeController);
router.get('/away', leaderboardAwayController);

export default router;
