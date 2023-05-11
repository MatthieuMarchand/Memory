// chercher le niveau
// trouver le nombre

let level = 1;
var actualLevel = document.getElementById("level");
actualLevel.innerHTML = 1;


function nextLevel() {
  level += 1;
  actualLevel.innerHTML = level;
  countClick = 0;
  time = 0;
  isGameOver = false;
  usedImages = [];
  loadRandomImages();
}
