/**
 * Created by Jacek on 2015-12-16.
 */


/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa!");

    var tooltips = document.querySelectorAll('.tooltip');
    //console.log(tooltips);
    var newSpan = document.createElement('span');

    tooltips.forEach(function (el) {
        el.addEventListener('mouseover', function () {
            newSpan.innerText = this.dataset.text;
            newSpan.classList.add('tooltipText');
            el.appendChild(newSpan);
        });

        el.addEventListener('mouseout', function () {
            newSpan.remove();
        });
    });

});