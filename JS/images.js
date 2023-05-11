let numImages = 4 + level * 2;

let images = [];

function loadRandomImages() {
    let promises = [];

    for (let i = 0; i < numImages; i++) {
        promises.push(getRandomImage());
    }

    Promise.all(promises)
        .then(results => {
            images = results;
            displayImages(); // Appel de la fonction pour afficher les images
        })
            .catch(error => {
            console.log('Une erreur s\'est produite lors du chargement des images:', error);
        });
}

function displayImages() {
    const grosseDiv = document.getElementById("grosseDiv");
    images.forEach(image => {
        const card = document.createElement('div');
        card.innerHTML = `<img src="${image}">`;
        grosseDiv.appendChild(card);
    });
}

loadRandomImages();
