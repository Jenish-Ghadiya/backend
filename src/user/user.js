import express from "express"
import validate from "../middleware/validate.js"
import signup from "./signup.js"
import login from "./login.js"

const user = express.Router()

user.get("/",(req,res)=>{
    res.json({
        message: "you are login"
    })
})

user.post("/signup",validate(signup.validator),signup.handler)
user.post("/signup",validate(login.validator),login.handler)

export default user;