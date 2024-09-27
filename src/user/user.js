import express from "express"
import validate from "../middleware/validate.js"
import signup from "./signup.js"
import login from "./login.js"
import product from "../controler/product.js"
import uploads from "../middleware/fileupload.js"

const user = express.Router()

user.get("/",(req,res)=>{
    res.json({
        message: "you are login",
        name:"17274279672504834078.jpg"
    })
})
user.get("/:userId/products",validate(product.validator),product.handler)
user.post("/signup",uploads,(req,res,next)=>{console.log("req.file",req.file);next()},validate(signup.validator),signup.handler)
user.post("/login",validate(login.validator),login.handler)

export default user;