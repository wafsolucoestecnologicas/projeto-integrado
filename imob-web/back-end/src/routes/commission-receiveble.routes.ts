import { Router } from 'express';
import { CommissionReceivebleController } from '../api/controllers/commission-receiveble.controller';

const commissionReceivebleController: CommissionReceivebleController = new CommissionReceivebleController();
const router: Router = Router();

router.get('/receiveble', commissionReceivebleController.receiveble);
router.get('/', commissionReceivebleController.index);
router.post('/', commissionReceivebleController.create);
router.get('/:id', commissionReceivebleController.read);
router.put('/:id', commissionReceivebleController.update);
router.delete('/:id', commissionReceivebleController.delete);

export default router;