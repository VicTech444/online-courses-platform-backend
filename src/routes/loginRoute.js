import e from 'express';
import { loginController } from '../controller/loginController.js';

export const loginRoutes = e.Router();

loginRoutes.post('/logUser', loginController.logUser)