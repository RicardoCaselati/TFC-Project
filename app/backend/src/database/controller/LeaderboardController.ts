import { Request, Response } from 'express';
import leaderboardServiceGetAll from '../service/LeaderboardService';
// import loginJoiSchema from '../validations/loginJoiSchema';

const leaderboardController = async (_req: Request, res: Response) => {
  // const { error } = loginJoiSchema.validate(req.body);
  // if (error) return res.status(400).json({ message: error.details[0].message });
  const { teamProfile } = await leaderboardServiceGetAll();
  console.log(teamProfile);
  // if (matches) return res.status(200).json({ matches });
  res.status(200).json(teamProfile);
};

export default leaderboardController;
