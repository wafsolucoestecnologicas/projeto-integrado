import { Router } from 'express';
import { AdministratorController } from '../api/controllers/administrator.controller';

const administratorController: AdministratorController = new AdministratorController();
const router: Router = Router();

router.get('/', administratorController.index);
router.post('/', administratorController.create);
router.get('/:id', administratorController.read);
router.put('/:id', administratorController.update);
router.delete('/:id', administratorController.delete);

export default router;