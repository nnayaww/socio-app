import mongoose from "mongoose";


export const dbConnect = () => {
        try {
            mongoose.connect(process.env.DB_URL,);
            console.log("Connected to DB successfully!");
            
        } catch (error) {
                console.log("Error in dbConnect", error);
                
        }
}