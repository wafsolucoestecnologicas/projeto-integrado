import { Router } from "express";
import { ProfileController } from "../api/controllers/profile.controller";

const profileController: ProfileController = new ProfileController();
const router: Router = Router();

router.get('/', profileController.index);
/* router.post('/', profileController.create); */
router.get('/:id', profileController.read);
/* router.put('/:id', profileController.update); */
/* router.delete('/:id', profileController.delete); */

export default router;