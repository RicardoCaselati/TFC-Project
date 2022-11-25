import { Request, Response } from 'express';
import matchesServiceGetAll from '../service/matchesService';

async function matchesControllerGetAll(_req: Request, res: Response) {
  const { matches } = await matchesServiceGetAll();
  if (!matches) return res.status(400).json({ message: 'Teams not found' });
  res.status(200).json(matches);
}

export default matchesControllerGetAll;
