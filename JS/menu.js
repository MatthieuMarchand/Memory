
let completedLevels = localStorage.length - 1;

for (let i = 1; i <= completedLevels; i++) {
  let bouton = document.getElementById(`boutonNiveau${i}`);
  let textScoreLevel = document.getElementById(`levelStat${i}`);
  console.log(textScoreLevel);
  let dataLevel = JSON.parse(localStorage.getItem(`level${i}Data`));
  let levelTime = dataLevel.dataTime;
  let levelClicks = dataLevel.dataCountClick;
  console.log(levelClicks);
  textScoreLevel.textContent = `Time : ${levelTime} Number of clicks : ${levelClicks}`;
  bouton.style.pointerEvents = "all";
  bouton.style.opacity = "100%"
}

function play(buttonId) {
  numberLevel = parseInt(buttonId.slice(-1));
  localStorage.setItem('numberLevel', numberLevel);
}
