/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded', function() {
   var nextBtn = document.querySelector('#nextPicture');
   var prevBtn = document.querySelector('#prevPicture');
   var imgsList = document.querySelectorAll('.slider li');
   var imgIndex = 0;

   console.log(nextBtn);
   console.log(prevBtn);
   console.log(imgsList);
   console.log(imgIndex);

imgsList[0].classList.add('visible');


nextBtn.addEventListener('click', function (event){
    console.log('Click next button.');
    if(imgIndex < imgsList.length-1) {
        imgsList[imgIndex].classList.remove('visible');
        imgIndex++;
        imgsList[imgIndex].classList.add('visible');
    }
});
prevBtn.addEventListener('click', function (event) {
    console.log('Click prev button.');
    if(imgIndex > 0) {

        imgsList[imgIndex].classList.remove('visible');
        imgIndex--;
        imgsList[imgIndex].classList.add('visible');
        /* Po przejechaniu listy obrazków w przypadku jej skończenia się
        wyskakuje błąd w konsoli i obrazki znikają.
         */

    }
});
});