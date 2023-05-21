const loader = document.getElementById('loader');

window.addEventListener('load', () => {
    setTimeout(function() {
        loader.classList.add('fonduOut');

        setTimeout(function() {
            loader.style.display = "none";
        }, 600);
    }, 2200);
})