# Nombre del proyecto

CICBED 2026.

En `src/contenido/evento.json` el nombre largo es «I Congreso Internacional de Ciencias Básicas y Educación», de la Institución Universitaria de Barranquilla. El lema es «Conectando ciencia, educación e innovación».

La carpeta del proyecto se llama `semana-ciencias`. El remoto de git se llama `ciced`. El `README.md` sigue titulado «CICED 2026» y describe «I Congreso Internacional de Ciencias y Educación». El sitio que renderiza `evento.json` usa CICBED.

# Título de la ficha

Recibir un trabajo sin cuenta y devolverle al autor solo un código.

# Qué problema resuelve

El sitio es del I Congreso Internacional de Ciencias Básicas y Educación (CICBED 2026), de la Institución Universitaria de Barranquilla. El contenido declara como público a estudiantes de pregrado y posgrado, docentes de educación básica, media y superior, e investigadores.

`docs/propuestas-congreso.html` (30 de septiembre de 2026) toma como referente el sitio del EIEM 8: una sola página, de unos 28.700 px en escritorio y unos 47.600 px en celular. La propuesta C de ese documento dice que un portal conviene «cuando se esperan cientos de ponencias o el congreso se repetirá cada año y se quiere dejar de depender de formularios y hojas de cálculo». No hay en el repo una descripción de qué herramienta usaba este comité antes de este código.

La pregunta que el código responde es esta: una persona de cualquier institución postula un reporte o un póster sin cuenta, recibe un código, y el comité con rol de coordinación o admin lo ve, lo puntúa y, si es reporte, descarga el PDF.

# Cómo se usa

Al abrir el sitio se ve la portada. El hero muestra la institución, el logo, el texto «Del 23 al 27 de noviembre de 2026» y la dirección de la sede. Después vienen la banda de acciones, invitados, el texto del congreso, fechas clave, el programa (el interruptor `programa` está en true), el mapa de la sede, modalidades y comité. Las olimpiadas no se muestran: `olimpiada` está en false. Los ejes temáticos tampoco: `ejes` está en false. Hay una barra de chat porque `chat` está en true. `noindex` está en true, así que el HTML pide a los buscadores que no indexen.

El menú de escritorio tiene Programa, Invitados, Convocatoria y Sede. En el celular, la barra inferior tiene Inicio, Programa, Postular y Más (lleva a la sede). El botón «Inscribirme como asistente» no sale, porque `inscripcion` está en false y no hay página `/inscripcion`. El enlace «Panel» del encabezado arranca oculto y solo aparece si el navegador tiene guardado el rol `coordinador` o `admin`.

En Convocatoria hay dos botones: «Postular un trabajo» y «Soy docente · ingresar». También se descargan dos plantillas: Word para el reporte y PowerPoint para el póster.

Postular no pide cuenta. El texto de `src/app/PostulacionPublica.tsx` dice: «Abierto a autores de cualquier institución. No hace falta tener cuenta». La persona completa título, resumen, modalidad, áreas, palabras clave, autores, institución, país, contacto y la autorización de datos. Si elige reporte de investigación, adjunta un PDF. Al enviar recibe un código de seguimiento. Puede postular otro trabajo o volver al inicio. No hay en el código una pantalla para consultar ese código después.

Ingresar sí pide cuenta. El texto de `src/app/Login.tsx` dice: «Acceso para el comité del congreso. Las cuentas las crea la coordinación.» No hay página de registro. `src/app/AppConvocatoria.tsx` dice que no hay cuentas de autor ni registro abierto, y que las cuentas las crea un admin desde el panel de Supabase. En `supabase/schema.sql` el rol por defecto es `docente` y ese rol no da acceso al panel. Los roles que entran a `/admin` son `coordinador` y `admin`.

En `/admin` la coordinación ve todos los trabajos, los conteos por estado (total, postulados, en evaluación, aprobados, rechazados), filtros y orden. Al abrir un trabajo puntúa cuatro criterios del 1 al 10 (originalidad, rigor, impacto, presentación), escribe una recomendación y puede descargar el PDF. El historial de actividad lo escriben triggers de la base, no el formulario.

Con `PUBLIC_DEMO=1` el sitio corre sin Supabase. El login de demo acepta cualquier contraseña. El README lista dos cuentas de prueba, con roles docente y coordinación. Esas direcciones son de `test.local`. No las copio acá.

Las olimpiadas están construidas y apagadas. Con el interruptor en true habría un modal de inscripción y, en el panel, la pestaña «Olimpiadas». En `src/contenido/olimpiadas.json` los dos grupos son «Estudiantes regulares» (2:00 a 6:00 p.m.) y «Universidad al Barrio y Universidad al Territorio» (6:00 a 8:00 p.m.), el lunes 23 de noviembre, en aula virtual. Los enlaces de formulario externo están vacíos, así que el propio JSON dice que el grupo no se ofrece para inscripción.

El chat es una barra. Pregunta a la función `chat-congreso` de Supabase. Esa función llama a Gemini. La conversación no se guarda. Si faltan `PUBLIC_SUPABASE_URL` y `PUBLIC_SUPABASE_ANON_KEY` y no está el modo demo, la isla muestra que no se puede postular ni ingresar. Las páginas informativas siguen.

# Qué se construyó

Lo que está en `package.json` y en el código: Astro 7, React 19, React Router 7, Tailwind CSS 4, TypeScript, el cliente de Supabase, oxlint. El sitio público es Astro estático. Convocatoria, login y panel son una isla de React con `client:only`. El contenido del evento vive en `src/contenido/*.json`. La base de la convocatoria está en `supabase/schema.sql` más cuatro migraciones. El chat es una Edge Function en Deno. El deploy descrito en el README y en `astro.config.mjs` es Vercel, sitio estático. Las rutas profundas de `/admin` las reescribe `vercel.json`. En desarrollo, un plugin de `astro.config.mjs` hace lo mismo. Las fuentes que carga `src/layouts/Base.astro` son Sora e IBM Plex Sans. La paleta está en `src/styles/global.css`.

`docs/propuestas-congreso.html` compara tres estructuras y marca como elegida la A, «Portada ágil + páginas de detalle», el 30 de septiembre de 2026. La B es una página única. La C es un portal con login, pago, QR y certificados. El mismo documento compara tres stacks y marca «ELEGIDO · con Supabase» en Astro + Tailwind. Los otros dos son Next.js + Supabase y WordPress. De tres paletas, marca elegida la Institucional. El README repite: estructura A, Astro + Tailwind + Supabase, paleta institucional.

Eso que el documento dejó afuera no está en el código: no hay pago, no hay QR, no hay certificados (`certificados` está en false), no hay rutas `/en` ni `/pt` (`idiomas` es solo `["es"]`), y `/admin` no edita el JSON del evento. Edita y evalúa trabajos. El panel de contenido que describe la propuesta (cuentas `admin` y `editor`) no es el panel que hay ahora.

Otras cosas que el repo muestra como cambio de rumbo:

- El 4 de octubre de 2026 el commit `8113e6a` se llama «Convocatoria abierta a cualquier institución». `schema.sql` dice que no hay docente responsable ni cuentas de autor. El README, en pendientes, todavía dice que el formulario exige un docente registrado y que un alumno de otra institución no puede postular. El formulario actual no pide docente.
- El 26 de octubre el commit `15e112b` se llama «CICED pasa a CICBED, y ponencia a reporte de investigación». La migración `supabase/migraciones/2026-10-26-cicbed.sql` renombra el valor `ponencia` y cambia el prefijo de los códigos nuevos. Los códigos ya emitidos con prefijo CICED se dejan como están.
- El 28 de octubre el commit `75947b7` pasa las olimpiadas a Microsoft Forms y la migración `2026-10-28-olimpiadas-externas.sql` le quita a anónimos el permiso de `inscribir_olimpiada`. El mismo día el commit `15b39de` dice «Vuelve el formulario de olimpiadas». La migración `2026-10-29-dos-olimpiadas.sql` dice que los formularios de Microsoft Forms siguen activos y que el panel no muestra el total. El commit `f06bf5c` oculta las olimpiadas en main. Hoy el interruptor está en false y los enlaces externos están vacíos.
- El commit `75423ce` (31 de octubre) dice que las olimpiadas se dividen por grupo de programas, no por área. El comentario de `olimpiadas.json` dice que los dos enlaces de Microsoft Forms eran uno por área y ya no corresponden.
- El asistente pasó de botón flotante (`4ac5e4d`, 6 de octubre) a barra de ancho completo (`b8d502c`) y después a barra que flota (`06e5769`).

El reto que el propio código explica es la postulación anónima con PDF.

`supabase/schema.sql` dice que `postular_trabajo` es una función y no un insert, porque el autor anónimo necesita el código y no puede leer la tabla. La función inserta con `security definer` y devuelve solo el código. El estado lo fija la función, no el cliente.

El PDF no entra en esa versión de `schema.sql`. Entra en `supabase/migraciones/2026-10-31-documento-reporte.sql`. Esa migración crea el bucket privado `reportes` (solo PDF, 20 MB), deja subir a cualquiera, deja leer solo a coordinación, y rehace la función. El comentario dice que hay que borrar la función anterior: si conviven dos firmas, el cliente llama a la que no es.

`src/app/PostulacionPublica.tsx` sube el archivo antes de crear la fila. El comentario dice por qué: si la fila se crea primero y la subida falla, el autor ya tiene código y cree que terminó. Al revés, un PDF que se subió y no quedó atado a una fila se puede borrar sin escribirle a nadie.

`src/lib/documentos.ts` nombra el archivo con un UUID. El comentario da dos razones: el código del trabajo todavía no existe cuando se sube el archivo, y una ruta que no se puede adivinar es una barrera más. La URL de descarga del panel vence a los 5 minutos. No hay política de UPDATE del archivo: el comentario de la migración dice que, para corregir un reporte, se postula de nuevo.

Otro fallo que el código documenta: en `src/lib/supabase.ts`, si faltaban las credenciales el módulo lanzaba un error al importarse, la hidratación se rompía y la página quedaba en blanco. Ahora se marca `FALTA_CONFIGURACION` y la isla muestra un aviso.

La clave de Gemini no va al navegador. `supabase/functions/chat-congreso/index.ts` la lee como secreto. Si no hay modelo fijo, la función pregunta a la API qué modelos hay y elige uno.

# Números

No hay en el repo una cifra de usuarios reales, de trabajos recibidos en producción, de inscripciones reales ni de precio de inscripción. En `docs/propuestas-congreso.html` la fila «Participantes esperados» dice «Pendiente» y la fila «Costo y medio de pago» dice «Pendiente».

Cifras que sí están, y de dónde salen:

- El congreso figura del 23 al 27 de noviembre de 2026 (`evento.json`). En `fechas-clave.json` la apertura, el cierre, la notificación y la inscripción dicen «Por confirmar». La única fecha con valor es la realización del congreso, `2026-11-23`.
- Modo demo, `src/lib/demoData.ts`: 14 trabajos, 3 perfiles (dos de coordinación y uno docente), 8 evaluaciones, 9 entradas de actividad y 32 inscripciones a olimpiadas. El archivo las marca como datos falsos. El `README.md` dice «14 trabajos y 6 usuarios de prueba». Esas dos cifras de usuarios no coinciden.
- Límites del formulario y de la base: título de 5 a 200 caracteres, resumen de 100 a 4000, PDF de hasta 20 MB (20.971.520 bytes en la migración), categorías de 1 a 3, palabras clave de 1 a 6, autores de 1 a 10, puntajes de 1 a 10.
- Código de trabajo: prefijo `CICBED-2026-` y cuatro dígitos.
- Chat: 500 caracteres por mensaje, 16 turnos, 20 mensajes por IP cada 10 minutos. Esos topes están en la función, no son una medición de uso.
- Comité en `comite.json`: 9 entradas, en cuatro tipos (organizador, científico, técnico, académico). Hay fotos en `public/fotos/`. No copio nombres.
- Invitados en `ponentes.json`: 3 entradas. El comentario las marca como provisionales.
- Programa: 5 días, del 23 al 27 de noviembre de 2026, según `programa.json`. El comentario lo ata a `docs/CRONOGRAMA.pdf`.
- El documento de propuestas estima, como plan y no como medición: estructura A en 3 a 4 semanas, B en 2 semanas, C en 7 a 10 semanas; hosting de Astro «Gratis»; Next.js «Gratis a ~25 USD/mes»; caché de 60 segundos. No hay en el código de Astro esa caché de 60 segundos.
- Git: 43 commits, del 30 de septiembre de 2026 al 31 de octubre de 2026.
- `package.json` tiene `"version": "0.0.0"`.

# Línea de tiempo

Todos los commits tienen el autor de git `unknown`. Son 43, un solo nombre. Eso parece una sola identidad de git. No dice si detrás hubo una persona o varias. El documento de propuestas, el 30 de septiembre de 2026, escribe «Tú, quizás con un ayudante» y, en el diagrama, «Tú y tu ayudante». No hay otro nombre de autor en git.

- 30 de septiembre de 2026. Tres commits: «Sistema de postulación y evaluación funcionando», «Semana 1: sitio del congreso en Astro» e ignorar la carpeta `.astro`. El HTML de propuestas fecha ese día las decisiones de estructura, stack y paleta. Autor en git: `unknown`.
- 1 de octubre de 2026. «Portada del CICED 2026 con la estructura del ECEM» y un interruptor para ocultar los ejes. Autor: `unknown`.
- 4 de octubre de 2026. Olimpiada (tabla, formulario, pantalla de inscripciones), logo en el hero, código copiable, login que se salta si ya hay sesión, primer coordinador desde el SQL Editor, acceso al panel desde la barra pública, y convocatoria abierta a cualquier institución. Autor: `unknown`.
- 6 de octubre de 2026. Asistente con Gemini, y tres cambios de la barra del chat. Autor: `unknown`.
- 7 de octubre de 2026. El bot elige el modelo de Gemini y el contexto respeta los interruptores. Autor: `unknown`.
- Del 8 al 25 de octubre de 2026 no hay commits. No está en el repo qué pasó esos días.
- 26 de octubre de 2026. CICED pasa a CICBED y ponencia a reporte de investigación. Otro commit saca el nombre del congreso y el correo de la función del chat. Autor: `unknown`.
- 27 de octubre de 2026. Fechas del 23 al 27 de noviembre de 2026, primeros integrantes del comité organizador, y la dirección del sitio pasa a `cicbed.vercel.app`. Autor: `unknown`.
- 28 de octubre de 2026. Sede con mapa, dos olimpiadas con Microsoft Forms, el formulario propio vuelve con panel, las olimpiadas se ocultan en main, datos de demostración, fotos del comité y ajustes de portada. Autor: `unknown`.
- 29 de octubre de 2026. Página de cronograma, PDF y contexto del bot. Autor: `unknown`.
- 31 de octubre de 2026. PDF obligatorio del reporte y descarga para el comité, olimpiadas por grupo de programas, redacción de la convocatoria y comité técnico. Es el último commit. Autor: `unknown`.

# Imágenes

No hay capturas de la interfaz en el repo. No generé ninguna.

- `src/assets/logo-cicbed.png`. Es el logo del hero. Iría junto al párrafo de la portada, en «Cómo se usa».
- `docs/propuestas-congreso.html`. No es una imagen suelta. Tiene esquemas de las tres estructuras y las tres paletas, dibujados en CSS. Iría junto a «Qué se construyó», donde se dice qué se eligió y qué no.
- `docs/CRONOGRAMA.pdf`. El comentario de `programa.json` lo llama cronograma oficial. Iría junto al párrafo del programa, en «Cómo se usa».
- `public/icons.svg`. Íconos, no una vista del sitio.
- `public/fotos/`. Hay cinco archivos de retrato del comité. El nombre del archivo identifica a la persona, así que no copio las rutas. No son capturas del producto.

# Enlaces

Repositorio, según `git remote`: https://github.com/Jsgallardo82/ciced.git

Si ese repositorio de GitHub es privado: no está en el repo. `package.json` tiene `"private": true`. Eso es la marca de npm para no publicar el paquete. No dice si el remoto de GitHub es privado.

URL de despliegue escrita en el repo: `https://cicbed.vercel.app`, en `astro.config.mjs` (`site`) y como valor por defecto de `SITIO_URL` en la función del chat. El comentario de `astro.config.mjs` dice que de ahí salen las URLs absolutas. No hay en el repo un registro de que el deploy esté activo, ni la fecha en que se publicó.

En local, el README dice que `npm run dev` queda en http://localhost:4321.

# Borrador

El sitio se presenta como CICBED 2026. El nombre largo en el contenido es I Congreso Internacional de Ciencias Básicas y Educación. La carpeta se llama semana-ciencias. El README todavía abre con CICED 2026.

Lo armé para la Institución Universitaria de Barranquilla. El contenido nombra a estudiantes, docentes e investigadores. El 30 de septiembre de 2026 medí el sitio del EIEM 8: una sola página, de unos 47.600 px en el celular. Elegí la estructura de portada corta y páginas sueltas. [no está en el repo] qué usaba el comité de este congreso antes de este código.

Quien entra ve el logo, la sede y las fechas del 23 al 27 de noviembre de 2026. La convocatoria está abierta. La inscripción de asistentes está apagada. Las olimpiadas están apagadas. El sitio pide que los buscadores no lo indexen.

Postular no pide cuenta. La persona llena el formulario y recibe un código que empieza por CICBED-2026. El reporte exige un PDF de hasta 20 MB. El póster no. El visitante no puede leer la tabla. Una función de la base inserta el trabajo y devuelve solo el código.

El PDF se sube antes de crear la fila. Si lo hiciera al revés, el autor ya tendría código y el archivo podría no estar. El archivo se nombra con un UUID porque en ese momento el código todavía no existe. El enlace de descarga del panel vence a los 5 minutos. Esa regla está en la migración del 31 de octubre de 2026. La función que está en `schema.sql` todavía no recibe el documento.

El 26 de octubre el nombre pasó de CICED a CICBED. La modalidad ponencia pasó a reporte de investigación. Los códigos viejos se dejan. El 28 de octubre saqué la inscripción de olimpiadas hacia Microsoft Forms y el mismo día volví a abrir el formulario del sitio. Hoy ese formulario no se muestra. Git tiene 43 commits y en todos el autor figura como unknown. [no está en el repo] si trabajé solo. [no está en el repo] cuántos trabajos reales entraron.

# Qué tiene que confirmar el autor

- Si el código lo escribió una sola persona. Git solo muestra el autor `unknown` en los 43 commits. El documento de propuestas menciona un ayudante posible y no da nombre.
- Con quién, si hubo más gente, y qué hizo cada quien. No está en el repo.
- Qué ocurrió entre el 8 y el 25 de octubre de 2026. Esos días no tienen commits.
- Si https://cicbed.vercel.app está publicado, desde qué fecha, y si apunta a este código.
- Si el repositorio de GitHub es privado.
- Si quiere mostrar capturas de la portada, el formulario, el panel y el chat. En el repo no hay ninguna.
- Qué versión cuenta la ficha cuando el README y el código no coinciden: el README habla de 6 usuarios de prueba, de `panel.astro`, de registrarse en `/registro` y de que un alumno externo no puede postular. El código tiene 3 perfiles de demo, no tiene `panel.astro` ni `/registro`, y el formulario dice que está abierto a cualquier institución.
- Si en la base se corrió `schema.sql` y también la migración del 31 de octubre. Sin esa migración, la función no recibe el PDF que el formulario envía.
- Fechas de apertura y cierre de la convocatoria, precio de inscripción y número de participantes. En el repo están como «Por confirmar» o «Pendiente».
