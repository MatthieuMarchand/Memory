let images = [];
let numImagesPairs;

function loadRandomImages() {
    let promises = [];
    numImagesPairs = numberLevel * 2 + 4;
    for (let i = 0; i < numImagesPairs; i++) {
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
