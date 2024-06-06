import mongoose from "mongoose";


export const dbConnect = () => {
        try {
            mongoose.connect("mongodb+srv://youtube:youtube@cluster0.osxys8h.mongodb.net/socio-app");
            console.log("Connected to DB successfully!");
            
        } catch (error) {
                console.log("Error in dbConnect", error);
                
        }
}