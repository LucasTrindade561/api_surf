import { Router } from 'express';
import AthleteController from '../controllers/AthleteController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// athletes
router.get('/', AthleteController.index);
router.post('/', AthleteController.store);
router.get('/:id', AthleteController.show);
router.put('/:id', AthleteController.update);
router.delete('/:id', AthleteController.delete);

export default router;
