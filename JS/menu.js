
let completedLevels = localStorage.length - 1;

for (let i = 1; i <= completedLevels; i++) {
  let bouton = document.getElementById(`boutonNiveau${i}`);
  bouton.style.pointerEvents = "all";
  bouton.style.opacity = "100%"
}

function play(buttonId) {
  numberLevel = parseInt(buttonId.slice(-1));
  localStorage.setItem('numberLevel', numberLevel);
}
