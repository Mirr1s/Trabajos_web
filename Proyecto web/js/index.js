const slider = document.querySelector('.slider');
const cityCards = document.querySelectorAll('.city-card');
const numCityCards = cityCards.length;
let currentIndex = 0;

function moveSlider(direction) {
    if (direction === 1) {
        if (currentIndex < numCityCards - 1) {
            currentIndex += 1;
        }
    } else if (direction === -1) {
        if (currentIndex > 0) {
            currentIndex -= 1;
        }
    }

    if (currentIndex === 0) {
        document.querySelector('.prev-button').style.visibility = 'hidden';
    } else {
        document.querySelector('.prev-button').style.visibility = 'visible';
    }

    if (currentIndex === numCityCards - 1) {
        document.querySelector('.next-button').style.visibility = 'hidden';
    } else {
        document.querySelector('.next-button').style.visibility = 'visible';
    }

    const offset = -currentIndex * 150; // 300px es el nuevo ancho de cada cuadro
    slider.style.transform = `translateX(${offset}px)`;
}