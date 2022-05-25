require("dotenv").config();
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
const { response } = require("express");

const app = express();

app.use(express.static("public")); // allows the rendering of "static" pages in public folder
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(`${__dirname}/signup.html`);
});

// Home route...
app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // Build data
  const data = {
    // as per Mailchimp docs Body Parameters
    members: [                  // must be an array - docs
      {                         // stores objects - docs
        email_address: email,   // string (from our form)
        status: "subscribed",   // string - docs
        merge_fields: {         // object - docs
          FNAME: firstName,     // Audience fields and *|MERGE|* tags
          LNAME: lastName
        }
      }
    ]
  };

  // Stringify data to be posted to Mailchimp
  const jsonData = JSON.stringify(data);

  // Variables for https.request

  //const url = "https://<dc>.api.mailchimp.com/3.0/"     // root url for the API, note: must replace <dc> with datacenter in api key
  const url = `https://${process.env.REGION}.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`     // my lists and datacenter

  const options = {       // https options
    method: "POST",
    auth: `isimondev:${process.env.API_KEY}`
  }

  // https.request(url, options, callback(response from mailchimp))
  const request = https.request(url, options, function(response) {

    if (response.statusCode == 200) {
      res.sendFile(`${__dirname}/success.html`);
    } else {
      res.sendFile(`${__dirname}/failure.html`);
    }


    // check what is returned from mailchimp server
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  });

  // use the request from above
  request.write(jsonData);            // comment out to test failure page
  request.end();

});


// Failure route...
app.post("/failure", function(req, res) {
  res.redirect("/")
});

// Success route...
app.post("/success", function(req, res) {
  res.redirect("/")
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});