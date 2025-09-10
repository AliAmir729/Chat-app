import mongoose from "mongoose";

// Function to connect to the mongodb database

export const connectDB = async()=>{
    try{
        console.log("Trying to connect:", process.env.MONGODB_URI);

        mongoose.connection.on('connected',()=> console.log
    ('Database Connected'));

    await mongoose.connect(`${process.env.MONGODB_URI}`)
    }catch(error){
        console.log(error);
    }
}