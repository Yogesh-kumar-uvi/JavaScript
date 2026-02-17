// ========= QUESTIONS ARRAY ===========
const data = [
    {
        "no": "01",
        "question": "Inside which HTML element do we put the JavaScript?",
        "options": {
            "a": "<scripting>",
            "b": "<script>",
            "c": "<javascript>",
            "d": "<js>"
        },
        "correctAns": "<script>",
        "difficultyLevel": "easy"
    },
    {
        "no": "02",
        "question": "What is the correct JavaScript syntax to change the content of the HTML element? <p id='demo'>This is a demonstration.</p>",
        "options": {
            "a": "#demo.innerHTML = 'Hello World!'",
            "b": "document.getElementByName('p').innerHTML = 'Hello World!'",
            "c": "document.getElement('p').innerHTML = 'Hello World!'",
            "d": "document.getElementById('demo').innerHTML = 'Hello World!'"
        },
        "correctAns": "document.getElementById('demo').innerHTML = 'Hello World!'",
        "difficultyLevel": "easy"
    },
    {
        "no": "03",
        "question": "Where is the correct place to insert a JavaScript?",
        "options": {
            "a": "The <head> section",
            "b": "Both <head> and <body> section",
            "c": "The <body> section",
            "d": "After <body> section"
        },
        "correctAns": "Both <head> and <body> section",
        "difficultyLevel": "easy"
    },
    {
        "no": "04",
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "options": {
            "a": "<script src='xxx.js'>",
            "b": "<script href='xxx.js'>",
            "c": "<script name='xxx.js'>",
            "d": "<script rel='xxx.js'>"
        },
        "correctAns": "<script src='xxx.js'>",
        "difficultyLevel": "easy"
    },
    {
        "no": "05",
        "question": "How do you write 'Hello World' in an alert box?",
        "options": {
            "a": "alert('Hello World')",
            "b": "alertBox('Hello World')",
            "c": "msg('Hello World')",
            "d": "msgBox('Hello World')"
        },
        "correctAns": "alert('Hello World')",
        "difficultyLevel": "easy"
    },
    {
        "no": "06",
        "question": "How do you create a function in JavaScript?",
        "options": {
            "a": "function:myFunction()",
            "b": "function myFunction()",
            "c": "function = myFunction()",
            "d": "Function myFunction()"
        },
        "correctAns": "function myFunction()",
        "difficultyLevel": "medium"
    },
    {
        "no": "07",
        "question": "How do you call a function named 'myFunction'?",
        "options": {
            "a": "myFunction()",
            "b": "call function myFunction()",
            "c": "call myFunction()",
            "d": "call Function myFunction()"
        },
        "correctAns": "myFunction()",
        "isCorrect": false,
        "difficultyLevel": "medium"
    },
    {
        "no": "08",
        "question": "How to write an IF statement in JavaScript?",
        "options": {
            "a": "if i == 5 then",
            "b": "if i = 5 then",
            "c": "if i = 5",
            "d": "if (i == 5)"
        },
        "correctAns": "if (i == 5)",
        "difficultyLevel": "easy"
    },
    {
        "no": "09",
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "options": {
            "a": "if (i <> 5)",
            "b": "if i <> 5",
            "c": "if (i != 5)",
            "d": "if (i =! 5) then"
        },
        "correctAns": "if (i != 5)",
        "difficultyLevel": "easy"
    },
    {
        "no": "10",
        "question": "How does a WHILE loop start?",
        "options": {
            "a": "while (i <= 10; i++)",
            "b": "while (i <= 10)",
            "c": "while i = 1 to 10",
            "d": "while (i <= 10; i--)"
        },
        "correctAns": "while (i <= 10)",
        "difficultyLevel": "medium"
    },
    {
        "no": "11",
        "question": "How does a FOR loop start?",
        "options": {
            "a": "for (i = 0; i <= 5; i++)",
            "b": "for (i <= 5; i++)",
            "c": "for (i = 0; i <= 5)",
            "d": "for i = 1 to 5"
        },
        "correctAns": "for (i = 0; i <= 5; i++)",
        "difficultyLevel": "easy"
    },
    {
        "no": "12",
        "question": "In which year Brendan Eich developed JavaScript?",
        "options": {
            "a": "1990",
            "b": "1995",
            "c": "1998",
            "d": "1992"
        },
        "correctAns": "1995",
        "difficultyLevel": "medium"
    },
    {
        "no": "13",
        "question": "How can you add a comment in a JavaScript?",
        "options": {
            "a": "//This is a comment",
            "b": "?This is a comment",
            "c": "--This is a comment--",
            "d": "<!--This is a comment-->"
        },
        "correctAns": "//This is a comment",
        "difficultyLevel": "easy"
    },
    {
        "no": "14",
        "question": "How to insert a comment that has more than one line?",
        "options": {
            "a": "//This comment has more than one line//",
            "b": "<!--This comment has more than one line-->",
            "c": "/*This comment has more than one line*/",
            "d": "/This comment has more than one line/"
        },
        "correctAns": "/*This comment has more than one line*/",
        "difficultyLevel": "medium"
    },
    {
        "no": "15",
        "question": "What is the correct way to write a JavaScript array?",
        "options": {
            "a": "var colors = 'red','green', 'blue'",
            "b": "var colors = 1 = ('red'),2 = ('green'),3 = ('blue')",
            "c": "var colors = ['red', 'green', 'blue']",
            "d": "var colors = (1:'red', 2:'green', 3:'blue')"
        },
        "correctAns": "var colors = ['red', 'green', 'blue']",
        "difficultyLevel": "medium"
    },
    {
        "no": "16",
        "question": "How do you round the number 7.25, to the nearest integer?",
        "options": {
            "a": "Math.round(7.25)",
            "b": "round(7.25)",
            "c": "rnd(7.25)",
            "d": "Math.rnd(7.25)"
        },
        "correctAns": "Math.round(7.25)",
        "difficultyLevel": "medium"
    },
    {
        "no": "17",
        "question": "How do you find the number with the highest value of x and y?",
        "options": {
            "a": "Math.max(x,y)",
            "b": "ceil(x,y)",
            "c": "Math.ceil(x,y)",
            "d": "top(x,y)"
        },
        "correctAns": "Math.max(x,y)",
        "difficultyLevel": "medium"
    },
    {
        "no": "18",
        "question": "How can you detect the client's browser name?",
        "options": {
            "a": "client.navName",
            "b": "navigator.appName",
            "c": "browser.name",
            "d": "delete.name"
        },
        "correctAns": "navigator.appName",
        "difficultyLevel": "hard"
    },
    {
        "no": "19",
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": {
            "a": "onmouseover",
            "b": "onchange",
            "c": "onclick",
            "d": "onmouseclick"
        },
        "correctAns": "onclick",
        "difficultyLevel": "easy"
    },
    {
        "no": "20",
        "question": "How do you declare a JavaScript variable?",
        "options": {
            "a": "v carName",
            "b": "var carName",
            "c": "variable carName",
            "d": "var (carName)"
        },
        "correctAns": "var carName",
        "difficultyLevel": "easy"
    },
    {
        "no": "21",
        "question": "Which operator is used to assign a value to a variable?",
        "options": {
            "a": "x",
            "b": "=",
            "c": "-",
            "d": "*"
        },
        "correctAns": "=",
        "difficultyLevel": "easy"
    },
    {
        "no": "22",
        "question": "What will the following code return: Boolean(10 > 9)",
        "options": {
            "a": "false",
            "b": "true",
            "c": "NaN",
            "d": "undefined"
        },
        "correctAns": "true",
        "difficultyLevel": "easy"
    },
    {
        "no": "23",
        "question": "How many data types are there in JavaScript?",
        "options": {
            "a": "5",
            "b": "6",
            "c": "7",
            "d": "8"
        },
        "correctAns": "8",
        "difficultyLevel": "easy"
    },
    {
        "no": "24",
        "question": "What is the data type of Null?",
        "options": {
            "a": "Object",
            "b": "NaN",
            "c": "Null",
            "d": "String"
        },
        "correctAns": "Object",
        "difficultyLevel": "hard"
    },
    {
        "no": "25",
        "question": "Which one of the following is called Sanke Case?",
        "options": {
            "a": "user_name",
            "b": "userName",
            "c": "user-name",
            "d": "UserName"
        },
        "correctAns": "user_name",
        "difficultyLevel": "medium"
    }

];

// ========= DOM ELEMENTS ===========
const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionBox = document.getElementById("optionBox");

const timer = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");

const barGreen = document.getElementById("barGreen");
const barRed = document.getElementById("barRed");
const scorePercent = document.getElementById("scorePercent");
const feedback = document.getElementById("feedback");

// ========= QUIZ VARIABLES ===========
let index = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

// ========= START QUIZ ===========
startBtn.onclick = () => {
    home.classList.remove("active");
    quiz.classList.add("active");

    loadQuestion();
    startTimer();
};

// ========= LOAD QUESTION ===========
function loadQuestion() {
    questionCount.textContent = `${index + 1}/${questions.length}`;
    questionText.textContent = questions[index].q;

    optionBox.innerHTML = "";

    questions[index].options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;

        div.onclick = () => selectOption(div, i);

        optionBox.appendChild(div);
    });
}

// ========= OPTION SELECT ===========
function selectOption(div, chosenIndex) {
    clearInterval(timerInterval);

    const correctIndex = questions[index].answer;

    if (chosenIndex === correctIndex) {
        div.classList.add("correct");
        score++;
    } else {
        div.classList.add("wrong");
        optionBox.children[correctIndex].classList.add("correct");
    }

    [...optionBox.children].forEach(btn => btn.style.pointerEvents = "none");
}

// ========= TIMER ===========
function startTimer() {
    timeLeft = 30;
    updateTimerColor();

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        updateTimerColor();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextBtn.click();
        }
    }, 1000);
}

function updateTimerColor() {
    timerBox.classList.remove("bg-green", "bg-yellow", "bg-red");

    if (timeLeft > 15) timerBox.classList.add("bg-green");
    else if (timeLeft > 5) timerBox.classList.add("bg-yellow");
    else timerBox.classList.add("bg-red");
}

// ========= NEXT BUTTON ===========
nextBtn.onclick = () => {
    index++;

    if (index < questions.length) {
        loadQuestion();
        startTimer();
    } else {
        showResult();
    }
};

// ========= RESULT SCREEN ===========
function showResult() {
    quiz.classList.remove("active");
    result.classList.add("active");

    const percent = Math.round((score / questions.length) * 100);

    scorePercent.textContent = percent + "%";

    barGreen.style.width = `${percent}%`;
    barRed.style.width = `${100 - percent}%`;

    if (percent >= 80) feedback.textContent = "Excellent! You are doing great!";
    else if (percent >= 50) feedback.textContent = "Good job! Keep improving!";
    else feedback.textContent = "Keep learning, you have a good score!";
}

// ========= RESTART ===========
restartBtn.onclick = () => {
    index = 0;
    score = 0;

    result.classList.remove("active");
    quiz.classList.add("active");

    loadQuestion();
    startTimer();
};