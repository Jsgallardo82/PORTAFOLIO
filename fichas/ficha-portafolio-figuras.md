# Nombre del proyecto

Figuras de Lissajous

El título de la página y el encabezado de `index.html` usan ese nombre. El README abre con el mismo título.

# Título de la ficha

Ver qué curva cierran dos senos, y cuándo el dibujo se corta

# Qué problema resuelve

El README no dice para quién es el visualizador. Qué hacía esa persona antes no está en el repo.

La pregunta concreta sí está escrita en la fórmula: qué curva producen x = A·sin(a·t + δ) e y = B·sin(b·t) al cambiar las frecuencias a y b, el desfase δ y las amplitudes A y B.

Quien abre la página mueve esos valores y el lienzo redibuja la figura. Encima aparece la relación a:b ya simplificada.

El modo Trazar dibuja la curva poco a poco. El README lo compara con un osciloscopio y con las proyecciones de cada oscilador.

Si la relación no es racional con un denominador pequeño, la curva no se cierra y se dibujan 100 vueltas. Esa frase está en el README.

# Cómo se usa

No hace falta una cuenta. No hay roles.

1. Se abre `index.html` en el navegador. El README dice que no requiere instalación.
2. A la izquierda queda el panel. A la derecha, el lienzo. En `styles.css`, por debajo de 820 px el lienzo pasa arriba.
3. Si el navegador no tiene un estado guardado, `app.js` parte de a = 3, b = 2, δ = 90°, A = 1 y B = 1. El color es un degradado, el brillo está activo y los ejes están apagados. Si existe la clave `figuras-lissajous:v1` en `localStorage`, esos valores reemplazan los iniciales.
4. Las frecuencias a y b se mueven con el deslizador (de 1 a 20), con botones de ±1, ±0.1 y ±0.01, con el campo numérico, o con las flechas del teclado.
5. El desfase δ se escribe en grados o se elige entre 0°, 45°, 90°, 135°, 180° y 270°.
6. Las amplitudes A y B van de 0.05 a 1.
7. Diez botones cargan figuras ya armadas: 1:1 círculo, 1:1 elipse, 1:2 ocho, 1:2 parábola, 3:2, 3:4, 5:4, 5:6, 9:8 y 7:11.
8. «Girar δ» anima el desfase. La velocidad va de 1 a 180 grados por segundo. El valor inicial del código es 30.
9. «Trazar» recorre la curva y muestra el punto con sus dos proyecciones. La duración va de 2 a 30 segundos. El valor inicial del código es 8. Al llegar al final, el trazo vuelve a empezar.
10. En apariencia se elige degradado o color único, tono o color de línea, grosor, fondo, brillo y ejes.
11. «Guardar PNG» exporta la curva completa. El selector ofrece 1080, 2048 y 4096 px. La opción marcada en el HTML es 2048. Se puede incluir el texto de a, b y δ, o un fondo transparente. El archivo baja con el nombre `lissajous_a…_b…_d….png`.
12. «Restablecer» vuelve a los valores por defecto del código.
13. Atajos, copiados del README: Espacio gira δ, T traza, flechas cambian a o b en ±1, Shift baja el paso a ±0.01, S guarda.

Cada cambio de los controles se vuelve a guardar en `localStorage`.

# Qué se construyó

El repo tiene cuatro archivos: `index.html`, `styles.css`, `app.js` y `README.md`. No hay `package.json`, framework, empaquetador ni tests.

El dibujo usa el canvas 2D del navegador. Las dos animaciones usan `requestAnimationFrame`. El lienzo se ajusta con `ResizeObserver` y con `devicePixelRatio`. El estado queda en `localStorage`.

Qué se intentó y se descartó: no está en el repo. Hay un solo commit y ningún comentario que nombre una alternativa probada y dejada de lado.

El reto que el propio código documenta es saber cuántas vueltas hacen falta para que la curva se cierre. El comentario de `app.js` dice que se cierra cuando a·t y b·t son a la vez múltiplos de 2π, y que a y b se tratan con tres decimales. La función `cierre` redondea a milésimas, usa el máximo común divisor y compara el resultado con `MAX_VUELTAS` (100). Si hace falta más, marca la curva como no cerrada y el dibujo usa 100 vueltas. El HUD escribe entonces «no se cierra (100 vueltas)». El README resume la misma regla.

El segundo límite escrito en el código es el muestreo. El comentario de `draw` pide pasos bastantes para que las curvas rápidas se vean suaves. La cuenta se recorta entre 200 y 300000 puntos. En degradado el trazo se parte en hasta 240 tramos, cada uno con su tono.

La evidencia es el commit `cc31ee3` (los cuatro archivos entran juntos), el README y `app.js` (`cierre`, `MAX_VUELTAS`, `draw`).

# Números

No hay usuarios, registros, métricas de uso, fechas de corte ni precios.

No está en el repo.

# Línea de tiempo

- 29 de octubre de 2026, 12:12:25 (−0500). Commit `cc31ee392c8c2e24b2ed887f4d0b946e2bbe52ea`, mensaje «Visualizador de figuras de Lissajous». Entra el proyecto entero: `README.md` (23 líneas), `app.js` (364), `index.html` (169) y `styles.css` (160). El commit suma 716 líneas. El autor en git es sebastian. El mensaje declara un coautor: Claude Opus 5.5. `git shortlog` cuenta una sola persona. Parece el commit de un solo autor humano, con un coautor escrito en el mensaje. No hay otro commit en este clon. Fechas de inicio, pruebas o publicación: no están en el repo.

# Imágenes

No hay capturas, PNG, JPG ni SVG en el repositorio.

No está en el repo.

# Enlaces

Repositorio: https://github.com/Jsgallardo82/figuras-lissajous

La URL está en el remote `origin` de git. La rama local `main` sigue a `origin/main`.

URL de despliegue: no está en el repo. El README solo indica abrir `index.html`.

Si el repositorio es privado: no está en el repo.

# Borrador

El proyecto se llama Figuras de Lissajous. Se abre con `index.html` en el navegador. El README dice que no hace falta instalar nada. No hay cuenta. No hay roles.

La curva sale de dos senos. El README escribe x = A·sin(a·t + δ) e y = B·sin(b·t). Sin un estado guardado, el código arranca en a = 3, b = 2 y δ = 90°. Hay diez figuras listas, del círculo 1:1 al 7:11.

El punto que el código explica es el cierre. En `cierre` redondeo a y b a tres decimales. Las vueltas salen del máximo común divisor. Si pasan de 100, el dibujo se corta y el HUD dice que no se cierra. El README deja esa regla en una frase. Una alternativa probada y descartada: [no está en el repo].

Girar δ suma grados por segundo. Trazar recorre la curva en los segundos elegidos y marca el punto con las dos proyecciones. Guardar PNG dibuja la curva completa a 1080, 2048 o 4096 px. El nombre del archivo lleva a, b y δ.

El repo tiene un commit. La fecha es el 29 de octubre de 2026. El autor en git es sebastian. El mensaje nombra también a Claude Opus 5.5. Entran cuatro archivos y 716 líneas. Usuarios y métricas: [no está en el repo]. URL de despliegue: [no está en el repo]. Capturas: [no está en el repo].

# Qué tiene que confirmar el autor

- Si el trabajo fue solo de la persona que git llama sebastian, o hubo alguien más aparte del coautor que ya figura en el mensaje (Claude Opus 5.5).
- Si el 29 de octubre de 2026 es la fecha de todo el trabajo. Git no tiene otra fecha.
- Si quiere una captura en la ficha. En el repo no hay ninguna.
- Para quién era el visualizador y qué usaba antes. No está en el repo.
- Si existe una URL de despliegue y si el repositorio es privado o público. No está en el repo.
