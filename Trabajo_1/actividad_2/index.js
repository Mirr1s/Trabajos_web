let intervalId;
let running = false;
let tiempo = 0;

// Elementos DOM
const cronometro = document.getElementById("cronometro");
const iniciarBtn = document.getElementById("iniciar/Continuar");
const detenerBtn = document.getElementById("detener");
const reiniciarBtn = document.getElementById("reiniciar");

// Función actualización del cronómetro
function actualizarCronometro() {
    const horas = Math.floor(tiempo / 3600);
    const minutos = Math.floor((tiempo % 3600) / 60);
    const segundos = tiempo % 60;
    // Actualiza el contenido del cronometro con el tiempo formateado en HH:MM:SS
    cronometro.textContent = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

// Event Listener para el botón "Iniciar"
iniciarBtn.addEventListener("click", function () {
    if (!running) {
        intervalId = setInterval(function () {
            tiempo++;
            actualizarCronometro();
        }, 1000);
        running = true; // Cronómetro en ejecución
    }
});
// Event Listener para el botón "Detener"
// Si está en ejecución, detiene el intervalo y marca el cronómetro como detenido
detenerBtn.addEventListener("click", function () {
    if (running) {
        clearInterval(intervalId);
        running = false;
    }
});

// Event Listener para el botón "Reiniciar"
reiniciarBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    tiempo = 0;
    actualizarCronometro();
    running = false;// Cronómetro como detenido
});