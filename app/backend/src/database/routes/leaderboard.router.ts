import { Router } from 'express';
import {
  leaderboardController,
  leaderboardHomeController,
  leaderboardAwayController,
} from '../controller/LeaderboardController';

const router = Router();

router.get('/', leaderboardController);
router.get('/home', leaderboardHomeController);
router.get('/away', leaderboardAwayController);

export default router;
