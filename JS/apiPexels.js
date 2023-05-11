const apiKey = 'MXffOa6Yi5Ixi2IVwvGmkY2oUEsQ9MNh9PjFVLZ1zSUzjWtXCf6ytZy5';

let usedImages = [];

function getRandomImage() {
    return fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${Math.floor(Math.random() * 100) + 1}`, {
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const newImage = data.photos[0].src.large;
            if (usedImages.includes(newImage)) {
                return getRandomImage();
            } else {
                usedImages.push(newImage);
                return newImage;
            }
        })
        .catch(error => {
            console.log('Une erreur s\'est produite:', error);
        });
}