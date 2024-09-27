import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDir = "uploads";

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        try {
            cb(null, uploadDir);
        } catch (error) {
            console.error("Error setting destination:", error);
            cb(error);
        }
    },
    filename: function(req, file, cb) {
        try {
            console.log("file-->", file);
            const uniqueName = Date.now() + path.extname(file.originalname);
            console.log("filename-->", uniqueName);
            cb(null, uniqueName);
            console.log("file upload");
        } catch (error) {
            console.error("Error setting filename:", error);
            cb(error);
        }
    }
});

const uploads = (req, res, next) => {
    try {
        multer({ storage: storage }).single('image')(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: err.message});
            }
            next();
        });
    } catch (error) {
        res.status(500).json({ messagee: error.message});
    }
};

export default uploads;
