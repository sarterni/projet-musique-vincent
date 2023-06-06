window.addEventListener('load', function () {
    console.log('All assets are loaded')

    // sources[i] est le nom du fichier image de l'image numero i

    
    // q: Passe à l'image suivante au bout de 5 secondes
    let images = new Array('guitar-756326.jpg', 'diapo1.jpg', 'diapo2.jpg', 'diapo3.jpg', 'diapo4.jpg');
    let i = 0;
    let diapo = document.getElementById('img');
    let timer = setInterval(function () {
        diapo.src = 'img/diapo/' + images[i];
        i++;
        if (i == images.length) i = 0;
    }, 5000);

    let text = new Array('guitar-756326.jpg', 'diapo1.jpg', 'diapo2.jpg', 'diapo3.jpg', 'diapo4.jpg');
    let textDiapo = document.getElementById('places');
    let timerText = setInterval(function () {
        textDiapo.innerHTML = text[i];
        i++;
        if (i == text.length) i = 0;
    }, 5000);
    
});









