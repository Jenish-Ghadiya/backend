import bcrypt from "bcrypt"
import Joi from "joi";
import UserModel from "../model/db.model.js";

export default {
    validator:{ body:Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(6).required(),
    }),
    query:Joi.object({
        type: Joi.string().optional()
    })
},
    handler: async (req, res) => {
        const { username, email, password} = req.body;

        try {
            const finduser = await UserModel.findOne({ email });

            if (finduser) {
                return res.status(404).json({ message: "user alredy chhe" });
            }
            const passwordhash = await bcrypt.hash(password, 10);
            const user = await UserModel.create({
                username,
                email,
                password: passwordhash,
                ...(req.file ? {image: req.file.filename} : {})
            })

            return res.status(200).json({ message: "user created" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
