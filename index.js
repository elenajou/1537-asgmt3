const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use("/font", express.static("./public/font"));
app.use("/img", express.static("./public/img"));
app.use("/css", express.static("./public/css"));
app.use("/js", express.static("./public/js"));

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});

let port = 8000;
app.listen(port, function () {
    console.log("Listening on port " + port + "!");
});