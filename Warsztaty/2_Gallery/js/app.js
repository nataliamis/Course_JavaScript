/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function () {

    var body = document.querySelector('body');
    var li = document.querySelectorAll('li');
    var fullScreenDiv = document.createElement('div');
    var picture = document.createElement('img');
    var newBtn = document.createElement('button');

    li.forEach(function (el) {
        el.addEventListener('click', function (event) {
            body.appendChild(fullScreenDiv);
            fullScreenDiv.classList.add('fullScreen');
            fullScreenDiv.appendChild(picture);

            picture.setAttribute("src", this.firstElementChild.getAttribute("src"));
            fullScreenDiv.appendChild(newBtn);
            newBtn.innerText = 'Close';
            newBtn.classList.add('close');
            newBtn.addEventListener('click', function (event) {
                var parent = event.target.parentElement.parentElement;
                var child = event.target.parentElement;
                parent.removeChild(child);
            });
        });
    });
});