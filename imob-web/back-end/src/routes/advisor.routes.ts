import { Router } from 'express';
import { AdvisorController } from '../api/controllers/advisor.controller';

const advisorController: AdvisorController = new AdvisorController();
const router: Router = Router();

router.get('/', advisorController.index);
router.post('/', advisorController.create);
router.get('/:id', advisorController.read);
router.put('/:id', advisorController.update);
router.delete('/:id', advisorController.delete);

export default router;