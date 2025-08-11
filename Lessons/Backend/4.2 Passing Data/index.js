import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Received a GET request");
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log("Received a POST request");
  console.log("Request body:", req.body);
  var total = req.body.fName.length + req.body.lName.length
  console.log("Response sent to client");
  console.log("End of POST request handler");
  console.log("====================================");
  console.log("Returning to the main page");
  res.render("index.ejs", { total: total });
  // go back to the main page
  res.redirect("/");
  // res.send('test');
  //change the h1 text to show the total number of characters in the names
  // This line won't work in the server-side context, so we need to send the total
  // back to the client in a different way.
  // Instead, we can send the total as part of the response.
  // res.send(`<h1 id='test'>Total characters in names: ${total}!</h1>`);
  // Note: The above line will not work as expected because `document` is not defined
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
