// chercher le niveau
// trouver le nombre
let level = 1;
let textLevel = document.getElementById("level");

//initialisation du nombre de niveaux disponibles dans les menus
if ('level' in localStorage) {
  level = parseInt(localStorage.getItem('level'));
} else {
  localStorage.setItem('level', level);
}
textLevel.innerHTML = level;


function nextLevel() {
  parseInt(localStorage.setItem('countClick', countClick));
  parseInt(localStorage.setItem('countClick', countClick));
  level += 1;
  localStorage.setItem('level', level);
  textLevel.innerHTML = level;
  countClick = 0;
  time = 0;
  isGameOver = false;
  usedImages = [];
  loadRandomImages();
}
