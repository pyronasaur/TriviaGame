$(document).ready(function(){

    var clockRunning = false;
    var time = 31; //31 so user sees 30 to start and gets the full time
    var intervalId;

    var correctCount = 0;
    var incorrectCount = 0;
    var unanswered = 0;

    window.onload = start;

    $("#start-button").on("click",function(){
        window.location = "game.html";
    });

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
            endGame(correctCount, incorrectCount, unanswered);
        }

        $("#timer").text(time);
    }

    $("#submit").on("click", function(){
        console.log("button was clicked");

        countAnswers();
        endGame(correctCount, incorrectCount, unanswered);

    })

    function countAnswers(){
        var q = $("input:checked");
        console.log(q.length);
        unanswered = 4 - q.length; //4 is the number of questions, could write code to count number of questions

        for(let item of q) {
            console.log(item);
            console.log(item.checked);
            if(item.value === "arthur" ||
            item.value === "grail" ||
            item.value === "blue" ||
            item.value === "which") {
                correctCount++;
            }
            else {
                incorrectCount++;
            }
        }
        console.log("correctCount: " + correctCount);
    }

    function endGame(correct, incorrect, unanswered) {
        
        var endDiv = $("<div>");
        var resetButton = $("<button>");

        $("#game-holster").empty();

        $(endDiv).addClass("game-item");
        $(endDiv).css("margin-top", "200px");

        resetButton.attr("id", "start-button");        
        $(resetButton).css("margin-top", "25px");
        $(resetButton).text("Restart");
        $(resetButton).on("click", reload);

        $("#game-holster").append(endDiv);
        $("#game-holster").append(resetButton);
        $(endDiv).html("<p>You got " + correct + " correct!</p><p>You got " + incorrect + " wrong!</p><p>You skipped " + unanswered + " questions.</p>");
        console.log(endDiv.text);
    }

    function reload(){
        window.location = "game.html";
    }
});