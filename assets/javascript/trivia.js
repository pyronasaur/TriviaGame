$(document).ready(function(){

    var clockRunning = false;
    var time = 31; //31 so user sees 30 to start and gets the full time
    var intervalId;

    var correctCount = 0;

    window.onload = start;

    function start() {
        if (!clockRunning) {
          intervalId = setInterval(count, 1000);
          clockRunning = true;
        }
    }

    function count() {
        time--;
        //console.log(time);
        if (time <= 0) {
            clearInterval(intervalId);
            clockRunning = false;
            countAnswers;
            endGame(correctCount);
        }

        $("#timer").text(time);
    }

    $("#submit").on("click", function(){
        console.log("button was clicked");

        countAnswers();
        endGame(correctCount);

    })

    function countAnswers(){
        var q = $("input:checked");
        console.log(q);

        for(let item of q) {
            console.log(item);
            console.log(item.checked);
            if(item.value === "arthur" ||
            item.value === "grail" ||
            item.value === "blue" ||
            item.value === "which") {
                correctCount++;
            }
        }
        console.log("correctCount: " + correctCount);
    }

    function endGame(score) {
        
        var endDiv = $("<div>");
        $("#game-holster").empty();
        $(endDiv).addClass("game-item");       

        $("#game-holster").append(endDiv);
        $(endDiv).html("<p>You got " + correctCount + " correct!</p>");
        console.log(endDiv.text);
    }
});