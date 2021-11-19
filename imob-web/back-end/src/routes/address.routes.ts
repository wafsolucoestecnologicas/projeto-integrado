import { Router } from 'express';
import { AddressController } from '../api/controllers/address.controller';

const addressController: AddressController = new AddressController();
const router: Router = Router();

router.get('/search', addressController.searchAddressInAPIViaCEP);
router.get('/', addressController.index);
router.post('/', addressController.create);
router.get('/:id', addressController.read);
router.put('/:id', addressController.update);
router.delete('/:id', addressController.delete);

export default router;