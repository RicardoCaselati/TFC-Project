import { Request, Response } from 'express';
import {
  matchesServiceGetAll,
  matchesServiceGetProgress,
} from '../service/matchesService';

async function matchesControllerGetAll(req: Request, res: Response) {
  if (Object.keys(req.query).length > 0) {
    const param = String(req.query.inProgress);
    const { matches } = await matchesServiceGetProgress(param);
    res.status(200).json(matches);
    return;
  }
  const { matches } = await matchesServiceGetAll();
  res.status(200).json(matches);
}

export default matchesControllerGetAll;
