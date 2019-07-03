$(document).ready(function(){

    var clockRunning = false;
    var time = 31; //31 so user sees 30 to start and gets the full time
    var intervalId;
    window.onload = start;

    function start() {
        if (!clockRunning) {
          intervalId = setInterval(count, 1000);
          clockRunning = true;
        }
    }

    function count() {
        time--;
        console.log(time);
        if (time <= 0) {
            clearInterval(intervalId);
            clockRunning = false;
        }

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#timer").text(time);
        }
});