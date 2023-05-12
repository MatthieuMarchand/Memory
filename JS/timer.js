const timerElement = document.getElementById("timer");
let time = 0;

function addTime() {
  timerElement.innerText = time;
  time++;
}

setInterval(() => {
  if(!isGameOver) {
    addTime();
  }
}
, 1000);