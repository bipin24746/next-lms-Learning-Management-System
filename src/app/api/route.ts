import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";

export async function GET(){
    dbConnect()
    User.create({
        email:"bipinsainju@gmail.com",
        username : "bipin12",
        googleId: " 1212",
        profileImage : "thisimage"
    })
    // User.find()
    // User.findByIdAndDelete()
    // User.findByIdAndUpdate()
    return Response.json({
        message:"hitted api"
    })
}