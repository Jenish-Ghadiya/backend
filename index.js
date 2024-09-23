import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.listen(9009, () => {
    console.log("server is running on port 9009");
});