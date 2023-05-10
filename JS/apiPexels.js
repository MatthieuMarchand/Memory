const apiKey = 'MXffOa6Yi5Ixi2IVwvGmkY2oUEsQ9MNh9PjFVLZ1zSUzjWtXCf6ytZy5';

function getRandomImage() {
    return fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${Math.floor(Math.random() * 100) + 1}`, {
        headers: {
            'Authorization': apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            return data.photos[0].src.large;
    })
        .catch(error => {
            console.log('Une erreur s\'est produite:', error);
    });
}