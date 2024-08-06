import e from "express";
import { runDB } from "../database/mongodb.js";

export const coursesRouter = e.Router();

coursesRouter.get('/showAllCourses', async (req, res) => {
    let mongoClient;
    try {
      mongoClient = await runDB();
      let db = mongoClient.db('online_learning_platform');
      console.log(db)
      let collections = await db.collection('courses').find().toArray();
      res.send({ Courses: collections });
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.status(500).send({ error: 'Error connecting to the database' });
    } finally {
      if (mongoClient) {
        await mongoClient.close(true);
      }
    }})