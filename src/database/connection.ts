import mongoose, { mongo } from "mongoose";


const MONGODB_CS = process.env.MONGODB_CS

if(!MONGODB_CS){
    throw new Error("You must provide MongoDb Connection String")
}

const dbConnect = async () =>{
    if(mongoose.connection.readyState === 1){
        console.log("Database already connected")
        return;
    }

   try{
       
       await mongoose.connect(MONGODB_CS)
       console.log("Database Connection Successfully")
    }
    catch(error){
        console.log("Error Connecting..",error)
    }
}

export default dbConnect