import { coursesModel } from "../model/courseModel.js";

export class coursesController {
    static async getAllCourses (req, res) {
        let response = await coursesModel.getAllCourses();

        if (!response) {
            return res.status(500).send({ error: 'Error connecting to the database' });
        }

        res.status(200).send({courses: response});
    }

    static async getCourse (req, res) {
        let {courseName} = req.body;
        let response = await coursesModel.getCourse(courseName);

        if (!response) {
            return res.status(500).send({ error: 'Error connecting to the database' });
        }

        res.status(200).send({courses: response});
    }
}