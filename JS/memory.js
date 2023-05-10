let colorBackCard = `#999`;

const elementCountClick = document.getElementById("elementCountClick");
let countClick = 0;

function functionCountClick() {
    countClick ++;
    elementCountClick.innerHTML = countClick;
}

let openedCards = []; // Tableau pour stocker les cartes ouvertes
let matchedCards = []; // Tableau pour stocker les cartes correspondantes

// Fonction pour initialiser le jeu
function initGame() {
    const board = document.getElementById('memory-board');

    // Mélanger les icônes
    const shuffledImages = shuffle(images);

    // Générer les cartes
    shuffledImages.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="${image}">`;
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

// Fonction pour retourner une carte
function flipCard() {
    if (openedCards.length < 2 && !this.classList.contains('open')) {
        functionCountClick();
        this.classList.add('open');
        openedCards.push(this);

        const imageName = this.querySelector('i').className;
        this.style.background = `${imageName}`;

        if (openedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Fonction pour vérifier si les cartes sont identiques
function checkMatch() {
    const card1 = openedCards[0];
    const card2 = openedCards[1];

    if (card1.innerHTML === card2.innerHTML) {
        card1.classList.add('match');
        card2.classList.add('match');
        matchedCards.push(card1, card2);
    } else {
        card1.classList.remove('open');
        card1.style.background = colorBackCard;
        card2.classList.remove('open');
        card2.style.background = colorBackCard;
    }

    openedCards = [];

    if (matchedCards.length === images.length) {
        setTimeout(() => {
            isGameOver = true;
            alert(`Félicitations ! Vous avez gagné en : ${time - 1} secondes`);
        }, 500);
    }
}

// Fonction pour mélanger un tableau
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Initialiser le jeu au chargement de la page
initGame();
