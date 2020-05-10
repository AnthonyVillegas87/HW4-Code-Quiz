var startBtn = document.querySelector(".startBtn");
var quiz = document.querySelector("#quiz");
var question = document.querySelector("#question");
var counter = document.querySelector("#counter");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var displayScore = document.querySelector("#displayScore");
var scoreContainer = document.querySelector("#score-container");
var gameOverContainer = document.querySelector("#gameOver-container");
var quizContainer = document.querySelector("#quiz-container");
var gameTimer = document.querySelector("#game-timer");
var questionCount = 0;
var score = 0;
var startTime = 1;
var timeLeft = 30;
var stopTime;



var quizQuestions = [
    {
        question : "To take the value from user at runtime we use _",
        choice1 : "Promptbox",
        choice2 : "Confirmbox",
        choice3 : "Alertbox",
        choice4 : "none",
        correct : "A",
    },
    {
        question : "How can we declare variable in Javascript?",
        choice1 : "Float",
        choice2 : "Datatype",
        choice3 : "Var",
        choice4 : "Int",
        correct : "C",
    },
    {
        question : "What is the use of document.getElementById().value in javascript?",
        choice1 : "To take the value from only textbox",
        choice2 : "To input some value in javascript",
        choice3 : "To take value from any form tool",
        choice4 : "None of the above",
        correct : "C",
    },
    {
        question : ".push is which type of function?",
        choice1 : "Date and time",
        choice2 : "String",
        choice3 : "Maths/numeric",
        choice4 : "Array",
        correct : "D",
    }
]

var lastQuestion = quizQuestions.length - 1;
var currentQuestion = 0;

function renderQuestion(){
    var questionsToAsk = quizQuestions[currentQuestion];


    question.innerHTML = "<p>" + questionsToAsk.question + "</p>";
    button1.innerHTML = questionsToAsk.choice1;
    button2.innerHTML = questionsToAsk.choice2;
    button3.innerHTML = questionsToAsk.choice3;
    button4.innerHTML = questionsToAsk.choice4;


}

startBtn.addEventListener("click", startQuiz);

function startQuiz(){
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    stopTime = setInterval(gameTimer, 1000);
    timer.innerHTML = timeLeft;

};

button1.addEventListener("click", function() { checkAnswer("A") } );
button2.addEventListener("click", function() { checkAnswer("B") } );
button3.addEventListener("click", function() { checkAnswer("C") } );
button4.addEventListener("click", function() { checkAnswer("D") } );

function checkAnswer(answer){

    if(answer == quizQuestions[currentQuestion].correct){
        console.log("correct")
        document.body.style.background = "none";
        score++
        console.log(score);
    } else if (answer != quizQuestions[currentQuestion].correct) {
        console.log("wrong")
        document.body.style.background = "none";
    }
    if (currentQuestion < lastQuestion) {
        currentQuestion++
        renderQuestion();
    }else{
        highScore();
    }
    if (timeLeft == 0){
        highScore();
    }
}

function highScore(){
    document.body.style.background = "gray";  
    quiz.style.display = "none";
    scoreContainer.style.display = "block";
    displayScore.innerHTML = score;
}


function gameTimer() {
    timeLeft--;
    timer.innerHTML = `${timeLeft}`;
    if (timeLeft <= 0){
        clearInterval(stopTime)
        gameOverIncomplete();
    }
    else if (currentQuestion >= lastQuestion){
        clearInterval(stopTime)
        gameOverComplete();
    }

    
    
}
function gameOverComplete() {
    scoreContainer.style.display = "block";
}
function gameOverIncomplete() {
    quizContainer.style.display = "none";
    gameOverContainer.style.display = "block";
    document.body.style.background = "red";
}




    
