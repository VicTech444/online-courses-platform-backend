import { loginModel } from '../model/loginModel.js';
import { logUserValidate } from '../schema/loginUser.js'

export class loginController {
    static async logUser(req,res) {
        let credentialValidate = await logUserValidate(req.body);

        if (!credentialValidate.success) return res.status(400).json({invalidRequest: credentialValidate.error.issues[0].message})

        let response = await loginModel.logUser(credentialValidate.data)

        if (response instanceof Error) return res.status(400).json({error: response.message})

        const isProduction = process.env.NODE_ENV === "production";

        res.cookie('login', response, {
            maxAge: 1000 * 60 * 60 * 24,
            path: '/',
            httpOnly: false,
            secure: true,
            sameSite: 'none'
        }).json({message: "Data sent succesfully"});
    }
}