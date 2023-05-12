let textLevel = document.getElementById("level");

// Initialise le jeu
let numberLevel = parseInt(localStorage.getItem('numberLevel'));

if (isNaN(numberLevel)) {
  numberLevel = 1;
  localStorage.setItem('numberLevel', numberLevel);
}

//Cherche s'il y a des données pour le niveau actuel sinon il en stocke des null
let dataLevel = `level${numberLevel}Data`
setData();
localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));


//fait apparaître le nombre du niveau sur la page
textLevel.innerHTML = numberLevel;

//fin du niveau et chargement du niveau suivant
function endLevel() {

  window[dataLevel] = JSON.parse(localStorage.getItem(`level${numberLevel}Data`));

  if (window[dataLevel].dataTime == null && window[dataLevel].dataCountClick == null) {
    window[dataLevel] = {
      dataTime: time,
      dataCountClick: countClick
    };
    localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));
    console.log("New data set");
  }
  else if (window[dataLevel].dataTime >= time && window[dataLevel].dataCountClick >= countClick){
    console.log("Nouveau record");
    window[dataLevel] = {
      dataTime: time,
      dataCountClick: countClick
    };
    localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));
  }
  else {
    console.log("Votre temps n'est pas aussi bon qu'avant");
  }

  numberLevel += 1;
  localStorage.setItem('numberLevel', numberLevel);
  textLevel.innerHTML = numberLevel;
  countClick = 0;
  time = 0;
  isGameOver = false;
  document.getElementById("nextLevel").style.display = "none";
  usedImages = [];
  loadRandomImages();
}

function setData() {
  window[dataLevel] = JSON.parse(localStorage.getItem(`level${numberLevel}Data`));

  if (!window[dataLevel]) {
    window[dataLevel] = {
      dataTime: null,
      dataCountClick: null
    };
}
  console.log(window[dataLevel]);
}
