# Login / Sign up con Tailwind CSS v4

Un Login / Sign up solo visual desarrollada con HTML, JavaScript y Tailwind CSS v4.

## Requisitos Previos

- Node.js instalado en tu sistema
- npm (viene incluido con Node.js)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Navega a la carpeta del proyecto

```bash
cd LoginTw
```

### 2. Inicializa npm

```bash
npm init -y
```

### 3. Instala Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/cli
```

### 4. Crea la estructura de CSS

Crea una carpeta `css` y dentro de ella un archivo `styles.css`:

```bash
cd css
```

Crea el archivo `styles.css` con el siguiente contenido:

```css
@import "tailwindcss";
```

### 5. Compila Tailwind CSS

Regresa a la carpeta raíz del proyecto y ejecuta:

```bash
npx @tailwindcss/cli -i css/styles.css -o css/output.css --watch
```

### 6. Abre el proyecto

Abre el archivo `index.html` en tu navegador y ¡listo! La calculadora estará funcionando.

## Estructura del Proyecto
Asi deberia quedar tu proyecto:

```
LoginTw/
│
├── css/
│   ├── styles.css      # Archivo fuente de Tailwind
│   └── output.css      # Archivo compilado (generado automáticamente)
│
├── js/
│   └── script.js      
│
├── index.html          # Estructura HTML
├── package.json        # Dependencias del proyecto
└── README.md           # Este archivo
```

## Tecnologías

- HTML5
- CSS3 (Tailwind CSS v4)
- JavaScript vanilla

---

Desarrollado como práctica de Tailwind CSS v4