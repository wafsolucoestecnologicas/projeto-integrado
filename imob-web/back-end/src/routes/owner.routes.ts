import { Router } from 'express';
import { OwnerController } from '../api/controllers/owner.controller';

const ownerController: OwnerController = new OwnerController();
const router: Router = Router();

router.get('/', ownerController.index);
router.post('/', ownerController.create);
router.get('/:id', ownerController.read);
router.put('/:id', ownerController.update);
router.delete('/:id', ownerController.delete);

export default router;