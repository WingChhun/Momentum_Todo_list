const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours = 0 && minutes < 2) {
    //delete all
    $(".todo__input").forEach((v) => {
        removeTodo(v);
    })

}
console.log(hours);
$(document).ready(() => {
    getTodos();
    $('#form').keypress((event) => {
        if (event.keyCode == 13) {
            console.log("fire");
            createTodo();
        }
    });

    function getTodos() {
        $.getJSON('/api/todos')
            .then((todos) => {

                //have todos, append to my todolist
                todos.forEach((todo) => {
                    addTodo(todo);
                });

            }).catch((err) => {
                console.log("Error fetching todos!");
                console.log(err);
            });
        //toggleComplete();
    };

    function removeTodo(todo) {


        const clickedId = todo.data('id');
        const deleteURL = '/api/todos/' + clickedId;
        $.ajax({
                method: 'DELETE',
                url: deleteURL
            })
            .then((data) => {
                todo.remove();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setTimeout(function () {
        console.log("ready");
        $('.todo__item').on('click', 'span', function (e) {
            e.stopPropagation();
            removeTodo($(this).parent());
            console.log("clicked");
        });
        $(".todo__text").on('click', function (e) {
            e.stopPropagation();
            $(this).addClass("active");
        });
    }, 1000);
    console.log("Document ready...");

    start();
}); //end document.ready

function start() {

    this.init = function () {
        this.loadSpinner();

        //  this.clearAll();
    };

    this.loadSpinner = function () {
        //Load spinner
        window.addEventListener("load", () => {
            //make sure toa dd spinner
            //  console.log("Window loading... ");
        });
    };

    this.addTodo = function (todo) {
        let todoList = document.querySelector(".todo");
        var newItem = `<li class="todo__item my-3" data-id="${todo._id}" data-completed="${todo.completed}">
   <p class = "todo__text"> ${todo.name}</p>
        <span>X</span>
    
</li>`;



        if (todo.completed) {
            newItem.addClass("active");
        }
        //insert each
        todoList.insertAdjacentHTML('afterbegin', newItem);

    };
    this.createTodo = function () {
        // const $formInput = document.querySelector(".form__input");
        const usrInput = $('#form').val();
        $.post('/api/todos', {
                name: usrInput
            })
            .then((newTodo) => {
                //Success, pass newTodo into addTodo function
                addTodo(newTodo);

            }).catch((err) => {
                console.log(err);
            });
    }


    init();
}