import { Router } from 'express'; // importando apenas o router dos express
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Nao deveriam existir
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);

router.post('/', loginRequired, UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/**
 * index = lista todos os usuarios - GET
 * store/create = cria um novo usuario - POST
 * delete = apaga um usuario - DELETE
 * show = mostra um usuario - GET
 * update = atualiza um usuario - PATCH/PUT
 */
