import { Request, Response } from 'express';
import {
  leaderboardHomeServiceGetAll,
  leaderboardAwayServiceGetAll,
} from '../service/LeaderboardService';
// import loginJoiSchema from '../validations/loginJoiSchema';

const leaderboardHomeController = async (_req: Request, res: Response) => {
  const { teamProfile } = await leaderboardHomeServiceGetAll();
  if (!teamProfile) return res.status(400).json({ message: 'Leaderboard not found!' });
  res.status(200).json(teamProfile);
};

const leaderboardAwayController = async (_req: Request, res: Response) => {
  const { teamAwayProfile } = await leaderboardAwayServiceGetAll();
  if (!teamAwayProfile) return res.status(400).json({ message: 'Leaderboard not found!' });
  res.status(200).json(teamAwayProfile);
};

export {
  leaderboardHomeController,
  leaderboardAwayController,
};
