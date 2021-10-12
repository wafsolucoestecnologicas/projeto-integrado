import { Router } from "express";
import { CompanyController } from '../api/controllers/company.controller';

const companyController: CompanyController = new CompanyController();
const router: Router = Router();

router.get('/', companyController.index)
router.post('/', companyController.create);
router.get('/:id', companyController.read);
router.put('/:id', companyController.update);
router.delete('/:id', companyController.delete);

export default router;