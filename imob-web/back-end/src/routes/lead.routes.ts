import { Router } from 'express';
import { LeadController } from '../api/controllers/lead.controller';

const leadController: LeadController = new LeadController();
const router: Router = Router();

router.get('/', leadController.index);
router.post('/', leadController.create);
router.get('/:id', leadController.read);
router.put('/:id', leadController.update);
router.delete('/:id', leadController.delete);

export default router;