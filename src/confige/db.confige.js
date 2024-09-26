import env from "dotenv/config"
import mongoose from "mongoose"

export const PORT = process.env.PORT || 9009
export const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://jenishghadiya:jenishghadiya@jenish.h38wj.mongodb.net/register'

const connectDb = async() =>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Db connected Succesfully")
    } catch (error) {
        console.log("db not connected")
    }
}

export default connectDb