import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        console.log("file-->",file)
        const uniqueName = Date.now() + file.originalname;
        console.log("filename-->",uniqueName)
        cb(null,uniqueName)
        console.log("file upload");
        
    }
    
})

const uploads = multer({storage:storage})

export default uploads