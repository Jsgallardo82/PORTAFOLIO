# Nombre del proyecto

Total-App.

El título de `index.html`, el de la landing y el README usan ese nombre. La carpeta y el remoto se llaman `smart-fit-coach`. El `package.json` se llama `vite_react_shadcn_ts`.

# Título de la ficha

Qué toca entrenar hoy, y si el socio en riesgo es esta cuenta.

# Qué problema resuelve

Es para quien entrena y para quien administra el gimnasio. La app está en español y el README la piensa para el móvil, en el gimnasio.

Quien entrena abre el sitio, deja su perfil y recibe la rutina del día. Antes de la taxonomía de `DISENO-COACH.md` la app era «rutinas de gimnasio»: el prompt usaba nivel y edad, y nadie los rellenaba, así que asumía principiante y edad desconocida. Una serie solo podía estar hecha o no hecha, así que la rutina sabía que hubo pecho y no con cuánto.

El administrador marca el pago a mano y lee una lista de deserción. Esa lista la escribe un script de Python que no está en este repo. Mide asistencia física. `MEJORAS.md` (2026-10-08) dice que la planilla tiene unos 470 socios y la app 15 cuentas, y que alguien con alto riesgo que entrena en casa no se está yendo: el modelo solo no puede verlo.

La pregunta de la persona es qué entreno toca hoy, con su objetivo, su material, sus límites y lo que levantó la vez anterior. La pregunta del administrador es cuál de esas cuentas es cuál socio de la planilla.

# Cómo se usa

Hace falta una cuenta. El acceso de Supabase tiene registro, inicio de sesión y recuperación de contraseña (`src/pages/Auth.tsx`). Si el correo de confirmación está activo, el registro deja una pantalla de «revisa tu correo».

1. Abre la landing. Si ya hay sesión, va a `/dashboard`. Si no, «Comenzar Ahora» lleva a `/auth` y «Ya tengo cuenta» a `/auth?mode=login`.
2. Con sesión y sin onboarding, entra en `/onboarding`. Los pasos son: sobre ti, objetivo, cómo entrenas, tu semana (se puede saltar), limitaciones (se puede saltar) y metas (se puede saltar). El compañero es un paso final, también saltable, y solo si las columnas de la mascota existen en el perfil.
3. Con el onboarding hecho y `has_paid` distinto de verdadero, se queda en `/verification-pending`. Esa pantalla no muestra un importe. Muestra un teléfono y un botón de WhatsApp escritos en el código, y la dirección «Visítanos en nuestras oficinas». Escucha el perfil por Realtime y, si la pestaña está visible, vuelve a preguntar cada 30 segundos. También hay un botón «Comprobar». La salida es cerrar sesión.
4. Un administrador cambia `has_paid` en el panel. Entonces la persona entra al dashboard.
5. El dashboard abre en la pestaña Chat IA. En móvil se cambia de pestaña deslizando. En escritorio hay barra lateral. Las pestañas de cualquier cuenta son Perfil, PRs, Ranking, Chat IA y Ofertas. La de Admin solo aparece si el rol es administrador.

En el chat hay una sesión por día. Se genera la rutina, corre un cronómetro, se marcan series y al terminar se registra el RPE. Se puede decir una marca en texto («hice 80×8 en press de banca») y confirmar una tarjeta que escribe en `personal_records`.

Roles en `user_roles`: `user` y `admin`. El panel los muestra como User y Admin. El administrador ve Métricas, Usuarios, Deserción, Caja, Ejercicios y Ofertas. En Usuarios cambia rol y pago, y revisa cuentas sin vincular a la planilla. En Deserción ve la probabilidad del corte más reciente y puede asignar una fila a una cuenta. En Ejercicios carga la librería, también por Excel o CSV. En Ofertas publica avisos. En Caja ve cifras fijas de libros de ingresos, no una consulta a la base.

`DISENO-COACH.md` dice que solo hay un admin y que es el dueño. No da un nombre. No dice si eso sigue igual después del 2026-08-26.

# Qué se construyó

Stack que está en el repo:

- Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui (Radix).
- React Router v6, TanStack Query, framer-motion, Embla.
- Supabase: auth, Postgres con RLS, migraciones y dos edge functions en Deno (`generate-workout` y `workout-chat`).
- `vite-plugin-pwa`. Vitest y Testing Library. Zod, React Hook Form, Recharts, `xlsx`.
- El modelo de la rutina, en `generate-workout`, es `google/gemini-3-flash-preview`. El del chat, en `workout-chat`, es `google/gemini-2.5-flash`. Los dos llaman a `https://ai.gateway.lovable.dev/v1/chat/completions`. La clave va en los secrets de la función (`LOVABLE_API_KEY`). No está en el código.
- Hay `package-lock.json` y `bun.lock`. El README dice que Lovable escribe el de Bun y commitea en `main`.

El proyecto nació en Lovable. El primer commit es de Lovable, con el mensaje `template: new_style_vite_react_shadcn_ts_testing_2026-01-08`.

Se intentó y el repo dice que se descartó o se retiró:

- `react-markdown`, por el peso de remark/unified. Quedó un parser propio en `src/lib/chat-markdown.tsx`.
- El streaming del chat. `MEJORAS.md` lo deja pendiente: el mismo endpoint tiene que poder devolver texto o una herramienta.
- `fitness_test_results` y la tabla `diagnostic_workouts`. Se leían y nada los escribía, o quedaron huérfanos. La migración `20260826140000` los borra.
- Los temas «blanco» y «negro» como eje único. Pasaron a color (`data-theme`) más modo claro/oscuro (`data-mode`).
- Vincular socios por nombre de forma automática. `src/lib/name-match.ts` solo ordena candidatos. El comentario dice que dos socios pueden llamarse igual y que un vínculo mal hecho cuelga la probabilidad de una persona sobre la cuenta de otra.
- Guardar el vínculo en `churn_scores`. Esa tabla tiene una fila por cliente y por fecha de corte. El vínculo quedó en `profiles` (`client_link` y `client_id`), para no revincular a todo el mundo cada semana.
- Guardar la etapa de la mascota. Sale del número de entrenos en cada lectura. `DISENO-MASCOTA.md` también fija una imagen por especie. En el último commit, `petImageUrl` apunta a `/pets/${species}.webp`. En el árbol de trabajo, sin commit, eso cambió a una ruta por etapa. Ver la lista de confirmación.
- Foto de perfil como misión. No hay subida de archivos ni avatar.
- Embarazo, postparto y rehabilitación como objetivo. `DISENO-COACH.md` los deja fuera. La rehabilitación queda como límite, no como objetivo.
- Exportar `training_limitations`, `coach_memory` y `ai_context_notes`. `MEJORAS.md` lo da por decidido y no hecho: son datos de salud y un Excel sale de la app.

El reto que el repo demuestra es la fecha. Tres fallos de la misma clase:

- La racha siempre valía 1. Al marcar el entreno, el de hoy quedaba el primero de la lista y el bucle lo comparaba con ayer, así que cortaba en la primera vuelta. El bonus por constancia no se había otorgado. Quedó en `src/lib/streak.ts`. `MEJORAS.md`, punto 30, dice que hay 15 tests. El archivo de test tiene 15 llamadas `it`.
- `new Date('2026-08-26')` es medianoche UTC. En UTC-5 cae en el día anterior. El mismo documento lo señala en la racha, en los recordatorios y en la fecha de corte de deserción (`MEJORAS.md`, puntos 29, 30 y 41).
- Los recordatorios no se crearon nunca. El día de hoy iba en español (`lunes`) y el horario en inglés (`monday`). `MEJORAS.md`, punto 29.

Otro límite escrito con la misma fuerza: el esquema no se podía reconstruir. `personal_records` y `offers` se crearon en la base alojada y no en `supabase/migrations/`. Lo recogen las migraciones `20260310000000`, `20260310000100` y `20260310000200`. El comentario de `offers` lo dice. Lovable, además, fusionó dos migraciones del 2026-09-06 en `20260907033921`. `MEJORAS.md`, punto 42, dice que se borraron las copias paralelas y se dejó la que sí se ejecutó.

El 2026-10-27 el autor `unknown` commitea «Arreglar el bloqueo del onboarding por las columnas del compañero». `petColumnsAvailable` en `src/types/pets.ts` explica el fallo: el onboarding escribía las columnas de la mascota en el mismo `update` que `onboarding_completed`, la sentencia entera fallaba y una cuenta nueva no podía terminar.

# Números

Cuentas y socios, en momentos distintos. No son la misma foto:

- Unos 470 socios en la planilla y 15 cuentas en la app. `MEJORAS.md`, sexta tanda, 2026-10-08. `ChurnLinkDialog.tsx` repite las 15 cuentas.
- 14 usuarios traducidos de `goal` a `primary_goal`, ninguno en `null`. `DISENO-COACH.md`, fase 1, fecha escrita 2026-08-26. No hay un commit ese día.

Precio de la suscripción: No está en el repo. `MEJORAS.md`, punto 11, dice que precios y métodos de pago no están definidos, confirmado el 2026-08-26. La pantalla de verificación no muestra un importe. La tabla `offers` guarda `price` como texto. La migración no inserta filas. El «$120.000» del comentario es un ejemplo de formato, no una tarifa cargada.

Fecha de corte de una medición real de deserción: No está en el repo. Existe la columna `fecha_corte`. No hay filas de ejemplo. Acierto, AUC u otra métrica del modelo: No está en el repo. El script de Python no está en el repo.

Cifras fijas de caja, en pesos colombianos, en `src/components/dashboard/AdminPanel.tsx`. El comentario dice que vienen de libros diarios (2021 solo enero, 2023–2025, no hay 2022), que el saldo es el de la planilla y que no entran en el modelo de deserción. No hay un importe de enero de 2021 en el código.

Ventas por categoría:

- Entrenamientos y mensualidad: 298.073.200
- Proteínas y suplementos: 22.097.800
- Agua embotellada: 12.270.700
- Bebidas hidratantes: 5.297.400
- Dulces y snacks: 1.314.800

Años con doce meses, entradas y salidas:

- 2023: 106.012.200 y 38.261.409
- 2024: 126.319.600 y 91.059.407
- 2025: 103.092.200 y 74.196.390

Egresos:

- Servicios públicos: 71.476.159
- Nómina: 67.258.000
- Inventario de mostrador: 35.292.751
- Mantenimiento y equipos: 16.766.196
- Impuestos y registros: 8.009.600
- Vigilancia y aseo: 5.913.000
- Otros egresos: 165.000

El panel suma esas líneas y resta entradas menos salidas. Esas sumas no están escritas como literales.

Otras cifras que sí están escritas:

- Chunk del dashboard, medido en `MEJORAS.md` punto 25: 1.035 kB a 184 kB, gzip 310 a 54, un 82 % menos. `xlsx` 435 kB y `recharts` 388 kB, el 79 %. El código propio de AdminPanel, 26 kB. El chunk `index`, 522 kB. No hay una medición nueva en un commit posterior.
- Contraste del amarillo: 3,7:1 al 32 % de luminosidad, bajado al 27 % para 5,0:1. `MEJORAS.md`, punto 35.
- Sondeo del muro de pago: de cada 5 segundos a cada 30 segundos. De 12 peticiones por minuto a 2, y a 0 con la pestaña oculta. `MEJORAS.md`, punto 13. En código, `FALLBACK_POLL_MS = 30_000`.
- Tests, en el momento del punto 26 de `MEJORAS.md`: de 11 a 27. Contando llamadas `it` en el código actual: 15 en `streak.test.ts`, 18 en `name-match.test.ts`, 9 en `weekly-goal.test.ts`, 7 en `exercise-key.test.ts`, 14 en `chat-markdown.test.tsx`, 23 en `pets.test.ts`, 9 en `weekday-order.test.ts`, 3 en `db-cast.test.ts`, 9 en `protected-route.test.tsx`, 1 en `example.test.ts`. Total: 108. No ejecuté la suite.
- Catálogo actual: 15 entradas en `ACHIEVEMENTS` y 8 en `MISSIONS` (`src/types/achievements.ts`). `MEJORAS.md`, cuarta tanda, decía 13 logros.
- Etapas del compañero, en el último commit: 0, 7, 14, 30 y 100 entrenos, con lados de 72, 92, 112, 136 y 156 px. El archivo sin commitear sube esos lados a 96, 124, 152, 180 y 208.
- Especies en el último commit: león, lobo, vaca, conejo, canguro, águila. Sin commit, «vaca» pasa a «toro».
- Aviso de racha en peligro desde las 17:00 si la racha es de 2 días o más y hoy no se ha entrenado. `MEJORAS.md`, punto 38.
- Commits en `main`: 203. Autores en git: `gpt-engineer-app[bot]` 180, `unknown` 22, `Lovable` 1.
- Puerto de desarrollo: 8080.

Usuarios activos hoy, entrenos totales en producción, fecha de corte vigente: No está en el repo. El panel de métricas los consulta en vivo y no deja una cifra guardada.

# Línea de tiempo

Cada hecho sale de commits. Los autores son los nombres de git, tal cual. Hay silencios largos. No los relleno.

- 2025-01-01. Un commit. Autor: Lovable. Mensaje: `template: new_style_vite_react_shadcn_ts_testing_2026-01-08`. Una sola identidad. El mensaje lleva dentro la cadena 2026-01-08. Git no dice cuál de las dos fechas es la real.
- 2026-02-01. Autor: `gpt-engineer-app[bot]`. Mensaje: «Conected to Lovable Cloud», más un «Changes». Una sola identidad.
- 2026-02-03 a 2026-02-07. El bot añade selector de músculos por día, métricas corporales, gráfica con Recharts, metas, selector de ejercicios, `ai_context_notes`, fecha de nacimiento y prompts de entreno. El 2026-02-06, `unknown` commitea «cambios esteticos». Varias identidades: el bot y `unknown`.
- 2026-02-09. El bot: ranking. `unknown`: «cambios en los labels». Varias identidades.
- 2026-02-10. `unknown`: componente de secciones y cambio en el mensaje de IA. En el log de ese día solo aparece `unknown`. Una sola identidad, y el nombre no es un nombre.
- 2026-03-02. El bot: centro de notificaciones. `unknown`: «check tras iniciar sesion». Varias identidades.
- 2026-03-09 a 2026-03-14. El bot: sesión, grupos musculares, récords personales, ranking de PRs, panel de admin, imágenes de ejercicios, progreso local del entreno. `unknown`, el 2026-03-10, 11 y 12: cambio de flujo, arreglo del flujo de inicio, slicer entre pestañas, sección admin. Varias identidades.
- 2026-03-16. `unknown`: «paleta de colores». En el log de ese día solo aparece `unknown`.
- Del 2026-03-17 al 2026-05-19 no hay commits.
- 2026-05-20. Solo el bot: «Implementó la Fase 2» y «Reemplazó pestaña IA por Chat». Una sola identidad.
- 2026-05-26. Solo el bot: «Implementó chat con Lovable AI» y «Eliminó pestaña de Entreno».
- 2026-05-28. Solo el bot: «Añadió carga Excel/CSV».
- Del 2026-05-29 al 2026-06-09 no hay commits.
- 2026-06-10 a 2026-06-17. Solo el bot: condición de carrera en auth, flujo del chat, lazy loading, tests de ruta protegida, error tracking, feedback in-app, Helmet por ruta. Una sola identidad. `unknown` no commitea en mayo ni en junio.
- Del 2026-06-18 al 2026-08-28 no hay commits.
- 2026-08-29. `unknown`: «actualizaciones previas al gran cambio» y «gran cambio». El bot: «Reenvió tokens en preview», «Lovable update», «Changes», «Work in progress». Varias identidades.
- 2026-08-31. `unknown`: «despliegue», «pasos b, vienen A», «gran cambio ahora si», «historial». El bot: «Work in progress» y «Lovable update». Varias identidades.
- 2026-09-06. Solo `unknown`: «Peso por serie, gamificación, temas claro/oscuro y safe areas de iOS».
- 2026-09-07. Solo el bot: «Work in progress», «Lovable update», «Changes», «Fixed achievement queries».
- Del 2026-09-08 al 2026-10-07 no hay commits.
- 2026-10-08. Solo `unknown`: «Compañero y misiones, orden de la semana, pestaña de deserción» y «Vínculo entre cuentas de la app y la planilla del gimnasio».
- 2026-10-09. Solo `unknown`: «Asignar desde la lista de deserción a una cuenta de la app».
- Del 2026-10-10 al 2026-10-26 no hay commits.
- 2026-10-27. Solo `unknown`: «Arreglar el bloqueo del onboarding por las columnas del compañero». Es el `HEAD` de `main`.

`MEJORAS.md` y `DISENO-COACH.md` fechan decisiones el 2026-08-26. Ese día no hay commit. No lo pongo como hecho de git.

# Imágenes

No hay capturas de la interfaz. No hay gráficos exportados del modelo. Lo que hay son ilustraciones e iconos.

En el último commit:

- `public/comi leon.png`. Logo de la landing, icono y imagen de Open Graph. El `alt` dice «Comi León, la mascota de Total-App». Es un dibujo, no una pantalla. Iría junto al párrafo de cómo se abre el sitio.
- `public/pwa-192x192.png` y `public/pwa-512x512.png`. Icono de la PWA: una mancuerna verde sobre fondo negro. Iría junto a la frase de que es una PWA. No muestra la app abierta.
- `public/pets/leon.svg`. León geométrico, con `aria-label` «León». Iría junto al párrafo del compañero. `public/pets/CREDITS.md` pide seis WebP (`leon`, `lobo`, `vaca`, `conejo`, `canguro`, `aguila`) y dice que la carpeta está vacía a propósito. Esos WebP no están. El SVG no cumple ese contrato.
- `public/placeholder.svg`. Marco gris de plantilla. No sirve para la ficha.

En el disco, sin commit (siguen sin trackear o solo en el índice):

- Diez JPEG en `public/pets/` con nombre `Gemini_Generated_Image_….jpeg`. Abrí uno: es un lobo dibujado, no una captura. No los usa ninguna ruta del código, que pide WebP por especie. Pesan alrededor de 2 MB cada uno. `CREDITS.md` pide menos de 40 KB y formato WebP. Irían junto al compañero solo si el autor los adopta y los renombra. No los generé yo: ya estaban en la carpeta.
- `public/pets/leon.svg` está renombrado en el índice a `public/pets/leon-1.svg`. El `HEAD` sigue teniendo `leon.svg`.

# Enlaces

Repositorio, en `git remote`: https://github.com/Jsgallardo82/smart-fit-coach

Si ese repositorio es privado: No está en el repo. `package.json` tiene `"private": true`. Eso marca el paquete de npm.

URL de despliegue escrita en el repo: https://totalcoach.vercel.app

Está en `supabase/config.toml` (`site_url`), en `src/lib/auth-preview-redirect.ts` (`PRODUCTION_ORIGIN`) y en `MEJORAS.md`, punto 28. Ese punto sigue sin marcar: dice que el Site URL de Supabase apuntaba al preview de Lovable y que el cambio lo tiene que aplicar Lovable. El repo no dice si eso ya se hizo, ni si la URL responde.

Desarrollo local, en el README: http://localhost:8080

Origen del proyecto, en el README: https://lovable.dev

# Borrador

La app se llama Total-App. El repositorio se llama smart-fit-coach. Es una PWA en español. El README la sitúa en el móvil, en el gimnasio.

Quien llega crea una cuenta. Rellena objetivo, modalidad y límites. Un modelo le devuelve la rutina del día. La ejecuta en un chat, con cronómetro y series. El de la rutina es `google/gemini-3-flash-preview`. El del chat es `google/gemini-2.5-flash`. Los dos salen por el gateway de Lovable.

El pago no es un checkout. Un administrador marca `has_paid`. Hasta entonces la persona espera en una pantalla de verificación. El precio de esa activación [no está en el repo].

La racha siempre devolvía 1. El entreno de hoy quedaba el primero de la lista. El bucle lo comparaba con ayer y cortaba. `new Date` sobre una fecha sola, en UTC-5, cae en el día anterior. Esa cuenta está en `MEJORAS.md`, punto 30. El cálculo quedó en `src/lib/streak.ts`, con 15 tests. Los recordatorios tuvieron el mismo tipo de fallo: el día iba en español y el horario en inglés. No se creó ninguno.

La planilla del gimnasio tenía unos 470 socios. La app tenía 15 cuentas. El modelo que puntúa la deserción no está en este repo. Lo escribe un script de Python, y el script tampoco está. El emparejamiento por nombre solo ordena candidatos. No ata una fila a una cuenta. Dos socios pueden llamarse igual, y un vínculo mal hecho pondría la probabilidad de uno sobre la cuenta del otro.

El diseño del SQL, del onboarding y de los prompts está en este repositorio. Lovable aplica SQL y commitea en `main`. En git hay 203 commits. 180 son de `gpt-engineer-app[bot]`. 22 son de un autor llamado `unknown`. Uno es de Lovable. Quién es `unknown`, y si hubo más gente, [no está en el repo].

# Qué tiene que confirmar el autor

- Si los 22 commits de `unknown` son una sola persona, y con qué nombre quiere firmar. Git no trae otro nombre humano.
- Si trabajó con alguien que no commiteó. Lovable (`gpt-engineer-app[bot]`) sí commitea. `DISENO-COACH.md` reparte el trabajo entre «aquí» y Lovable, y dice que el único admin es el dueño.
- Las fechas que están en `MEJORAS.md` y `DISENO-COACH.md` y no en git. La más clara es el 2026-08-26.
- Si https://totalcoach.vercel.app está sirviendo la app, o si el Site URL de Supabase sigue en el preview de Lovable. El punto 28 de `MEJORAS.md` sigue abierto.
- El precio y el método de pago. No están en el repo.
- Si los ~470 socios y las 15 cuentas siguen vigentes, y de qué día es ese conteo. Los 14 usuarios de la taxonomía son de otro párrafo.
- Si ya se aplicaron las migraciones que `MEJORAS.md` dejó en «sin aplicar»: compañero (`20260909120000`) y vínculo de clientes (`20261008190000`). El commit del 2026-10-27 existe porque el onboarding se rompió al escribir columnas que la base aún no tenía.
- Si el script de Python, su fecha de corte y sus métricas viven en otro sitio y quiere citarlos. Aquí no están.
- Si el gimnasio tiene un nombre que quiera figurar. En el repo no está.
- Si quiere una captura de la interfaz. No hay ninguna. Las imágenes del commit son el logo, el icono de la PWA y `public/pets/leon.svg`.
- Qué hacer con lo que está en disco y no en un commit: diez JPEG de `public/pets/`, el cambio de «vaca» a «toro», las rutas de imagen por etapa, y el renombre de `leon.svg` a `leon-1.svg`.
- Si las cifras de caja pueden salir en una ficha pública. Son agregados de libros del negocio, escritos en `AdminPanel.tsx`.
