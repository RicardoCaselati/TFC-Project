import { Router } from 'express';
import {
  teamsControllerGetAll,
  teamsControllerGetById,
} from '../controller/teamController';
// import validateProductBody from '../middlewares/product.validation';

const router = Router();

router.get('/', teamsControllerGetAll);
router.get('/:id', teamsControllerGetById);

export default router;
