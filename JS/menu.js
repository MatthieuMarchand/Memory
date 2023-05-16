let completedLevels = localStorage.length - 1;

const levelButtons = document.getElementById('levelButtons');

for (let i = 1; i < numberLevel + 1; i++) {
    levelButtons.innerHTML += `
        <a id ="boutonNiveau${i}" href="game.html" class="boutonNiveau" onclick="play(this.id)"><button>niveau ${i}</button></a>
        <p id="levelStat${i}"></p>
    `;
}

for (let i = 1; i <= completedLevels; i++) {
  let bouton = document.getElementById(`boutonNiveau${i}`);
  let textScoreLevel = document.getElementById(`levelStat${i}`);
  let dataLevel = JSON.parse(localStorage.getItem(`level${i}Data`));
  let levelTime = dataLevel.dataTime;
  let levelClicks = dataLevel.dataCountClick;
  if (levelTime || levelClicks != null) {
    textScoreLevel.textContent = `Time : ${levelTime} Number of clicks : ${levelClicks}`;
  }
  else {
    textScoreLevel.innerHTML = "Jouez pour établir un score !";
  }

  bouton.style.pointerEvents = "all";
  bouton.style.opacity = "100%"
}

function play(buttonId) {
  numberLevel = parseInt(buttonId.slice(-1));
  localStorage.setItem('numberLevel', numberLevel);
}
