import { Router } from 'express';
import { NeighborhoodController } from '../api/controllers/neighborhood.controller';

const neighborhoodController: NeighborhoodController = new NeighborhoodController();
const router: Router = Router();

router.get('/', neighborhoodController.index);
router.post('/', neighborhoodController.create);
router.get('/:id', neighborhoodController.read);
router.put('/:id', neighborhoodController.update);
router.delete('/:id', neighborhoodController.delete);

export default router;