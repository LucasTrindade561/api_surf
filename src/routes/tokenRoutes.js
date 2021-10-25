import { Router } from 'express'; // importando apenas o router dos express
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
