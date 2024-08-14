import { runDB } from "../database/mongodb.js";

export class lessonsModel {
    static async getLesson (body) {
      let mongoClient;
      try {
        mongoClient = await runDB();
        let db = mongoClient.db('online_learning_platform');
        let courseID = await db.collection('courses').findOne({courseName: body}, {projection: {_id: 1}});
        let lessons = await db.collection('lessons').find({courseId: courseID._id}).toArray();
        return lessons
      } catch (error) {
        console.error('Error connecting to the database:', error);
        return false;
      } finally {
        if (mongoClient) {
          await mongoClient.close(true);
        }
      }
    }
}