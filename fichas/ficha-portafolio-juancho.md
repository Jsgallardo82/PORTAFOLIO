# Nombre del proyecto

Juancho Restrepo (sitio de campaña a la Cámara de Representantes). En `package.json` el nombre del paquete es `web-site-juancho`.

# Título de la ficha

Administrar galería, blogs y noticias desde el propio sitio

# Qué problema resuelve

El producto es el sitio web de campaña de Juancho Restrepo. El visitante ve inicio, sobre mí, proyectos y galería. El contenido (nombre, cargo, texto, foto, redes, blogs, noticias, fotos de galería y mensajes de contacto) vive en Supabase, no en archivos fijos.

La parte que él construyó responde esto: cómo montar esas páginas y, con una sesión iniciada, crear, editar y borrar ese contenido desde el mismo sitio, sin volver al código.

# Qué hice yo

El sitio se recorre sin cuenta. Para editar hace falta iniciar sesión (botón del header). El registro público se comentó después: el modal solo deja entrar.

1. Arranque en React + Vite + TypeScript + Tailwind. Header con logo y menú (Inicio, Sobre Mí, Proyectos, Galería), footer, tarjeta de contacto, hero y un carrusel de posts de ejemplo.
2. Rutas con `react-router-dom`: `/`, `/sobre-mi`, `/proyectos`, `/galeria`. En inicio: hero, últimos posts y contacto. En sobre mí: quién es, noticias y “Vota así”. Sidebar de redes fijo.
3. Ajuste responsive de esas páginas (header móvil, galería, proyectos, sobre mí, inicio).
4. Cliente de Supabase e inicio de sesión (`signIn` / `signUp` / `signOut`). El header escucha `onAuthStateChange` y muestra Entrar o Cerrar sesión.
5. Datos vivos: `main_info` alimenta nombre, cargo, texto, foto y URLs del hero y del sidebar. El formulario de contacto hace insert en `contactos`. Galería lista archivos del bucket `website_assets` carpeta `gallery`. Proyectos y el carrusel del home leen la tabla `blogs` (join con `profiles(full_name)`). Noticias leen `notices`.
6. Con sesión: en Galería, “editar galería” abre un modal para subir o borrar imágenes. En Proyectos, “editar blogs” crea, actualiza o borra filas de `blogs` y sube la foto a `website_assets/blogs`. En Sobre mí, “Editar noticias” hace lo mismo sobre `notices` y `website_assets/notices`.

# Qué construí

Stack que aparece en archivos que él tocó: React 18, TypeScript, Vite, Tailwind CSS, PostCSS, `react-router-dom`, `@supabase/supabase-js`, `react-icons`.

Intentó y descartó (se ve en sus diffs):

- Posts y proyectos de ejemplo (lorem, fechas inventadas, `picsum.photos`) quedaron comentados al pasar a las tablas `blogs` y al storage.
- Galería hardcodeada con `/logo-footer.png`, `/logo-header.png` y `/fondocol.png` quedó comentada al listar `website_assets/gallery`.
- Overlay de video (`FaPlay`) quedó comentado.
- El modal de auth nació con login y registro. En el commit `0ba8801` el registro se comentó y `isLogin` quedó fijo en `true`.
- Dejó un archivo `CarruselPosts copy.tsx` con posts de muestra. No entra en las rutas.

Reto difícil: pasar de maquetas a un panel dentro del sitio. Había que guardar sesión, esconder los botones de edición si no hay usuario, y escribir en tablas y en Storage. Evidencia: `e3c2985` (auth + `src/lib/auth.ts` + `src/lib/supabaseClient.tsx` + `src/components/authModal.tsx`), `0539f61` (`main_info` y `contactos`), `1aa2974` (galería y `blogs`), `0eea622` (noticias), `0ba8801` (subir/borrar galería), `1f72042` (CRUD de blogs), `f071ad8` (CRUD de noticias).

En `auth.ts` un comentario habla de un trigger SQL que copia `full_name` a `profiles`. El SQL del trigger no está en el repo.

# Números

En el home el carrusel muestra 2 blogs: `blogs.slice(0, 2)` (commit `1aa2974`).

No hay conteo de registros, precios ni fechas de corte en sus commits.

# Línea de tiempo

- 2025-12-04 — `b42e73f` Inicia el proyecto con React y Vite.
- 2025-12-05 — `e9b6d69`, `e1a9ec3`, `52e64fe` Header, footer y tarjeta de contacto.
- 2025-12-07 — `8c26dad` Hero, carrusel de posts y `PostCard`.
- 2025-12-09 — `d80c1e8`, `f277939` Encaje de la página principal y Tailwind/PostCSS.
- 2025-12-11 — `ea9559a` Galería y proyectos a partir del Miro. `5a668db` Merge y más componentes.
- 2025-12-12 — `1644ef3` Rutas `/`, `/sobre-mi`, `/proyectos`, `/galeria` y páginas. `97e4e66` Sidebar de redes.
- 2025-12-16 — `d72d9a8`, `80d612e`, `ca19598`, `8764c12` Responsive de galería, proyectos, sobre mí e inicio.
- 2025-12-17 — `f4a7a77` Otra pasada responsive de App, carrusel y `PostCard`.
- 2025-12-18 — `1ec6530` Dependencia `@supabase/supabase-js`. `4c032d1` Merge. `e3c2985` Login y cliente Supabase. `0539f61` `main_info` y formulario a `contactos`.
- 2025-12-19 — `1aa2974` Galería y proyectos/blogs leen la base. `0eea622` Noticias y ajustes de `PostCard` / proyectos.
- 2025-12-22 — `0ba8801` Editar galería (subir/borrar; quita el registro público). `1f72042` CRUD de blogs. `f071ad8` CRUD de noticias.

# Imágenes

No hay capturas de los modales de edición ni del login en el repo.

Imágenes que él agregó y que ilustran el frente público:

- `public/logo-header.png` — junto al párrafo del header / navegación.
- `public/logo-footer.png` — junto al párrafo del footer.
- `public/foto2.png` — junto al hero (antes de leer `main_info.image_url`).
- `public/fondocol.png` — junto a la galería o el fondo de la home.
- `public/logocd.png` — favicon / marca menor.

# Enlaces

- Repositorio origin: https://github.com/code-centre/Web-Site-Juancho.git — `git ls-remote` respondió; no se ve privado.
- En un merge del historial también aparece https://github.com/Jsgallardo82/Web-Site-Juancho
- URL de despliegue en `package.json` (`homepage`): https://code-centre.github.io/Web-Site-Juancho
- En el `index.html` actual hay otra URL de sitio. Ese cambio de metadatos no está en sus commits.

# Borrador

Monté el sitio en React, Vite, TypeScript y Tailwind. Primero salieron header, footer, hero, contacto y un carrusel con posts de muestra. El 12 de diciembre armé las rutas `/`, `/sobre-mi`, `/proyectos` y `/galeria`. Galería y proyectos salieron del Miro. Después ajusté el layout a móvil.

El 18 de diciembre enganché Supabase. El header abre un modal de login y escucha la sesión. Al día siguiente el hero y el sidebar leen `main_info`. El formulario de contacto inserta en `contactos`. La galería lista el bucket `website_assets/gallery`. El home y proyectos leen `blogs`. Noticias lee `notices`.

Los arrays de ejemplo quedaron comentados. La galería dejó de usar tres logos locales. El overlay de video también se comentó.

El 22 de diciembre, si hay sesión, Galería muestra “editar galería”. Ahí se suben o borran archivos. En el mismo commit quité el registro público del modal. En proyectos, “editar blogs” crea, actualiza o borra filas y sube la imagen a `website_assets/blogs`. En sobre mí, “Editar noticias” hace lo mismo con `notices` y `website_assets/notices`. El autor del blog o la noticia se guarda con `user.id`.

El home muestra dos blogs (`slice(0, 2)`). [no está en sus commits] cuántos registros había en cada tabla. [no está en sus commits] una captura del modal de edición.

# Qué tiene que confirmar el autor

- Si la URL que quiere citar es GitHub Pages, el otro dominio del `index.html`, u otra.
- Si el trigger SQL de `profiles` lo escribió él (solo está el comentario en `auth.ts`).
- Una captura de login + “editar galería” / “editar blogs” / “Editar noticias”, porque no está en el repo.
- Si el remoto a citar es `code-centre/Web-Site-Juancho` o `Jsgallardo82/Web-Site-Juancho`.
