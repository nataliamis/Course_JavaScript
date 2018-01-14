/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa!");
    var taskList = document.querySelector('.taskList');
    var addTask = document.querySelector('.addTask');
    var removeTasks = document.querySelector('.removeAllTasks');
    var counter = 0;
    var counterTasks = document.querySelector('#counter');

    addTask.addEventListener('click', function (event) {
        //tworzenie nowego zadania do zrobienia
        var task = document.createElement('li');
        var div = document.createElement('div');
        //tworzenie inputu do wprowadzania nowych zadań
        var input = document.createElement('input');
        //tworzenie przycisków
        var deleteBtn = document.createElement('button');
        var acceptBtn = document.createElement('button');
        var completeBtn = document.createElement('button');

        //wartości zadań
        input.placeholder = 'New task';
        input.classList.add = ('input');
        div.innerText = 'New task';
        div.style.display = 'none';


        //ustalanie położenia stworzonych elementów
        taskList.appendChild(task);
        task.appendChild(completeBtn);
        task.appendChild(div);
        task.appendChild(input);
        task.appendChild(acceptBtn);
        task.appendChild(deleteBtn);

        //dodawanie klas i HTML Unicode do przycisków
        acceptBtn.classList.add = ('acceptBtn');
        deleteBtn.classList.add = ('deleteBtn');
        completeBtn.classList.add = ('completeBtn');
        acceptBtn.innerText = '\u2705';
        deleteBtn.innerText = '\u274C';


        //eventy na przyciskach
        completeBtn.addEventListener('click', function () {
            this.selected = !this.selected;
            if(this.selected){
                task.classList.add('completed');
                counterTasks.innerText = 'Task to finished: '+ --counter;
                completeBtn.innerText = '\u2714';
            }
            else {
                task.classList.remove('completed');
                counterTasks.innerText = 'Task to finished: '+ ++counter;
                completeBtn.innerText = '';
            }
        });

        div.addEventListener('click', function () {
            deleteBtn.style.display = 'block';
            acceptBtn.style.display = 'block';
            input.style.display = 'block';
            div.style.display = 'none';
        });

        acceptBtn.addEventListener('click', function () {
            acceptBtn.style.display = 'none';
            deleteBtn.style.display = 'none';
            input.style.dispaly = 'none';
            div.style.dispaly = 'none';

            if(input.value !== '') {
                div.innerText = input.value;
            }
        });

        deleteBtn.addEventListener('click', function () {
            if(task.getAttribute('class') !== 'completed') {
                counterTasks.innerText = 'Task to finished: ' + --counter;
            }
            task.remove();
        });

        counterTasks.innerText = 'Task to finished: ' + ++counter;
    });
        //usuwanie zrobionych zadań
    removeTasks.addEventListener('click', function () {
        document.querySelectorAll('.completed').forEach(function (value) {
            value.remove();
        })
    })
});






