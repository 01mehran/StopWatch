"use strict";

// Selecting Elements;
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const resetButton = document.querySelector("#reset-button");

const display__hour = document.querySelector("#display__hour");
const display__minute = document.querySelector("#display__minute");
const display__second = document.querySelector("#display__second");
const display__millisecond = document.querySelector("#display__millisecond");

let [milseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

function stopWatch() {
  milseconds++;
  if (milseconds === 99) {
    milseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  display__hour.innerHTML = hours < 10 ? `0${hours}` : hours;
  display__minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  display__second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  display__millisecond.innerHTML =
    milseconds < 10 ? `0${milseconds}` : milseconds;
}

function start() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  [milseconds, seconds, minutes, hours] = [0, 0, 0, 0];

  clearInterval(timer);

  display__hour.innerHTML = `0${hours}`;
  display__minute.innerHTML = `0${minutes}`;
  display__second.innerHTML = `0${seconds}`;
  display__millisecond.innerHTML = `0${milseconds}`;
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
