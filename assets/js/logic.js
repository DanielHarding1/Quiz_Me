const startScreen = document.getElementById("start-screen");
const questionsDiv = document.getElementById("questions");
var timer = document.getElementById("time");
var seconds = 60;

// Get a reference to the "Start Quiz" button
const startButton = document.getElementById("start");

// Add an event listener to the "Start Quiz" button
// startButton.addEventListener;
// "click", setTimer();
startButton.addEventListener("click", startquiz);

startButton.addEventListener("click", setTimer);

function startquiz() {
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
