import express from "express";
import connectDb, { PORT } from "./confige/db.confige.js";
import user from "./user/user.js";

connectDb()
const app = express();
app.use(express.json());

app.use("/api/v1/user", user);



app.listen(PORT, () => {
    console.log("server is running on port " + PORT);
});