import { runDB } from "../database/mongodb.js"
import { validatePassword } from "../helpers/validatePassword.js";
import 'dotenv/config'
import jwt from 'jsonwebtoken'

export class loginModel {
    static async logUser ({email, password}) {
        let mongoClient;

        try {
            mongoClient = await runDB();
            let db = mongoClient.db('online_learning_platform');
            let userInfo = await db.collection('users').findOne({email}, {projection: {password: 1, name: 1, email: 1,}});

            if (!userInfo) throw new Error('Incorrect email or password 1');   

            let passwordValidation = await validatePassword(password, userInfo.password);

            if (!passwordValidation) throw new Error('Incorrect email or password 2');

            let payload = {
                username: userInfo.name,
                email: userInfo.email
            };

            let webToken = jwt.sign(payload ,process.env.JWT_SECRET, {
                expiresIn: '1d'
            })

            return webToken;
        } catch (error) {
            return error
        } finally {
            if (mongoClient){
                await mongoClient.close();
            }
        }
    }
}