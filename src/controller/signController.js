import { signModel } from "../model/signModel.js";
import { signUserValidate } from "../schema/signUser.js";

export class signController {
    static async signUser (req, res) {
        let credentialValidate = await signUserValidate(req.body);
        
        if (!credentialValidate.success) {
            return res.status(400).json({invalidRequest: credentialValidate.error.issues[0].message})
        }

        let response = await signModel.signUser(credentialValidate.data);

        if (response instanceof Error) return res.status(400).send({ error: response.message});

        res.status(200).send({success: "User created succesfully"})
    }
}