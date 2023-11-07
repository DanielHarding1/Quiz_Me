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
      questionTitle.innerHTML = "";
      choicesContainer.innerHTML = "";
    }
  }, 1000);
}

function updateQuestions() {
  if (currentQuestionIndex < newQuestions.length) {
    var currentQuestion = newQuestions[currentQuestionIndex];
    choicesContainer.innerHTML = "";

    questionTitle.textContent = currentQuestion.question;
    questionsDiv.appendChild(questionTitle);

    currentQuestion.answers.forEach((answers) => {
      var questionbtn = document.createElement("button");

      if (answers === currentQuestion.correctAnswer) {
        questionbtn.setAttribute("data-iscorrect", "true");
      } else if (answers != currentQuestion.correctAnswer) {
        questionbtn.setAttribute("data-iscorrect", "false");
      }

      questionbtn.textContent = answers;
      choicesContainer.appendChild(questionbtn);
      console.log(currentQuestion);

      questionbtn.addEventListener("click", answerClick);
      choicesContainer.appendChild(questionbtn);
    });
  }
}

function answerClick(event) {
  if (event.target.dataset.iscorrect === "true") {
    score++;
  } else {
    seconds = seconds - 10;
  }

  currentQuestionIndex++;
  updateQuestions();
}
updateQuestions();

//when the game ends, show the enter the intials div
// get the users score and initals and make an object out of it
//read the high scores from local storage and add the new object to it
