const timeDisplay = document.querySelector(".stopwatch-time");
const startBtn = document.querySelector(".stopwatch-start");
const pauseBtn = document.querySelector(".stopwatch-pause");
const resetBtn = document.querySelector(".stopwatch-reset");

let startTime;
let pauseTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
  pauseTime = Date.now();
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00';
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime - minutes * 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime - minutes * 60000 - seconds * 1000) / 10);

  timeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
