/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa!");

    var menuEl1 = document.querySelectorAll('.menu > #li1');
    menuEl1.forEach(function (el) {
        var submenu1 = document.querySelector('.submenu1');

        if (submenu1 !== null) {
            el.addEventListener('mouseover', function (event) {
                submenu1.style.display = 'block';
            });
            el.addEventListener('mouseout', function (event) {
                submenu1.style.display = 'none';
            });
        }
    });

        var menuEl2 = document.querySelectorAll('.menu > #li2');
        menuEl2.forEach(function (el) {
        var submenu2 = document.querySelector('.submenu2');

        if (submenu2 !== null) {
            el.addEventListener('mouseover', function (event) {
                submenu2.style.display = 'block';
            });
            el.addEventListener('mouseout', function (event) {
                submenu2.style.display = 'none';
            });
        }
    });
});