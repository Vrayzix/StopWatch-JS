let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");

let audio = new Audio("start-sound.mp3");
var Interval;
startButton.onclick = function () {
  if(tensCount <= 0 && secondsCount <= 0 && minutesCount <= 0){
    audio.play();
  }
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};
stopButton.onclick = function () {
  StopTimer();
};
resetButton.onclick = function () {
  ResetTimer();
};

let tensCount = 0;
let secondsCount = 0;
let minutesCount = 0;

function startTimer() {
  tensCount++;
  if (tensCount <= 9) {
    document.getElementById("tens").innerHTML = "0" + tensCount;
  }
  if (tensCount > 9) {
    document.getElementById("tens").innerHTML = tensCount;
  }
  if (tensCount > 99) {
    secondsCount++;
    tensCount = 0;
    document.getElementById("seconds").innerHTML = "0" + secondsCount;
    document.getElementById("tens").innerHTML = "00";
    // alert("stop");
  }
  if (secondsCount > 9) {
    document.getElementById("seconds").innerHTML = secondsCount;
  }
  if (secondsCount >= 60) {
    secondsCount = 0;
    minutesCount++;
    document.getElementById("seconds").innerHTML = "0" + secondsCount;
    document.getElementById("minutes").innerHTML = "0" + minutesCount;
  }
  if(minutesCount > 9){
    document.getElementById("minutes").innerHTML = minutesCount;
  }
}
function StopTimer() {
  clearInterval(Interval);
}
function ResetTimer() {
  tensCount = 0;
  secondsCount = 0;
  document.getElementById("tens").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  clearInterval(Interval);
}
