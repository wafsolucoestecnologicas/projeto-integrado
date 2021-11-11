import { Router } from 'express';
import { CityController } from '../api/controllers/city.controller';

const cityController: CityController = new CityController();
const router: Router = Router();

router.get('/', cityController.index);
router.post('/', cityController.create);
router.get('/:id', cityController.read);
router.put('/:id', cityController.update);
router.delete('/:id', cityController.delete);

export default router;