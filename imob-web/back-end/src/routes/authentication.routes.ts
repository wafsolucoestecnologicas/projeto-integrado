import { Router } from "express";
import { AuthenticationController } from "../api/controllers/authentication.controller";

const autheticationControllher: AuthenticationController = new AuthenticationController();
const router: Router = Router();

router.post('/', autheticationControllher.authenticate);

export default router;