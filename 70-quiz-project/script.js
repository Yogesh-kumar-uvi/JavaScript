
const startScreen = document.querySelector('.start-screen');
const quizScreen = document.querySelector('.quiz-screen');
const resultModal = document.getElementById('result-modal');
const btnStart = document.querySelector('.btn-start');
const body = document.querySelector('body')
const questionText = document.querySelector('.qs-container')
const optionsContainerList = [...document.querySelectorAll('.option')]
const optionsTextList = [...document.querySelectorAll('.option-text')]
const btnNext = document.querySelector('.btn-next')
const btnSeeYourResult = document.querySelector('.btn-see-your-result')
const totalQs = document.querySelector('.total-qs')
const qsAnswered = document.querySelector('.qs-answered')
const volumeIcon = document.querySelector('.volume-icon')
const playOrPauseBtn = document.querySelector('.play-or-pause-btn')
const time = document.querySelector('.timer span')
const resultScore = document.getElementById('result-score')

const volUpPath = "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z";
const volMutePath = "M7 9v6h4l5 5V4l-5 5H7z";

const pausePath = "M6 19h4V5H6v14zm8-14v14h4V5h-4z";
const playPath = "M8 5v14l11-7z";

let pauseStateStored = JSON.parse(localStorage.getItem('pauseState(Quizora)'))
localStorage.removeItem('pauseState(Quizora)')

let correctAnsGiven = pauseStateStored ? pauseStateStored.correctAnsGiven : 0
let index = pauseStateStored ? pauseStateStored.qsNo : 0

const questions = [
  {
    "question": "What is the correct way to write a JavaScript object?",
    "options": [
      "var person = {name: 'John', age: 30};",
      "var person = [name: 'John', age: 30];",
      "var person = (name: 'John', age: 30);",
      "var person = <name: 'John', age: 30>;"
    ],
    "answerIndex": 0
  },
  {
    "question": "Which method converts a JavaScript object to a JSON string?",
    "options": [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toText()"
    ],
    "answerIndex": 1
  },
  {
    "question": "What is the output of console.log(typeof null)?",
    "options": ["null", "undefined", "object", "string"],
    "answerIndex": 2
  },
  {
    "question": "Which operator returns true if two values are equal without type conversion?",
    "options": ["==", "===", "=", "!=="],
    "answerIndex": 1
  },
  {
    "question": "What does the 'this' keyword refer to in JavaScript?",
    "options": [
      "The previous object",
      "The current object",
      "The parent object",
      "The global object"
    ],
    "answerIndex": 1
  },
  {
    "question": "Which method is used to execute a function after a specified time interval?",
    "options": ["setTimeout()", "wait()", "delay()", "executeAfter()"],
    "answerIndex": 0
  },
  {
    "question": "What does the 'NaN' value represent in JavaScript?",
    "options": [
      "Not a Node",
      "Not a Null",
      "Not a Number",
      "Not a Name"
    ],
    "answerIndex": 2
  },
  {
    "question": "Which function is used to parse a string to a floating point number?",
    "options": ["parseInt()", "parseFloat()", "stringToFloat()", "Number()"],
    "answerIndex": 1
  },
  {
    "question": "What is the scope of a variable declared with 'let'?",
    "options": [
      "Global scope",
      "Function scope",
      "Block scope",
      "Module scope"
    ],
    "answerIndex": 2
  },
  {
    "question": "Which method removes the first element from an array?",
    "options": ["shift()", "unshift()", "pop()", "removeFirst()"],
    "answerIndex": 0
  },
  {
    "question": "What is the purpose of the 'use strict' directive?",
    "options": [
      "To enforce stricter type checking",
      "To enable modern JavaScript features",
      "To enforce stricter parsing and error handling",
      "To optimize code performance"
    ],
    "answerIndex": 2
  },
  {
    "question": "Which method joins all elements of an array into a string?",
    "options": ["concat()", "join()", "merge()", "combine()"],
    "answerIndex": 1
  },
  {
    "question": "What is the result of 3 + '3' in JavaScript?",
    "options": ["6", "33", "NaN", "TypeError"],
    "answerIndex": 1
  },
  {
    "question": "Which method returns the character at a specified index in a string?",
    "options": ["charAt()", "getChar()", "characterAt()", "indexOf()"],
    "answerIndex": 0
  },
  {
    "question": "What is the purpose of the 'return' statement in a function?",
    "options": [
      "To exit the function",
      "To return a value from the function",
      "To pause the function",
      "Both to exit the function and return a value"
    ],
    "answerIndex": 3
  },
  {
    "question": "Which of these is not a JavaScript framework?",
    "options": ["React", "Angular", "Vue", "Django"],
    "answerIndex": 3
  },
  {
    "question": "What does the 'addEventListener' method do?",
    "options": [
      "Adds a new HTML element",
      "Attaches an event handler to an element",
      "Creates a new event",
      "Adds a listener to the DOM"
    ],
    "answerIndex": 1
  },
  {
    "question": "Which method converts a string to lowercase?",
    "options": [
      "toLowerCase()",
      "toLower()",
      "lowerCase()",
      "convertLower()"
    ],
    "answerIndex": 0
  },
  {
    "question": "What is the purpose of the 'break' statement in a loop?",
    "options": [
      "To skip the current iteration",
      "To exit the loop entirely",
      "To pause the loop",
      "To restart the loop"
    ],
    "answerIndex": 1
  }
]

let totalQuestionsCount = questions.length
let answerIndex
let updateTimerInterval
let isVolumeUp = true
let pauseState


totalQs.innerText = String(totalQuestionsCount).padStart(2, '0')
localStorage.setItem('totalQs(Quizora)', totalQs.innerText)
// nextQuestion() is called in Start Listener

// Start Button Logic
// Audio Context shared variable
let audioCtx;

// Start Button Logic
btnStart.addEventListener('click', () => {
  startScreen.style.display = 'none';

  // Show Quiz Elements
  if (document.getElementById('quiz-interface')) document.getElementById('quiz-interface').style.display = 'block';
  if (document.getElementById('qs-count')) document.getElementById('qs-count').style.display = 'block';
  if (document.getElementById('timer-bg')) document.getElementById('timer-bg').style.display = 'block';
  if (document.getElementById('options-container-bg')) document.getElementById('options-container-bg').style.display = 'block';
  if (document.getElementById('quiz-footer')) document.getElementById('quiz-footer').style.display = 'flex';

  // Initialize Audio
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (AudioContext) {
    audioCtx = new AudioContext();
  }

  nextQuestion();
});

// Initialize volume icon without starting quiz
volumeIcon.addEventListener('click', (e) => {
  const path = volumeIcon.querySelector('path');
  if (isVolumeUp) {
    path.setAttribute('d', volMutePath);
    isVolumeUp = false;
  } else {
    path.setAttribute('d', volUpPath);
    isVolumeUp = true;
  }
})

playOrPauseBtn.addEventListener('click', (e) => {
  const path = playOrPauseBtn.querySelector('path');
  const isPlaying = path.getAttribute('d') === pausePath;

  if (isPlaying) {
    path.setAttribute('d', playPath);
    clearInterval(updateTimerInterval);
    updateTimerInterval = null;

    const optionsWithAnyClass = optionsContainerList
      .map((container, i) => {
        if (container.classList.contains('correct'))
          return { optionIndex: i, className: 'correct' }
        if (container.classList.contains('wrong'))
          return { optionIndex: i, className: 'wrong' }
      })
      .filter((option) => option !== undefined)

    pauseState = {
      time: time.innerText,
      qsNo: index - 1,
      classOnBody: body.classList[0] ? body.classList[0] : '',
      classOnOptions: optionsWithAnyClass.length ? optionsWithAnyClass : '',
      correctAnsGiven: correctAnsGiven,
    }
    localStorage.setItem('pauseState(Quizora)', JSON.stringify(pauseState))

    optionsContainerList.forEach((option) => {
      option.style.pointerEvents = 'none'
    })

    if (index === totalQuestionsCount)
      btnSeeYourResult.classList.remove('enable')
    else btnNext.classList.remove('enable')

  } else {
    path.setAttribute('d', pausePath);
    localStorage.removeItem('pauseState(Quizora)')

    const hasAnswerShown = optionsContainerList.some((option) => {
      return (
        option.classList.contains('correct') ||
        option.classList.contains('wrong')
      )
    })

    if (!hasAnswerShown) {
      updateTimerInterval = setInterval(runTimer, 1000)
      optionsContainerList.forEach((option) => {
        option.style.pointerEvents = 'auto'
      })
    } else {
      if (index === totalQuestionsCount)
        btnSeeYourResult.classList.add('enable')
      else btnNext.classList.add('enable')

      optionsContainerList.forEach((option) => {
        option.style.pointerEvents = 'none'
      })
    }
  }
})

optionsContainerList.forEach((optionContainer, i) => {
  optionContainer.addEventListener('click', () => {
    answerIndex = questions[index - 1].answerIndex
    if (i === answerIndex) {
      optionContainer.classList.add('correct')
      playSound(true);
      correctAnsGiven++
    } else {
      optionContainer.classList.add('wrong')
      optionsContainerList[answerIndex].classList.add('correct')
      playSound(false);
    }
    optionsContainerList.forEach(
      (optionContainer) => (optionContainer.style.pointerEvents = 'none')
    )

    if (index === totalQuestionsCount) {
      btnSeeYourResult.classList.add('enable')
    }
    clearInterval(updateTimerInterval)
    updateTimerInterval = null
    btnNext.classList.add('enable')
  })
})

function playSound(isCorrect) {
  if (!isVolumeUp || !audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (isCorrect) {
    // High pitched ding for correct
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.5);
  } else {
    // Low buzzing sound for wrong
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.3);
  }
}


btnNext.addEventListener('click', () => {
  nextQuestion()
})

btnSeeYourResult.addEventListener('click', () => {
  resultScore.innerText = `${correctAnsGiven} / ${totalQuestionsCount}`;
  resultModal.classList.add('show');
})

function nextQuestion() {
  if (index < totalQuestionsCount) {
    clearInterval(updateTimerInterval)
    updateTimerInterval = null
    answerIndex = null
    questionText.innerText = questions[index].question
    optionsTextList.forEach((option, i) => {
      option.innerText = questions[index].options[i]
    })
    index = index + 1
    qsAnswered.innerText = String(index).padStart('2', '0')

    if (!pauseStateStored) {
      btnNext.classList.remove('enable')
      time.innerText = 30
      body.classList.remove('danger', 'warning')
      optionsContainerList.forEach((option) => {
        option.classList.remove('wrong', 'correct')
        option.style.pointerEvents = 'auto'
      })
    } else {
      time.innerText = pauseStateStored.time
      if (time.innerText === '0' || pauseStateStored.classOnOptions)
        btnNext.classList.add('enable')
      if (pauseStateStored.classOnBody)
        body.classList.add(pauseStateStored.classOnBody)

      if (pauseStateStored.classOnOptions) {
        pauseStateStored.classOnOptions.forEach((option) => {
          optionsContainerList[option.optionIndex].classList.add(
            option.className
          )
        })
        optionsContainerList.forEach(
          (option) => (option.style.pointerEvents = 'none')
        )
        if (index === totalQuestionsCount) btnSeeYourResult.classList.add('enable')
      }
    }

    if (!pauseStateStored?.classOnOptions) {
      updateTimerInterval = setInterval(runTimer, 1000)
    }

    if (index === totalQuestionsCount) {
      btnNext.style.display = 'none';
    } else {
      btnNext.style.display = 'block';
    }

    pauseStateStored = null
  }
}

function runTimer() {
  if (parseInt(time.innerText) > 0) {
    const newTime = parseInt(time.innerText) - 1
    time.innerText = String(newTime).padStart('2', '0')
    body.classList.remove('warning')
    if (newTime <= 5) body.classList.add('danger')
    else if (newTime <= 15) body.classList.add('warning')

    if (parseInt(time.innerText) === 0) {
      btnNext.classList.add('enable')
    }
  } else {
    clearInterval(updateTimerInterval)
    updateTimerInterval = null
    optionsContainerList.forEach((option) => {
      option.style.pointerEvents = 'none'
    })

    const isAnsGiver = optionsContainerList.some(
      (option) =>
        option.classList.contains('correct') ||
        option.classList.contains('wrong')
    )
    answerIndex = questions[index - 1].answerIndex
    if (!isAnsGiver) {
      optionsContainerList[answerIndex].classList.add('correct')
    }

    if (index === totalQuestionsCount) {
      btnSeeYourResult.classList.add('enable')
    }
  }
}
