import quizQuestions from "./questions.js"

const questionTitle = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".timer-duration");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const resultMessage = document.querySelector(".result-message");



const QUIZ_TIME_LIMIT = 7;
let currentTime = QUIZ_TIME_LIMIT;
let timer  = null;
let userCategory ="programming";
let currentQuestion = null;
const questionIndexHistory = [];
let numberOfQuestions = 4;
let correctAnswersCount = 0;

// Initialize and start the timer for the current question
function startTimer(){
    console.log("Timer actif");
    timer = setInterval(() =>{
        currentTime--
        timerDisplay.textContent = `${currentTime}s`;
        if(currentTime <= 0){
            showAnswers();
            stopTimer();
        }
    },1000);
}

// Clear and reset the timer
function resetTimer(){
    stopTimer()
    currentTime = QUIZ_TIME_LIMIT;
}

function stopTimer() {
    console.log("Le timer est arrêté");
    clearInterval(timer);
    timer = null;
};

function showQuizResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
    resultMessage.innerHTML = resultText;
    console.log("Game over");
}

function getRandomQuestion(allCategories,category){
    let categoryQuestions = getQuestionsByCategory(allCategories,category);

     if (categoryQuestions.length === 0) {
        console.log("No questions found for this category");
        return;
    }
    
    if(questionIndexHistory.length >= numberOfQuestions){
        return showQuizResults()
    }

    //Filter out already asked questions and choose a random one
    const availableQuestions = categoryQuestions.filter(
        (_,index) => !questionIndexHistory.includes(index)
    );


    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];

    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));

    return randomQuestion

}

function getQuestionsByCategory(allCategories,category){
    const categoryData  = allCategories.find(
        cat => cat.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    );
    return categoryData ? categoryData.questions: [];
}



function addIcon(optionElement, iconName) {
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;
    optionElement.appendChild(span);
}

const handleAnswer = (answerUserIndex) =>{
    stopTimer();
    showAnswers(answerUserIndex)
    
}



function showAnswers(answerUserIndex = null) {
    const options = document.querySelectorAll(".answer-option");
    options.forEach((option, index) => {
        let isCorrect = currentQuestion.answer === index;
        console.log(isCorrect)

        // Toujours afficher la bonne réponse
        if (isCorrect) {
            option.classList.add("correct");
            addIcon(option,"check_circle");
        }

        // Mauvaise réponse cliquée
        if (answerUserIndex !== null && index === answerUserIndex && !isCorrect) {
            option.classList.add("incorrect");
            addIcon(option, "cancel");
        }
            
        // Bloquer les clics
        option.style.pointerEvents = "none";
    })
    nextQuestionBtn.disabled = false;

    // Compter la réponse correcte UNIQUEMENT si l'utilisateur a bien répondu
    if (answerUserIndex !== null && answerUserIndex === currentQuestion.answer) {
        correctAnswersCount++;
    }
}


function renderQuestion(questionData) {

    if(!questionData){
        console.log("No questions found")
        return;
    }
    resetTimer();
    startTimer();
    answerOptions.innerHTML="";
    questionTitle.textContent = questionData.question;

     questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`

    renderChoice(questionData);
    console.log(correctAnswersCount)

}

function renderChoice(questionData) {
   
    nextQuestionBtn.disabled = true;

    questionData.choices.forEach((choice ,index)=> {
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.classList.add("answer-option");
        p.textContent = choice;
        li.appendChild(p);
        answerOptions.appendChild(li);
        li.addEventListener("click",() => handleAnswer(index));
    })
    
    console.log(questionData.choices)
    
}

function loadRandomQuestion() {
    currentQuestion = getRandomQuestion(quizQuestions,userCategory);
     renderQuestion(currentQuestion);
}

loadRandomQuestion()

nextQuestionBtn.addEventListener("click",loadRandomQuestion);








