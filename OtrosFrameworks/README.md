# 🌐 Aportes Creativos: Bootstrap, Bulma y Primer CSS

Este repositorio presenta tres aportes creativos desarrollados con distintos frameworks de CSS (**Bootstrap**, **Bulma** y **Primer CSS**).  
Cada uno de ellos implementa una funcionalidad interactiva enfocada en la mejora de la experiencia del usuario, manteniendo un diseño profesional, limpio y educativo.

---

## 🧩 1. Sistema de Modales Interactivos (Bootstrap)

### 📘 Descripción del Aporte
He implementado un sistema de **modales interactivos** en la sección **"Recursos"** de la página *ETS INFOPLUS*, utilizando componentes de **Bootstrap** para mejorar la experiencia del usuario y proporcionar información adicional de manera organizada y atractiva.

### ⚙️ Características Implementadas

#### 1. Modal de Contacto
**Función:** Proporciona información de contacto directa (email y teléfono) y horario de atención.  
**Elementos clave:**
- Ícono de teléfono (`bi-telephone-fill`)
- Información de contacto clara  
- Alerta informativa sobre horario de atención  
- Botón de cierre en la esquina superior derecha  

#### 2. Modal de Videos Informativos
**Función:** Muestra videos educativos embebidos de YouTube sobre ETS.  
**Elementos clave:**
- Reproductor de YouTube integrado  
- Botones de acceso rápido (*Prevención, Tratamientos, Testimonios*)  
- Tamaño optimizado (`modal-lg`)  
- Ícono de play (`bi-play-circle`)  

#### 3. Modal de Mapa de Centros de Pruebas
**Función:** Permite localizar centros de pruebas cercanos mediante un mapa interactivo.  
**Elementos clave:**
- Mapa de Google Maps embebido  
- Campo de búsqueda  
- Botón con ícono (`bi-search`)  
- Ícono de ubicación (`bi-geo-alt-fill`)  

### 💻 Mejoras Técnicas
- **IDs únicos:** `contactoModal`, `videosModal`, `mapaModal`.  
- **Estructura semántica:** uso directo de `<li>` sin `<div>` intermedios.  
- **Diseño consistente:**
  - Botones con ancho completo (`w-100`)  
  - Headers azules (`bg-info`) con texto blanco  
  - Botón de cierre (`btn-close-white`)  

### 🧠 Tecnologías Utilizadas
- **Bootstrap 5.3.0**  
- **Bootstrap Icons**  
- **Google Maps Embed API**  
- **YouTube Embed API**

### 🚀 Instrucciones de Uso
1. Ir a la sección **"Recursos"**.  
2. Seleccionar uno de los botones:  
   - 🆘 *Centro de Ayuda*  
   - 🎥 *Videos Informativos*  
   - 📍 *Encuentra centros de pruebas*  
3. Interactuar con cada modal según la información presentada.  
4. Cerrar con el botón (×) o haciendo clic fuera del modal.

### 🌟 Impacto del Aporte
- Mejora la **experiencia de usuario**.  
- Agrupa información de forma **organizada y clara**.  
- Mantiene la **interactividad y profesionalismo** del diseño.

### 📝 Notas
- Requiere conexión a internet para Google Maps y YouTube.  
- Completamente **responsivo** para móviles.

---

## 💡 2. Componentes Interactivos con Bulma

### 📘 Descripción del Aporte Creativo
He implementado una **sección interactiva** que demuestra los componentes principales de **Bulma CSS** mediante un **sistema de pestañas**.  
Esta sección permite explorar diferentes variantes de **botones y tarjetas**, mostrando la versatilidad del framework.

### ⚙️ Características Principales

#### 1. Sistema de Pestañas Interactivo
- Dos pestañas principales: **Botones** y **Tarjetas**.  
- Diseño *boxed* y centrado para mejor presentación.  
- Íconos descriptivos en cada pestaña.  
- Transición suave entre contenidos.  

#### 2. Pestaña de Botones
Muestra una amplia variedad de botones de Bulma:
- Por color: `Primary`, `Link`, `Info`, `Success`, `Warning`, `Danger`.  
- Por tamaño: *Pequeño, Normal, Mediano, Grande*.  
- Organización en grupos con espaciado adecuado.  
- Notificación informativa sobre las capacidades de Bulma.  

#### 3. Pestaña de Tarjetas
Presenta un componente **Card** completo:
- Header con título y botón de opciones.  
- Contenido descriptivo sobre el componente.  
- Footer con acciones (*Guardar, Editar, Eliminar*).  
- Diseño limpio y profesional.  

### 🧩 ¿Cómo Funciona?
1. Se utiliza el componente **tabs** de Bulma con diseño `is-boxed` y `is-centered`.  
2. Al hacer clic en una pestaña, se **activa visualmente** y muestra el contenido correspondiente.  
3. **JavaScript nativo** controla la visibilidad de los paneles.  
4. Los componentes son ejemplos reales del framework Bulma.

### 🧠 Tecnologías Utilizadas
- **Bulma CSS**  
- **Font Awesome** (íconos de pestañas)  
- **JavaScript Nativo**  

### 🚀 Ventajas del Aporte
- **Educativo:** Muestra de forma práctica las capacidades de Bulma.  
- **Interactivo:** Permite explorar sin recargar la página.  
- **Minimalista:** Añade valor sin sobrecargar el diseño.  
- **Consistente:** Respeta la estética original del framework.  

### 📝 Notas
- El código del botón principal **no fue modificado**.  
- Añadido como **complemento educativo**.  
- Totalmente **responsivo** y alineado con las buenas prácticas de Bulma.

---

## 🎨 3. Component Builder Interactivo (Primer CSS)

### 📘 Descripción del Aporte Creativo
He implementado un **Component Builder interactivo** utilizando **Primer CSS**, el framework minimalista de GitHub.  
Permite **visualizar componentes de UI** sin escribir código, empleando únicamente **HTML y CSS**.

### ⚙️ Características Principales

#### 1. Interactividad sin JavaScript
- Funciona **solo con CSS**.  
- Utiliza `radio buttons` ocultos y el selector `:checked`.  
- Incluye **transiciones suaves** y efectos *hover*.  

#### 2. Componentes Incluidos
- **Botón:** `btn btn-primary`  
- **Etiqueta:** `Label Label--success`  
- **Alerta:** `flash flash-warn`  
- **Insignia:** `Counter Counter--primary`  

#### 3. Diseño y Usabilidad
- Cuatro botones de selección intuitivos.  
- **Viewport dinámico** con el componente activo.  
- **Responsive** y con indicador visual del botón seleccionado.  

### 🧩 ¿Cómo Funciona?
1. El usuario selecciona un componente (*Botón, Etiqueta, Alerta o Insignia*).  
2. Se activa el **radio button** correspondiente mediante `for`.  
3. El CSS `:checked` muestra el componente asociado.  
4. Se aplica un **estilo visual distinto** al botón activo.

### 🚀 Ventajas del Enfoque
- **Sin JavaScript:** 100% funcional con CSS.  
- **Accesible:** Usa controles de formulario estándar.  
- **Ligero y compatible:** No altera el código original.  
- **Educativo:** Ideal para explorar Primer CSS.

### 🧠 Tecnologías Utilizadas
- **Primer CSS**  
- **HTML5**  
- **CSS3 (transiciones y selectores avanzados)**  
- **SVG** (iconos)  

### 📝 Notas
- Se usa la **CDN oficial de Primer CSS**.  
- Mantiene la **estética original** (fondo azul claro, tabla, etc.).  
- Los componentes son **representativos del framework**.  
- Este aporte puede integrarse como **sección independiente** dentro del proyecto ETS.

---

📄 **Autor:** Victor Cordoba  
💻 *Actividad Creativa - Diseño y Edicion Grafica*  
