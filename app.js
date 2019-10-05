const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/me", (req, res) => {
    res.render("me");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/", (req, res) => {
    res.render("index");
});


let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(3000, () => {

});