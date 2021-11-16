import { Router } from 'express';
import { CommissionReceiveController } from '../api/controllers/commission-receive.controller';

const commissionReceiveController: CommissionReceiveController = new CommissionReceiveController();
const router: Router = Router();

router.get('/', commissionReceiveController.index);
router.post('/', commissionReceiveController.create);
router.get('/:id', commissionReceiveController.read);
router.put('/:id', commissionReceiveController.update);
router.delete('/:id', commissionReceiveController.delete);

export default router;