import { updateUser } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.id, req.body);
        res.status(200).json({
            updatedUser,
            message: "User has been updated",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: "User has not been updated",
        });
    }
}