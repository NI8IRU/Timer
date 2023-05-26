var timerInterval;
var seconds = 0;
var isTimerRunning = false;
var redBackground = 100;
var checkSeconds = false;

function toggleTimer() {
  if (isTimerRunning) {
    stopTimer();
        var status = document.getElementById("Start/Stop");
    status.textContent = "Start"
  } else {
    startTimer();
    var status = document.getElementById("Start/Stop");
    status.textContent = "Stop"
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  isTimerRunning = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  seconds = 0;
  updateTimer();
  resetContainerBackground();
}

function updateTimer() {
  var timerElement = document.getElementById("timer");
  var container = document.querySelector(".container");
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var timeString = formatTime(minutes) + ":" + formatTime(remainingSeconds);
  timerElement.textContent = timeString;
 if (minutes >= redBackground) {
    if (!checkSeconds) {
      container.classList.add("red");
    } else {
      if (remainingSeconds >= 30) {
        container.classList.add("red");
      }
    }
  }
  seconds++;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function resetContainerBackground() {
  var container = document.querySelector(".container");
  container.classList.remove("red");
}

function red2min() {
  redBackground = 2;
  checkSeconds = false;
}

function red1min() {
  redBackground = 1;
  checkSeconds = false;
}

function red130min() {
  redBackground = 1;
  checkSeconds = true;
}

function red030min() {
  redBackground = 0;
  checkSeconds = true;
}