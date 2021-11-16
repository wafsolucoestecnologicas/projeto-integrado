import { Router } from 'express';
import { PropertyController } from '../api/controllers/property.controller';

const propertyController: PropertyController = new PropertyController();
const router: Router = Router();

router.get('/', propertyController.index);
router.post('/', propertyController.create);
router.get('/:id', propertyController.read);
router.put('/:id', propertyController.update);
router.delete('/:id', propertyController.delete);

export default router;