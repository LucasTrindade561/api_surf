import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import AboutSurferController from '../controllers/AboutSurferController';

const router = new Router();

router.post('/', loginRequired, AboutSurferController.store);

export default router;
