let level = 1;
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
            images = images.concat(images);
            initGame();
        })
            .catch(error => {
            console.log('Une erreur s\'est produite lors du chargement des images:', error);
        });
}

loadRandomImages();
