const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public")); // allows the rendering of "static" pages in public folder
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // no log will show unless html form has method & action attr
  console.log(firstName, lastName, email);
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});