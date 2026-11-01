# Nombre del proyecto

Mantix.

En la interfaz, el manifiesto y los metadatos el nombre es Mantix. El subtítulo de los metadatos es «Sistema de Gestión de Mantenimiento». La portada dice «Sistema integral de gestión y mantenimiento de activos».

La carpeta del repo también se llama mantix. El `README.md` no usa ese nombre: sigue siendo el texto del starter «Next.js and Supabase Starter Kit».

# Título de la ficha

Saber qué equipo industrial ya se pasó de la fecha de mantenimiento.

# Qué problema resuelve

Es para quien mantiene activos industriales y entra con rol de administrador o de técnico.

El código separa esos dos rótulos. Si `users.role` es `admin`, el panel dice «Administrador». Cualquier otro valor se muestra como «Técnico».

Qué hacía esa persona antes de abrir Mantix no está descrito. En `public/templates/` hay libros de Excel con nombres de órdenes de servicio y fechas anteriores al primer commit. No copio esos nombres.

La pregunta que el panel responde con los datos de `assets` es esta: en cada ubicación, cuántos equipos siguen al día, cuántos vencen en 30 días o menos, y cuántos están vencidos o sin fecha.

La orden de servicio guarda la inspección, dos fotos y un PDF. El conteo de órdenes hechas no está en el repo.

# Cómo se usa

Hace falta una cuenta. El alta pide correo y contraseña, con mínimo de 6 caracteres. El texto de éxito pide revisar el correo para verificar. El inicio de sesión lleva a `/protected`. Quien ya tiene sesión y abre `/` es redirigido a `/protected`. Olvidar la contraseña y cambiarla también están en el código.

El middleware obliga a iniciar sesión solo en rutas que empiezan por `/protected`. Las rutas `/ordenDeServicio/` no entran en esa redirección.

Al entrar, el panel saluda con el rol y el nombre guardado en `users`. Muestra el total de filas de `assets`, los mantenimientos con estado `completed`, los de estado `pending`, una barra por cada uno de los últimos 6 meses y la fecha fija `2025-06-30`. Hay un enlace a «Dashboard de Ubicaciones». El botón «Generar Reporte» de ese panel solo se pinta si el rol es `admin`.

En ubicaciones hay una tarjeta por valor de `ubicacion`. Al pulsarla se listan los activos de esa ubicación. Cada activo deja editar sus datos o pulsar «Crear nueva orden».

La orden depende del texto de `ubicacion`. Si es `UPS`, abre el formulario UPS. Si es `Plantas eléctricas`, hay que elegir encendido o apagado. Si es `Transferencia`, abre transferencias. El resto abre el formulario general.

En el formulario general se marcan el tipo de servicio, listas de verificación, una descripción y una observación. Se pueden adjuntar una foto de antes y una de después. Al guardar, inserta en la tabla `general`, sube las fotos al bucket `assets` y dispara la descarga del PDF. En esas pantallas de orden la barra de navegación se oculta.

Existe otra página, `/ordenDeServicio`, con botones a órdenes. No encontré un enlace del panel hacia esa página. Dos de sus botones apuntan a rutas que ya no tienen carpeta.

Cerrar sesión está en la barra cuando la ruta incluye `protected`.

# Qué se construyó

El `package.json` y el código usan Next.js, React 19.0.0, TypeScript 5.7.2, Tailwind CSS 3.4.17, componentes al estilo shadcn/ui (`components.json` y Radix), Supabase (`@supabase/ssr` y `@supabase/supabase-js`) para la sesión, las tablas y el storage, `next-themes` con tema claro por defecto, `exceljs` con `axios` para el reporte, y `html2pdf.js` para el PDF del formulario general.

El primer commit dice que salió de `https://vercel.com/new`. El README sigue explicando ese starter, no Mantix. En `components/` siguen archivos de ese starter, como el tutorial y el botón de deploy.

`pdf-lib` entra en el commit `4a098f9` («excel report working no errors», Luis, 2025-05-25). La ruta del Excel usa `exceljs` y lee `public/templates/base.xlsx`. No hay un import de `pdf-lib` en las páginas.

`@react-pdf/renderer` y `html2pdf.js` entran juntos en el commit `0ff9409` («descarga pdf boton», sebastian, 2025-07-23). `next.config.ts` nombra a `@react-pdf/renderer`. El formulario llama a `html2pdf.js`. No hay un import de `@react-pdf/renderer` en las páginas. El botón suelto de «Descargar PDF» está comentado. El PDF se pide dentro del botón que también guarda.

Las páginas `himoinsaOn` e `himoinsaOff` se crean en los commits `86b3ed7` y `1ee53f6` (Gabriel Landinez). El commit `eb29989` (Gabriel Landinez, 2025-06-10) es el que git marca al borrar `himoinsaOn/[idAssets]/page.jsx` y `himoinsaOff/[idAssets]/page.jsx`. El mismo día el log asocia las rutas `plantaElectrica`. El 2025-06-15, sebastian, en `2482775`, entran `plantaOn` y `plantaOff`. El menú `app/ordenDeServicio/page.jsx` sigue enlazando a `/ordenDeServicio/himoinsaOn` y `/ordenDeServicio/himoinsaOff`.

El reto que el repo deja escrito es sacar el PDF de un formulario largo. El commit `bf6db9c` (sebastian, 2025-06-12) se llama «arreglos esteticos y formato pdf» y toca `app/ordenDeServicio/general/[idAssets]/page.jsx`. El commit `0ff9409` cambia ese mismo archivo en cientos de líneas. La función `handleDownloadPDF` clona el formulario, mete CSS de tamaños y saltos de página, y guarda un A4 vertical con `html2pdf.js`.

Otro fallo queda en los mensajes de commit. `26a68f1` (sebastian, 2025-06-11) se llama «error del hook use solucionado» y reescribe la página de activos. Hoy esa página es un client component y el archivo trae el comentario de quitar el `async`. `a7eff28` (sebastian, 2025-06-17), «solucionando problema del page de las fases», solo añade `export const revalidate = 0` cuando esa página usaba el cliente de Supabase del navegador.

Las fotos también cambian de sitio según los mensajes. El 2025-05-30 Luis escribe «saving pictures in DB». El 2025-06-15 escribe «imagen guardada en carpeta nueva ordenId» y «upload pictures working for both before and after». El código actual sube el archivo a storage, ruta `${id}/${moment}.${extension}`, bucket `assets`.

`components/imageUploader.tsx` muestra el texto «Procesando con IA» y el alt «Carátula de vinilo». No hay otro flujo de IA en el repo.

# Números

No hay en el repo un conteo de usuarios, de sesiones ni de filas reales de la base. Esos totales se calculan al abrir el panel. No hay precios.

Sí hay constantes y nombres de archivo:

- Umbral de «próximo mantenimiento»: 30 días. Está en el dashboard de ubicaciones y en la tarjeta del activo.
- El gráfico arma 6 meses hacia atrás.
- La tarjeta «Próximo Mantenimiento» muestra el texto fijo `2025-06-30` en `app/protected/page.tsx`. No sale de la base.
- La tarjeta «Mantenimientos Completados» dice «Último mes». El número que recibe es el total de filas con `status === 'completed'`, sin filtro de fecha.
- Bordes de la tarjeta de ubicación: 80 %, 50 % y 1 % de activos al día.
- Contraseña de alta: mínimo 6 caracteres.
- Hay 47 commits, del 2025-05-08 al 2026-01-25.
- En `public/templates/` hay libros cuyos nombres traen órdenes 15, 19 y 20, «20KVA», «Diciembre 2024» y «Febrero 2025». Son nombres de archivo. No son un conteo de uso de la app. Uno de esos nombres incluye un cliente o una sede: no lo copio. La ruta del reporte solo abre `base.xlsx`.

# Línea de tiempo

El log tiene seis nombres de autor: Jsgallardo82, sebastian, Gabriel Landinez, Luis, javierPatin y `unknown`. En varios días hay más de un autor. No parece trabajo de una sola persona. No hay correos en esta lista.

- 2025-05-08. Jsgallardo82. «Initial commit». El mensaje dice que se creó desde `https://vercel.com/new`. Un autor ese día.
- 2025-05-09. sebastian. «estructura del proyecto». Un autor.
- 2025-05-10. sebastian. «las card de fases y assets». Un autor.
- 2025-05-11. Gabriel Landinez. «service orders forms». Crea `app/ordenDeServicio/himoinsa/page.jsx`. Un autor.
- 2025-05-12. sebastian. «enrutado dinamico de las fases». Un autor.
- Del 2025-05-13 al 2025-05-21 no hay commits.
- 2025-05-22. Gabriel Landinez, «database insert». sebastian, «mapeo correcto de las fases y assets». Dos autores.
- 2025-05-25. Gabriel Landinez inserta el formulario UPS. Luis deja el botón de reporte y el commit «excel report working no errors». Dos autores.
- 2025-05-26. Gabriel Landinez. «assets/customers hook - insertar himoinsa on y off en base de datos». Crea las páginas himoinsa on y off. Un autor.
- Del 2025-05-27 al 2025-05-29 no hay commits.
- 2025-05-30. Luis. Vistas distintas para admin y técnico, fotos, componente de imagen y cambios al Excel. Un autor ese día.
- 2025-06-01. sebastian. «actualizacion de las cards». Un autor.
- 2025-06-02 no hay commits.
- 2025-06-03. Gabriel Landinez. Formularios de inspección y órdenes asignadas a cada activo, más un merge. Un autor.
- Del 2025-06-04 al 2025-06-08 no hay commits.
- 2025-06-09. javierPatin. «feat: actualización de diseño UI/UX». Un autor.
- 2025-06-10. Gabriel Landinez, navegación entre activos y formularios. javierPatin, diseño del dashboard y un merge. Dos autores. Este día git marca el borrado de las páginas himoinsa con `[idAssets]`.
- 2025-06-11. sebastian, error del hook. javierPatin, navbar y formularios de autenticación. Dos autores.
- 2025-06-12. sebastian. «arreglos esteticos y formato pdf». Un autor.
- 2025-06-13. sebastian. Tres commits de botón de fases, fondo de tarjeta y otro arreglo. Un autor.
- 2025-06-14 no hay commits.
- 2025-06-15. Luis: tema claro forzado, id de orden, fotos antes y después, vista móvil. sebastian: «ordenes». Dos autores.
- 2025-06-16. javierPatin, gráficos y estadísticas del dashboard. sebastian, «dando forma a las ordenes de servicio». Dos autores.
- 2025-06-17. sebastian. «solucionando problema del page de las fases» y otro commit «comito». Un autor.
- Del 2025-06-18 al 2025-07-22 no hay commits.
- 2025-07-23. sebastian. «descarga pdf boton». Un autor.
- Del 2025-07-24 al 2026-01-24 no hay commits.
- 2026-01-25. El autor en git es `unknown`. Mensaje: «reviviendo a mantix». Toca la página de activos, el dashboard de fases y `package-lock.json`. Un autor ese día. Quién es esa persona no está en el mensaje.

# Imágenes

No hay capturas del panel, de las tarjetas ni de los formularios.

- `public/opengraph-image.png`. Captura de la portada, con el logo de Mantix y un logo de colaboración. Va junto al primer párrafo de «Cómo se usa». El archivo de Twitter es la misma portada.
- `public/twitter-image.png`. La misma captura. `app/layout.tsx` la usa como imagen de Twitter. Mismo párrafo.
- `public/images/mantix-logo.png`. Logo de la portada y del alta. Va junto a «Nombre del proyecto».
- `public/mantix-logo.png`. Logo que pinta el dashboard de ubicaciones. Va junto al párrafo de las tarjetas por ubicación.
- `public/images/pp-logo.png`. Logo de la línea «En colaboración con» y de la cabecera del formulario. No copio el nombre que trae el `alt`. Va en ese mismo párrafo de la portada solo si el autor confirma que se puede publicar.
- `public/images/signin.png`. Ilustración genérica con el texto «Sign In». No encontré una página que la importe. No ilustra una pantalla de Mantix.
- `public/icon/`. Favicons y el manifiesto. No muestran el producto.

# Enlaces

Repositorio en git: `https://github.com/Jsgallardo82/mantix.git`.

Si es privado no está declarado en el repo. `package.json` tiene `"private": true`: eso es la marca de paquete npm, no la visibilidad en GitHub. Una consulta sin sesión a la página de ese repositorio respondió 404.

URL de despliegue escrita en `app/layout.tsx`: `https://mantix.vercel.app/`.

El README enlaza `https://demo-nextjs-with-supabase.vercel.app/`. Es la demo del starter, no una URL de Mantix dentro del código de la app.

# Borrador

Mantix es el nombre que sale en la portada. El README sigue hablando del starter de Next.js y Supabase. El primer commit, el 8 de mayo de 2025, dice que el repo nació desde Vercel.

Lo armamos entre varias personas. Git tiene seis nombres de autor. El último commit, el 25 de enero de 2026, firma como `unknown`. [no está en el repo] quién es.

El panel parte los activos por ubicación. Si la fecha de `proximo_mto` ya pasó, o no hay fecha, cuenta como fuera de tiempo. Si faltan 30 días o menos, cuenta como próximo. Si faltan más, cuenta como al día. El técnico abre el activo y llena la orden que corresponde a ese texto de ubicación.

La tarjeta de mantenimientos completados dice «Último mes». El número es el total con estado `completed`, sin cortar por fecha. La fecha del próximo mantenimiento en esa misma pantalla está escrita a mano: `2025-06-30`. El gráfico de los seis meses sí lee `completed_at`.

El PDF del formulario general se llevó dos commits, en junio y en julio de 2025. El código clona la página, le mete CSS y la baja con `html2pdf.js`. En el mismo commit de julio también entra `@react-pdf/renderer`. No hay un import de esa librería en las páginas. El botón suelto de descarga quedó comentado.

Las páginas de planta encendida y apagada reemplazan a otras rutas que git marca como borradas el 10 de junio de 2025. El menú viejo sigue apuntando a esas rutas. Cuántas órdenes se han guardado de verdad: [no está en el repo].

# Qué tiene que confirmar el autor

- Si la ficha la firma una sola de las personas del log, o todas. Los nombres que git muestra son Jsgallardo82, sebastian, Gabriel Landinez, Luis, javierPatin y `unknown`.
- Quién es el autor `unknown` del 2026-01-25.
- Si el repositorio de GitHub es privado. El repo no lo dice. La página pública respondió 404.
- Si `https://mantix.vercel.app/` sigue siendo el despliegue que quiere citar.
- Si trabajó en los huecos sin commit: 13–21 de mayo de 2025, 27–29 de mayo, 2 de junio, 4–8 de junio, 14 de junio, 18 de junio–22 de julio, y 24 de julio de 2025–24 de enero de 2026.
- Qué hacía el técnico antes de Mantix. Solo hay plantillas Excel anteriores al primer commit.
- Conteos reales de usuarios, activos y órdenes. No están en el repo.
- Si quiere publicar `public/images/pp-logo.png` y la captura de portada, porque muestran un logo de un tercero.
- Una captura del panel, de las tarjetas o de un formulario. En el repo no hay ninguna.
- Si los libros de `public/templates/` que no son `base.xlsx` se pueden mostrar. Uno lleva un nombre de cliente o de sede.
