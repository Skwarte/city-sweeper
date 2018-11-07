var express = require("express");
var bodyParser = require("body-parser");
path = require("path");

app = express();

app.use("/public", express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/", function(req, res) {
  console.log("Post sent from /");
  var button = req.body.button;
  if (button === "Learn More") {
    res.sendFile(__dirname + "/views/about.html");
  } else {
    res.redirect("/");
  }
});
app.listen(4000, function() {
  console.log("Server running on port 4000");
});
