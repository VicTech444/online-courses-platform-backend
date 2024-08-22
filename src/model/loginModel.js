import { runDB } from "../database/mongodb.js"
import { validatePassword } from "../helpers/validatePassword.js";

export class loginModel {
    static async logUser ({email, password}) {
        let mongoClient;

        try {
            mongoClient = await runDB();
            let db = mongoClient.db('online_learning_platform');
            let hashDB = await db.collection('users').findOne({email}, {projection: {password: 1}});

            if (!hashDB) throw new Error('Incorrect email or password 1');   

            let passwordValidation = await validatePassword(password, hashDB.password);

            if (!passwordValidation) throw new Error('Incorrect email or password 2');

            return true;
        } catch (error) {
            return error
        } finally {
            if (mongoClient){
                await mongoClient.close();
            }
        }
    }
}