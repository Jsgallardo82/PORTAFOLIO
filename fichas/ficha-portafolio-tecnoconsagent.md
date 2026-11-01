# Nombre del proyecto

Tecnocons-agent — agente inmobiliario (Google ADK). En producto, el asistente público se presenta como **Valeria Torres**, asesora comercial de Tecnocons (`inmobiliaria/agent.py`, `readme.txt`).

# Título de la ficha

Convertir conversaciones del chat web en leads actualizados en Supabase mientras el agente busca proyectos y envía fotos y brochure.

# Qué problema resuelve

Está pensado para una inmobiliaria que ya usa un CRM en Supabase y un front en Vite (`readme.txt`, `.env.example`).

Antes, un prospecto que escribe en el chat deja datos repartidos en mensajes; el equipo tendría que copiarlos a mano a la tabla `leads`.

El backend responde a la pregunta: **¿qué campos del CRM puedo ir llenando turno a turno (nombre, ciudad, presupuesto, temperatura, proyecto de interés) mientras la persona chatea?**

También expone inventario real desde la tabla `proyectos`, fotos firmadas desde Storage y la URL del brochure cuando el modelo invoca las tools correspondientes (`inmobiliaria/crm.py`, `api/supabase_storage.py`, `inmobiliaria/agent.py`).

# Cómo se usa

**Canal documentado en este repo:** el front CRM Vite llama `POST /chat` al API FastAPI en el puerto 8080 (`readme.txt`, `api/main.py`). El cuerpo incluye `session_id`, `message` y opcionalmente `lead_id` y `supabase_token` (`api/schemas.py`).

**Usuario externo (prospecto):** no hace falta token en el request. Al chatear, el API crea o reutiliza un borrador en `leads` ligado al `session_id` (`api/supabase_leads.py`, migración `supabase/migrations/001_chat_session_id.sql`). Valeria saluda, pregunta datos, orienta sobre el proyecto Niza 92 (briefing en el prompt), puede buscar otras propiedades con `buscar_propiedades`, y solo envía fotos o brochure si el cliente confirma (`inmobiliaria/agent.py`).

**Empleado:** si el front envía un JWT válido de Supabase en `supabase_token`, el API usa el agente `asistente_interno` con la tool `buscar_leads`; no crea ni actualiza leads de chat (`api/auth.py`, `api/main.py`, `inmobiliaria/agent.py`).

**Desarrollo sin front:** `adk web` o `adk run inmobiliaria` (`readme.txt`, `CLAUDE.md`).

La cuenta de empleado y el flujo exacto de pantallas del CRM **no están descritos en este repositorio** (solo la integración HTTP y CORS hacia `localhost:5173` en `.env.example`).

# Qué se construyó

**Stack en el repo:** Python 3, Google ADK (`google-adk`), Gemini (`gemini-2.5-flash` en el agente público, `gemini-2.5-flash-lite` en el interno), Pydantic, FastAPI, Uvicorn, httpx hacia PostgREST y Storage de Supabase, pytest (`requirements.txt`, `inmobiliaria/agent.py`, `api/`).

**Backend:** módulo `inmobiliaria/` (agente, schema `InformacionLead`, tools de búsqueda, fotos, brochure y `actualizar_datos_lead`); API `api/main.py` con CORS; persistencia en `api/supabase_leads.py`; estado acumulado y heurísticas de mensaje en `api/lead_session.py` y `api/lead_parse.py`; captura de eventos ADK en `api/chat_runner.py` (`CLAUDE.md` resume el flujo).

**Inventario:** repositorio de propiedades con implementación Supabase, HTTP genérico o mock según variables de entorno (`inmobiliaria/crm.py`).

**Descartado o evitado (evidencia en repo):** cliente oficial `supabase-py` — el comentario en `api/supabase_leads.py` indica PostgREST con httpx. `CLAUDE.md` aún describe `output_schema` y `set_model_response`; el agente actual usa la tool obligatoria `actualizar_datos_lead` y el runner acepta ambos nombres de evento (`api/chat_runner.py`, commit `233ef93` en mensaje: persona Valeria + lead_session + fixes PATCH). `litellm` no figura en `requirements.txt`.

**Reto difícil:** que el lead en Supabase se actualice aunque el modelo no emita siempre el JSON estructurado. Evidencia: extracción desde `function_call` / `actualizar_datos_lead`, fallback parseando texto, hints del mensaje del usuario, merge por sesión, PATCH parcial por turno y validación de enums (`api/chat_runner.py`, `api/lead_parse.py`, `api/lead_session.py`, `api/supabase_leads.py`; tests en `tests/test_lead_parse.py`).

**Fuera de este repo (mencionado en commits):** ajustes de Jira, tabla de leads en el front, dropdown y página de detalles (commit `14b35f9` — el código del front no está aquí).

# Números

- **11** commits en la rama consultada (`git rev-list --count HEAD`).
- Precios y tipología del proyecto **Niza 92** en el prompt del agente (desde $474.000.000 COP, 8 unidades) — datos de producto embebidos, no métricas de uso (`inmobiliaria/agent.py`).
- Usuarios reales, volumen de leads, fechas de corte de producción, precios de servicio: **No está en el repo**.

# Línea de tiempo

| Fecha (commit) | Hecho | Autor en git |
|---|---|---|
| 2026-04-07 | Primer commit (`24ee307`, mensaje: `first commit`) | `unknown` |
| 2026-04-13 | Primeros pasos del agente (`1d8035c`) | `unknown` |
| 2026-04-19 | Más pruebas del agente (`6e4d83d`) | `unknown` |
| 2026-04-28 | Estado descrito como funcionando (`ea1467d`) | `unknown` |
| 2026-04-30 | Nuevas funciones (`4b26c70`) | `unknown` |
| 2026-05-08 | Documentación `CLAUDE.md` y envío de fotos del agente (`7a5aedc`, `d83ce16`) | `unknown` |
| 2026-05-29 | Persona Valeria, asistente interno, `lead_session`, fixes PATCH (`233ef93`) | `unknown` |
| 2026-06-03 | Separación de agentes (`b1cd13d`) | `unknown` |
| 2026-06-05 | Referencia a front de leads, Jira (`14b35f9`) | `unknown` |
| 2026-07-14 | Brochure por tool y respuesta API (`82e193a`) | `unknown` |

En los 11 commits revisados, el nombre de autor configurado en git es siempre **`unknown`**. No hay en el historial otro nombre de autor distinto; no se puede afirmar desde git cuántas personas físicas escribieron el código.

# Imágenes

**No está en el repo** — no hay archivos `.png`, `.jpg`, `.webp` ni capturas versionadas en el árbol del proyecto (búsqueda en el repositorio).

Sugerencia para cuando existan capturas externas:

- Chat con Valeria y respuesta sin JSON visible → sección **Cómo se usa**.
- Consola con `[MERGE] PATCH exitoso` o `structured_lead_saved: true` → sección **Qué se construyó** (persistencia).
- Galería de fotos o botón de brochure en el front → sección **Cómo se usa** (material del proyecto).

# Enlaces

- **Repositorio remoto (git):** `https://github.com/code-centre/Tecnocons-agent.git` (`git remote -v`).
- **Visibilidad del repo (público/privado):** No está en el repo (no hay metadatos de visibilidad en archivos versionados; `gh` no disponible en el entorno de documentación).
- **URL de despliegue en producción:** No está en el repo (solo localhost y placeholders en `readme.txt` y `.env.example`).

# Borrador

Construí un backend de chat para una inmobiliaria que ya tenía Supabase y un CRM en Vite. El front no vive en este repositorio; aquí está el agente, el API y la lógica que escribe en la tabla `leads`.

El asistente público se llama Valeria Torres en el prompt. Debe capturar datos del prospecto mientras conversa, buscar proyectos en la base, y mandar fotos o brochure solo si la persona confirma.

El problema técnico que más me costó fue la persistencia progresiva. El modelo a veces respondía bien en texto y el CRM seguía con placeholders. Añadí captura desde las tools del ADK, parseo de respuestas, heurísticas sobre el mensaje del usuario y estado acumulado por sesión antes de hacer PATCH a PostgREST.

Reemplacé el cliente pesado de Supabase por httpx directo a PostgREST y Storage, según el comentario en el módulo de leads. Separé un agente interno que consulta leads cuando llega un JWT de empleado, distinto del flujo del visitante anónimo.

Las fotos salen como URLs firmadas en el campo `attachments` de la respuesta HTTP; el brochure devuelve `brochure_url`. Eso quedó documentado en el commit que menciona enviar el brochure.

[no está en el repo]: cuántos leads reales se capturaron en producción, ni la URL pública del sitio desplegado.

# Qué tiene que confirmar el autor

- Si todo el backend lo hizo una sola persona o hubo más contribuidores fuera del historial git (todos los commits muestran autor `unknown`).
- Fechas reales de uso en producción o demo con clientes (git solo da fechas de commit).
- Si el repositorio en GitHub es privado o público.
- URL de despliegue del CRM Vite y capturas de pantalla para la ficha (no hay imágenes en el repo).
- Alcance exacto del trabajo de front referenciado en el commit de Jira (`14b35f9`) y en qué repositorio vive ese front.
- Si puede reclamar el proyecto en primera persona del borrador o debe redactarse en plural / por rol en el equipo.
