import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send(req);
    // console.log(req);
});

app.get("/testing", (req, res) => {
    res.send("bla bla bla, ik ben een koe!")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})