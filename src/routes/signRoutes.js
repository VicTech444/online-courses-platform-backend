import e from "express";
import { signController } from "../controller/signController.js";

export const signRouter = e.Router();

signRouter.post('/signUser', signController.signUser);