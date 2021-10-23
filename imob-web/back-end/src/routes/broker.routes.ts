import { Router } from 'express';
import { BrokerController } from '../api/controllers/broker.controller';

const brokerController: BrokerController = new BrokerController();
const router: Router = Router();

router.get('/', brokerController.index);
router.post('/', brokerController.create);
router.get('/:id', brokerController.read);
router.put('/:id', brokerController.update);
router.delete('/:id', brokerController.delete);

export default router;