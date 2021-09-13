import { Router } from 'express';
import { UsersController } from '../api/controllers/users.controller';

const users: UsersController = new UsersController();
const route: Router = Router();

export default Router;