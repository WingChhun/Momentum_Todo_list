const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DB_URL = process.env.DB_URL || "mongodb://localhost/todo_api";

//set debug true for console
mongoose.set('debug', true);
//conect to database
mongoose.connect(DB_URL);
mongoose.connection
    .once("open", () => {
        //Display to user successfully connected to DB
        console.log("connection made to db")
    })
    .on("error", (error) => {
        //Display Connection to DB error
        console.log("ERROR connecting to db")
    })
mongoose.Promise = Promise; //allow use of promises

//exports here

module.exports.Todo = require('./todo.js');