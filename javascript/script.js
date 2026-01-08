import quizQuestions from "./questions.js"

const questionTitle = document.querySelector(".question-text");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");

let userCategory ="programming";

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
    
    questionData.choices.forEach(choice => {
        const li = document.createElement("li");
        const p = document.createElement("p");
        li.classList.add("answer-option");
        p.textContent = choice;
        li.appendChild(p);
        answerOptions.appendChild(li)
    })
    
    console.log(questionData.choices)
    
}

function loadRandomQuestion() {
    let currentQuestion = getRandomQuestion(quizQuestions,userCategory);
     renderQuestion(currentQuestion);
}

loadRandomQuestion()

nextQuestionBtn.addEventListener("click",loadRandomQuestion);








