# ACTIVIDAD DE APRENDIZAJE 10: "Caza errores"

## 1. Contexto de la actividad

En esta actividad recibirás un proyecto web ficticio llamado **Origen Bar de Autor**, una página profesional para un bar de coctelería y tapas. El proyecto incluye archivos HTML, CSS, JavaScript e imágenes SVG.

El sitio fue diseñado para verse como una página real de presentación comercial, pero contiene **errores intencionales**. Tu misión será encontrarlos, diagnosticarlos, corregirlos y documentar el proceso técnico.

Esta actividad pertenece a la sección **Errores frecuentes en HTML y CSS; diagnóstico, corrección y documentación** de la Unidad 2.

---

## 2. Objetivo de aprendizaje

Identificar, diagnosticar y corregir errores frecuentes en un proyecto web construido con HTML, CSS y JavaScript, aplicando herramientas de inspección del navegador, revisión de código y documentación técnica.

---

## 3. Competencias que trabajarás

Al finalizar la actividad deberás demostrar que puedes:

- Reconocer errores de sintaxis y estructura en HTML.
- Identificar errores de enlace entre archivos HTML, CSS, JavaScript e imágenes.
- Diagnosticar fallos visuales producidos por errores en CSS.
- Usar el navegador y las herramientas de desarrollador para revisar errores.
- Corregir problemas de interactividad básica con JavaScript.
- Documentar técnicamente cada error encontrado y la solución aplicada.
- Verificar que el proyecto funcione correctamente después de las correcciones.

---

## 4. Estructura del ZIP

Dentro del paquete encontrarás estas carpetas y archivos:

```text
actividad10_bar/
├── README_ESTUDIANTE.md
├── CUESTIONARIO_ESTUDIANTE.md
├── GUIA_MAPA_MENTAL_NOTAS.md
├── evidencia/
│   ├── checklist_evaluacion.md
│   ├── plantilla_bitacora.md
│   ├── plantilla_cuestionario.md
│   └── plantilla_mapa_mental.md
├── proyecto_con_errores/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── assets/
│       └── img/
│           ├── logo-origen.svg
│           ├── hero-bar.svg
│           ├── coctel-aurora.svg
│           ├── tabla-tapas.svg
│           └── noche-jazz.svg
└── solucion_referencia/
    └── versión corregida del proyecto
```

> Para realizar la actividad debes trabajar principalmente en la carpeta **proyecto_con_errores**.

---

## 5. Requisitos técnicos

Necesitas:

- Un computador.
- Visual Studio Code.
- Un navegador web actualizado, preferiblemente Google Chrome.
- Conocimientos básicos de HTML, CSS y JavaScript.

---

## 6. Instrucciones paso a paso para realizar la actividad

### Paso 1. Abrir el proyecto en Visual Studio Code

1. Descomprime el archivo ZIP.
2. Abre Visual Studio Code.
3. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
4. Abre la carpeta **proyecto_con_errores**.

---

### Paso 2. Ejecutar la página en el navegador

1. Abre el archivo `index.html`.
2. Haz clic derecho sobre el archivo.
3. Selecciona **Open with Live Server** si tienes la extensión instalada.
4. Si no tienes Live Server, abre el archivo directamente en Google Chrome.

Al abrir el sitio, observa con atención:

- Si cargan los estilos.
- Si aparece el logo.
- Si se ve correctamente la sección principal.
- Si funcionan los botones.
- Si la navegación interna lleva a las secciones correctas.
- Si el formulario responde al enviar datos.
- Si se adapta correctamente al tamaño de pantalla.

---

### Paso 3. Diagnosticar errores

Debes usar al menos tres estrategias:

1. **Observación visual:** revisa qué se ve mal o qué no aparece.
2. **Revisión del código:** inspecciona rutas, etiquetas, clases, identificadores y nombres de archivos.
3. **Herramientas del navegador:** presiona `F12` o clic derecho > **Inspeccionar**. Revisa especialmente:
   - Consola.
   - Pestaña Elements/Elementos.
   - Pestaña Network/Red.

---

### Paso 4. Corregir los errores

Corrige los errores encontrados directamente en los archivos:

- `index.html`
- `css/styles.css`
- `js/app.js`

Después de cada corrección, guarda el archivo y actualiza el navegador.

No hagas todos los cambios al mismo tiempo. Corrige uno, prueba, documenta y continúa con el siguiente.

---

### Paso 5. Documentar el proceso

Usa el archivo:

```text
evidencia/plantilla_bitacora.md
```

Allí debes registrar cada error con esta información:

- Número del error.
- Archivo afectado.
- Descripción del problema.
- Diagnóstico técnico.
- Corrección aplicada.
- Evidencia de que quedó solucionado.

---

## 7. Entregables obligatorios

Debes entregar en Moodle una carpeta comprimida con los siguientes elementos:

1. **Proyecto corregido**: carpeta completa con `index.html`, `css/styles.css`, `js/app.js` y las imágenes funcionando correctamente.
2. **Bitácora de errores diligenciada**: usa `evidencia/plantilla_bitacora.md`.
3. **Cuestionario resuelto**: responde las preguntas del archivo `CUESTIONARIO_ESTUDIANTE.md` o usa `evidencia/plantilla_cuestionario.md`.
4. **Mapa mental o notas técnicas**: usa la guía `GUIA_MAPA_MENTAL_NOTAS.md` o la plantilla `evidencia/plantilla_mapa_mental.md`.
5. **Captura de pantalla final** del sitio funcionando en Google Chrome.
6. **Reflexión final breve**, incluida al final de la bitácora o del cuestionario.

---

## 7.1 Cuestionario que debes resolver

El cuestionario evalúa si reconoces la sintaxis, la función y la estructura de HTML y CSS, además de tu capacidad para diagnosticar errores. Está dividido en cuatro partes:

- **Parte A:** reconocimiento de sintaxis y estructura HTML.
- **Parte B:** reconocimiento de errores frecuentes en CSS.
- **Parte C:** diagnóstico técnico con navegador, consola e inspector.
- **Parte D:** documentación y buenas prácticas.

Debes responder todas las preguntas. No copies únicamente definiciones: usa ejemplos del proyecto **Origen Bar de Autor**.

---

## 7.2 Mapa mental o notas técnicas

Debes elaborar un mapa mental o unas notas técnicas sobre el proceso de diagnóstico y corrección.

El tema central debe ser:

**Errores frecuentes en HTML y CSS: diagnóstico, corrección y documentación**

Tu mapa o notas deben incluir como mínimo estas ramas o secciones:

1. Errores en HTML.
2. Errores en CSS.
3. Errores en JavaScript.
4. Herramientas de diagnóstico.
5. Proceso de corrección.
6. Buenas prácticas.

El archivo `GUIA_MAPA_MENTAL_NOTAS.md` explica exactamente qué debe contener cada rama.

---

## 7.3 Preguntas de reflexión final

Incluye estas respuestas al final de tu bitácora o cuestionario:

1. ¿Cuál fue el error más difícil de encontrar y por qué?
2. ¿Qué herramienta te ayudó más: consola, inspector, revisión manual o navegador?
3. ¿Por qué es importante documentar los errores en un proyecto de software?
4. ¿Qué buenas prácticas aplicarías en un próximo proyecto para evitar estos errores?
5. ¿Cómo se relacionan HTML, CSS y JavaScript dentro de un mismo proyecto web?

---

## 8. Criterios de evaluación

| Criterio | Excelente | Aceptable | Por mejorar |
|---|---|---|---|
| Identificación de errores | Encuentra la mayoría de errores y los clasifica correctamente. | Encuentra algunos errores principales. | No identifica los errores relevantes. |
| Diagnóstico técnico | Explica la causa de cada error con claridad. | Explica parcialmente las causas. | No logra explicar por qué ocurre el error. |
| Corrección del código | Corrige los errores sin dañar otras partes del proyecto. | Corrige algunos errores, pero quedan fallos. | Las correcciones no solucionan el problema. |
| Documentación | Registra errores, causas, soluciones y evidencias. | Documenta de manera incompleta. | No documenta el proceso. |
| Cuestionario | Responde todas las preguntas con claridad, ejemplos y lenguaje técnico básico. | Responde parcialmente o con explicaciones muy generales. | No responde o copia respuestas sin relación con el proyecto. |
| Mapa mental/notas | Organiza errores, diagnóstico, corrección y buenas prácticas de forma clara y completa. | Presenta un esquema básico con información incompleta. | No entrega el mapa/notas o no se entiende la relación entre conceptos. |
| Verificación final | El sitio funciona, se ve bien y responde al usuario. | El sitio funciona parcialmente. | El sitio sigue sin funcionar. |

---

## 9. Recomendaciones

- Lee los nombres reales de carpetas y archivos antes de cambiar rutas.
- Revisa mayúsculas, minúsculas y extensiones.
- Verifica que las clases HTML coincidan con los selectores CSS.
- Usa la consola para encontrar errores de JavaScript.
- Usa la pestaña Network/Red para detectar archivos que no cargan.
- Documenta cada cambio de inmediato.

---
