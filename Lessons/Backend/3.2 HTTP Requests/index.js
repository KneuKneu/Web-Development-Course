import express from "express";
const app = express();
const port = 3000;

app.listen(3000, () => {
    console.log("server has started baby!")
})

app.get("/", (req, res) => {
    console.log("Hellooooooooooooooooooooooooooooooooo WORLD!")
    console.log(req.rawHeaders);
});