import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String,
        default: null,
    }

},{
    timestamps:true
})

const UserModel = mongoose.model("users", userSchema) 

export default UserModel;