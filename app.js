const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
let port = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.render('home')
})


if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});