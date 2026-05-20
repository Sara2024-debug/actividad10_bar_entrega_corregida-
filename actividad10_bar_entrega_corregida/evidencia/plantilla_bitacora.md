# Plantilla de bitácora técnica
# Actividad 10: "Caza errores"

Nombre del estudiante: Sara Nikol Salgado Villada

Fecha: 20/05/2026

Proyecto revisado: Origen Bar de Autor

---

## Registro de errores encontrados

| No. | Archivo afectado | Error encontrado | Diagnóstico técnico | Corrección aplicada | Evidencia / resultado |
|---|---|---|---|---|---|
| 1 | index.html | Ruta incorrecta del CSS: `css/style.css`. | El archivo real se llama `styles.css`, por eso los estilos no cargaban. | Se cambió por `css/styles.css`. | El diseño cargó correctamente. |
| 2 | index.html | Ruta incorrecta del logo: `assets/image/logo-origen.svg`. | La carpeta real es `assets/img`. | Se cambió por `assets/img/logo-origen.svg`. | El logo apareció en la página. |
| 3 | index.html | Enlace interno de Carta apuntaba a `#menu`. | La sección real tiene id `carta`. | Se cambió el enlace a `#carta`. | El menú navega bien a la carta. |
| 4 | index.html | Clase mal escrita `hero-contnet`. | El CSS usa `.hero-content`, por eso no se aplicaba el estilo. | Se corrigió a `hero-content`. | La sección principal se ve organizada. |
| 5 | index.html | Botón llamaba `reservaMesa()`. | La función correcta del JS se llama `reservarMesa()`. | Se cambió la llamada del botón. | El botón lleva a Reservas. |
| 6 | index.html | Formulario tenía id `reservationFormm`. | JavaScript buscaba `reservationForm`. | Se corrigió el id. | El formulario responde al enviar. |
| 7 | index.html | Campo teléfono tenía id `phone`. | JavaScript buscaba `telefono`. | Se corrigió el id a `telefono`. | La validación del teléfono funciona. |
| 8 | index.html | Ruta del script estaba como `js/main.js`. | El archivo real es `js/app.js`. | Se cambió por `js/app.js`. | JavaScript cargó sin error. |
| 9 | styles.css | Variable CSS inexistente `--dorado`. | La variable definida era `--gold`. | Se cambió por `--gold`. | El botón principal toma el color correcto. |
| 10 | styles.css | `display: grips`. | La propiedad correcta es `grid`. | Se cambió a `display: grid`. | Las tarjetas de la carta se organizan en grilla. |
| 11 | styles.css | Media query mal escrita `max-wdith`. | El navegador ignora la regla responsive. | Se cambió a `max-width`. | La página responde mejor en móvil. |
| 12 | app.js | Cadena sin cerrar en `nombreBar`. | El error rompía todo el JavaScript. | Se cerró correctamente la cadena. | La consola dejó de mostrar error crítico. |

---

## Reflexión final

### 1. ¿Qué error fue más difícil de encontrar?

Respuesta:
El error más difícil fue el de JavaScript, porque una cadena de texto mal cerrada hacía que todo el archivo dejara de funcionar. Eso afectaba el año del footer, el botón de reserva y la validación del formulario.

### 2. ¿Qué herramienta te ayudó más para diagnosticar los errores?

Respuesta:
La consola del navegador fue la que más me ayudó, porque mostraba los errores de JavaScript. También usé el inspector y la pestaña Network para revisar rutas de CSS, imágenes y archivos.

### 3. ¿Qué aprendiste sobre la relación entre HTML, CSS y JavaScript?

Respuesta:
Aprendí que los tres archivos trabajan conectados. HTML da la estructura, CSS da el diseño y JavaScript permite la interacción. Si una ruta, clase o id está mal escrito, todo puede fallar aunque el resto esté bien.

### 4. ¿Qué buenas prácticas aplicarías en futuros proyectos?

Respuesta:
Revisaría bien nombres de archivos, rutas, clases e ids. También probaría cada cambio en el navegador, usaría la consola y documentaría los errores apenas los encuentre.
