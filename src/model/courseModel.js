import { runDB } from "../database/mongodb.js";

export class coursesModel {
    static async getAllCourses () {
        let mongoClient;
        try {
          mongoClient = await runDB();
          let db = mongoClient.db('online_learning_platform');
          console.log(db)
          let collections = await db.collection('courses').find().toArray();
          return collections
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