import mongoose from "mongoose";
import validator from "validator";

const ApplicationSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        minLength:[3,"Name must contain at least 3 Characters"],
        maxLength:[30,"Name cannot exceed 30 Characters"]

    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        validate:[validator.isEmail,"Please provide a valid Email"]
    },
    coverLetter:{
        type:String,
        required:[true,"Please Enter Your Cover Letter"],
        
    },
    phone:{
        type:Number,
        required:[true,"Please Enter Your Phone Number"],

    },
    address:{
        type:String,
        required:[true,"Please Enter Your Address"],
       
    },
    resume:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        
    },
    applicantID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        
        },
        role:{
            type:String,
            enum:["job-seeker"],
            required:true
        }
    },
    employeeID:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        role:{
            type:String,
            enum:["employee"],
            required:true
        }
    },
    
    
    
})


export const Application = mongoose.model("Application",ApplicationSchema)