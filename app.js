const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),

    db = require("./models"),
    helpers = require("./helper"),
    todoRoutes = require("./routes/todos");

const port = process.env.PORT || 3000;


//APP SETTINGS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.set('view engine', 'ejs'); //default template ejs
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/src'));
//api routes
app.use("/api/todos", todoRoutes);
//ROUTES
app.get('/', (req, res) => {
    res.render("index.html");
});






app.listen(port, () => {
    console.log("Server has started on port " + port);
});