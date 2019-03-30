//creating variables
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;

// select randomnumber between 19 and 120  
var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
$("#randomNumber").html(computerGuess);
//set each crystal value to a randomnumber between 1 and 12
var crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
var crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
var crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
var crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);
//test all random number
console.log("computerGuess" + computerGuess);
console.log("crystal1 " + crystal1);
console.log("crystal2 " + crystal2);
console.log("crystal3 " + crystal3);
console.log("crystal4 " + crystal4);
//creating reset function the game
function reset () {
    score = 0;
    $("#score").html(score);
    computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(computerGuess);
    crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);
}
//create a click function for images generate number
    $("#crystal1").on("click", function() {
            score = score + crystal1;
            $("#score").html(score);
            console.log("score1 " + score);
            if (score == computerGuess) {
                wincheck();
            }else if (score > computerGuess) {
                wincheck();
            }
});
$("#crystal2").on("click", function() {
            score = score + crystal2;
            $("#score").html(score);
            console.log("score2 " + score);
            if (score == computerGuess) {
                wincheck();
            }else if (score > computerGuess) {
                wincheck();
            }
});
$("#crystal3").on("click", function() {
        score = score + crystal3;
            $("#score").html(score);
            console.log("score3 " + score);
            if (score == computerGuess) {
                wincheck();
            }else if (score > computerGuess) {
                wincheck();
            }
});
$("#crystal4").on("click", function() {
            score = score + crystal4;
            $("#score").html(score);
            console.log("score4 " + score);
            if (score == computerGuess) {
                wincheck();
            }else if (score > computerGuess) {
                wincheck();
            }
});
 // create win and losses function
function wincheck() {
    if(score === computerGuess) {
    wins++;
    console.log(wins);
    $("#win").html("win: " +wins);
    reset();
} else if (score > computerGuess) {
    losses++;
    console.log(losses);
    $("#losses").html("Losses: " +losses);
    reset();
}
}
});



