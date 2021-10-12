import { Router } from 'express';
import { UserController } from '../api/controllers/user.controller';

const userController: UserController = new UserController();
const router: Router = Router();

router.get('/', userController.index);
router.post('/', userController.create);
router.get('/:id', userController.read);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;