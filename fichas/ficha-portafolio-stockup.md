# Nombre del proyecto

StockUp

El nombre está en la portada (`app/page.tsx`), en el título del layout (`app/layout.tsx`) y en el manifiesto (`public/icons/manifest.json`). La carpeta del repo se llama igual.

# Título de la ficha

¿Qué hay en casa, qué se acabó y qué dice el ticket?

# Qué problema resuelve

Los términos de servicio dicen que StockUp sirve para gestionar el inventario del hogar: listas de productos, fechas de caducidad y recordatorios (`public/terms-services.html`, última actualización 17 de septiembre de 2025).

La política de privacidad lo describe como inventario de despensa y nevera, con recordatorios de vencimiento y listas de compra (`public/privacy-policy.html`). Ese texto no dice cuántas personas lo usan ni qué hacían antes.

Qué hacía esa persona antes: No está en el repo.

La pregunta que el código responde es concreta. Qué productos están marcados en stock y cuáles no. Cuánto suman por cantidad. Cuándo caduca cada uno. Qué productos se leen en la foto de un ticket.

# Cómo se usa

Hace falta una cuenta. La portada muestra el botón «Iniciar sesión con Google» (`components/auth-button.tsx`). El inicio pide tres permisos: calendario, correo y perfil. Si Firebase ya tiene sesión, la portada redirige a `/protected`. Si no hay sesión, `/protected` devuelve a `/`.

No hay roles con nombre. Una lista es `Personal` o `Grupo`. Guarda `CreatorId` y `Members`. Para sumar a alguien, se pega su identificador. El encabezado deja copiar el identificador de quien está dentro.

Al entrar, la persona ve sus listas o el texto «¡Aún no tienes ninguna lista!». Puede crear una lista, o crearla y pasar directo a la cámara. Dentro de una lista puede agregar un artículo a mano, subir o tomar una foto, cambiar la cantidad, marcar el artículo, editar la fecha de caducidad, borrar el artículo o borrar la lista.

El interruptor en pantalla dice «In stock» y «Out of stock». El campo en el código se llama `inFridge`. La cabecera de la lista cuenta los dos grupos y, si hay precio, suma precio por cantidad.

También puede abrir el asistente (en el código se llama Stocky), ver logros, cambiar el tema, expandir o colapsar todas las listas y cerrar sesión.

Siguen en el repo las pantallas de correo y contraseña del starter: `/auth/login`, `/auth/sign-up`, recuperar contraseña y cambiar contraseña. El middleware de Supabase redirige a `/auth/login` si hay variables de Supabase y no hay usuario de Supabase (`lib/supabase/middleware.ts`). Si esas variables no están, el middleware no hace esa redirección. Si en el despliegue están definidas: No está en el repo.

# Qué se construyó

El `package.json` declara Next.js (`next`, rango `latest`), React 19, TypeScript, Tailwind CSS, Firebase 11, `@supabase/ssr` y `@supabase/supabase-js`, `@google/genai`, `googleapis`, `next-auth` 5 beta, `@vercel/analytics`, `next-themes`, Radix, Headless UI, Heroicons y Lucide. `components.json` indica shadcn/ui, estilo `new-york`. El layout carga la fuente Geist, el tema y Vercel Analytics. El manifiesto pide instalación como aplicación (`display: standalone`).

Los datos de listas, usuarios, logros y chats van a Firestore: colecciones `listastock`, `users`, `achievements` y `chats`. La sesión de la portada y de `/protected` es Firebase Auth. El README sigue siendo el del starter «Next.js and Supabase Starter Kit». Esas pantallas de Supabase no se borraron.

La foto del ticket se manda a `gemini-2.5-flash` (`app/protected/[listaId]/page.tsx`). El modelo debe devolver JSON con nombre y precio. Si el precio no es mayor que cero, ese producto no entra. La fecha de esos productos queda a un mes. El chat usa `gemini-2.0-flash` y se presenta como Stocky, con las listas de la persona y los últimos 10 mensajes (`components/main/chatbot.tsx`).

El commit `premium` (19 de julio de 2025, autor sebastian) no agrega un plan de pago. El diff agrega el botón de cámara al crear la lista y la redirección a la página de la foto.

El botón «Nuevo recordatorio» está comentado en `components/main/headerarea.tsx`. El commit es `sin calendar`, 26 de septiembre de 2025, autor sebastian. En `app/api/calendar/events/route.ts` la creación del evento está comentada. `components/AddEventForm.tsx` sigue en el repo y llama a esa ruta. Al agregar un artículo a mano, `components/main/Listastock.tsx` solo escribe en consola «Creando evento en Google Calendar» y no llama a la API. La foto sí llama a `createCalendarEvent` (`lib/googleCalendar.ts` y `app/api/calendar/route.ts`) si hay token en el navegador.

El reto que el historial muestra es el calendario, junto con la lectura del ticket. Entre el 24 de julio y el 11 de agosto de 2025 hay commits de sebastian con estos mensajes: `calendar y mejora analisis`, `eventos hp vida`, `eventos parciales`, `errores post`, `eventos desde fotos`. El 26 de septiembre el botón manual queda comentado. La ruta de la foto sigue activa.

`app/api/auth/[...nextauth]/route.ts` no usa la librería NextAuth. Responde con una redirección a la URL de Google armada en `lib/google.ts`.

# Números

Usuarios, listas guardadas y métricas de uso: No está en el repo.

Los contadores de logros nacen en cero en el código: listas creadas, listas borradas, artículos registrados, artículos borrados y grupos. Las metas de cada logro están en la colección `achievements` de Firestore, no en el repo.

Commits en git: 45. Autores: sebastian, 44. Jsgallardo82, 1. Primera fecha: 2 de junio de 2025. Última fecha: 26 de septiembre de 2025.

Términos: última actualización 17 de septiembre de 2025. Política de privacidad y política de cookies: «Last updated September 17, 2025».

En el código, no como cifra de negocio: el formulario de un artículo propone la caducidad a 7 días (`components/main/NewItemDialog.tsx`). La foto pone la caducidad a 1 mes. El evento de calendario dura 1 hora, zona `America/Santiago`, con avisos a 24 horas y a 60 minutos (`app/api/calendar/route.ts`). El ejemplo dentro del prompt de la foto usa el precio 2500. No es un precio del producto StockUp.

Precios de StockUp: No está en el repo.

# Línea de tiempo

Cada commit tiene un solo autor. El 2 de junio de 2025 hay dos autores. El resto de las fechas de abajo tienen un solo autor en git.

- 2 de junio de 2025. Jsgallardo82. `Initial commit`. Entran 54 archivos del starter Next.js y Supabase, incluido el README actual. Un autor en ese commit.
- 2 de junio de 2025. sebastian. `manejo de articulos en lista`. 9 archivos, 9170 inserciones. El mismo día ya hay dos autores. Git no dice si trabajaron juntos o uno después del otro.
- 5 de junio de 2025. sebastian. `funcionando bacano`, `depurando ando`, `build activo`. Un autor.
- 6 de junio de 2025. sebastian. `perfil de usuario`, `detalles, detalles`, `lista para la matanza`, `redeploy`, `ahora si pues si`. Un autor.
- 10 de junio de 2025. sebastian. `paletas de colores`. Un autor.
- 12 de junio de 2025. sebastian. `color negro solucionado y bordes`, `sistema de logros`, `merge con main`, `main deploy`, `manifiesto`, `detalles layout`. Un autor. El mensaje `merge con main` no nombra a otra persona.
- 13 de junio de 2025. sebastian. `manifiesto si o si`, `cambio iconos`, `icono problem`. En `cambio iconos` se reemplazan `app/opengraph-image.png` y `app/twitter-image.png`. Un autor.
- 27 de junio de 2025. sebastian. `analiticas y actualizacion al item`. Un autor.
- 17 de julio de 2025. sebastian. `cambios y calculadora`, `intento IA en listas`, `prueba`, `sera que si`. Un autor.
- 18 de julio de 2025. sebastian. `ahora si`. Un autor.
- 19 de julio de 2025. sebastian. `premium`. El diff es el botón de cámara al crear la lista. Un autor.
- 24 de julio de 2025. sebastian. `calendar y mejora analisis`, `eventos hp vida`, `eventos parciales`. Un autor.
- 26 de julio de 2025. sebastian. `autentificacion y responsividad`, `errores post`. Un autor.
- 27 de julio de 2025. sebastian. `aqui no pasa nada`, `rebock`. Un autor. El mensaje `rebock` no explica el cambio en el texto del commit.
- 11 de agosto de 2025. sebastian. `sin boton`, `eventos desde fotos`, `modificar cantidad`. Un autor.
- 12 de agosto de 2025. sebastian. `modificar fecha`. Un autor.
- 13 de agosto de 2025. sebastian. `cambiar fecha`. Un autor.
- 13 de septiembre de 2025. sebastian. `componentes y chatbot`, `ajustes orden y añadir item`. Un autor.
- 16 de septiembre de 2025. sebastian. `ajustes favicon`. Un autor.
- 17 de septiembre de 2025. sebastian. `politicas`. Ese día coinciden las fechas escritas en términos, privacidad y cookies. Un autor.
- 18 de septiembre de 2025. sebastian. `ahora si policys`. `git show --shortstat` reporta 0 inserciones y 0 borrados. Un autor.
- 26 de septiembre de 2025. sebastian. `sin calendar`. 12 archivos. Es el último commit. Un autor.

Huecos sin commits: del 3 al 4 de junio, del 7 al 9 de junio, el 11 de junio, del 14 al 26 de junio, del 28 de junio al 16 de julio, del 20 al 23 de julio, el 25 de julio, del 28 de julio al 10 de agosto, del 14 de agosto al 12 de septiembre, el 14 y el 15 de septiembre, y del 19 al 25 de septiembre de 2025. Qué pasó en esas fechas: No está en el repo.

# Imágenes

No hay una captura del ticket, del chatbot ni de una lista con artículos.

- `app/opengraph-image.png` y `app/twitter-image.png` son el mismo archivo (el mismo hash). Llegaron en el commit inicial y se reemplazaron el 13 de junio de 2025, commit `cambio iconos`, autor sebastian. Muestran la cabecera ya autenticada: logo, «¡Bienvenido a StockUp!», «Gestiona tus listas de compras», «Expandir todas», «Colapsar todas» y «Ver Logros». La imagen incluye nombre, correo e identificador de una persona. Esos datos no van en esta ficha. Iría junto al párrafo de «Cómo se usa» sobre la pantalla de `/protected`, solo si se tapa la persona.
- `public/icons/android-icon-192x192.png`. Ícono de una lista con el texto «Stock Up». Iría junto al nombre del proyecto. Los demás archivos de `public/icons/` son el mismo ícono en otros tamaños, más favicons.
- `public/achievements/fridge.png`. Dibujo de una nevera. Iría junto al párrafo de logros en «Cómo se usa».
- `public/achievements/list.png` y `public/icons/list.png`. Dibujo de una lista con marcas. El de logros iría junto a ese mismo párrafo. El de `public/icons/` no aparece citado en la portada.

# Enlaces

Repositorio, según `git remote`: https://github.com/Jsgallardo82/stockup.git

Si ese repositorio es privado: No está en el repo. `package.json` tiene `"private": true`. Eso marca el paquete de npm. No dice si GitHub es privado.

URLs de despliegue que sí están en el repo:

- `https://stockup.vercel.app` en `metadataBase` de `app/layout.tsx`.
- `https://stockup-theta.vercel.app` en `public/privacy-policy.html` y en `public/cookie-policy.html`.

Cuál de las dos está vigente: No está en el repo.

El README enlaza `https://demo-nextjs-with-supabase.vercel.app/`. Es la demo del starter, no una URL de StockUp. También indica `http://localhost:3000/` para el arranque local del starter.

# Borrador

El sitio se llama StockUp. La portada dice que maneja listas de compras e inventario. Los términos del 17 de septiembre de 2025 hablan de inventario del hogar, listas, caducidad y recordatorios. Qué hacía la persona antes de esto: [no está en el repo].

La portada entra con Google. El botón pide calendario, correo y perfil. Con sesión de Firebase, la portada abre `/protected`. Sin sesión, `/protected` vuelve a la portada. Una lista es Personal o Grupo. No hay un rol con nombre.

Cada artículo guarda nombre, cantidad, unidad, notas, precio y fecha. El interruptor en pantalla dice In stock y Out of stock. En el código el campo se llama inFridge. Si hay precio, la lista suma precio por cantidad y separa lo que está en stock de lo que no.

La foto del ticket va a Gemini 2.5 Flash. El modelo tiene que devolver nombre y precio. Si el precio no pasa de cero, ese producto no entra. Esos productos quedan con caducidad a un mes. Si hay token de calendario, el código crea un evento a un mes, de una hora, en America/Santiago.

El botón Nuevo recordatorio quedó comentado. El commit es `sin calendar`, del 26 de septiembre de 2025, autor sebastian. La ruta que usa el formulario manual tiene el insert comentado. La ruta de la foto sigue creando el evento. El primer commit es el starter de Next.js y Supabase, el 2 de junio de 2025, autor Jsgallardo82. El README sigue describiendo ese starter.

En git hay 45 commits. 44 llevan el autor sebastian. Uno lleva el autor Jsgallardo82. El último es del 26 de septiembre de 2025. Cuántas personas usan el sitio: [no está en el repo]. Si el remoto de GitHub es privado: [no está en el repo]. En el layout la URL es https://stockup.vercel.app. En la política de privacidad la URL es https://stockup-theta.vercel.app.

# Qué tiene que confirmar el autor

- Si `sebastian` y `Jsgallardo82` son una sola persona o dos. Git solo muestra esos dos nombres.
- Si el resto del trabajo fue de una sola persona. En cada commit de julio, agosto y septiembre el único autor es sebastian.
- Qué pasó en los huecos sin commits, sobre todo del 14 de agosto al 12 de septiembre de 2025.
- Cuál URL está publicada: `https://stockup.vercel.app` o `https://stockup-theta.vercel.app`.
- Si el login por correo de Supabase sigue en uso o solo quedó del starter.
- Si el botón «Nuevo recordatorio» se apagó a propósito el 26 de septiembre de 2025.
- Si quiere una captura del ticket, del chatbot o de una lista con artículos. Esas capturas no están en el repo.
- Si se puede usar `app/opengraph-image.png`. Hoy muestra nombre, correo e identificador de una persona.
- Si el párrafo de despensa y nevera de la política de privacidad describe el problema real. En el archivo parece texto de plantilla.
- El correo y la dirección postal están en las políticas. No se copiaron aquí. Confirmar si se publican.
