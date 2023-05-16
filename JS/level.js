// Initialise le jeu
let textLevel = document.getElementById("level");
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

  if (window[dataLevel] == null) {
    window[dataLevel] = {
      dataTime: time - 1,
      dataCountClick: countClick,
      dataClickScore: clickScore
    };
    localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));
  }
  else if (window[dataLevel].dataTime == null && window[dataLevel].dataCountClick == null) {
    window[dataLevel] = {
      dataTime: time - 1,
      dataCountClick: countClick,
      dataClickScore: clickScore
    };
    localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));
    console.log("New data set");
  }
  else if (window[dataLevel].dataTime >= time && window[dataLevel].dataCountClick >= countClick){
    console.log("Nouveau record");
    window[dataLevel] = {
      dataTime: time - 1,
      dataCountClick: countClick,
      dataClickScore: clickScore
    };
    localStorage.setItem(`level${numberLevel}Data`, JSON.stringify(window[dataLevel]));
  }
  else {
    console.log("Votre temps n'est pas aussi bon qu'avant");
  }

  numberLevel += 1;
  localStorage.setItem('numberLevel', numberLevel);
  textLevel.innerHTML = numberLevel;
  isGameOver = false;
  document.getElementById("nextLevel").style.display = "none";
  usedImages = [];
  matchedCards = [];
  loadRandomImages();
  minNumClicks = numImagesPairs * 4 - 2;
  maxNumClicks = minNumClicks * 2;
  time = 0;
  countClick = 0;
  elementCountClick.innerHTML = countClick;
}

//Pour initialiser les datas
function setData() {
  window[dataLevel] = JSON.parse(localStorage.getItem(`level${numberLevel}Data`));

  if (!window[dataLevel]) {
    window[dataLevel] = {
      dataTime: null,
      dataCountClick: null,
      dataClickScore: null
    };
}
  console.log(window[dataLevel]);
}
