import quizQuestions from "./questions.js"

const questionTitle = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");


let userCategory ="programming";
let currentQuestion = null;

function addIcon(optionElement, iconName) {
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = iconName;
    optionElement.appendChild(span);
}

const handleAnswer = (answerUserIndex) =>{

    const options = document.querySelectorAll(".answer-option");

    options.forEach((option, index) => {

        let isCorrect = currentQuestion.answer === index;

        if (isCorrect) {
            option.classList.add("correct");
            addIcon(option,"check_circle");
        }
        
        // Mauvaise réponse cliquée
        if (index === answerUserIndex && !isCorrect) {
            option.classList.add("incorrect");
            addIcon(option, "cancel");
        }

        // Bloquer les clics
        option.style.pointerEvents = "none";

    })


}

function getQuestionsByCategory(allCategories,category){
    const categoryData  = allCategories.find(
        cat => cat.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    );
    return categoryData ? categoryData.questions: [];
}



function getRandomQuestion(allCategories,category){
    let categoryQuestions = getQuestionsByCategory(allCategories,category);

     if (categoryQuestions.length === 0) {
        console.log("No questions found for this category");
        return;
    }
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    const randomQuestion = categoryQuestions[randomIndex];

    return randomQuestion

}



function renderQuestion(questionData) {

    if(!questionData){
        console.log("No questions found")
        return;
    }
    answerOptions.innerHTML="";
    questionTitle.textContent = questionData.question;

    renderChoice(questionData);
    console.log(questionData.question);

}

function renderChoice(questionData) {
    
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








