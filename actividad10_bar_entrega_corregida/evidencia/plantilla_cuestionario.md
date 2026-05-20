# Cuestionario de la Actividad 10: “Caza errores”

## Datos del estudiante

- Nombre completo: Sara Nikol Salgado Villada
- Grupo: Grupo mañana
- Fecha: 20/05/2026
- Nombre del proyecto revisado: Origen Bar de Autor

---

# Parte A. Reconocimiento de sintaxis y estructura HTML

## 1. Estructura básica

¿Cuáles son las partes mínimas que debe tener un archivo HTML para que el navegador lo interprete correctamente?

**Respuesta:**
Un archivo HTML debe tener `<!DOCTYPE html>`, la etiqueta `<html>`, una sección `<head>` con datos como título y enlaces a CSS, y una sección `<body>` donde va el contenido visible de la página.

---

## 2. Etiquetas y cierre correcto

Explica qué puede ocurrir en una página web cuando una etiqueta HTML queda mal cerrada o mal anidada.

**Respuesta:**
Cuando una etiqueta queda mal cerrada, el navegador puede interpretar mal la estructura. Eso puede desordenar secciones, afectar estilos o hacer que algunos elementos no se vean como deberían.

---

## 3. Rutas de archivos

En el proyecto, algunos recursos no cargan correctamente. Explica qué es una ruta de archivo y por qué una ruta incorrecta puede impedir que aparezca una imagen, un estilo o un script.

**Respuesta:**
Una ruta de archivo indica dónde está guardado un recurso. Si la ruta está mal, el navegador no encuentra el archivo y por eso no carga imágenes, estilos o JavaScript. En este proyecto pasó con el CSS, el logo y el script.

---

## 4. Enlace de CSS

Observa este fragmento:

```html
<link rel="stylesheet" href="css/style.css">
```

Si el archivo real se llama `styles.css`, ¿cuál es el error y cómo se corrige?

**Respuesta:**
El error es que la ruta llama `style.css`, pero el archivo real se llama `styles.css`. Se corrige así:

```html
<link rel="stylesheet" href="css/styles.css">
```

---

## 5. Atributos HTML

Explica para qué sirven los atributos `src`, `href`, `id`, `class` y `alt`.

**Respuesta:**
`src` sirve para indicar la ruta de imágenes o scripts. `href` sirve para enlaces o archivos CSS. `id` identifica un elemento único. `class` permite aplicar estilos a varios elementos. `alt` describe una imagen si no carga o para accesibilidad.

---

# Parte B. Reconocimiento de errores frecuentes en CSS

## 6. Selectores CSS

¿Cuál es la diferencia entre un selector de clase y un selector de identificador?

Incluye un ejemplo de cada uno.

**Respuesta:**
Una clase se puede repetir en varios elementos y se escribe con punto, por ejemplo `.btn`. Un id debe ser único y se escribe con numeral, por ejemplo `#reservas`.

---

## 7. Clases mal escritas

Si en HTML aparece:

```html
<div class="hero-contnet">
```

pero en CSS aparece:

```css
.hero-content {
  max-width: 600px;
}
```

¿Qué problema se genera y cómo se corrige?

**Respuesta:**
El problema es que la clase está mal escrita en HTML, por eso el CSS no se aplica. Se corrige dejando el mismo nombre en ambos lados:

```html
<div class="hero-content">
```

---

## 8. Propiedades inválidas

Observa este fragmento:

```css
.menu-grid {
  display: grips;
}
```

¿Qué error tiene y cuál debe ser la corrección?

**Respuesta:**
El error es que `grips` no existe en CSS. La corrección es:

```css
.menu-grid {
  display: grid;
}
```

---

## 9. Variables CSS

Observa este fragmento:

```css
.primary {
  background: linear-gradient(135deg, var(--dorado), var(--coral));
}
```

Si la variable `--dorado` no existe, ¿qué efecto puede tener en el diseño? ¿Cómo lo diagnosticarías?

**Respuesta:**
Si la variable no existe, el color puede no aplicarse bien. Lo diagnosticaría con el inspector del navegador, revisando los estilos del botón y comparando las variables definidas en `:root`.

---

## 10. Diseño responsive

¿Qué función cumple una media query en CSS? Explica qué error tiene este ejemplo:

```css
@media (max-wdith: 760px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
```

**Respuesta:**
Una media query sirve para adaptar el diseño a diferentes tamaños de pantalla. El error es que `max-wdith` está mal escrito. Debe ser:

```css
@media (max-width: 760px)
```

---

# Parte C. Diagnóstico técnico

## 11. Herramientas del navegador

Menciona tres herramientas o pestañas del navegador que puedes usar para diagnosticar errores y explica para qué sirve cada una.

**Respuesta:**
La consola sirve para ver errores de JavaScript. El inspector sirve para revisar HTML y CSS. Network o Red sirve para ver si archivos como CSS, JS o imágenes están cargando bien.

---

## 12. Error 404

¿Qué significa que en la pestaña Network/Red aparezca un error 404 al cargar un archivo CSS, JS o una imagen?

**Respuesta:**
Significa que el navegador no encontró el archivo. Normalmente pasa porque la ruta o el nombre del archivo están mal escritos.

---

## 13. Consola del navegador

¿Para qué sirve la consola del navegador durante la corrección de un proyecto web?

**Respuesta:**
Sirve para ver errores, advertencias y mensajes del JavaScript. En este proyecto ayudó a detectar que el archivo JS tenía errores y que algunos elementos no coincidían con el HTML.

---

## 14. Método de corrección

¿Por qué no es recomendable corregir todos los errores al mismo tiempo sin probar cada cambio?

**Respuesta:**
Porque uno se puede confundir y no saber qué cambio solucionó o dañó algo. Es mejor corregir un error, probar y luego seguir con el siguiente.

---

# Parte D. Documentación y buenas prácticas

## 15. Bitácora técnica

¿Qué información debe contener una buena bitácora de errores?

**Respuesta:**
Debe incluir el archivo afectado, el error encontrado, el diagnóstico, la corrección aplicada y la evidencia de que quedó funcionando.

---

## 16. Buenas prácticas

Escribe cinco buenas prácticas que aplicarías en tus próximos proyectos HTML y CSS para evitar errores similares.

**Respuesta:**

1. Revisar que las rutas de archivos estén bien escritas.
2. Usar nombres claros para clases e ids.
3. Probar la página cada vez que haga un cambio.
4. Revisar la consola del navegador.
5. Documentar los errores y soluciones.

---

## 17. Reflexión final

Después de corregir el proyecto, responde:

- ¿Qué error fue el más difícil de encontrar?
- ¿Qué aprendiste sobre la relación entre HTML, CSS y JavaScript?
- ¿Qué harías diferente al crear tu próximo proyecto web?

**Respuesta:**
El error más difícil fue el de JavaScript porque un texto sin cerrar dañaba todo el archivo. Aprendí que HTML, CSS y JavaScript dependen mucho entre sí: si un id, clase o ruta no coincide, el sitio puede fallar. En un próximo proyecto revisaría mejor los nombres de archivos, probaría cada parte y usaría la consola desde el inicio.
