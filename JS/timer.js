//timer
let time = 0;
const timerElement = document.getElementById("timer");
let isGameOver = false;


function addTime(params) {
  timerElement.innerText = time;
  time++;
}

setInterval(() => {

  if(!isGameOver) {
    addTime();
  }
}
, 1000);
