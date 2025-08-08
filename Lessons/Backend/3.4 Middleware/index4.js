import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req,res) =>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) =>{
  // console.log(req.body);
  // res.sendFile(__dirname + "/public/submit.html");
  // res.send(`<h1>Your Band Name is:</h1> <p>${Object.values(req.body)[0] + Object.values(req.body)[1]}</p>`);
  res.send(`<h1>Your Band Name is:</h1> <p>${bandName}</p>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
