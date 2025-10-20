# 🎨 Proyecto Tailwind CSS - Ejemplos Visuales

Este proyecto contiene dos ejemplos de aplicaciones web desarrolladas con **Tailwind CSS** para demostrar el uso de clases utilitarias y diseño responsive.

## 📁 Estructura del Proyecto

```
TailwindPrueba/
├── node_modules/
├── package.json
├── package-lock.json
├── Login/
│   └── public/
│       ├── views/
│       │   └── css/
│       │       ├── styles.css
│       │       └── output.css
│       └── index.html
└── Calculadora/
    └── public/
        ├── views/
        │   └── css/
        │       ├── styles.css
        │       └── output.css
        └── index.html
```

---

## 🚀 Instalación

### 1. Clonar o descargar el proyecto

```bash
cd TailwindPrueba
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:
- `tailwindcss` - Framework CSS
- `@tailwindcss/cli` - CLI para compilar Tailwind

---

## ⚙️ Compilar CSS

### Para el Login:

```bash
npx @tailwindcss/cli -i ./Login/public/views/css/styles.css -o ./Login/public/views/css/output.css --watch
```

### Para la Calculadora:

```bash
npx @tailwindcss/cli -i ./Calculadora/public/views/css/styles.css -o ./Calculadora/public/views/css/output.css --watch
```

El flag `--watch` mantiene el proceso activo y regenera el CSS automáticamente cuando detecta cambios.

---

## 📋 Ejemplos Incluidos

### 1️⃣ Login / Registro

**Ubicación:** `Login/public/index.html`

**Características:**
- ✅ Formulario de inicio de sesión
- ✅ Formulario de registro
- ✅ Botones tipo "píldora" para cambiar entre formularios
- ✅ Validación visual con efectos focus
- ✅ Animaciones hover en botones
- ✅ Diseño responsive
- ✅ Fondo con gradiente

**Tecnologías:**
- HTML5
- Tailwind CSS
- JavaScript (Vanilla)

**Funcionalidades:**
- Cambio dinámico entre Login y Signup
- Efectos de transición suaves
- Formularios con campos validados

---

### 2️⃣ Calculadora

**Ubicación:** `Calculadora/public/index.html`

**Características:**
- ✅ Calculadora completamente funcional
- ✅ Operaciones: suma, resta, multiplicación, división, módulo
- ✅ Soporte para decimales
- ✅ Pantalla dual (operación anterior y actual)
- ✅ Botones AC (limpiar todo) y DEL (borrar último)
- ✅ Diseño moderno tipo iPhone
- ✅ Animaciones en botones (hover y active)

**Tecnologías:**
- HTML5
- Tailwind CSS
- JavaScript (POO - Programación Orientada a Objetos)

**Funcionalidades:**
- Clase `Calculator` con métodos:
  - `clear()` - Limpia todo
  - `delete()` - Borra último dígito
  - `appendNumber()` - Agrega números
  - `chooseOperation()` - Selecciona operación
  - `compute()` - Calcula resultado
  - `updateDisplay()` - Actualiza pantalla

---

## 🎨 Clases de Tailwind Utilizadas

### Layout y Flexbox:
- `flex`, `items-center`, `justify-center`
- `grid`, `grid-cols-4`
- `max-w-md`, `max-w-sm`
- `w-full`, `h-full`

### Espaciado:
- `p-4`, `p-6`, `p-8` (padding)
- `m-4`, `mb-6` (margin)
- `space-y-4`, `space-y-5` (espaciado vertical)
- `gap-3` (gap en grid)

### Colores y Fondos:
- `bg-blue-600`, `bg-gray-700`, `bg-orange-500`
- `text-white`, `text-gray-600`
- `bg-gradient-to-br` (gradientes)

### Bordes y Sombras:
- `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`
- `shadow-lg`, `shadow-2xl`
- `border`, `border-gray-300`

### Efectos Interactivos:
- `hover:bg-blue-700`
- `focus:ring-2`, `focus:ring-blue-500`
- `transition`
- `transform`, `hover:scale-105`, `active:scale-95`

### Tipografía:
- `text-sm`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- `font-semibold`, `font-bold`

### Responsive:
- `md:flex-row` (desktop)
- `md:text-xl` (texto más grande en pantallas medianas)

---

## 🌐 Visualizar los Proyectos

### Opción 1: Abrir directamente
- Navega a `Login/public/index.html` o `Calculadora/public/index.html`
- Abre con tu navegador

### Opción 2: Live Server (VS Code)
1. Instala la extensión **Live Server**
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## 📚 Recursos de Aprendizaje

- **Documentación oficial de Tailwind:** https://tailwindcss.com/docs
- **Componentes de ejemplo:** https://tailwindui.com/components
- **Playground interactivo:** https://play.tailwindcss.com/

---

## 🛠️ Personalización

### Cambiar colores:
```html
<!-- De azul a rojo -->
<button class="bg-blue-600 hover:bg-blue-700">
<!-- Cambiar a: -->
<button class="bg-red-600 hover:bg-red-700">
```

### Cambiar tamaños:
```html
<!-- Texto más grande -->
<h1 class="text-3xl"> → <h1 class="text-5xl">

<!-- Padding más grande -->
<div class="p-4"> → <div class="p-8">
```

### Agregar animaciones:
```html
<button class="transition transform hover:scale-110 hover:rotate-3">
```

---

## 📝 Notas Importantes

1. **No edites `output.css`** - Se genera automáticamente
2. **Mantén `--watch` activo** mientras desarrollas
3. **Todos los estilos van en el HTML** como clases
4. **`styles.css`** solo tiene `@import "tailwindcss";`

---

## 👨‍💻 Autor

Proyecto de aprendizaje de Tailwind CSS  
Diseño 2025-2

---

## 📄 Licencia

Este proyecto es de uso educativo.