# Nombre del proyecto

LabReview

# Título de la ficha

¿Cumple un informe de laboratorio el formato y las respuestas de la guía?

# Qué problema resuelve

Está pensado para docentes y administradores académicos que revisan informes de laboratorio.
Antes la revisión manual del formato institucional, las unidades SI, la ortografía y las respuestas de la guía consumía mucho tiempo.
El proyecto sube PDF o Word, extrae el texto y pide a un modelo de IA un reporte estructurado con sugerencias.
Responde si el informe se desvía de la plantilla activa y si cada pregunta de la guía quedó respondida y es coherente.
Los resultados se guardan en base de datos y se pueden filtrar por asignatura, experimento, docente y carrera.
Los docentes solo ven sus reportes; los administradores ven todos y configuran la plantilla y los roles.

# Cómo se usa

1. Al entrar en `/`, la app redirige a `/dashboard` si hay sesión o a `/auth` si no.
2. En `/auth` el usuario inicia sesión o se registra con email y contraseña (mínimo 6 caracteres). Los nuevos usuarios entran como **docente** por defecto.
3. Tras autenticarse llega al **dashboard** con dos flujos: **Validar formato** y **Verificar respuestas**, más acceso a reportes guardados.
4. **Validar formato** (`/analyze/format`): sube el informe (PDF, .docx o .txt, máx. 10 MB), espera extracción y análisis IA, revisa el reporte y completa asignatura, experimento, docente y carreras; luego guarda.
5. **Verificar respuestas** (`/analyze/questions`): sube informe y guía de preguntas, la IA verifica respuestas y aspectos de calidad; mismo formulario de metadatos y guardado.
6. **Reportes** (`/reports`): listado con filtros; detalle en `/reports/$id`.
7. Rol **admin** (`/admin`): pestaña de plantilla (archivo + criterios de secciones) y pestaña de usuarios (cambio de rol admin/docente). Sin plantilla activa, el dashboard avisa a docentes y admins.

# Qué se construyó

**Frontend:** React 19, TanStack Start/Router, TanStack Query, Tailwind CSS 4, componentes shadcn/Radix, Vite 7, preset Nitro para **Vercel** (`vite.config.ts`).

**Backend/datos:** Supabase (auth email/contraseña, PostgreSQL con RLS, Storage en buckets `templates` y `submissions`). Tablas `profiles`, `user_roles`, `format_templates`, `reports` (definidas en `.lovable/plan.md` y migraciones en `supabase/migrations/`). Función `has_role` security-definer.

**IA:** Vercel AI SDK (`ai`), modelo por defecto `google/gemini-3-flash-preview` vía Lovable AI Gateway o, alternativamente, APIs Gemini/OpenAI (`src/lib/ai-gateway.server.ts`). Análisis en español con salida JSON parseada en servidor (`src/lib/analysis.functions.ts`).

**Extracción de texto en cliente:** `pdfjs-dist`, `mammoth`, `.txt` (`src/lib/text-extract.ts`), para no depender de runtimes solo Node en el worker (documentado en `.lovable/plan.md`).

**Descartado en la primera versión** (`.lovable/plan.md`): reset de contraseña, exportar reportes a PDF, OAuth con Google.

**Reto difícil (con evidencia):** sacar texto de PDF/DOCX en el navegador y enviar solo texto al servidor para el análisis IA; implementación en `src/lib/text-extract.ts` y motivación en `.lovable/plan.md`. Complemento: parsear JSON fiable desde la respuesta del modelo (`parseAiOutput` en `src/lib/analysis.functions.ts`).

# Números

- **66** commits en el historial git (`git rev-list --count HEAD`).
- Límite de subida de archivos: **10 MB** (`src/lib/file-validation.ts`).
- Calificación global sugerida por la IA: escala **0–100** (`src/lib/analysis.functions.ts`).
- Roles de aplicación: **2** (`admin`, `docente`).
- Asignaturas predefinidas en enums: **2**; experimentos: **4** (`src/lib/report-enums.ts`).
- Lista de secciones de formato referenciadas: **20** entradas (`SECCIONES_OPTIONS` en `src/lib/report-enums.ts`).
- Migraciones SQL en el repo: **5** archivos en `supabase/migrations/`.
- Usuarios reales, volumen de informes analizados, métricas de producción, precios: **No está en el repo**.

# Línea de tiempo

- **2025-01-01** — Commit inicial de plantilla Lovable `tanstack_start_ts_2026-06-08`. Autor en git: **Lovable**. Parece trabajo automatizado de plataforma, no de un equipo humano numeroso.
- **2026-06-08** — Base de la app y rutas (`49ddac0`, gpt-engineer-app[bot]); corrección de ruta `/` en cliente (`99f862f`, gpt-engineer-app[bot]). Varios commits **gpt-engineer-app[bot]** el mismo día. Parece generación asistida por herramienta.
- **2026-06-08** — Migraciones Supabase iniciales (archivos `20260608181026_…` y `20260608181100_…` en el árbol; fechas en nombres de archivo). Autor del commit no verificado aquí commit a commit.
- **2026-06-10** — Roles admin/docente y `has_role` (`ac76d8b`, `799ae7f`, gpt-engineer-app[bot]); selects/enums en reportes (`51d8b06`); IA, barra de progreso y drag-and-drop (`300bd9f`, gpt-engineer-app[bot]). Autor **unknown**: commit `417e351` «vercel arreglate» (2026-06-10, -0500).
- **2026-06-11** — Metadatos del sitio para publicación (`3950d34`, gpt-engineer-app[bot]).
- **2026-06-12** — Detalle por plantilla en admin (`78424b5`); renombre de ruta admin (`f1409ef`); mejora de admin, análisis y reportes (`952edcc`, autor **unknown**). Resto de commits del día: **gpt-engineer-app[bot]**.

# Imágenes

No hay capturas ni gráficos versionados en el repositorio (búsqueda de `.png`, `.jpg`, `.svg`, etc. sin resultados).

En `src/routes/__root.tsx` hay una URL externa de imagen Open Graph (preview alojada fuera del repo); no es ruta local y no sustituye una captura en el proyecto.

# Enlaces

- **Repositorio:** `https://github.com/Jsgallardo82/lab-report-navigator.git` (remoto `origin` en git).
- **Visibilidad del repo en GitHub:** No está en el repo (el campo `"private": true` en `package.json` solo aplica al paquete npm, no a GitHub).
- **URL de despliegue en producción:** No está en el repo como enlace explícito. Evidencia indirecta: preset Vercel en `vite.config.ts`, commit `417e351` («vercel arreglate»), y nombre de preview `*.lovable.app` dentro de la URL de imagen OG en `__root.tsx` (no es URL canónica del sitio).

# Borrador

Construí LabReview para que un docente suba un informe de laboratorio y reciba un dictamen asistido por IA, en español, sobre formato y calidad.

El flujo de formato compara el texto extraído contra la plantilla activa y criterios de secciones que configura un administrador.

El flujo de preguntas cruza el informe con una guía y marca qué ítems quedaron respondidos y con qué observaciones.

Moví la extracción de PDF y Word al navegador para mandar solo texto al servidor; eso está en el código y en el plan del proyecto.

La IA devuelve JSON con reporte en Markdown y una nota de 0 a 100; tuve que endurecer el parseo porque el modelo a veces envuelve la respuesta en fences.

Guardé cada análisis con metadatos académicos y filtros en listado; los roles separan lo que ve un docente de lo que ve un admin.

No tengo en el repo cifras de uso real ni la URL final de producción: [no está en el repo].

# Qué tiene que confirmar el autor

- Si el trabajo fue solo suyo, solo con Lovable/GPT Engineer, o con más personas fuera de git.
- Qué commits corresponden al autor **unknown** (`952edcc`, `417e351`) y si hubo edición manual entre commits del bot.
- URL pública actual (Vercel, Lovable u otro) y si el repositorio de GitHub es privado o público.
- Si el primer admin se promovió con SQL manual (mencionado en `.lovable/plan.md`) y en qué entorno.
- Capturas para la ficha: no hay en el repo; confirmar si usará la preview OG externa o subirá nuevas imágenes.
- Fechas de uso real del proyecto frente a las fechas de commit (junio 2026 en git).
