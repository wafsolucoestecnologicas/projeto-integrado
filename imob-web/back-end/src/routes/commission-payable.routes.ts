import { Router } from 'express';
import { CommissionPayableController } from '../api/controllers/commission-payable.controller';

const commissionPayableController: CommissionPayableController = new CommissionPayableController();
const router: Router = Router();

router.get('/payable', commissionPayableController.payable);
router.get('/', commissionPayableController.index);
router.post('/', commissionPayableController.create);
router.get('/:id', commissionPayableController.read);
router.put('/:id', commissionPayableController.update);
router.delete('/:id', commissionPayableController.delete);

export default router;