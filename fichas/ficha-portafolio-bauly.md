# Bauly

# Título de la ficha
Catalogar una colección con una foto y hablar con una IA que entiende de coleccionismo

# Qué problema resuelve
Bauly es una plataforma para coleccionistas (vinilos, cartas, libros, mangas, cómics, juguetes, videojuegos, autos a escala, etc.) donde cada usuario sube su colección, la comparte y puede comprarla o venderla. Mi parte cubre cómo un usuario entra a la plataforma (login con Google), cómo convierte una foto en una ficha de catálogo usando IA, cómo habla con el asistente de IA del sitio, cómo se comunica en privado con otro usuario, cómo se ve el perfil de una tienda dentro de la misma plataforma, y cómo funciona el sistema de subastas y el panel de administración que vigila todo eso. El proyecto empezó como un proyecto de hackathon llamado "Triasure AI"; yo hice el cambio de nombre a "Bauly" en mi primer commit sobre el repo.

# Qué hice yo
1. Inicio de sesión con Google: boté un botón que llama a `supabase.auth.signInWithOAuth` y una ruta de callback (`app/auth/callback/route.ts`) que intercambia el código por sesión y, si el usuario es nuevo, crea su fila en la tabla `usuarios` con los datos que trae Google (nombre, foto).
2. Landing: el chat de la portada (`HeroChat`) quedó conectado a Gemini para responder preguntas de coleccionismo; más adelante esa lógica se movió a una ruta de servidor (`app/api/gemini/chat/route.ts`) para no exponer la API key en el cliente.
3. Catalogación con foto: construí la ruta `app/api/gemini/scan/route.ts`, que recibe una o más imágenes, las sube a Gemini y devuelve un JSON con los campos del catálogo (título, autor, precio estimado, etc.) ya ordenados según la categoría del ítem.
4. Perfil de usuario: edición de foto de perfil y banner, y ajuste de los datos que se muestran (bio, país, ciudad, seguidores).
5. Mensajería privada: burbuja de chat flotante en todas las páginas, conectada a Firestore (Firebase) para chats 1 a 1 en tiempo real, con contador de mensajes no leídos.
6. Perfil de tienda: una vista distinta para usuarios con `rol = "tienda"`, con banner, logo, catálogo de ítems, filtros por tipo y precio, y botón de seguir/compartir.
7. Carrusel de "ítems en tendencia" dentro del perfil de tienda (versión de escritorio y versión para celular).
8. Rebranding visual: cambio de nombre del sitio, favicons, paleta de colores y assets de marca nuevos.
9. Subastas: página de listado de subastas activas, página de detalle con cuenta atrás, formulario para pujar y formulario para crear una subasta desde un ítem propio, con las reglas de negocio (no pujar tu propia subasta, la puja debe superar la actual, la subasta no puede estar vencida) validadas en el servidor.
10. Panel de administración: una función `requireAdmin()` que solo deja pasar a usuarios con `rol = "admin"`, un cliente de Supabase con `service_role` para acciones que necesitan saltarse las políticas de seguridad (banear usuario, borrar ítem), y las migraciones SQL para soportar eso (baneo e ítems borrados "en papelera" en lugar de borrados de verdad).

Para llegar a la parte de tienda, subastas o panel admin hace falta una cuenta con `rol` igual a `"tienda"` o `"admin"` respectivamente; el resto de usuarios ve el flujo normal de coleccionista.

# Qué construí
**Stack que aparece en los archivos que toqué:** Next.js (App Router) + TypeScript, Supabase (auth con Google OAuth, Postgres, Storage para fotos/banners, y un cliente separado con `service_role` para el panel admin), Firebase Firestore (mensajería en tiempo real, con `runTransaction` y `writeBatch`), Google Gemini a través de `@google/genai` (chat de texto y lectura de imágenes vía `ai.files.upload`), Tailwind CSS, componentes de Radix/shadcn, Embla Carousel y Swiper (uno para el carrusel de escritorio y otro para el de celular), Sonner para notificaciones, y migraciones SQL planas para Postgres (triggers, constraints, índices).

**Qué intenté y descarté:**
- El proyecto se llamaba "Triasure AI" y vivía en `triasure-ai.vercel.app`; en mi primer commit sobre el repo lo renombré a "Bauly IA" (y las imágenes de redes sociales pasaron a apuntar a `bauly.co`).
- El modelo de datos del chat cambió mientras lo probaba: el campo `participants` se volvió `participantsId`, y la colección de Firestore pasó de llamarse `chats` a `ListChats`. Esto se ve en los diffs entre los commits "chat parece que ahora si" y "chat ahora si, de verdad que si".

**El reto difícil:** que dos personas no puedan pujar al mismo tiempo y dejar la subasta en un estado inconsistente. Lo resolví en dos capas: un trigger de Postgres (`sync_subasta_current_bid`) que solo actualiza `current_bid` si la nueva oferta es estrictamente mayor que la que ya hay guardada, y encima de eso la ruta `app/api/auctions/[id]/bid/route.ts` repite esa validación en el servidor antes de insertar la puja (usuario autenticado, subasta activa y no vencida, quien puja no es el dueño, el monto supera el máximo entre precio base y puja actual). Evidencia: `scripts/improve-auctions.sql` y `app/api/auctions/[id]/bid/route.ts`, ambos del commit "actualizaciones graficas y subastas".

# Números
- Límite de conversación del chat de IA: 60 turnos (`MAX_TURNS = 60`, ~30 mensajes del usuario) en `app/api/gemini/chat/route.ts`.
- Configuración del modelo de chat: Gemini `gemini-2.5-flash`, `temperature: 0.6`, `maxOutputTokens: 512`, `topP: 0.95`, `topK: 40`.
- Configuración del escaneo de imágenes: `temperature: 0.3`, campos limitados a 150 caracteres como máximo.
- Rangos de precio usados en el filtro de catálogo de tienda (`ItemFilter.tsx`): menos de $10.000, $10.000–$50.000, $50.000–$100.000, más de $100.000 (pesos colombianos, según el contexto del resto del proyecto).
- Límite de resultados en el listado de subastas activas: 50 (`.limit(50)` en `app/api/auctions/route.ts`).
- Migración de soft-delete (`scripts/add-admin-columns.sql`) añade la columna `deleted_at` a 13 tablas de categorías de ítems.
- 22 commits míos en el repo, entre el 2025-08-31 y el 2026-06-19 (según la fecha de autor que registra git), con alrededor de 10.200 líneas añadidas y cerca de 5.000 eliminadas en total.

# Línea de tiempo
- **2025-08-31** — Renombré el proyecto de "Triasure AI" a "Bauly IA" y actualicé favicons/íconos (`ajustes de colores y favicones`).
- **2025-09-03** — Ajustes de paleta de colores en el layout y en `tailwind.config.ts` (`arreglo de colores`).
- **2025-09-09** — Primer commit grande sobre el repo compartido: ajustes en sign-in/sign-up, botón de Google, limpieza de páginas de carrito/marketplace que no se usaban (`primer commit`).
- **2025-09-14** — Login con Google guardado en la base de datos (crea la fila en `usuarios` si no existe) y chat de la landing conectado a Gemini (`autentificacion con gmail y creacion de usarios database`, `Chatlanding conectado a IA gemini`).
- **2025-09-15 / 09-16** — Edición de foto de perfil y banner, primera versión de la burbuja de chat (sin conexión todavía), ajustes de perfil (`actualizacion de fotos y banner`, `feat chat burbuja, sin conexion aun`, `ajustes del perfil`).
- **2025-09-20 a 2025-09-24** — Mensajería privada con Firebase Firestore en tiempo real, con varias iteraciones sobre el modelo de datos hasta que quedó estable, más contador de mensajes no leídos (`chat parece que ahora si` → `chat ahora si, de verdad que si` → `mejoras chat, aun en pruebas` → `chats ahora, ademas de algunos estilos a los edits`).
- **2025-09-29 a 2025-10-02** — Perfil de tienda: creación, datos adicionales, integración con seguidores, responsividad (`perfiles de tienda`, `mas info de tiendas`, `perfil tienda finalizado`, `responsividad paginas de tiendas`).
- **2025-10-07 y 2025-10-13** — Carrusel de "ítems en tendencia" en el perfil de tienda, primero con Embla y luego una versión propia con Swiper para escritorio/celular (`hot iitems parciales`, `carrusel hot pequeño`).
- **2026-06-18** — Tanda grande de cambios: rutas de IA para chat y escaneo de imágenes movidas al servidor, nuevo set de íconos y assets de marca (`modificaciones iniciales`).
- **2026-06-19** — Sistema de subastas completo (listado, detalle, pujas, creación) y panel de administración (guard de rol admin, cliente con `service_role`, migraciones SQL de soft-ban/soft-delete) (`actualizaciones graficas y subastas`); arreglo de un error de build en la página de explorar (`arreglar build`).

# Imágenes
- `public/newbrand/` (varios PNG de logo/isotipo) — junto al párrafo de "Rebranding visual" en *Qué hice yo*.
- `public/bauly2.png` — junto al mismo párrafo de rebranding.
- `public/hotborder.png` — junto al párrafo del carrusel de "ítems en tendencia".
- `public/bannerdefecto.png` — junto al párrafo de edición de perfil/banner.
- No hay capturas de pantalla de las pantallas de subastas, chat o panel admin en el repositorio.

# Enlaces
- Repositorio: `https://github.com/lufebadeca/bauly` (aparece en uno de mis propios commits, un merge contra esa URL). No está en mis commits si el repositorio es privado o público.
- Despliegue: el código que edité en `app/layout.tsx` usa `https://bauly.vercel.app/` como URL de respaldo y `https://bauly.co` para las imágenes de redes sociales (Open Graph / Twitter card). No está en mis commits si ese dominio está actualmente desplegado y en qué proveedor corre la base de datos de producción.

# Borrador
Entré a este proyecto cuando todavía se llamaba Triasure AI. En mi primer commit sobre el repositorio lo renombré a Bauly y cambié los favicons y la paleta de colores. Después conecté el login con Google: el botón llama a Supabase, la ruta de callback intercambia el código por sesión y, si el usuario es nuevo, crea su fila en la base de datos con el nombre y la foto que trae la cuenta de Google.

Conecté el chat de la portada a Gemini para que respondiera preguntas de coleccionismo, y más adelante construí la ruta que recibe una foto de un objeto, la sube a Gemini y devuelve un JSON con los campos de catálogo ya ordenados según la categoría. Esa ruta vive en el servidor para no exponer la API key en el navegador.

La mensajería privada fue la parte que más iteré. La primera versión fue solo la burbuja de chat, sin conexión. Cuando la conecté a Firestore, el modelo de datos cambió varias veces mientras lo probaba: el campo de participantes se renombró y la colección pasó de llamarse "chats" a "ListChats". Eso quedó registrado en los mensajes de commit: "chat parece que ahora si", luego "chat ahora si, de verdad que si".

Construí el perfil de tienda como una vista separada del perfil normal, con su propio banner, catálogo y filtros, y un carrusel de ítems en tendencia. Más adelante hice el sistema de subastas completo: listado, detalle con cuenta atrás, formulario de puja y formulario de creación. El reto ahí fue evitar que dos pujas simultáneas dejaran la subasta en un estado inconsistente. Lo resolví con un trigger en Postgres que solo actualiza la puja más alta si la nueva es estrictamente mayor, y repetí esa misma validación en la ruta del servidor antes de guardar la puja.

Por último hice el panel de administración: una función que verifica que el usuario tenga rol de administrador, un cliente de Supabase separado con la llave de servicio para las acciones que necesitan saltarse las políticas de seguridad, y las migraciones SQL para soportar el baneo de usuarios y el borrado "en papelera" de ítems en las trece tablas de categorías. [no está en sus commits] si alguna de estas partes ya está probada en producción con usuarios reales.

# Qué tiene que confirmar el autor
- Si el dominio `bauly.co` / `bauly.vercel.app` está actualmente desplegado y activo, y si el repositorio en GitHub es privado o público.
- Las fechas de los commits muestran el reloj del autor en el momento del commit (hay un salto entre 2025-10-13 y 2026-06-18); conviene confirmar si ese salto corresponde a una pausa real del proyecto o a un ajuste de fecha/hora del equipo.
- Si tiene capturas de pantalla propias de: el flujo de login con Google, el chat privado en uso, el perfil de tienda, la página de subastas o el panel de administración, para añadirlas (no están en el repositorio).
- Si quiere mencionar el rol exacto que tuvo en el equipo (cuántas personas eran, si lideró alguna de estas features) — el repo no lo dice y esta ficha no debe inventarlo.
