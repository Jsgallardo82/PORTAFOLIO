# Nombre del proyecto

Circunferencia modular.

En el README también se llama «circunferencia de multiplicación modular» (*times table cardioid*). El título de la página es «Circunferencia modular».

# Título de la ficha

¿Qué figura sale al unir cada punto i con (i · m) mod N?

# Qué problema resuelve

No está en el repo para quién es, ni qué hacía esa persona antes.

El README lo presenta como un visualizador de la circunferencia de multiplicación modular.

Se reparten N puntos sobre una circunferencia. Cada punto i se une con el punto (i · m) mod N.

La pregunta concreta es qué figura forma la envolvente de esas líneas al cambiar N y m.

El README dice que m = 2 da una cardioide, m = 3 una nefroide y, en general, epicicloides con m − 1 lóbulos. Otros valores dan patrones tipo mandala.

También responde cuándo dos multiplicadores dibujan exactamente la misma figura.

# Cómo se usa

No hace falta una cuenta. No hay roles. El README dice que se abre `index.html` en el navegador y que no requiere instalación.

Al abrir, hay un panel a la izquierda y un lienzo a la derecha. En pantalla estrecha (hasta 820 px) el lienzo pasa arriba. Un recuadro sobre el lienzo muestra N, m y, si aplica, el nombre de la figura.

Si el navegador no tiene nada guardado, el código arranca en N = 200 y m = 2. Si ya hubo una visita, lee el estado en `localStorage` con la clave `circunferencia-modular:v1`.

La persona cambia N y m con deslizadores o escribiendo el valor. m admite decimales. Hay botones de paso: −1, −0.1, −0.01, +0.01, +0.1, +1.

Puede elegir una figura predefinida: 2 · Cardioide, 3 · Nefroide, 4, 5, 21, 29, 33, 34, 51, 66, 99 y 101. A partir de 21, el botón también pone N = 200.

Puede pulsar «Animar m» y ajustar la velocidad. La animación suma m de forma continua. «Pausar» la detiene.

En apariencia elige color por índice, por longitud de línea o color único. También opacidad, grosor, fondo, y si se ven la circunferencia, los puntos y los números.

Puede guardar un PNG de 1080, 2048 o 4096 px. Puede incluir los valores de N y m, o un fondo transparente. El archivo se descarga en el navegador.

«Restablecer» vuelve a los valores iniciales del código.

Atajos, si el foco no está en un campo: Espacio anima, flechas izquierda y derecha cambian m, flechas arriba y abajo cambian N, S guarda.

# Qué se construyó

Stack que aparece en el repo: HTML, CSS y JavaScript en el navegador, sin framework y sin `package.json`. El dibujo usa un canvas 2D. El estado se guarda con `localStorage`. La animación usa `requestAnimationFrame`. El tamaño del lienzo usa `ResizeObserver` y `devicePixelRatio`.

Qué se intentó y se descartó: no está en el repo. Hay un solo commit y los cuatro archivos entran juntos. No hay notas de alternativas rechazadas.

El reto que el propio código señala está en `app.js`. El destino de cada punto se calcula como ángulo continuo, sin redondear al punto entero, «así los valores decimales de m se ven suaves». Cada línea se traza por separado «para que la opacidad se acumule donde se cruzan muchas: eso es lo que hace brillar la envolvente». m se redondea a seis decimales para no arrastrar errores como 2.0000000001.

El README añade otra condición del problema: dos multiplicadores dan la misma figura si m ≡ m' (mod N) o si m · m' ≡ 1 (mod N). Por eso, para m = 2…28, el menor N sin figuras repetidas es 48. El README no muestra el cálculo de ese 48.

# Números

No hay usuarios, registros de uso, métricas de producto ni precios. Eso no está en el repo.

Cifras que sí están en el código o el README:

- N va de 2 a 10000 en el campo numérico. El deslizador de N llega a 1000.
- Valor inicial: N = 200, m = 2.
- m se edita con paso 0.01. La velocidad de animación va de 0.005 a 1, y el valor inicial es 0.1 unidades de m por segundo.
- Los puntos se dibujan si N ≤ 2000. Los números, si N ≤ 100.
- PNG: 1080, 2048 o 4096 px. La opción marcada al cargar es 2048.
- Para m = 2…28, el menor N sin figuras repetidas es 48.
- El panel mide 330 px. El diseño de una columna entra por debajo de 820 px.
- Un commit. 4 archivos. 642 líneas añadidas: `app.js` 327, `styles.css` 160, `index.html` 134, `README.md` 21.

# Línea de tiempo

29 de octubre de 2026, 12:12:23 (−05:00). Commit `f7bff8b1c46f307f7b56f842f377fdb7dd012aba`. Mensaje: «Visualizador de circunferencia de multiplicación modular». Entran `README.md`, `app.js`, `index.html` y `styles.css`.

En `git shortlog` hay un autor: sebastian. El mensaje del commit también trae `Co-Authored-By: Claude Opus 5.5`. Parece un solo autor de git, con un segundo nombre en el trailer de ese commit. No hay más commits en este clon. No está en el repo qué pasó antes o después de esa fecha.

# Imágenes

No está en el repo. No hay PNG, JPG, SVG ni PDF versionados. No hay una captura que asignar a un párrafo.

# Enlaces

Repositorio: `https://github.com/Jsgallardo82/circunferencia-modular.git`. Es el remoto `origin` de este clon. La rama local es `main` y, al revisar el repo, git la marcaba al día con `origin/main`.

Si el repositorio es privado: no está en el repo.

URL de despliegue: no está en el repo.

# Borrador

Abrí el visualizador con `index.html`. No hay instalación. No hay cuenta. [no está en el repo] para quién lo hice, ni qué usaba antes.

Hay N puntos en un círculo. Uno el punto i con (i · m) mod N. Con m = 2 el recuadro dice cardioide. Con m = 3 dice nefroide. Si m es entero, vale al menos 2 y es menor que N/2, el recuadro dice m − 1 lóbulos.

m admite decimales. En `app.js` el ángulo no se redondea al punto más cercano. El comentario dice que así el decimal se ve suave. m se recorta a seis decimales para no arrastrar un error como 2.0000000001.

Cada cuerda se dibuja sola. El comentario dice que la opacidad se suma en los cruces y por eso brilla la envolvente. Los puntos solo se pintan si N es como mucho 2000. Los números, si N es como mucho 100.

El README dice que dos m iguales módulo N dibujan la misma figura. También si su producto es 1 módulo N. Para m de 2 a 28, el menor N sin figuras repetidas es 48. [no está en el repo] el cálculo de ese 48.

Hay un solo commit, del 29 de octubre de 2026. El autor en git es sebastian. El mensaje nombra también a Claude Opus 5.5. [no está en el repo] si el trabajo fue de una sola persona. [no está en el repo] una dirección publicada y cuánta gente lo abrió.

# Qué tiene que confirmar el autor

- Si el trabajo fue solo de sebastian, o también de quien figura como `Co-Authored-By` (Claude Opus 5.5).
- Fechas que git no aclara: solo consta el 29 de octubre de 2026. No hay fecha de inicio ni de cierre de un periodo más largo.
- Si el repositorio es privado. No está en el repo.
- Si hay una URL de despliegue. No está en el repo.
- Si quiere una captura en la ficha. No hay ninguna en el repo.
- Para quién es el visualizador y qué hacía esa persona antes. No está en el repo.
