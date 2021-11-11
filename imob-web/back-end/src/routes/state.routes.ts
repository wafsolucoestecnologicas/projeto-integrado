import { Router } from 'express';
import { StateController } from '../api/controllers/state.controller';

const stateController: StateController = new StateController();
const router: Router = Router();

router.get('/', stateController.index);
router.get('/:id', stateController.read);

export default router;
