import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        try {
            cb(null, "uploads");
        } catch (error) {
            console.error("Error setting destination:", error);
            cb(error);
        }
    },
    filename: function(req, file, cb) {
        try {
            console.log("file-->", file);
            const uniqueName = Date.now() + file.originalname;
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
        multer({ storage: storage }).single('image')
        next();
    } catch (error) {
        return res.status(500).json({ messagee: error.message});
    }
};

export default uploads;
