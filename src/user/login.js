import bcrypt from "bcrypt";
import Joi from "joi";
import UserModel from "../model/db.model.js";

export default {
    validator: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }),
    handler: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.status(401).json({ message: "Invalid email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password" });
            }

            return res.status(200).json({ message: "Login successful", userId: user });
        } catch (error) {
            res.status(500).json({ message: "An error occurred during login" });
        }
    },
};
