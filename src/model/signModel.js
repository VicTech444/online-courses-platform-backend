import { runDB } from "../database/mongodb.js";
import { generateSafePassword } from "../helpers/generateSafePassword.js";

export class signModel {
    static async signUser (userData) {
        let mongoClient;
        let {firstName, lastName, email, password} = userData;

        try {
          mongoClient = await runDB();
          let db = mongoClient.db('online_learning_platform');
          let emailValidation = await db.collection('users').findOne({email});

          if (emailValidation) throw new Error('Email already exists');

          let safePassword = await generateSafePassword(password)

          let newUser = {
            name: `${firstName} ${lastName}`,
            email,
            password: safePassword,
            coursesEnrolled: [],
            createdAt: new Date()
          }

          await db.collection('users').insertOne(newUser)

          return true

        } catch (error) {
          return error;
          
        } finally {
          if (mongoClient) {
            await mongoClient.close(true);
          }
        }
    }
}