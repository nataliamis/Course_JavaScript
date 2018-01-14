/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {
    console.log("Działa!");

    var pictures = document.querySelectorAll('img');
    //console.log(pictures);
    var hideBtn = document.querySelector('#hideButton');
    //console.log(hideBtn);
    var showBtn = document.querySelector('#showButton');
    //console.log(showBtn);
    var tagInput = document.querySelector('#tagInput');
    //console.log(tagInput);

    hideBtn.addEventListener('click', function() {
        console.log("The hide button works!");
        var inputText = tagInput.value;
        //console.log(inputText);

        for (var i = 0; i < pictures.length; i++) {
            pictures[i].classList.remove('invisible');
            console.log(pictures[i].dataset);
            if(pictures[i].dataset.tag.indexOf(inputText) >= 0) {
                pictures[i].classList.add('invisible');
            }
        }
    });

    showBtn.addEventListener('click', function () {
        console.log("The show button works!");
        var inputText = tagInput.value;
        //console.log(inputText);

        for (var i = 0; i < pictures.length; i++) {
            pictures[i].classList.add('invisible');
            console.log(pictures[i].dataset);
            if(pictures[i].dataset.tag.indexOf(inputText) >= 0) {
                pictures[i].classList.remove('invisible');
            }
        }
    });
});
