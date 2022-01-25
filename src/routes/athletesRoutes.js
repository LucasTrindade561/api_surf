import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// athletes
router.get('/', AthleteController.index);
router.post('/', loginRequired, AthleteController.store);
router.get('/:id', AthleteController.show);
router.put('/:id', loginRequired, AthleteController.update);
router.delete('/:id', loginRequired, AthleteController.delete);

export default router;
