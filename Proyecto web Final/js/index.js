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

    // Deshabilitar los botones cuando no se pueden usar
    document.querySelector('.prev-button').disabled = currentIndex === 0;
    document.querySelector('.next-button').disabled = currentIndex === numCityCards - 1;

    const offset = -currentIndex * 150; // 300px es el nuevo ancho de cada cuadro
    slider.style.transform = `translateX(${offset}px)`;
}


//
// Esta función agrega una nueva habitación al contenedor
//function addRoom(imageSrc, roomName, rating, price) {
 //   const container = document.querySelector('.container');
  //  const newRoom = document.createElement('div');
  //  newRoom.className = 'room';
  //  newRoom.innerHTML = `
  //      <img src="${imageSrc}" alt="${roomName}">
  //      <h2>${roomName}</h2>
  //      <p>Calificación: ${rating}</p>
   //     <p>Precio: $${price}</p>
  //  `;
  //  container.appendChild(newRoom);
//}

// Ejemplo de cómo agregar una nueva habitación
//addRoom('imagen3.jpg', 'Nombre de la Habitación 3', 4.0, 150);//