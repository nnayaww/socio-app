import { register as registerUserService } from "../services/auth.service.js";

export const register = async (req, res) => {
    
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const newUserser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const { password, ...data } = newUserser._doc;
        await registerUserService(req.body);
        res.status(200).json({
            data,
            message: "User has been registered",
        });
    } catch (error) {
        res.status(500).json(error);
        "User has not been registered";
    }
};