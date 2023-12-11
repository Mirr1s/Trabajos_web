const citySlider = document.getElementById('citySlider');
const roomSlider = document.getElementById('roomSlider');
const numCityCards = citySlider.querySelectorAll('.city-card').length;
const numRoomCards = roomSlider.querySelectorAll('.room-card').length;
let currentCityIndex = 0;
let currentRoomIndex = 0;

function moveSlider(direction, sliderId) {
    if (sliderId === 'citySlider') {
        currentCityIndex = updateIndex(currentCityIndex, direction, numCityCards);
        updateSlider(citySlider, currentCityIndex, numCityCards, 'city');
    } else if (sliderId === 'roomSlider') {
        currentRoomIndex = updateIndex(currentRoomIndex, direction, numRoomCards);
        updateSlider(roomSlider, currentRoomIndex, numRoomCards, 'room');
    }
}

function updateIndex(currentIndex, direction, numCards) {
    const newIndex = currentIndex + direction;
    if (newIndex < 0) {
        return 0;
    }
    if (newIndex >= numCards) {
        return numCards - 1;
    }
    return newIndex;
}

function updateSlider(slider, currentIndex, numCards, container) {
    const offset = -currentIndex * 250; // 250px es el ancho de cada tarjeta
    slider.style.transform = `translateX(${offset}px}`;
    updateNavButtons(slider, currentIndex, numCards, container);
}

function updateNavButtons(slider, currentIndex, numCards, container) {
    const prevButton = document.querySelector(`.prev-button-${container}`);
    const nextButton = document.querySelector(`.next-button-${container}`);

    if (currentIndex === 0) {
        prevButton.style.visibility = 'hidden';
    } else {
        prevButton.style.visibility = 'visible';
    }

    if (currentIndex === numCards - 1) {
        nextButton.style.visibility = 'hidden';
    } else {
        nextButton.style.visibility = 'visible';
    }
}
