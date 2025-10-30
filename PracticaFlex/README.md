# Práctica Flexbox

Este repositorio corresponde al desarrollo de la tarea **"Ejercicios con Flexbox"**.  
La actividad consistía en tomar los códigos base de los ejercicios de la [pagina](https://webdesign.tutsplus.com/es/exercises-in-flexbox-simple-web-components--cms-28049t) y posteriormente realizar modificaciones agregando un toque creativo propio.

### Objetivo
Practicar la aplicación de **HTML y CSS** para la creación de interfaces simples y reforzar viejos conocimientos mediante clases y selectores específicos.

 ---

## Aporte creativo

### 📂 ListaUsuarios
En este ejercicio, partí de la lista básica de usuarios con Flexbox y realicé varias modificaciones para enriquecer la experiencia visual e interactiva:

- Reorganicé cada `list-item` con **Flexbox en columna** (`flex-direction: column; align-items: center;`), lo que permitió centrar la foto, la etiqueta de estado y las acciones.  
- Añadí un sistema de **estado de conexión** mediante las etiquetas `.online` y `.offline`, estilizadas con colores (verdes para online y grises para offline), simulando la lógica de disponibilidad de un chat.  
- Incorporé una sección de **acciones rápidas** (`.list-item__acciones`) con botones de *Mensaje* y *Llamar*, distribuidos con `display: flex` y `gap`, y con efectos `:hover` distintos dependiendo si el usuario está en línea o no (desactivando los botones con `cursor: not-allowed`).  
- Apliqué un efecto visual al `list-item:hover` con `transform: scale()` y `box-shadow`, para dar sensación de tarjeta interactiva.  

Con estas mejoras, la lista pasó de ser un componente estático a parecer un **módulo de contactos de una app real**, combinando Flexbox con interactividad y estados visuales.


### 📂 Sidebar
En este ejercicio, partí de la barra lateral original y realicé las siguientes modificaciones aplicando **propiedades de Flexbox**:

- Reestructuré la navegación para ubicar los ítems en la parte inferior utilizando `display: flex`, `justify-content: space-around` y `position: absolute; bottom: 0;`, simulando un **menú de aplicación móvil**.  
- Reemplacé el encabezado por **“Tu perfil”** y lo centré con Flexbox, manteniendo una jerarquía visual clara.  
- Añadí un **mensaje adicional debajo de la foto de perfil** con la clase `.sidebar__texto`, alineado y centrado con `margin` y `text-align: center`.  
- Incorporé una **biografía corta debajo del nombre** con la clase `.sidebar__bio`, aplicando espaciados controlados (`margin` y `padding`) para un layout más ordenado.  
- Implementé **interacciones con Flexbox y CSS**:  
  - Los ítems del menú responden con `:hover`, cambiando de color y ampliando ligeramente los íconos mediante `transform: scale()`.  
  - La foto de perfil también responde al hover con una **rotación ligera y escalado**, reforzando la interactividad del componente.  

De esta forma, el ejercicio no solo conserva la estructura original del sidebar, sino que lo adapta a un diseño más moderno, funcional y responsive, demostrando el uso de Flexbox para la organización de cada bloque.

---

## 📂 Estructura del repositorio
- `ListaUsuarios/` → Ejercicio con lista de usuarios en Flexbox.  
- `Sidebar/` → Ejercicio de barra lateral con Flexbox.  
- `README.md` → Este documento.  

### Etiquetas
![HTML5](https://img.shields.io/badge/HTML5-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---
## Autor 

* **Victor Cordoba** - *Creador y desarrollador principal* - [VoctorX](https://github.com/VoctorX)

## Fecha 
* *Octubre 06 del 2025*