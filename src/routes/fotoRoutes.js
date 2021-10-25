import { Router } from 'express'; // importando apenas o router dos express
import loginRequired from '../middlewares/loginRequired';
import FotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, FotoController.store);

export default router;
