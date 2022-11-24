import { Router } from 'express';
import login from '../controller/LoginController';
import tokenValidation from '../middlewares/validationJWT';
import validate from '../middlewares/validations';

const router = Router();

router.post('/', login);

router.get('/validate', tokenValidation, validate);

export default router;
