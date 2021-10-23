import { Router } from 'express';
import { ManagerController } from '../api/controllers/manager.controller';

const managerController: ManagerController = new ManagerController();
const router: Router = Router();

router.get('/', managerController.index);
router.post('/', managerController.create);
router.get('/:id', managerController.read);
router.put('/:id', managerController.update);
router.delete('/:id', managerController.delete);

export default router;