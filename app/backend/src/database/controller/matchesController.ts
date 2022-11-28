import { Request, Response } from 'express';
import {
  matchesServiceGetAll,
  matchesServiceGetProgress,
  matchesServiceInPutMatch,
  matchesServiceUpdateMatch,
  matchesServiceUpdateScore,
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

async function matchesControllerInPutMatch(req: Request, res: Response) {
  const sentMatch = { ...req.body, inProgress: true };
  const {
    newMatch,
  } = await matchesServiceInPutMatch(sentMatch);
  if (!newMatch) return res.status(400).json({ message: 'No teams inserted' });
  res.status(201).json(newMatch);
}

async function matchesControllerUpdateMatch(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { message } = await matchesServiceUpdateMatch(id);
  if (!message) return res.status(400).json({ message: 'No teams patched' });
  res.status(200).json({ message });
}

// async function matchesControllerUpdateScore(req: Request, res: Response) {
//   const id = Number(req.params.id);
//   const { homeTeamGoals, awayTeamGoals } = req.body;

//   const { message } = await matchesServiceUpdateScore(id, homeTeamGoals, awayTeamGoals);
//   if (!message) return res.status(400).json({ message: 'No teams patched' });
//   res.status(200).json({ message });
// }

async function matchesControllerUpdateScore(req: Request, res: Response) {
  const id = Number(req.params.id);
  const requestObject = req.body;

  const { message } = await matchesServiceUpdateScore(id, requestObject);
  if (!message) return res.status(400).json({ message: 'No teams patched' });
  res.status(200).json({ message });
}

export {
  matchesControllerGetAll,
  matchesControllerInPutMatch,
  matchesControllerUpdateMatch,
  matchesControllerUpdateScore,
};
