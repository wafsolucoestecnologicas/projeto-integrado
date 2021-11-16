import { Router } from 'express';
import { BusinessController } from '../api/controllers/business.controller';

const businessController: BusinessController = new BusinessController();
const router: Router = Router();

router.get('/', businessController.index);
router.post('/', businessController.create);
router.get('/:id', businessController.read);
router.put('/:id', businessController.update);
router.delete('/:id', businessController.delete);
router.put('/transfer/manager/:id', businessController.transferBusinessToManager);
router.put('/transfer/advisor/:id', businessController.transferBusinessToAdvisor);
router.put('/transfer/broker/:id', businessController.transferBusinessToBroker);
router.put('/reject/:id', businessController.rejectBusiness);
router.put('/close/:id', businessController.closeBusiness);

export default router;