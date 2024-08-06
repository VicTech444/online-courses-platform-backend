import e from "express";
import { coursesController } from "../controller/coursesController.js";

export const coursesRouter = e.Router();

coursesRouter.get('/showAllCourses', coursesController.getAllCourses)