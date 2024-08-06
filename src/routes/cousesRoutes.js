import e from "express";
import { runDB } from "../database/mongodb.js";

export const coursesRouter = e.Router();

coursesRouter.get('/showAllCourses', (req, res) => {
    res.send({message: "This should be the route to show all courses"});
})