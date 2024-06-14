import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const register = async (body) => {
    
        const hashedPassword = bcrypt.hashSync(body.password, 10);
        const newUserser = new UserModel({
            username: body.username,
            email: body.email,
            password: hashedPassword,
        });

        
        await newUserser.save();
        
   
};

