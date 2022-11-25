import { Request, Response } from 'express';
import teamsServiceGetAll from '../service/teamsService';

async function teamsControllerGetAll(_req: Request, res: Response) {
  const { teams } = await teamsServiceGetAll();
  if (!teams) return res.status(400).json({ message: 'Teams not found' });
  res.status(200).json(teams);
}

export default teamsControllerGetAll;
