'use strict';
//const timer = require('jquery-countdown');

$(document).ready(function() {
    moveBootStrap();
    timer();
})


/*function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("Experience Chan! It's not a lot of questions.Too many questions is the Chan disease.The best way is just to observe the noise of the world. The answer to your questions?Ask your own heart.");
        $("#testjs").text("Please wait...");
        $(".jumbotron p").addClass("active");
    });
}*/


function move() { 
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

//initialize the BootStrap timer
function moveBootStrap() {    
    $(".progress-bar-success").animate({
        width: "70%"
    },2500);
    $(".progress-bar-warning").animate({
        width: "20%"
    },2500);
    $(".progress-bar-danger").animate({
        width: "10%"
    },2500);
    //console.log("Hello");
}

function resetProgress() {    
    $(".progress-bar-success").animate({
        width: "70%"
    },0);
    $(".progress-bar-warning").animate({
        width: "20%"
    },0);
    $(".progress-bar-danger").animate({
        width: "10%"
    },0);
}
    
//progressBar
/*function countDown() { 
    resetProgress();
    var i = 70;
    var j = 20;
    var k = 10;
    var counterBack = setInterval(function () {
      i--;      
      if (i >= 0) {
        $('.progress-bar-success').css('width', i + '%');
      } 
      else if (i < 0 && j >= 0){
        j--;       
        $('.progress-bar-warning').css('width', j + '%');
      }
      else if (i < 0 && j < 0 && k >= 0){
        k--;
        $('.progress-bar-danger').css('width', k + '%');
      }   
      else {        
        clearInterval(counterBack);
      }
    }, 100);
}*/

function timer(){
$('#progress-timer').countdown('2018/02/08 20:00:00', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
  });

}


/*function timer(){
$('#progress-timer').countdown('2018/02/08 20:00:00', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));    
  });

} */

//countdown with the timer
function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};
progress(300, 600, $('#progressBarz'));


