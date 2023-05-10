const apiKey = 'MXffOa6Yi5Ixi2IVwvGmkY2oUEsQ9MNh9PjFVLZ1zSUzjWtXCf6ytZy5';

// Fonction pour récupérer une image aléatoire
function getRandomImage() {
  // Faites une requête GET à l'API Pexels pour obtenir une image aléatoire
  fetch(`https://api.pexels.com/v1/curated?per_page=1&page=${Math.floor(Math.random() * 100) + 1}`, {
    headers: {
        'Authorization': apiKey
    }
    })
        .then(response => response.json())
        .then(data => {
            // Récupérez l'URL de l'image
            const imageUrl = data.photos[0].src.large;

            // Affichez l'image sur votre page
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            document.body.appendChild(imageElement);

            console.log(data);
    })
        .catch(error => {
            console.log('Une erreur s\'est produite:', error);
    });
}

// Appelez la fonction pour obtenir une image aléatoire
getRandomImage();
