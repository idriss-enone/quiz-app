import quizQuestions from "./questions.js"

const configContainer = document.querySelector(".config-container");
const questionTitle = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".timer-duration");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const resultMessage = document.querySelector(".result-message");
const tryAgainBtn = document.querySelector(".try-again-btn");
const startQuizBtn = document.querySelector(".start-quiz-btn");
const questionOption = document.querySelectorAll(".question-option");
const categoryOption = document.querySelectorAll(".category-option");


const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer  = null;
let selectedCategory = null;
let currentQuestion = null;
const questionIndexHistory = [];
let numberOfQuestions = null;

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
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    
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
    console.log(category.toLowerCase())
    console.log(allCategories)
    const categoryData  = allCategories.find(
        cat => cat.category.toLowerCase() === category.toLowerCase()
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
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
}



function showAnswers(answerUserIndex = null) {
    const options = document.querySelectorAll(".answer-option");
    options.forEach((option, index) => {
        let isCorrect = currentQuestion.answer === index;

        // Toujours afficher la bonne réponse
        if (isCorrect) {
            option.classList.add("correct");
            addIcon(option,"check_circle");
        }else if (index === answerUserIndex) {
            option.classList.add("incorrect");
            addIcon(option, "cancel");
        }
        // Bloquer les clics 
        option.style.pointerEvents = "none";
    })

    // Compter la réponse correcte UNIQUEMENT si l'utilisateur a bien répondu
    if (answerUserIndex === currentQuestion.answer) {
        correctAnswersCount++;
    }

    nextQuestionBtn.disabled = false;
    quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
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

function resetQuiz() {
    // Reset game state
    questionIndexHistory.length = 0;
    correctAnswersCount = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

function startQuiz() {
    console.log("Quiz started");
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    selectedCategory = document.querySelector(".category-option.active").textContent;
    console.log("Selected Category:", selectedCategory);
    numberOfQuestions = parseInt(document.querySelector(".question-option.active").textContent);
    console.log("Number of Questions:", numberOfQuestions);

    loadRandomQuestion()
}

questionOption.forEach((option) => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});

categoryOption.forEach((category) => {
    category.addEventListener("click", () => {
        category.parentNode.querySelector(".active").classList.remove("active");
        category.classList.add("active");
    });
});

startQuizBtn.addEventListener("click", startQuiz);
tryAgainBtn.addEventListener("click", resetQuiz);

nextQuestionBtn.addEventListener("click",loadRandomQuestion);

function loadRandomQuestion() {
    currentQuestion = getRandomQuestion(quizQuestions,selectedCategory);
     renderQuestion(currentQuestion);
}










