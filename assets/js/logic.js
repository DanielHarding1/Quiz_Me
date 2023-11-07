const startScreen = document.getElementById("start-screen");
const questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var timer = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var seconds = 60;
var currentQuestionIndex = 0;
var score = 0;

// Get a reference to the "Start Quiz" button
const startButton = document.getElementById("start");

// Add an event listener to the "Start Quiz" button
// startButton.addEventListener;
// "click", setTimer();
startButton.addEventListener("click", startQuiz);

startButton.addEventListener("click", setTimer);

function startQuiz() {
  startScreen.style.display = "none";
  questionsDiv.style.display = "block";
}

function setTimer() {
  var timeInterval = setInterval(function () {
    timer.textContent = seconds;
    seconds--;

    if (seconds === 0) {
      clearInterval(timeInterval);
      timer.textContent = seconds;
    }
  }, 1000);
}

function updateQuestions() {
  if (currentQuestionIndex < newQuestions.length) {
    var currentQuestion = newQuestions[currentQuestionIndex];

    questionTitle.textContent = currentQuestion.question;
    questionsDiv.appendChild(questionTitle);

    currentQuestion.answers.forEach((answers) => {
      var questionbtn = document.createElement("button");
      questionbtn.textContent = answers;
      if (answers === currentQuestion.correctAnswer) {
        questionbtn.className = "correct";
      }
      questionbutton.addEventListener("click", answerClick);
      choicesContainer.appendChild(button);
    });
  } else {
    endScreen.style.display = "show";
  }
}

function answerClick(event) {
  if (event.target.classList.contains("correct")) {
    score++;
  }

  currentQuestionIndex++;
  updateQuestions();
}
