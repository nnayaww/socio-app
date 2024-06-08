import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
export const register = async (req, res) => {
    
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);
        const newUserser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        await newUserser.save();
        return res.status(200).json({
            newUserser,
            message: 'Registration successful!' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            error,
            message: "Registration failed!",     
        });
        
    }
}

