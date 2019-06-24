var wins   = 0;
var losses = 0;
var score  = 0;
var blueGemValue        = $("#blue-gem")       .val(RNG(1,12));
var greenGemValue       = $("#green-gem")      .val(RNG(1,12));
var redGemValue         = $("#red-gem")        .val(RNG(1,12));
var yellowGemValue      = $("#yellow-gem")     .val(RNG(1,12));
var computerValue       =                           RNG(19,120);
var computerScore_span  = $("#computer-score") .html(computerValue);


//random number generator, pick a number between two arguments
function RNG(min,max){
    computerNumber = Math.floor(Math.random() *(max-min+1)+min);
    return computerNumber;
}

//resets the values for computer and gems when game ends
function reset(){
    blueGemValue        = $("#blue-gem")       .val(RNG(1,12));
    greenGemValue       = $("#green-gem")      .val(RNG(1,12));
    redGemValue         = $("#red-gem")        .val(RNG(1,12));
    yellowGemValue      = $("#yellow-gem")     .val(RNG(1,12));
    computerValue       = RNG(19,120);
    computerScore_span  = $("#computer-score") .html(computerValue);
    score = 0;
    $("#score").html(score);
}

//losses score is incremented and resets game
function lose(){
    losses++;
    $("#losses").html(losses);
    $("#statement").html("You lose !!!");
    reset();
}

//wins score is incremented and resets game
function win(){
    wins++;
    $("#wins").html(wins);
    $("#statement").html("You win !!!");
    reset();
}


// ----------------------- Main function ----------------------------

$(".gem").on("click",function(){
    gemValue = this.value;
    score += parseInt(gemValue);
    $("#score").html(score);

        if( score > computerValue){
            lose();
        }
        else if( score === computerValue){
            win();
        }
})