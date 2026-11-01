# Nombre del proyecto

Zitterbewegung Engine Lite v6.0

En los archivos que él escribió el título largo es ese. En el encabezado de la app el texto es `ZITTERBEWEGUNG_ENGINE`, con la versión `v6.0`. La carpeta del repositorio se llama `proyecto-py-js`.

# Título de la ficha

Girar el acoplamiento Ω, guardar el cuaderno del alumno y pasar 32 diapositivas.

# Qué problema resuelve

El producto se presenta como un simulador científico del efecto Zitterbewegung. En los textos que él escribió aparece IUB 2026. El cuaderno llama al usuario «alumno» y le pide el nombre en un campo de la misma pantalla. No hace falta cuenta ni rol. Su parte responde tres cosas: cómo se mueve la frecuencia de acoplamiento Ω, cómo el alumno deja por escrito cinco misiones y cómo se recorre el argumento en `/presentacion`. Se llega desde la página del simulador: la perilla está en el panel izquierdo, el botón CUADERNO está en la barra inferior y el enlace PRESENTACIÓN está en el encabezado.

# Qué hice yo

Abrí el simulador sin login. En el encabezado dejé el nombre y la versión, las pestañas centradas y, a la derecha, el cambio de tema (día / noche) y el de idioma (es / en). Esas dos preferencias quedan en `localStorage` bajo la clave `zb-app-prefs`.

En el panel izquierdo quité el slider de rango de Ω. En su lugar entra una perilla. Gira 270°, desde −135°. Se mueve arrastrando, con la rueda, con un clic en el arco o escribiendo los hertz. Al lado hay un fader vertical: arriba es el máximo y abajo es el mínimo. Los dos escriben el mismo valor de Ω. Encima hay una franja con `laser.png`: el haz se apaga por debajo del 1% y gana opacidad, alto y brillo con la intensidad. La imagen `perilla.png` lleva una corrección de −75° para calzar el dibujo con el arco.

El botón CUADERNO está en el extremo derecho de la barra inferior. Abre un cuadro con el cuaderno. El alumno escribe su nombre y responde cinco misiones, en español o en inglés, según el idioma de la pantalla. El botón dice «Descargar PDF». El código arma un HTML y lo imprime desde un iframe oculto de 794×1123 px. Hay un reintento a los 600 ms por si el `onload` ya ocurrió. Al cerrar el cuadro, las respuestas siguen en memoria.

El 21 de agosto enlacé PRESENTACIÓN a `/presentacion`. Son 32 diapositivas. El número de lámina va en el parámetro `s` de la URL. El teclado usa flechas, espacio, inicio, fin y F para pantalla completa. Esc cierra la tarjeta abierta o sale de pantalla completa. Cada tarjeta puede abrir un texto largo. «← SIMULADOR» vuelve a `/`. Las curvas en vivo de esa ruta las dibuja un canvas con senos en `LiveWidgets.js`. Las gráficas de la lámina 30 son PNG estáticos en `frontend/public/resultados/`.

Una ruta que no existe muestra la página 404 que agregué, con un enlace de vuelta al simulador. La pestaña de vista 3D carga su componente solo en el navegador (`ssr: false`). En `next.config.mjs` agregué la cabecera `Cross-Origin-Resource-Policy: same-origin`.

El 8 de septiembre el build de Vercel se caía en `npm ci`, antes de compilar. `package.json` y el lock no traían la misma versión de Next ni de React. Alineé Next a `^15.3.9` y React y React-DOM a `^19.1.2`. Borré un `package-lock.json` vacío que estaba en la raíz. Excluí del upload `frontend/context/` y `frontend/qa-slides/`. El patrón de `context` va anclado como `/context/` para no dejar fuera `src/context/`.

# Qué construí

En los archivos que toqué el front es Next.js (App Router) y React, con las fuentes Geist que ya usaba el layout. El tema claro y oscuro son variables CSS en `globals.css`. La perilla es un componente React con un arco SVG y la imagen `perilla.png`. El cuaderno no usa una librería de PDF: genera HTML y llama a `print()` del navegador. El visor de diapositivas tampoco usa una librería: es `PresentationDeck.js`, `slides.js` y el canvas de `LiveWidgets.js`.

El commit del 12 de mayo muestra el reemplazo: sale el `<input type="range">` de Ω y entra `CouplingKnob`. El commit del 8 de septiembre dice que las 2 vulnerabilidades que quedaron piden Next 16.3.x, que esa subida es breaking, y que esta app no usa `next/image`, middleware, Server Actions ni API routes. La versión quedó en Next 15.

El reto del deploy está en el mensaje de `824c8f6` (8 de septiembre de 2026). `npm ci` abortaba con EUSAGE: `package.json` decía Next 15.3.4 y React 19.1.0; el lock decía Next 15.3.6 y React 19.1.2; un `node_modules` local tenía Next 15.3.8, y por eso el build local sí pasaba. El mismo mensaje dice que un `npm ci` limpio más `npm run build` compiló, con 3 rutas estáticas, y que las dos páginas renderizan en producción. El directorio raíz de Vercel tiene que ser `frontend`. `NEXT_PUBLIC_API_URL` queda inline en el build.

Otro atasco está escrito en `NotebookView.js`: el iframe de impresión necesita tamaño real para que Chrome pinte el HTML. Por eso mide una A4 (794×1123 px) aunque esté fuera de pantalla, y el `print` tiene un respaldo de 600 ms.

# Números

De sus commits y de los archivos que él agregó:

- 32 diapositivas (`slides.js`, ids 1 a 32).
- 5 misiones en el cuaderno.
- Perilla: arco de 270°, ángulo inicial −135°, corrección de la imagen −75°, diámetro 140 px, imagen 110 px. El fader de al lado mide 168 px de alto.
- Impresión del cuaderno: iframe de 794×1123 px y espera de 600 ms.
- Dependencias, en el mensaje del 8 de septiembre: Next 15.3.4 en `package.json` frente a 15.3.6 en el lock y 15.3.8 en un `node_modules` local; quedó `^15.3.9`. React y React-DOM pasaron de 19.1.0 a `^19.1.2`. `npm audit fix` dejó el conteo en 6 vulnerabilidades → 2. Las 2 restantes apuntan a Next 16.3.x.
- Upload: `frontend/context/` pesa 13 MB y `frontend/qa-slides/` pesa 3.6 MB. El mismo commit habla de 3 rutas estáticas.
- En `frontend/context/docs/reporte_comparativo.tex`, para Ω = Ω_SB = 5×10⁴ Hz: error máximo de Magnus de 0,14 μm en ⟨S₁⟩; población del nivel intermedio por debajo de 4,2×10⁻³; fidelidad atómica por encima de 0,996.
- En la lámina 31 de `slides.js`: el corrimiento de masa en la ventana nominal llega al 16%. El efecto en la naturaleza figura como 10²¹ Hz y 10⁻¹³ m.

Precios: no está en sus commits. Una fecha de corte fija de los reportes `.tex`: no está en sus commits. Esos archivos usan `\today`.

# Línea de tiempo

- 2026-05-12. Commit «front y perillas». Layout del encabezado, tema día/noche, textos es/en, perilla con escena de láser, y las imágenes `perilla.png`, `laser.png`, `consola.png` y `cavidad.webp`.
- 2026-05-14. Commit «cuaderno de apuntes, decargar apuntes, slicer vertical para la frecuencia». Cuaderno de cinco misiones, botón de descarga por impresión, y fader vertical de la frecuencia al lado de la perilla.
- 2026-08-21, 19:37 y 22:44. Dos commits del mismo trabajo. Visor en `/presentacion`, 32 láminas, widgets en canvas, figuras en `frontend/public/diapositivas/` y `frontend/public/resultados/`, reportes en `frontend/context/docs/`, y capturas en `frontend/qa-slides/`.
- 2026-08-22, 06:53. Commit «mas imagenees». Más figuras en `frontend/public/diapositivas/` y más contenido en `slides.js` y en `globals.css`.
- 2026-08-22, 08:21. Commit «cargar errores». Página 404, carga de la vista 3D solo en el cliente, y la cabecera `Cross-Origin-Resource-Policy`.
- 2026-09-08, 12:10. Commit «Arreglar build para deploy en Vercel». Alineó Next y React con el lock, regeneró el lock, agregó `frontend/.vercelignore` y `.claude/launch.json`, y borró el lock vacío de la raíz.

# Imágenes

Él las agregó. No generé ninguna.

- `frontend/public/perilla.png` — junto al párrafo de la perilla, en «Qué hice yo» y en el borrador.
- `frontend/public/laser.png` — junto al párrafo de la franja del láser.
- `frontend/public/consola.png` y `frontend/public/cavidad.webp` — las subió el 12 de mayo. Ningún componente de `frontend/src` las referencia.
- `frontend/qa-slides/v2-s29.png` — captura de la lámina 29, «Resultados — Controles que Producen el Dato», marcada 29/32. Va junto al párrafo de la presentación.
- El resto de `frontend/qa-slides/` (`s1`, `s2`, `s3`, `s6`, `s18`, `s23`–`s30`, `s32` y varias `v2-s*`) son capturas del mismo visor. Van con ese párrafo. El `.vercelignore` las deja fuera del upload.
- `frontend/public/resultados/comparativa_C_evolucion_n0.png`, `comparativa_E_cuts_representativos.png`, `magnus_n2_mapa_validez.png` y `validacion_tesis_ventana.png` — las usa la lámina 30. Van junto al párrafo de las cifras del reporte.
- `frontend/public/diapositivas/` — figuras dentro de las 32 láminas. Van con el párrafo de la presentación, no con la perilla.

No hay en el repo una captura de la perilla montada en el panel, ni del modal del cuaderno.

# Enlaces

Repositorio, remote `origin`: https://github.com/Jsgallardo82/proyecto-py-js

El repositorio es público.

URL de despliegue: no está en sus commits. El commit del 8 de septiembre habla de Vercel y no deja una dirección.

# Borrador

El producto se llama Zitterbewegung Engine Lite v6.0. En el encabezado escribí ZITTERBEWEGUNG_ENGINE v6.0. Entré sin cuenta. El idioma arranca en español y el tema en oscuro. Los dos se guardan en el navegador.

El 12 de mayo saqué el slider de Ω. Puse una perilla de 270°. Se gira con el dedo, con la rueda, con un clic en el arco o con un número en hertz. La imagen de la perilla iba corrida. Le dejé un offset de −75°. Encima, un láser se apaga si Ω está por debajo del 1% y se enciende al subir el valor.

El 14 de mayo añadí el fader vertical al lado de la perilla. Arriba es el máximo. El mismo día abrí el cuaderno desde la barra inferior. Son cinco misiones. El alumno escribe su nombre y las respuestas. El botón dice Descargar PDF. El PDF sale del diálogo de impresión. El HTML viaja en un iframe del tamaño de una A4. Chrome no pintaba el documento si el iframe no tenía tamaño. Dejé un respaldo de 600 ms.

El 21 de agosto monté `/presentacion`. Hay 32 láminas. Se pasa con las flechas, la barra espaciadora o los puntos de abajo. F pone la presentación a pantalla completa. Las curvas marcadas VIVO son senos dibujados en el canvas. La lámina 30 muestra PNG de los reportes. En el reporte comparativo, con Ω = Ω_SB = 5×10⁴ Hz, el error máximo de Magnus en ⟨S₁⟩ es 0,14 μm. La fidelidad atómica que escribí ahí supera 0,996.

El 22 de agosto una ruta desconocida dejó de quedar en blanco: muestra un 404 y un enlace al simulador. La vista 3D pasó a cargarse solo en el cliente. El 8 de septiembre Vercel ni compilaba. `npm ci` paraba porque el `package.json` y el lock no coincidían en Next ni en React. Dejé Next en ^15.3.9 y React en ^19.1.2. Next 16.3.x se quedó fuera. El mensaje de ese commit dice que el build limpio terminó con 3 rutas estáticas. La URL pública de ese deploy [no está en sus commits].

# Qué tiene que confirmar el autor

- La URL pública del deploy en Vercel. Sus commits no la traen.
- Si quiere una captura de la perilla, del láser en el panel y del cuaderno abierto. Esas tres pantallas no están en el repo. Sí están las capturas del visor en `frontend/qa-slides/`.
- Si `consola.png` y `cavidad.webp` deben usarse. Están en `frontend/public/` y el código no las referencia.
- La fecha de los reportes `.tex`. El fuente usa `\today`, no una fecha fija.
- El día en que se mostró la presentación, si no fue el de los commits del 21 y 22 de agosto de 2026.
- La portada de las diapositivas nombra a dos personas. Uno de los commits del 21 de agosto también nombra a otra persona en el mensaje. Conviene decir cómo quiere contarse la autoría de ese texto.
