import quizQuestions from "./questions.js"

/* =======================
   DOM ELEMENTS
======================= */
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");

const questionTitle = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".timer-duration");

const startQuizBtn = document.querySelector(".start-quiz-btn");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const tryAgainBtn = document.querySelector(".try-again-btn");

const questionOption = document.querySelectorAll(".question-option");
const categoryOption = document.querySelectorAll(".category-option");

const resultMessage = document.querySelector(".result-message");

/* =======================
   CONSTANTS & STATE
======================= */
const QUIZ_TIME_LIMIT = 15;

let state = {
    timer: null,
    currentTime: QUIZ_TIME_LIMIT,
    questionHistory: [],
    numberOfQuestions: 0,
    selectedCategory: null,
    currentQuestion: null,
    correctAnswersCount:0
}


/* =======================
   TIMER FUNCTIONS
======================= */

function startTimer(){

    stopTimer();
    
    state.timer = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${state.currentTime}s`;
     
    state.timer = setInterval(() =>{

        state.currentTime--;
        timerDisplay.textContent = `${state.currentTime}s`;

        if(state.currentTime <= 0){
            stopTimer();
            showAnswers();
        }
    },1000);

}

function stopTimer() {
    if(state.timer){
        clearInterval(state.timer);
        state.timer = null;
    }
    state.currentTime = QUIZ_TIME_LIMIT;
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
};


/* =======================
   QUIZ LOGIC
======================= */


function getQuestionsByCategory(category) {
  const categoryData = quizQuestions.find(
    cat => cat.category.toLowerCase() === category.toLowerCase()
  );
  return categoryData ? categoryData.questions : [];
}

function getRandomQuestion(category) {

    const questions = getQuestionsByCategory(category);
    
    if (state.questionHistory.length >= state.numberOfQuestions) {
        showQuizResults();
        return null
    }
    const available = questions.filter(
        (_, index) => !state.questionHistory.includes(index)
    );

    const randomIndex = Math.floor(Math.random() * available.length);
    const question = available[randomIndex];
    state.questionHistory.push(questions.indexOf(question));
    return question;

}


/* =======================
   UI RENDERING
======================= */

function renderQuestion(questionData) {

    if(!questionData){
        console.log("No questions found")
        return;
    }

    state.currentQuestion = questionData;

    
    answerOptions.innerHTML="";
    questionTitle.textContent = questionData.question;

    questionStatus.innerHTML = `
    <b>${state.questionHistory.length}</b> of <b>${state.numberOfQuestions}</b> Questions
    `;

    nextQuestionBtn.disabled = true;
    startTimer();
    
    questionData.choices.forEach((choice ,index)=> {
        console.log(choice);
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.classList.add("answer-option");
        li.appendChild(p);
        p.textContent = choice;
        li.addEventListener("click", () => handleAnswer(index));
        answerOptions.appendChild(li);
    })

}

const handleAnswer = (answerUserIndex) => {                  
    showAnswers(answerUserIndex); 
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
}




function showAnswers(answerUserIndex = null) {
   stopTimer();
    document.querySelectorAll(".answer-option").forEach((option, index) => {
        let isCorrect = state.currentQuestion.answer === index;

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
    if (answerUserIndex === state.currentQuestion.answer) {
        state.correctAnswersCount++;
    }

    nextQuestionBtn.disabled = false;
    quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
}



/* =======================
   RESULTS & RESET
======================= */

function showQuizResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${state.correctAnswersCount}</b> out of <b>${state.numberOfQuestions}</b> questions correctly. Great effort!`;
    resultMessage.innerHTML = resultText;
    console.log("Game over");
}

function resetQuiz() {
  state = {
    ...state,
    currentTime: QUIZ_TIME_LIMIT,
    selectedCategory: null,
    currentQuestion: null,
    questionHistory: [],
    numberOfQuestions: 0,
    correctAnswersCount: 0
  };

  resultContainer.style.display = "none";
  configContainer.style.display = "block";
}




/* =======================
   HELPERS
======================= */


function addIcon(optionElement, iconName) {
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;
    optionElement.appendChild(span);
}





/* =======================
   EVENTS
======================= */

startQuizBtn.addEventListener("click", () =>{
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
    
    state.selectedCategory =
    document.querySelector(".category-option.active").textContent;

    state.numberOfQuestions = parseInt(
        document.querySelector(".question-option.active").textContent
    );
    renderQuestion(getRandomQuestion(state.selectedCategory));
});

nextQuestionBtn.addEventListener("click", () =>
    renderQuestion(getRandomQuestion(state.selectedCategory)));

tryAgainBtn.addEventListener("click", resetQuiz);

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













