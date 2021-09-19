import { Router } from 'express';
import { UserController } from '../api/controllers/user.controller';

const userController: UserController = new UserController();
const router: Router = Router();

router.post('/', userController.create);

export default router;