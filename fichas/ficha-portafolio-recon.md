# Nombre del proyecto

RECON — Reportes de Convivencia y Normativa Escolar.

Así aparece en `index.html`, `public/manifest.json` y la landing (`src/pages/LandingPage.tsx`). El README usa otro nombre: Docente Alerta. Ese mismo nombre sale en `src/components/PaymentRequiredView.tsx`. La carpeta del repo se llama `docente-alerta`.

# Título de la ficha

Redactar el reporte de convivencia con la Ley 1620 y el manual del colegio

# Qué problema resuelve

Es para docentes, rectores, administradores de colegio y directores de grupo. También hay un rol `superadmin` para gestión global.

Antes, el flujo que describe el propio producto es redactar a mano un reporte formal, citar el manual de convivencia y la Ley 1620, y luego compartirlo para firma. La landing lo dice así: crear reportes disciplinarios con IA, vincular el manual de la institución y llevar historial de incidentes.

La pregunta concreta que responde el código: dado un estudiante, un grado y una descripción de hechos, ¿qué texto formal sale, con tipo de falta (Leve / Grave / Gravísima), artículo del manual y ruta de atención según Ley 1620 / Decreto 1965?

El director de grupo ve alertas cuando un estudiante acumula faltas. El umbral está en el código: 3 leves, o 1 grave, o 1 gravísima (`src/components/AlertBanner.tsx`, `src/components/StudentAlertBadge.tsx`).

Hay listas de estudiantes, docentes y colegios en los paneles. No copio esos nombres.

# Cómo se usa

Hace falta cuenta. El registro pide correo, contraseña (mínimo 6 caracteres) y, si es signup, nombre. Tras crear cuenta, el texto de la UI pide confirmar el correo (`src/pages/AuthPage.tsx`).

Roles que despacha `src/pages/Index.tsx`: `superadmin`, `admin`, `rector`, `docente`, `directorGrupo`.

Paso a paso, según el código actual:

1. Quien abre `/` sin sesión va a `/welcome`. Ve la landing de RECON, contadores que vienen de la edge function `public-stats`, y botones de contacto. Los botones de “Iniciar sesión” y “Registrarse” están comentados en `LandingPage.tsx`. Las rutas `/login`, `/login/:colegioSlug`, `/signup` y `/signup/:colegioSlug` siguen existiendo.
2. El login general (`/login` sin slug) es solo para administradores del sistema. El login de colegio usa el slug del tenant y comprueba que el usuario pertenezca a ese colegio (`src/contexts/AuthContext.tsx`).
3. Tras entrar, `Index.tsx` mira el rol y el campo `has_paid` del colegio. `superadmin` entra siempre. Si el colegio no tiene pago, aparece `PaymentRequiredView`. Los roles `docente`, `directorGrupo`, `admin` y `rector` pueden entrar aunque aún no tengan tenant.
4. `superadmin` ve `SuperAdminDashboard` (colegios, importación CSV de estudiantes, usuarios, panel de BD). `rector` ve `RectorDashboard` con pestaña de nuevo reporte. `admin` ve el mismo dashboard sin esa pestaña. `docente` y `directorGrupo` entran a `MainApp`.
5. En `MainApp`, la primera vez sale `WelcomeScreen`. Luego la barra inferior: Nuevo, Historial, Estadísticas, Ajustes. `directorGrupo` tiene además Dirección.
6. En Nuevo: elige grado, elige alumno de la lista, describe los hechos, pulsa generar. Eso llama a `generate-report`. El resultado se puede editar, guardar, firmar en canvas, exportar a PDF y compartir.
7. En Historial: busca y filtra por grado, tipo de falta y fechas. Comparte un link con caducidad. El visitante abre `/share/:token` sin cuenta y puede firmar.
8. Desde el detalle de un estudiante, rector o director de grupo puede ir a `/seguimiento/:reporteId` (compromisos y bitácora). Esa ruta pide sesión.

# Qué se construyó

Stack que sí aparece en `package.json`, README y `ARCHITECTURE.md`:

- Frontend: React 18, TypeScript, Vite 5.
- UI: shadcn/ui, Tailwind CSS, Radix.
- Estado: React Context (`AuthContext`) y React Query.
- Formularios: react-hook-form y Zod.
- Backend: Supabase (Auth, PostgreSQL, Edge Functions en Deno, Storage, RLS).
- Offline: IndexedDB (`src/lib/offlineStorage.ts`, base `recon_offline`).
- IA: edge function `generate-report` llama a Lovable AI Gateway con el modelo `google/gemini-3-flash-preview` y tool calling.
- PDF: `jspdf` en cliente; `parse-pdf` en servidor.
- Gráficos: Recharts.
- Tests: Vitest y Testing Library. El único test del repo (`src/test/example.test.ts`) comprueba `true === true`.
- Deploy: Vercel (`vercel.json`). README pide Node.js 20+ y `npm`. Puerto de desarrollo: 8080.

Qué se intentó y se descartó, con evidencia:

- Tabla `school_settings`: commits del 2026-03-08 (`Eliminated school_settings y añadí manual convivencia a colegios`, `Refactor colegios remove settings`). El manual quedó en `colegios`.
- `has_paid` se movió de `profiles` a `colegios` (commits del 2026-03-08: `Migrated has_paid field`, `Move has_paid to colegios`).
- Campos viejos de perfil: `Eliminated school fields`, `Removed old profile fields` (2026-03-08).
- `curso_asignado` pasó de un valor a `text[]` (commits del 2026-03-12: `Migrated curso_asignado to array`).
- Lockfiles de bun, yarn y pnpm: el README los declara ignorados. `ARCHITECTURE.md` todavía lista `bun.lockb`.
- Login y signup en la landing: el JSX está comentado en `LandingPage.tsx`.
- URL de Vercel en `.env` versionado: de `https://docente-alerta.vercel.app` a `https://recon-xi.vercel.app/` (commit `env vercel nuevo`, 2026-03-09, autor git `unknown`).
- Hook `useOfflineReports` (`src/hooks/useOfflineReports.ts`): escribe en IndexedDB si no hay red. Ninguna vista lo importa. `NewReportView` y `HistoryView` hablan con Supabase en directo. `ARCHITECTURE.md` describe el guardado offline en el formulario; el archivo actual no lo hace.
- `ARCHITECTURE.md` dibuja “OpenAI para IA, etc.” El código de `generate-report` usa Lovable + Gemini.

El reto difícil, con evidencia: alinear el texto del reporte a la Ley 1620 y al manual, y devolverlo estructurado (tipo, artículo, markdown). Está en `supabase/functions/generate-report/index.ts`. Los commits del 2026-01-31 lo nombran: `prueba funcion report` (autor git `unknown`), `Mejoró generate-report IA` e `Integró Ley 1620 en prompt` (autor git `gpt-engineer-app[bot]`). El 2026-02-01 el bot dejó `Imposed fixed report format`.

Otro bloque difícil, también fechado: pasar de un colegio suelto a multi-tenant con RLS, roles y pago. El 2026-03-08 hay decenas de commits del bot (`Add colegios table`, `Define tenant-aware RLS policies`, `Add superadmin dashboard`). El 2026-03-18 el autor git `unknown` dejó `revisar el tenant en los reportes compartidos`.

# Números

Usuarios: No está en el repo.

Colegios o estudiantes cargados: No está en el repo. Hay listas en la app; no hay cifras fijas.

Reportes totales: No está en el repo. `public-stats` los cuenta en runtime. La landing arranca en 0 hasta que responde esa función.

Precios: No está en el repo. Existe “pago de activación”. No hay monto.

Fechas de corte que sí están:

- Plantilla inicial: 2025-01-01 (commit de Lovable).
- Primer commit de producto: 2026-01-15.
- Último commit en `main`: 2026-05-26.
- `ARCHITECTURE.md`: generado 18 de marzo de 2026; última actualización 26 de mayo de 2026.

Cifras de producto que sí están en código:

- Cinco roles.
- Contraseña mínima: 6 caracteres.
- Cache de colegio: 5 minutos (`colegioService.ts`).
- Caducidad de un link compartido: 1, 7, 30 o 90 días, o sin expiración. El valor por defecto en la UI es 7 (`ShareReportDialog.tsx`).
- Alerta de leves: a partir de 3 (`AlertBanner.tsx`).
- Gráficas de rector y dashboard: últimos 6 meses.
- Puerto de desarrollo: 8080.
- Node: 20+.
- Commits en `HEAD`: 232.
- Autores git: `gpt-engineer-app[bot]` 208, `unknown` 22, `Edgardo Baena` 1, `Lovable` 1.

# Línea de tiempo

Hechos que git o el README sostienen. No relleno huecos.

- 2025-01-01. Plantilla `vite_react_shadcn_ts`. Autor git: Lovable. Parece una sola cuenta de plantilla.
- 2026-01-15. Conexión a Lovable Cloud. Autor git: `gpt-engineer-app[bot]`. Parece trabajo de esa cuenta bot.
- 2026-01-16. Gateway de IA real y endpoint `parse-pdf`. Autor git: `gpt-engineer-app[bot]`.
- 2026-01-26 a 2026-01-27. Prompt, base de datos y registro. Autor git: `unknown`. Parece una sola persona con ese nombre de autor.
- 2026-01-31. `generate-report` y Ley 1620. Autores git: `unknown` y `gpt-engineer-app[bot]`. Parece más de una cuenta.
- 2026-02-01. Formato fijo del reporte, filtros, selector de colegio. Autores git: `unknown` y `gpt-engineer-app[bot]`.
- 2026-02-03. Logo en el PDF y filtro por fechas. Autor git: `gpt-engineer-app[bot]`.
- 2026-02-04. Welcome, tablero de estadísticas, modo oscuro/claro. Autor git: `gpt-engineer-app[bot]`.
- 2026-02-06. Soporte offline, audit logs y links para compartir. Autor git: `gpt-engineer-app[bot]`.
- 2026-02-12 a 2026-02-13. Firmas, `vercel.json`, formato del PDF. Autor git: `unknown`. Parece una sola persona con ese nombre de autor.
- Del 2026-02-14 al 2026-03-05 no hay commits.
- 2026-03-06. Firmas. Autor git: `gpt-engineer-app[bot]`.
- 2026-03-07. Landing pública y `public-stats`. Tres commits seguidos de CORS. Autor git: `gpt-engineer-app[bot]`.
- 2026-03-08. Tabla `colegios`, se elimina `school_settings`, roles, RLS, pago, SuperAdmin, importación CSV. Autores git: `gpt-engineer-app[bot]` y `unknown`. Parece más de una cuenta.
- 2026-03-09. Dashboard rector, `tenant_id` en reportes, firma pública, manifest, URL de Vercel, URL de login. Autores git: `gpt-engineer-app[bot]` y `unknown`.
- 2026-03-11. Admin unificado con dashboard de rector. Campo `curso_asignado`. Rol `directorGrupo`. Autor git: `gpt-engineer-app[bot]`.
- 2026-03-12. Envío del reporte por contacto. `curso_asignado` a arreglo. Autor git: `gpt-engineer-app[bot]`.
- 2026-03-13. Conteo de vistas de reportes compartidos. Autor git: `gpt-engineer-app[bot]`. El mismo día, `direccion de grupo`, autor git: `unknown`.
- 2026-03-18. Tenant en reportes compartidos. Autor git: `unknown`. El mismo día, `ARCHITECTURE.md`. Autor git: Edgardo Baena. Parece más de una cuenta. El pie del documento de arquitectura firma “AI Architecture Analyzer”.
- Del 2026-03-19 al 2026-05-25 no hay commits.
- 2026-05-26. Seguimiento de caso (`CaseFollowUp`). Autor git: `gpt-engineer-app[bot]`. Limpieza y “mantener el estado del sitio”. Autor git: `unknown`.

# Imágenes

No hay capturas de pantalla de la app en el repo. No hay gráficos exportados. Hay logos e iconos.

- `public/logorecon.webp` — logo de RECON. Junto al párrafo de nombre y junto a “Cómo se usa” (landing y welcome).
- `public/icon-192.png` — icono de 192 px. Junto al nombre y a la landing.
- `public/favicon/` — favicons. No aportan a la ficha.
- `public/placeholder.svg` — placeholder genérico. No aporta a la ficha.

# Enlaces

- Repositorio: `https://github.com/Jsgallardo82/docente-alerta.git`. El fetch público de esa URL responde 404. El remoto existe y `main` está al día con `origin/main`. El repo parece privado.
- URL de despliegue que sí está en el repo (`.env` versionado, clave `VITE_PUBLIC_URL`): `https://recon-xi.vercel.app/`. Antes, en el mismo archivo, estaba `https://docente-alerta.vercel.app`.
- `ARCHITECTURE.md` usa `colegio1.recon.app` como ejemplo de subdominio. No hay en el repo una confirmación de que esa URL esté desplegada.

# Borrador

El producto se presenta como RECON. El README y la pantalla de pago dicen Docente Alerta. La carpeta del git es docente-alerta.

Hace falta cuenta. Quien entra sin sesión cae en `/welcome`. En esa landing los botones de login y signup están comentados. Las rutas de login siguen vivas. El login general es para `superadmin`. El resto entra por el slug del colegio.

El docente elige grado y alumno, escribe los hechos y llama a `generate-report`. La función usa Ley 1620 y, si existe, el manual del colegio. Devuelve tipo de falta, artículo y un markdown con formato fijo. Eso está en `supabase/functions/generate-report/index.ts`. El 2026-01-31 quedaron los commits `Mejoró generate-report IA` e `Integró Ley 1620 en prompt`.

El 2026-03-08 se tiró `school_settings`. El manual pasó a `colegios`. El pago pasó a `has_paid` del colegio. Ese día el bot dejó RLS, roles y SuperAdmin. El hook `useOfflineReports` existe. Las vistas de nuevo reporte e historial no lo usan. El guardado del formulario va a Supabase en línea.

El visitante de un link `/share/:token` no necesita cuenta. Puede leer y firmar. El director de grupo ve alerta a las 3 leves, o ante una grave, o ante una gravísima. Cuántos colegios o docentes hay en producción: [no está en el repo]. El precio de activación: [no está en el repo].

En git hay cuatro nombres de autor: Lovable, `gpt-engineer-app[bot]`, `unknown` y Edgardo Baena. 208 de 232 commits son del bot. Hay dos huecos sin commits: 2026-02-14 a 2026-03-05, y 2026-03-19 a 2026-05-25. No los completo.

# Qué tiene que confirmar el autor

- Si el trabajo es suyo en solitario o compartido. Git muestra cuatro nombres de autor. 208 commits son de `gpt-engineer-app[bot]`. 22 son de `unknown`. 1 es de Edgardo Baena. 1 es de Lovable.
- Quién es el autor git `unknown` y si quiere firmar la ficha con su nombre real.
- Qué hizo Edgardo Baena además del commit de `ARCHITECTURE.md` del 2026-03-18.
- Qué ocurrió en los huecos 2026-02-14 a 2026-03-05 y 2026-03-19 a 2026-05-25. Git no lo dice.
- Si `https://recon-xi.vercel.app/` es la URL que quiere mostrar. En el historial de `.env` también aparece `https://docente-alerta.vercel.app`.
- Si hay una captura de la landing, del formulario de reporte, del PDF o del dashboard de rector que quiera usar. En el repo no hay capturas de la UI. Solo logos: `public/logorecon.webp` y `public/icon-192.png`.
- Cuántos colegios, docentes o reportes hay de verdad, y cuál es el precio. Eso no está en el repo.
