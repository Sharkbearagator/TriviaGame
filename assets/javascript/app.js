//Create a document ready state
$(document).ready(function(){

//create global variables
var intervalId;
var timer = 30
var correctAnswers = ["Ryu","Zangief","Dhalsim","Chun-Li","Dudley"]
var falseAnswers = ["M.Bison","Vega","Balrog","Guile","Fei Long","T. Hawk","Rose","Blanka","El Fuerte","C. Viper","Hakan","E. Honda","Skullimania","Juri","R. Mika","Birdie","Urien"]
var questions = {
    ask: [{ prompt: "Which fighter can fire a hadoken?",answer: correctAnswers[0],},
    {prompt: "Which fighter is known as the Red cyclone?", answer: correctAnswers[1]},
    {prompt: "Which fighter has streachy limbs due to his yoga?", answer: correctAnswers[2]},
    {prompt: "Which fighter uses the Flying Bird Kick?", answer: correctAnswers[3]},
    {prompt: "Which fighter is a British Boxer?", answer: correctAnswers[4]}],
}
var chosenQuestion = [questions.ask[Math.floor(Math.random()*questions.ask.length)]]
for(var i = 0; i < falseAnswers.length; i++){
var falseChosen1 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
var falseChosen2 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
var falseChosen3 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
}
console.log(falseChosen1);
console.log(falseChosen2);
console.log(falseChosen3);
//create a timer to start when the page loads
console.log(chosenQuestion);
console.log(chosenQuestion[0].prompt);
function run(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    timer--;
    $("#timer").html(timer);
    if(timer === 0){
        
        alert("Time's up!");
        reset();
    }
}

var setMultiple = [chosenQuestion[0].answer,falseChosen1,falseChosen2,falseChosen3]
function shuffle(){
    var currentIndex = setMultiple.length, temporaryValue, randomIndex;
    while(0!==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-=1;

        temporaryValue = setMultiple[currentIndex]
        setMultiple[currentIndex] = setMultiple[randomIndex];
        setMultiple[randomIndex] = temporaryValue;
    }
    }
   shuffle();
    

//display random question
$("#question").html("<h2>" + chosenQuestion[0].prompt);
//fetch the answers for that specific question
$("#answer-a").html("<h5>" + setMultiple[0]);
$("#answer-b").html("<h5>" + setMultiple[1]);
$("#answer-c").html("<h5>" + setMultiple[2]);
$("#answer-d").html("<h5>" + setMultiple[3]);

//create a way to select answers (buttons?)
$("#button-a").click(function(){
$("#button-a").val(setMultiple[0]);
if(setMultiple[0]===chosenQuestion[0].answer){
alert("Correct!");
reset();
}
else{
    alert("Incorrect!");
    reset();
}
});

$("#button-b").click(function(){
$("#button-b").val(setMultiple[1]);
if(setMultiple[1]===chosenQuestion[0].answer){
    alert("Correct!");
    reset();
    }
    else{
        alert("Incorrect!");
        reset();
    }
});

$("#button-c").click(function(){
$("#button-c").val(setMultiple[2]);
if(setMultiple[2]===chosenQuestion[0].answer){
    alert("Correct!");
    reset();
    }
    else{
        alert("Incorrect!");
        reset();
    }
});

$("#button-d").click(function(){
$("#button-d").val(setMultiple[3]);
if(setMultiple[3]===chosenQuestion[0].answer){
    alert("Correct!");
    reset();
    }
    else{
        alert("Incorrect!");
        reset();
    }
});

//alert if correct or not

//wins and losses

//reset clock and present new question and answers
function reset(){
    timer = 30;
    chosenQuestion = [questions.ask[Math.floor(Math.random()*questions.ask.length)]]
    var falseChosen1 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
var falseChosen2 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
var falseChosen3 = [falseAnswers[Math.floor(Math.random()*falseAnswers.length)]]
setMultiple = [chosenQuestion[0].answer,falseChosen1,falseChosen2,falseChosen3]
function resetShuffle(){
    var currentIndex = setMultiple.length, temporaryValue, randomIndex;
    while(0!==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex-=1;

        temporaryValue = setMultiple[currentIndex]
        setMultiple[currentIndex] = setMultiple[randomIndex];
        setMultiple[randomIndex] = temporaryValue;
    }
    }
    resetShuffle(setMultiple);
    $("#question").html("<h2>" + chosenQuestion[0].prompt);
        $("#answer-a").html("<h5>" + setMultiple[0])
        $("#answer-b").html("<h5>" + setMultiple[1]);
        $("#answer-c").html("<h5>" + setMultiple[2]);
        $("#answer-d").html("<h5>" + setMultiple[3]);
        console.log(setMultiple);
}

run();
console.log(setMultiple);
});