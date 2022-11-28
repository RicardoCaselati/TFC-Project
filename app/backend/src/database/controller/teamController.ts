import { Request, Response } from 'express';
import {
  teamsServiceGetAll,
  teamsServiceGetById,
} from '../service/teamsService';

async function teamsControllerGetAll(_req: Request, res: Response) {
  const { teams } = await teamsServiceGetAll();
  if (!teams) return res.status(400).json({ message: 'Teams not found' });
  res.status(200).json(teams);
}

async function teamsControllerGetById(req: Request, res: Response) {
  const { id } = req.params;
  const idParam = Number(id);
  const { team } = await teamsServiceGetById(idParam);
  if (!team) return res.status(400).json({ message: 'Did not find teams' });
  res.status(200).json(team);
}

export {
  teamsControllerGetAll,
  teamsControllerGetById,
};
