var express = require("express");
var bodyParser = require("body-parser");
path = require("path");

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/", function(req, res) {
  var button = req.body.button;
  if (button === "Learn More") {
    res.sendFile(__dirname + "/views/about.html");
  } else {
    res.redirect("/");
  }
});
app.listen(2995, function() {
  console.log("Server running on port 3000");
});
