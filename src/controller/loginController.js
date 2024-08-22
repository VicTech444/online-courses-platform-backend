import { loginModel } from '../model/loginModel.js';
import { logUserValidate } from '../schema/loginUser.js'

export class loginController {
    static async logUser(req, res) {
        let credentialValidate = await logUserValidate(req.body);

        if (!credentialValidate.success) return res.status(400).json({invalidRequest: credentialValidate.error.issues[0].message})

        let response = await loginModel.logUser(credentialValidate.data)

        if (response instanceof Error) return res.status(400).json({error: response.message})

        res.status(200).json({message: response})
    }
}