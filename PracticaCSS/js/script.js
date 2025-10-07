// script.js
const carrusel = document.querySelector(".carrusel-img");
const imgs = document.querySelectorAll(".carrusel-img img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Función para mover el carrusel
function mostrarImagen() {
    carrusel.style.transform = `translateX(${-index * 100}%)`;
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
    index++;
    if (index >= imgs.length) {
        index = 0; // vuelve al inicio
    }
    mostrarImagen();
});

// Botón anterior
prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = imgs.length - 1; // salta a la última
    }
    mostrarImagen();
});

// Opcional: auto-slide cada 4s
setInterval(() => {
    index++;
    if (index >= imgs.length) {
        index = 0;
    }
    mostrarImagen();
}, 10000);
