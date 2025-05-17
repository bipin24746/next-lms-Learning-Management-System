import mongoose from "mongoose";
const Schema = mongoose.Schema

const courseSchema = new Schema({
    courseName : String,

     coursePrice: {
        type : String
    },
    courseDuration : {
        type : Number
    }
    
    
})

const Course = mongoose.model("Course",courseSchema)
export default Course