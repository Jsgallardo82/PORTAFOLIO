# Nombre del proyecto

Ahorcado Siglo XXXI

Ese texto es el `h1` de `app/jugarmaquina/page.js` y de `app/jugarpersona/page.js`. La carpeta del repo es `ahorcadosigloxxxi`. El campo `name` de `package.json` es `ahorcado_siglo_futuro`. El `title` de `app/layout.js` sigue en "Create Next App".

# Título de la ficha

¿La letra y la posición alcanzan antes de que el ácido llene la cápsula?

# Qué problema resuelve

La pantalla de inicio habla al jugador como abogado defensor de un amigo condenado. El texto sitúa la escena en un siglo XXXI de ficción, con ejecución en ácido. La pregunta que escribe la propia pantalla es: "¿Podras salvar a tu amigo u observaras como muere en el acido?" La partida pide una letra y una posición de una palabra oculta. Si la letra no está en la palabra, el ácido sube dentro de la cápsula. No está en el repo quién usaría esto fuera de esa ficción. No está en el repo qué hacía esa persona antes de este proyecto.

# Cómo se usa

No hace falta una cuenta. No hay roles.

El README indica `npm run dev` y abrir `http://localhost:3000`. Al abrir `/`, `app/components/principal.js` muestra instrucciones, el texto del siglo XXXI y dos enlaces.

"Contra máquina" va a `/jugarmaquina`. "Contra persona" va a `/jugarpersona`.

En las dos pantallas el botón "Empezar" llama a `seleccionarPalabra`. Esa función elige una entrada al azar de la lista `palabrasMaquina`, de 25 cadenas, la pasa a minúsculas y arma la solución con guiones bajos. `intentosRestantes` vuelve a 6. El engranaje pasa a rotar.

El jugador escribe un número de posición, desde 1, y pulsa una letra. El abecedario del tablero es A–Z y Ñ. `handleIntentoPosicion` resta 1 a la posición y compara con la palabra en mayúsculas.

Si la letra coincide en esa posición, el bucle escribe esa letra en todas las posiciones donde aparece. El historial guarda el intento y la solución actual. Si la letra está en la palabra y no en esa posición, el historial añade "¡Letra correcta pero en posición incorrecta!" y el ácido no sube. Si la letra no está, suben `letrasIncorrectas` y baja `intentosRestantes`. El ancho del ácido es `letrasIncorrectas / 6 * 100`.

La palabra con guiones no se pinta como fila. `palabraMostrar` solo limita el máximo del input de posición. Lo que se ve del avance es el historial.

Si la solución unida es igual a la palabra en mayúsculas, sale "¡Felicidades, Ganaste!". "Nuevo Juego" llama a `reiniciarJuego`. Si el juego no está iniciado, no hubo victoria y el historial tiene entradas, sale "¡Oh no, Perdiste!" y la palabra. El pie tiene "volver" hacia `/`, "Reiniciar" y un botón de sonido. El elemento `<audio>` está comentado.

En `/jugarpersona` el encabezado dice "V.S. Maquina". El botón "Empezar" usa la misma lista y el mismo sorteo. `palabraIngresada` existe en `app/components/tableropersona.js` y no se muestra.

# Qué se construyó

Stack que está en el repo: Next.js 15.3.1, React ^19.0.0, React DOM ^19.0.0, styled-components ^6.1.17, Tailwind CSS ^4 con `@import "tailwindcss"` en `app/globals.css` y `@tailwindcss/postcss` en `postcss.config.mjs`, ESLint ^9 y `eslint-config-next` 15.3.1. Las fuentes que carga el código son Geist, Geist Mono y Orbitron, por `next/font`. Las pantallas de juego son componentes cliente. `app/registry.js` registra styled-components en el layout.

El commit `59db31ac` dejó la página de Create Next App. El commit `dc2c267` sustituyó `app/page.js` (97 líneas borradas en ese archivo) por la pantalla de `Principal`.

En el mismo commit `dc2c267` entró `app/stylesmaquina.css`, 283 líneas. Ningún `.js` lo importa. Ese CSS apunta a `/imagenes/fondodepantalla.webp`, `/imagenes/fondoengranaje.png` y `/imagenes/fondoinstrucciones.webp`. Esas rutas no están en `git ls-files`. Los gráficos usados por los componentes están en `public/` sin la carpeta `imagenes`. Los estilos que pinta la partida están en styled-components, dentro de cada componente.

`app/components/medidor.js` entró en `dc2c267` con 0 bytes. Sigue vacío. Ningún archivo lo importa.

`app/page.js` deja comentado `import { AudioPlayer } from '@/components/AudioPlayer'`. No hay archivo `AudioPlayer` en el repo. `app/components/footer.js` pinta el botón de sonido y deja comentado un `<audio>` con `src="../sonidos/cyberpunk-bass-196030.mp3"`. Ese mp3 no está en `git ls-files`.

`public/bola electricidad.png` está en el commit `dc2c267`. Ningún `.js` ni `.css` lo referencia.

El repo no nombra un reto difícil. La regla que sí está escrita en pantalla y en código es letra más posición: el texto de `app/components/principal.js` y la función `handleIntentoPosicion` en `app/jugarmaquina/page.js` y `app/jugarpersona/page.js`.

La comparación de derrota usa `intentosRestantes` del render del clic, y el descenso va en `setIntentosRestantes`. Con el valor inicial en 6, la condición `intentosRestantes <= 0` no se cumple en el clic que deja el contador en 0. El aviso de derrota queda para un clic posterior, cuando ese estado ya es 0. Evidencia: las mismas dos páginas, junto al comentario "Verificar si el jugador perdió".

Tres cadenas de la lista llevan espacio: "inteligencia artificial", "casa de barbie", "musica country". El teclado que se renderiza no tiene espacio. El botón de espacio está dentro de un comentario JSX al final de `app/components/tablero.js`. "Ovovivíparo" lleva í. El teclado no tiene esa tecla. La victoria exige que la solución unida sea igual a la palabra entera en mayúsculas.

# Números

Usuarios, partidas guardadas, métricas de uso y precios: No está en el repo.

Cifras que sí están:

- `package.json`: versión `0.1.0`.
- Lista `palabrasMaquina`: 25 cadenas, repetida en `app/jugarmaquina/page.js` y `app/jugarpersona/page.js`.
- `intentosRestantes` inicial: 6. El ácido divide `letrasIncorrectas` entre 6.
- Botones de letra: 27 (A–Z y Ñ).
- Rutas de juego: `/jugarmaquina` y `/jugarpersona`, más `/`.
- Commits: 2. Fechas abajo. Autores distintos en git: 1.
- `dc2c267`: 23 archivos, 2366 inserciones, 106 borrados.
- `59db31ac`: 17 archivos, 6079 inserciones.
- Tamaños que git anota al añadir gráficos en `dc2c267`: `public/bola electricidad.png` 596291 bytes, `public/engranajeanima.png` 14647, `public/fondodepantalla.webp` 718748, `public/fondoengranaje.png` 2129310, `public/fondoinstrucciones.webp` 495076, `public/hibernacion-humana-1.jpg` 20152, `public/logosigloxxxi.webp` 317482, `public/lorefondo.webp` 570280, `public/mododejuego.webp` 468036, `public/tablet futurista.webp` 20500. El favicon del primer commit pesa 25931 bytes.

# Línea de tiempo

- 2025-04-17, 11:16:01 -0500. Commit `59db31ac`, mensaje "Initial commit from Create Next App". Autor en git: Juan Gallardo. Un solo autor en ese commit. Entra la plantilla: `README.md`, `app/page.js`, `app/layout.js`, `package.json` y los SVG de `public/`. Parece trabajo de una sola persona: es el único nombre en todo el historial.

- 2025-04-26, 12:33:26 -0500. Commit `dc2c267`, mensaje "maquina realizada". Autor en git: Juan Gallardo. Un solo autor en ese commit. Entran la portada, las dos partidas, el tablero, el pie, `registry.js`, `stylesmaquina.css`, `medidor.js` vacío y los gráficos de `public/`. Parece trabajo de una sola persona, por el mismo motivo.

No hay otros commits. No está en el repo qué pasó entre el 17 y el 26 de abril de 2025.

# Imágenes

No hay capturas de la partida en marcha. No hay gráficos de métricas. Los archivos de abajo son gráficos de interfaz ya versionados.

- `public/logosigloxxxi.webp`. Iría junto al nombre del proyecto. Es el fondo de `.cardTitulo` en `app/components/principal.js` y el logo de las dos partidas.
- `public/fondoinstrucciones.webp`. Iría junto a "Cómo se usa". Es el fondo del recuadro de instrucciones.
- `public/lorefondo.webp`. Iría junto a "Qué problema resuelve". Es el fondo del recuadro de lore en la portada.
- `public/hibernacion-humana-1.jpg`. Iría junto al paso del ácido en "Cómo se usa". Es el fondo de `.prisionero` en los dos tableros.
- `public/mododejuego.webp`. Iría junto a los dos modos en "Cómo se usa". Es el fondo del título "Ahorcado Siglo XXXI".
- `public/fondodepantalla.webp`, `public/fondoengranaje.png`, `public/engranajeanima.png`. Irían junto a la descripción de la pantalla al abrir el sitio.
- `public/tablet futurista.webp`. Iría junto al historial de intentos en "Cómo se usa". Es el fondo de `.menuRegistro`.
- `public/bola electricidad.png`. Está en el repo. El código no la referencia. No la asigno a un párrafo.
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`. Entraron con Create Next App. La página actual no los usa. `app/favicon.ico` también está. No son capturas de esta partida.

# Enlaces

Repositorio, según `git remote`: `https://github.com/Jsgallardo82/ahorcadosigloxxxi.git`.

Si ese remoto es privado o público: No está en el repo. `package.json` tiene `"private": true`. En ese archivo es la marca de npm para no publicar el paquete.

URL de despliegue de este juego: No está en el repo. El README solo abre `http://localhost:3000` y copia el texto genérico de Create Next App sobre Vercel, sin una URL de este proyecto.

# Borrador

El 17 de abril de 2025 el primer commit creó el repo con Create Next App. El mensaje es "Initial commit from Create Next App". El autor que figura en git es Juan Gallardo. El 26 de abril de 2025 el segundo commit se llama "maquina realizada". Ese commit cambió la portada y metió las dos partidas. No hay commits entre esas dos fechas.

La partida se presenta como Ahorcado Siglo XXXI. El texto de la portada pone al jugador como abogado de un amigo condenado a morir en ácido. La pregunta en esa pantalla es si el amigo se salva o se ve morir en el ácido. [no está en el repo] para quién es fuera de esa ficción. [no está en el repo] qué hacía esa persona antes.

No hay cuenta. En la portada hay dos botones: Contra máquina y Contra persona. Empezar sortea una cadena de una lista de 25. El jugador escribe una posición y pulsa una letra. Hay 27 letras, de la A a la Z más la Ñ.

Si la letra coincide en esa posición, el código rellena todas las apariciones de esa letra. Si la letra está en la palabra y la posición no, el historial lo anota y el ácido no crece. Si la letra no está, el ácido usa `letrasIncorrectas / 6`. La fila de guiones no se dibuja. El avance visible está en el historial. La victoria compara la solución pegada con la palabra en mayúsculas.

La ruta contra persona repite la lista y el botón Empezar de la máquina. El título de esa página dice "V.S. Maquina". El estado `palabraIngresada` no se pinta. [no está en el repo] la regla que debía separar los dos modos.

El paquete npm se llama `ahorcado_siglo_futuro`, versión 0.1.0. Next.js está fijado en 15.3.1. React está en 19. styled-components está en 6.1.17. Tailwind entra por `app/globals.css`. `app/stylesmaquina.css` no lo importa ninguna página y apunta a una carpeta `imagenes` que no está en el repo. `medidor.js` está vacío. El audio del pie está comentado y el mp3 no está en el repo. [no está en el repo] usuarios, partidas guardadas y una URL publicada.

# Qué tiene que confirmar el autor

- Si el trabajo fue solo de Juan Gallardo o hubo alguien que no aparece en git.
- Si el nombre de la ficha es "Ahorcado Siglo XXXI" o `ahorcado_siglo_futuro`.
- Qué ocurrió entre el 17 y el 26 de abril de 2025. Git no lo dice.
- Si "Contra persona" debía dejar que otra persona escribiera la palabra.
- Si el remoto de GitHub es privado o público.
- Si existe una URL de despliegue.
- Si hay una captura de la partida en marcha que quiera usar. En el repo no hay.
- Si `public/bola electricidad.png` debía verse en alguna pantalla.
- Si el botón de sonido debía reproducir un audio. El mp3 no está en el repo.
