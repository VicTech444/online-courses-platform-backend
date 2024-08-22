import { lessonsModel } from "../model/lessonsModel.js";

export class lessonsController {
    static async getLesson (req, res) {
        let {courseName} = req.body;

        let response = await lessonsModel.getLesson(courseName);

        if (!response) {
            return res.status(500).send({ error: 'Error connecting to the database' });
        }

        res.status(200).send({courses: response});
    }
}