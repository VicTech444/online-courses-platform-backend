import e from "express";
import { lessonsController } from "../controller/lessonsController.js";

export const lessonsRouter = e.Router();

lessonsRouter.post('/specificLessons', lessonsController.getLesson);