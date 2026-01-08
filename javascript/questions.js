// Array of questions grouped by category(25 question each)

const quizQuestions = [
  {
    category: "programming",
    questions: [
      { question: "What does HTML stand for?", choices: ["HyperText Markup Language","HyperText Machine Language","HyperTool Markup Language","HyperText Markdown Language"], answer: 0 },
      { question: "Which language is primarily used for styling web pages?", choices: ["HTML","CSS","JavaScript","Python"], answer: 1 },
      { question: "Which of these is a JavaScript framework?", choices: ["Laravel","React","Django","Flask"], answer: 1 },
      { question: "What does 'var' in JavaScript declare?", choices: ["A variable","A function","A constant","A class"], answer: 0 },
      { question: "Which of these is a backend language?", choices: ["HTML","CSS","Python","Bootstrap"], answer: 2 },
      { question: "What does CSS stand for?", choices: ["Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"], answer: 0 },
      { question: "Which symbol is used for comments in JavaScript?", choices: ["//","/* */","#","<!-- -->"], answer: 0 },
      { question: "What is the output of 2 + '2' in JavaScript?", choices: ["4","'4'","'22'","Error"], answer: 2 },
      { question: "Which of these is NOT a programming language?", choices: ["Python","HTML","Java","C++"], answer: 1 },
      { question: "What does JSON stand for?", choices: ["JavaScript Object Notation","Java Simple Object Notation","JavaScript Online Notation","Java Standard Object Name"], answer: 0 },
      { question: "Which of the following is a loop in programming?", choices: ["if","for","switch","break"], answer: 1 },
      { question: "Which keyword declares a constant in JavaScript?", choices: ["var","const","let","static"], answer: 1 },
      { question: "Which method converts JSON to a JavaScript object?", choices: ["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.objectify()"], answer: 0 },
      { question: "Which of these is a version control system?", choices: ["Git","Docker","React","Node.js"], answer: 0 },
      { question: "Which tag is used to include JavaScript in HTML?", choices: ["<script>","<js>","<javascript>","<code>"], answer: 0 },
      { question: "What does 'DOM' stand for in web development?", choices: ["Document Object Model","Data Object Model","Document Outline Method","Data Outline Model"], answer: 0 },
      { question: "Which operator is used for strict equality in JavaScript?", choices: ["==","=","===","!="], answer: 2 },
      { question: "Which of these is a front-end framework?", choices: ["React","Node.js","Express","MongoDB"], answer: 0 },
      { question: "Which function is used to print output to console in JavaScript?", choices: ["print()","console.log()","echo()","alert()"], answer: 1 },
      { question: "Which of these is used to store key-value pairs in JavaScript?", choices: ["Array","Object","Set","Map"], answer: 1 },
      { question: "What is the correct way to create a function in JavaScript?", choices: ["function myFunc() {}","func myFunc() {}","def myFunc() {}","function:myFunc() {}"], answer: 0 },
      { question: "Which of these is a JavaScript data type?", choices: ["number","integer","decimal","char"], answer: 0 },
      { question: "Which HTML element is used to link an external JavaScript file?", choices: ["<script src='file.js'>","<link href='file.js'>","<js src='file.js'>","<script href='file.js'>"], answer: 0 },
      { question: "Which of these is a way to declare a variable in JavaScript?", choices: ["let","var","const","All of the above"], answer: 3 },
      { question: "What is the correct way to write a comment in CSS?", choices: ["/* comment */","// comment","# comment","<!-- comment -->"], answer: 0 }
    ]
  },
  {
    category: "geography",
    questions: [
      { question: "What is the capital of France?", choices: ["Paris","London","Berlin","Madrid"], answer: 0 },
      { question: "Which continent is Egypt in?", choices: ["Africa","Asia","Europe","South America"], answer: 0 },
      { question: "Which river is the longest in the world?", choices: ["Nile","Amazon","Yangtze","Mississippi"], answer: 0 },
      { question: "Which country has the largest population?", choices: ["China","India","USA","Indonesia"], answer: 0 },
      { question: "Which country is known as the Land of the Rising Sun?", choices: ["Japan","China","Thailand","South Korea"], answer: 0 },
      { question: "Mount Everest is located in which mountain range?", choices: ["Himalayas","Andes","Alps","Rockies"], answer: 0 },
      { question: "Which desert is the largest in the world?", choices: ["Sahara","Gobi","Kalahari","Arabian"], answer: 0 },
      { question: "Which country has the most time zones?", choices: ["France","Russia","USA","Australia"], answer: 1 },
      { question: "What is the smallest country in the world?", choices: ["Vatican City","Monaco","Malta","Liechtenstein"], answer: 0 },
      { question: "Which ocean is the largest?", choices: ["Pacific","Atlantic","Indian","Arctic"], answer: 0 },
      { question: "Which city is known as the Big Apple?", choices: ["New York","Los Angeles","Chicago","Miami"], answer: 0 },
      { question: "Which country is famous for tulips?", choices: ["Netherlands","Belgium","Denmark","Sweden"], answer: 0 },
      { question: "Which African country was formerly known as Abyssinia?", choices: ["Ethiopia","Kenya","Sudan","Libya"], answer: 0 },
      { question: "Which river flows through London?", choices: ["Thames","Seine","Danube","Rhine"], answer: 0 },
      { question: "Which country is known as the Land of the Midnight Sun?", choices: ["Norway","Sweden","Iceland","Finland"], answer: 0 },
      { question: "Which US state is famous for Hollywood?", choices: ["California","New York","Florida","Texas"], answer: 0 },
      { question: "Which is the largest island in the world?", choices: ["Greenland","Australia","New Guinea","Borneo"], answer: 0 },
      { question: "Which country has the most volcanoes?", choices: ["Indonesia","Japan","USA","Italy"], answer: 0 },
      { question: "Which mountain is the tallest in Africa?", choices: ["Kilimanjaro","Mount Kenya","Atlas","Drakensberg"], answer: 0 },
      { question: "Which country is known for the Eiffel Tower?", choices: ["France","Italy","Spain","Germany"], answer: 0 },
      { question: "Which river runs through Egypt?", choices: ["Nile","Amazon","Congo","Tigris"], answer: 0 },
      { question: "Which country has a maple leaf on its flag?", choices: ["Canada","USA","UK","Australia"], answer: 0 },
      { question: "Which continent is also a country?", choices: ["Australia","Africa","Europe","Asia"], answer: 0 },
      { question: "Which country is famous for its pyramids?", choices: ["Egypt","Mexico","Peru","Sudan"], answer: 0 },
      { question: "Which European country is known for chocolate and waffles?", choices: ["Belgium","Switzerland","France","Germany"], answer: 0 }
    ]
  },
  {
    category: "mathematics",
    questions: [
        { question: "What is 7 + 5?", choices: ["10", "11", "12", "13"], answer: 2 },
        { question: "What is the square root of 64?", choices: ["6", "7", "8", "9"], answer: 2 },
        { question: "What is 15 x 3?", choices: ["45", "35", "50", "40"], answer: 0 },
        { question: "What is 100 ÷ 4?", choices: ["20", "25", "30", "40"], answer: 1 },
        { question: "What is 9²?", choices: ["18", "27", "81", "72"], answer: 2 },
        { question: "What is 2³?", choices: ["6", "8", "9", "4"], answer: 1 },
        { question: "What is 5 + 7 x 2?", choices: ["19", "24", "17", "26"], answer: 0 },
        { question: "What is the value of π (approx)?", choices: ["3.14", "2.71", "1.62", "3.41"], answer: 0 },
        { question: "What is 45% of 200?", choices: ["80", "85", "90", "95"], answer: 2 },
        { question: "What is the factorial of 5 (5!)?", choices: ["120", "60", "24", "100"], answer: 0 },
        { question: "What is the next prime number after 7?", choices: ["9", "11", "13", "10"], answer: 1 },
        { question: "What is 0.25 as a fraction?", choices: ["1/2", "1/4", "1/5", "1/3"], answer: 1 },
        { question: "What is 2 + 3 x 4?", choices: ["20", "14", "10", "18"], answer: 1 },
        { question: "What is the perimeter of a square with side 5?", choices: ["10", "15", "20", "25"], answer: 2 },
        { question: "What is the area of a rectangle with width 4 and length 6?", choices: ["10", "20", "24", "30"], answer: 2 },
        { question: "What is the cube of 3?", choices: ["6", "9", "27", "18"], answer: 2 },
        { question: "What is 1000 - 457?", choices: ["543", "553", "533", "563"], answer: 0 },
        { question: "What is 2² + 3²?", choices: ["13", "12", "11", "14"], answer: 0 },
        { question: "What is the value of 7 x 8?", choices: ["54", "56", "58", "64"], answer: 1 },
        { question: "What is the square of 12?", choices: ["122", "144", "124", "132"], answer: 1 },
        { question: "What is 50% of 90?", choices: ["40", "45", "50", "55"], answer: 1 },
        { question: "What is 1/3 + 1/6?", choices: ["1/2", "1/3", "2/3", "1/6"], answer: 0 },
        { question: "What is the sum of angles in a triangle?", choices: ["180°", "90°", "360°", "270°"], answer: 0 },
        { question: "What is 0.75 as a percentage?", choices: ["25%", "50%", "75%", "85%"], answer: 2 },
        { question: "What is the next number in the sequence 2, 4, 8, 16, ?", choices: ["18", "32", "24", "20"], answer: 1 }
    ]
},
{
    category: "entertainment",
    questions: [
        { question: "Who played Iron Man in the Marvel movies?", choices: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], answer: 2 },
        { question: "Which movie features the song 'Let It Go'?", choices: ["Moana", "Frozen", "Tangled", "Coco"], answer: 1 },
        { question: "Who is the author of Harry Potter?", choices: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"], answer: 0 },
        { question: "Which superhero is known as the Dark Knight?", choices: ["Superman", "Batman", "Spider-Man", "Iron Man"], answer: 1 },
        { question: "Which singer is known as the King of Pop?", choices: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], answer: 1 },
        { question: "Which animated movie features a talking snowman named Olaf?", choices: ["Frozen", "Moana", "Tangled", "Coco"], answer: 0 },
        { question: "Which TV series features a character named Sheldon Cooper?", choices: ["Friends", "The Big Bang Theory", "How I Met Your Mother", "Seinfeld"], answer: 1 },
        { question: "Who is the director of 'Jurassic Park'?", choices: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Peter Jackson"], answer: 0 },
        { question: "Which singer released the album '25'?", choices: ["Adele", "Taylor Swift", "Beyoncé", "Katy Perry"], answer: 0 },
        { question: "Which movie series features a character named Jack Sparrow?", choices: ["Pirates of the Caribbean", "Harry Potter", "Lord of the Rings", "Star Wars"], answer: 0 },
        { question: "Which actor played Wolverine?", choices: ["Hugh Jackman", "Chris Hemsworth", "Robert Downey Jr.", "Chris Evans"], answer: 0 },
        { question: "Which movie features the character Elsa?", choices: ["Frozen", "Moana", "Tangled", "Brave"], answer: 0 },
        { question: "Which singer is known for the song 'Shape of You'?", choices: ["Ed Sheeran", "Shawn Mendes", "Justin Bieber", "Bruno Mars"], answer: 0 },
        { question: "Which series is about zombies attacking humans?", choices: ["The Walking Dead", "Game of Thrones", "Breaking Bad", "Stranger Things"], answer: 0 },
        { question: "Who voiced Simba in the original Lion King?", choices: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons", "Jonathan Taylor Thomas"], answer: 0 },
        { question: "Which movie features the song 'Circle of Life'?", choices: ["The Lion King", "Aladdin", "Mulan", "Tarzan"], answer: 0 },
        { question: "Who played Jack in Titanic?", choices: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"], answer: 0 },
        { question: "Which animated movie features a superhero family called the Incredibles?", choices: ["The Incredibles", "Big Hero 6", "Frozen", "Moana"], answer: 0 },
        { question: "Who is the creator of 'Game of Thrones' TV series?", choices: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Stephen King"], answer: 1 },
        { question: "Which actor played Captain Jack Sparrow?", choices: ["Orlando Bloom", "Johnny Depp", "Ian McKellen", "Hugh Jackman"], answer: 1 },
        { question: "Which superhero has the hammer Mjolnir?", choices: ["Iron Man", "Thor", "Captain America", "Hulk"], answer: 1 },
        { question: "Which actress played Hermione Granger?", choices: ["Emma Watson", "Emma Stone", "Natalie Portman", "Jennifer Lawrence"], answer: 0 },
        { question: "Which animated movie features a wooden puppet named Pinocchio?", choices: ["Pinocchio", "Cinderella", "Peter Pan", "Shrek"], answer: 0 },
        { question: "Which movie features a talking snowman in the kingdom of Arendelle?", choices: ["Frozen", "Tangled", "Moana", "Coco"], answer: 0 },
        { question: "Which singer is famous for 'Bad Romance'?", choices: ["Lady Gaga", "Adele", "Katy Perry", "Beyoncé"], answer: 0 }
    ]
}

];

export default quizQuestions;

