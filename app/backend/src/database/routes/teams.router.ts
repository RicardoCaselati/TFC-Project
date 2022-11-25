import { Router } from 'express';
import teamsControllerGetAll from '../controller/teamController';
// import validateProductBody from '../middlewares/product.validation';

const router = Router();

router.get('/', teamsControllerGetAll);
// router.post('/', validateProductBody, ProductController.create.bind(ProductController));

export default router;
