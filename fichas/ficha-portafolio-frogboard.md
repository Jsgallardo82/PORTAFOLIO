# Nombre del proyecto

Frog Board.

En la pestaña del navegador y en el manifiesto el nombre es «Frog Board - Tablero Familiar». En el login y en el registro la pantalla muestra «蛙板» y el texto «Sistema de Tablillas de Ranas». La carpeta y el remote se llaman `jiraiya-s-family-board`. El `package.json` se llama `vite_react_shadcn_ts`. El README sigue siendo la plantilla de Lovable y no nombra el producto.

# Título de la ficha

¿Quién de la casa está en casa, y qué misión tiene?

# Qué problema resuelve

Los textos de la interfaz hablan de un hogar y de la familia. El manifiesto dice «organizar tareas familiares». En Hogar, al copiar el código, el aviso dice «Compártelo con tu familia».

Cada miembro tiene una tablilla. El estado es `EN_CASA` o `FUERA`. El panel las muestra juntas. Las misiones son personales o asignadas a alguien del hogar.

Qué hacía esa persona antes de este proyecto: No está en el repo.

No hay un caso, una entrevista ni un usuario descrito fuera de la interfaz.

La pregunta que el código responde es esta: en el hogar activo, quién está en casa o fuera, y qué misiones pendientes o hechas hay.

# Cómo se usa

Hace falta una cuenta. `/` redirige a `/board`. Sin sesión, `ProtectedRoute` manda a `/login`.

Registro (`/register`): nombre de usuario, correo y contraseña. La contraseña pide mínimo 6 caracteres. Si el alta responde bien, un aviso pide verificar el correo y la pantalla vuelve al login. El alta guarda el nombre de usuario en los metadatos de Supabase.

Login (`/login`): correo y contraseña. Si entra, va a `/board`. El fondo de esa pantalla es `/hero.webp`.

La barra de abajo tiene Panel, Mi Tablilla, Misiones, Hogar, Perfil y Salir. Salir cierra la sesión y vuelve a `/login`.

Si la persona no tiene hogares, el Panel dice «Únete o crea un hogar para ver las tablillas». En Hogar puede crear uno con un nombre o unirse con un código de invitación. Quien crea el hogar queda como dueño. La interfaz marca ese rol con la palabra «Dueño».

Con un solo hogar, el selector muestra el nombre. Con varios, deja elegir. El hogar activo se guarda en el navegador bajo la clave `frog-board-active-household`.

Panel: una cuadrícula de tablillas. Cada una muestra el nombre, el avatar y si está en casa o fuera. Solo la tablilla propia se puede pulsar. Al pulsarla, el estado pasa de `EN_CASA` a `FUERA` o al revés. El cambio se guarda en `household_members` y se avisa al resto del hogar.

Mi Tablilla: la tablilla propia del hogar activo, con el mismo cambio de estado.

Misiones: pestañas «Mis Misiones» y «Hogar». Se puede filtrar todas, pendientes o completadas. «Nueva» abre un formulario: título, descripción, tipo personal o asignada, prioridad baja, media o alta, y fecha límite. La asignada pide un miembro del hogar. Al crearla, se envía un aviso. En la tarjeta, un checkbox pasa la misión a completada o a pendiente. Al completarla, también se envía un aviso. En `MissionList.tsx` el comentario dice que, por ahora, el usuario actual puede editar todas las misiones que ve.

Hogar: lista de miembros, estado de cada uno, código de invitación y botón para salir. El dueño puede copiar el código, regenerarlo y expulsar a otro miembro. El código de la expulsión impide expulsarse a uno mismo.

Perfil: cambiar el nombre de usuario y la foto. La foto tiene que ser una imagen de hasta 5 MB.

Al tener sesión, si el navegador soporta avisos y el permiso está en `default`, la app lo pide. Existe `src/pages/NotificationsSettings.tsx`. `App.tsx` no tiene una ruta hacia esa página. `git log -S "NotificationsSettings" -- src/App.tsx` no devuelve commits.

El manifiesto y la configuración PWA piden modo `standalone`, orientación vertical, y atajos a Tablero y Misiones.

# Qué se construyó

El README lista Vite, TypeScript, React, shadcn-ui y Tailwind CSS. El `package.json` añade, entre lo que el código importa, React Router, TanStack Query, el cliente de Supabase, `vite-plugin-pwa`, `web-push`, Zod, react-hook-form y Vitest. Hay una función de Supabase en Deno: `supabase/functions/send-push-notification/index.ts`. Las migraciones SQL están en `supabase/migrations/`. El servidor de desarrollo, en `vite.config.ts`, usa el puerto 8080. El README dice instalar y arrancar con npm. En el repo también están `bun.lock` y `bun.lockb`.

La prueba de `src/test/example.test.ts` solo comprueba que `true` es `true`.

Se intentó y no se quedó:

- El 2026-02-17, commit `242eee9`, autor `unknown`, entraron tres archivos de aviso. `src/api/send-push-notification.ts` importaba `next/server` dentro de un proyecto Vite. `src/api/send-push-notification-v2.ts` decía que no era Next.js y que solo escribía la notificación en el log, a la espera de `web-push`. `src/lib/notifications-fixed.ts` era otro módulo de avisos. Los tres se borraron el 2026-03-02, commit `86f748c`, autor `gpt-engineer-app[bot]`.
- `public/hero.png` se borró el 2026-02-18, commit `d2660d3`, autor `unknown`. En ese mismo commit entró `public/hero.webp`, que es el fondo del login.
- `src/pages/Index.tsx`, la página de la plantilla, se borró el 2026-02-07, commit `a82dbad`, autor `gpt-engineer-app[bot]`.
- `public/sw.js` se borró el 2026-02-18, commit `6ebb498`, autor `unknown`. El archivo volvió a aparecer en el commit `86f748c` del 2026-03-02.

Sigue en el repo, y no envía el aviso: la función SQL `send_push_notification`. En `supabase/migrations/20260217162100_notification_subscriptions.sql` el comentario dice que el envío real iría en una edge function y que, por ahora, devuelve `TRUE`. La migración `20260316122837_180a5f21-18e0-4fb2-aea5-1c0f236547e6.sql` vuelve a dejar esa función en `TRUE`.

El hogar también cambió de forma. El 2026-02-09, migración `20260209105338_0e006627-998e-422b-86dd-edceffb3fcdf.sql`, un hogar era la columna `profiles.household_id`. La expulsión ponía esa columna en nulo (`20260209111654_8b69b934-0155-483a-b2ed-3a2cd5f1ac82.sql`). El 2026-03-16, migración `20260316122815_a74cf5d7-f9c6-43fd-a204-27c4cfdfa433.sql`, se creó `household_members`, se copiaron las filas que ya tenían hogar y `kick_member` pasó a borrar de esa tabla. `src/integrations/supabase/types.ts` sigue describiendo `profiles.household_id`. En las migraciones del repo no aparece un `DROP COLUMN` de esa columna. El código de la app lee y escribe `household_members`.

El `CREATE TABLE` de `missions` no está en las migraciones. La migración del 2026-03-16 cambia políticas de `public.missions` y usa los tipos `mission_type`. La forma de la tabla está en `src/integrations/supabase/types.ts`. Dónde se creó la tabla: No está en el repo.

El reto que el historial repite es el aviso push. La prueba del 2026-02-17 metió rutas que no encajaban con Vite y un envío que solo hacía log. El 2026-03-02 esas rutas se borraron y quedó el service worker más la función Deno. El 2026-03-06 el mismo autor, `gpt-engineer-app[bot]`, volvió a tocar `supabase/functions/send-push-notification/index.ts` en los commits `cbd3185` («Arregló edge push function»), `9cf801e` («Arregló edge function para push») y `37e042a` («Arregló edge push con web-push»). El archivo que queda importa `web-push`, exige `household_id`, avisa a los otros miembros del hogar y borra suscripciones que responden 404 o 410. El 2026-03-16 esa función se volvió a editar para el hogar múltiple (`9f8c365`, `67d6980`).

# Números

No está en el repo.

No hay conteo de usuarios, hogares, misiones, precios ni una fecha de corte de datos.

# Línea de tiempo

Hay 33 commits. `git shortlog` cuenta 26 de `gpt-engineer-app[bot]`, 6 de `unknown` y 1 de `Lovable`. En cada fecha de abajo aparece un solo nombre de autor. En el historial completo aparecen los tres. Git no dice si una persona escribió los mensajes que luego commiteó el bot.

- 2025-01-01. Autor: Lovable. Un autor. Commit `b331aa1`, mensaje `template: new_style_vite_react_shadcn_ts_testing_2026-01-08`. Entra la plantilla Vite, React, TypeScript, shadcn-ui y el README de Lovable. La fecha del commit y la fecha escrita en el mensaje no coinciden. El repo no explica cuál vale.
- 2026-02-07. Autor: `gpt-engineer-app[bot]`. Un autor. El mensaje «Conected to Lovable Cloud» está en `fc9bb07`. Los archivos están en `a82dbad`: perfiles, estados `EN_CASA` y `FUERA`, tablilla, login, registro, panel, mi tablilla, perfil, cliente de Supabase y la primera migración. Se borra `src/pages/Index.tsx`.
- 2026-02-09. Autor: `gpt-engineer-app[bot]`. Un autor. Hogares de un solo `household_id` por perfil, pantalla Hogar, políticas para unirse con código y expulsión de miembros. Commits con archivos: `28d5620`, `700fd99`, `fc3b622`. Mensajes del mismo día: `9651254` («Heredó hogares y UI»), `ff9a969`, `9d19fc4` («Añadió expulsión de miembros»).
- 2026-02-17. Autor: `unknown`. Un autor. `242eee9`, «prueba de misiones y notificaciones»: misiones, suscripciones, service worker, la página de ajustes de avisos y los tres archivos de push que después se borran. `60994d5`, «ahhora si»: `AuthContext.tsx` y `useNotifications.ts`.
- 2026-02-18. Autor: `unknown`. Un autor. `6ebb498`, «mobile babyyy»: iconos, manifiesto y borrado de `public/sw.js`. `d2660d3`, «login hero»: entra `hero.webp` y sale `hero.png`. `ed678d9` y `bbe2655`: iconos de pestaña.
- 2026-03-02. Autor: `gpt-engineer-app[bot]`. Un autor. El mensaje «Add mobile push service worker» está en `0d15aca`. Los archivos están en `86f748c`: vuelve `public/sw.js`, se actualiza la función Deno y se borran `src/api/send-push-notification.ts`, `src/api/send-push-notification-v2.ts` y `src/lib/notifications-fixed.ts`.
- 2026-03-06. Autor: `gpt-engineer-app[bot]`. Un autor. Tres commits de arreglo de la función push (`cbd3185`, `9cf801e`, `37e042a`). `dcdd671`, «Work in progress», añade `bun.lock`.
- 2026-03-16. Autor: `gpt-engineer-app[bot]`. Un autor. Varios commits el mismo día para más de un hogar: tabla `household_members`, selector y avisos por `household_id`. Migración `20260316122815`. Commits `e22aac1`, `a145a99`, `6dc1cd2`, `9f8c365`, `67d6980`, `44241d1`.

No hay commits después del 2026-03-16. Entre el 2025-01-01 y el 2026-02-07, y entre el 9 y el 17 de febrero, el 18 de febrero y el 2 de marzo, y el 6 y el 16 de marzo, git no tiene commits. Esos huecos quedan vacíos.

# Imágenes

No hay capturas de Panel, Mi Tablilla, Misiones, Hogar ni Perfil.

Sirven para la ficha:

- `public/hero.webp`. Dibujo de ranas bajo la lluvia. Es el fondo de `/login` (`src/pages/Login.tsx`). Va junto al párrafo de inicio de sesión en «Cómo se usa». Entró en el commit `d2660d3`.
- `public/icono/appstore.png`. Icono de la rana con una flor y tres ranas pequeñas. Va junto a «Nombre del proyecto». Entró en el commit `6ebb498`.
- `public/badge/appstore.png`. Trazo negro de una huella sobre fondo transparente. `public/sw.js` usa `/badge-72x72.png` como badge del aviso. Va junto al párrafo del reto push en «Qué se construyó».

El resto de `public/icono/` y `public/badge/` son tamaños del mismo icono o del badge. `public/placeholder.svg` viene de la plantilla.

# Enlaces

Remote `origin`, leído con `git remote`: `https://github.com/Jsgallardo82/jiraiya-s-family-board.git`. El README no trae esa URL. Ahí sigue el texto `git clone <YOUR_GIT_URL>`.

Si el repositorio de GitHub es privado: No está en el repo. El `package.json` tiene `"private": true`. Eso es el campo de npm.

URL de despliegue: No está en el repo. El README apunta a `https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID` y dice publicar desde Lovable con Share y Publish. Ese identificador no está sustituido.

# Borrador

El proyecto se presenta como Frog Board. La carpeta se llama `jiraiya-s-family-board`. El README que hay en la raíz sigue siendo el de la plantilla de Lovable.

Una persona se registra con nombre, correo y contraseña. La pantalla le pide verificar el correo. Luego entra y cae en el panel. Si no tiene hogar, el texto le dice que cree uno o que se una con un código.

Cada miembro del hogar activo tiene una tablilla. El estado es en casa o fuera. Solo se puede voltear la tablilla propia. El panel escucha los cambios de `household_members`.

Las misiones son personales o asignadas. La prioridad es baja, media o alta. Al asignar o al completar, el código llama a la función de aviso del hogar.

El primer intento de aviso, el 2026-02-17, metió una ruta de Next.js en un proyecto Vite. Otra ruta solo escribía el aviso en el log. Esas dos, y `notifications-fixed.ts`, se borraron el 2026-03-02. La función SQL sigue devolviendo verdadero sin enviar nada. El envío que queda está en la función Deno con `web-push`. Esa función se volvió a tocar el 2026-03-06 y otra vez el 2026-03-16.

El 2026-02-09 el hogar era una columna en el perfil. El 2026-03-16 pasó a la tabla `household_members`. Cuánta gente lo usa: [no está en el repo]. Qué hacía la casa antes: [no está en el repo]. Si los seis commits firmados como `unknown` son míos: [no está en el repo]. La URL pública: [no está en el repo].

# Qué tiene que confirmar el autor

- Si trabajó solo. Git tiene tres autores: `Lovable`, `gpt-engineer-app[bot]` y `unknown`. No hay otro nombre de persona.
- Si los seis commits del 17 y 18 de febrero, firmados como `unknown`, son suyos, y con qué nombre quiere firmarlos.
- Qué fecha vale para la plantilla: el commit `b331aa1` está fechado el 2025-01-01 y el mensaje cita 2026-01-08.
- Si hay una URL de despliegue. En el repo solo está el placeholder de Lovable.
- Si el repositorio en GitHub es privado. Los archivos no lo dicen.
- Si quiere capturas de Panel, Mi Tablilla, Misiones y Hogar. Esas capturas no están en el repo.
- Cuántas personas o hogares lo usan, y qué hacían antes.
- Si `NotificationsSettings.tsx` se dejó fuera de las rutas a propósito.
- Dónde se creó la tabla `missions`. No hay un `CREATE TABLE` en las migraciones.
