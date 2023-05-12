let isGameOver = false;

let openedCards = [];
let matchedCards = [];

// Fonction pour initialiser le jeu
function initGame() {
    const board = document.getElementById('memoryBoard');
    board.innerHTML = "";
    // Mélanger les icônes
    const shuffledImages = shuffle(images);

    // Générer les cartes
    shuffledImages.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <img src="${image}">
                <div class="reflection"></div>
                <div class="cover"></div>
        `;
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
        console.log(matchedCards);
    } else {
        card1.classList.remove('open');
        card2.classList.remove('open');
    }

    openedCards = [];

    if (matchedCards.length === images.length) {
        setTimeout(() => {
            clickScore = ((maxNumClicks - countClick) / (maxNumClicks - minNumClicks)) * 100;
            isGameOver = true;
            document.getElementById("nextLevel").style.display = "block";
            alert(`Tu as fini en ${time - 1} secondes et en ${countClick} click; Votre score est de ${clickScore.toFixed(0)}%`);
        }, 500);
    }
}

// Fonction pour mélanger les images
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
