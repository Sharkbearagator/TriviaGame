//Create a document ready state
$(document).ready(function(){

//create global variables
var intervalId;
var timer = 30
var correctAnswers = ["Ryu","Zangief","Dhalsim","Chun-Li"]
var falseAnswers = ["M.Bison","Vega","Balrog","Guile","Fei Long","T. Hawk"]
var questions = {
    ask: [{ prompt: "Which fighter can fire a hadoken?",answer: correctAnswers[0],},
    {prompt: "Which fighter is known as the Red cyclone?", answer: correctAnswers[1]},
    {prompt: "Which fighter has streachy limbs due to his yoga?", answer: correctAnswers[2]},
    {prompt: "Which fighter uses the Flying Bird Kick?", answer: correctAnswers[3]}],
}
var chosenQuestion = [questions.ask[Math.floor(Math.random()*questions.ask.length)]]
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

function reset(){
    timer = 30;
    chosenQuestion = [questions.ask[Math.floor(Math.random()*questions.ask.length)]]
    $("#question").html(chosenQuestion[0].prompt);
}



//display random question
$("#question").html(chosenQuestion[0].prompt);
//fetch the answers for that specific question

//create a way to select answers (buttons?)

//alert if correct or not

//wins and losses

//reset clock and present new question
run();
});