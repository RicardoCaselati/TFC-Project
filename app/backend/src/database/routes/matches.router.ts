import { Router } from 'express';
import matchesControllerGetAll from '../controller/matchesController';

const router = Router();

router.get('/', matchesControllerGetAll);

export default router;
