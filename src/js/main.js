$(document).ready(() => {



    console.log("Document ready...");

    start();
}); //end document.ready

function start() {
    this.init = function () {
        this.loadSpinner();
        this.addTodo();
        this.createTodo();
        this.deleteTodo();
    }
    //Variables
    const $form = document.querySelector("form");


    this.loadSpinner = function () {
        //Load spinner
        window.addEventListener("load", () => {
            //make sure toa dd spinner
            console.log("Window loading... ");
        })
    }

    this.addTodo = function () {
        console.log("functino ADD TODO!");
    }
    this.createTodo = function () {
        console.log("Functino CREATE TODO!");
    }
    this.deleteTodo = function () {
        console.log("DELETE TODO!");
    }

    init();
}