// Seleccionamos todos los botones
const botones = document.querySelectorAll("button");
const carrito = [];

// Recorremos cada botón y le ponemos un evento de clic
botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        // Obtenemos el nombre del producto desde el figcaption
        const producto = boton.parentElement.querySelector("figcaption").textContent;

        // Lo añadimos al carrito
        carrito.push(producto);

        // Mostramos en consola el carrito actualizado
        console.log("Carrito:", carrito);

        // Mostramos un mensaje visual al usuario
        alert(`Has añadido: ${producto}`);
    });
});
