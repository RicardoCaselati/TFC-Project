import { Router } from 'express';
import {
  matchesControllerGetAll,
  matchesControllerInPutMatch,
  matchesControllerUpdateMatch,
} from '../controller/matchesController';
import {
  validateNewMatchBody,
  validateExistingTeams,
} from '../middlewares/match.middleware';

import tokenValidation from '../middlewares/validationJWT';

const router = Router();

router.get('/', matchesControllerGetAll);
router.post(
  '/',
  tokenValidation,
  validateNewMatchBody,
  validateExistingTeams,
  matchesControllerInPutMatch,
);
router.patch('/:id/finish', matchesControllerUpdateMatch);

export default router;
