import { Router } from 'express';
import { SecretaryController } from '../api/controllers/secretary.controller';

const secretaryController: SecretaryController = new SecretaryController();
const router: Router = Router();

router.get('/', secretaryController.index);
router.post('/', secretaryController.create);
router.get('/:id', secretaryController.read);
router.put('/:id', secretaryController.update);
router.delete('/:id', secretaryController.delete);

export default router;