import { Router } from 'express';
import { CustomerController } from '../api/controllers/customer.controller';

const customerController: CustomerController = new CustomerController();
const router: Router = Router();

router.get('/', customerController.index);
router.post('/', customerController.create);
router.get('/:id', customerController.read);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

export default router;