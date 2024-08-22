import { runDB } from "../database/mongodb.js";

export class coursesModel {
    static async getAllCourses () {
        let mongoClient;
        try {
          mongoClient = await runDB();
          let db = mongoClient.db('online_learning_platform');
          let collections = await db.collection('courses').find().toArray();
          return collections
        } catch (error) {
          return error
        } finally {
          if (mongoClient) {
            await mongoClient.close(true);
          }
        }
    }

    static async getCourse (body) {
      let mongoClient;
      try {
        mongoClient = await runDB();
        let db = mongoClient.db('online_learning_platform');
        let course = await db.collection('courses').findOne({courseName: body});
        console.log(course)
        return course
      } catch (error) {
        console.error('Error connecting to the database:', error);
        return false;
      } finally {
          await mongoClient.close(true);
      }
    }
}