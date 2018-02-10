const express = require('express'),
    router = express.Router(),
    db = require("../models"),
    helpers = require('../helper');

/*
router.route("/")
.get(helpers.getTodo)
.post(helpers.createTodo);

*/

//INITIAL GET ROUTE
router.get('/', (req, res) => {
    //List all todos
    db.Todo.find({})
        .then((todos) => {
            res.json(todos)
        })
        .catch((err) => {
            res.send("ERROR GETTING TODOS!");
            console.log(err);
        });
})

//CREATE A TODO
router.post('/', (req, res) => {
    db.Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        })
        .catch((err) => {
            res.send("ERROR CREATING TODO!");
            console.log(err);
        })
})

//EDIT

//DELETE
router.delete("/:id", (req, res) => {
    db.Todo.remove({
            _id: req.params.id
        })
        .then(() => {
            res.json({
                message: "Deleted"
            });
        })
        .catch((err) => {
            res.send("Error deleting!");
            console.log(err);
        })
})

//export routes
module.exports = router;