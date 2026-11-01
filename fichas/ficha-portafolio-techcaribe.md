# Nombre del proyecto

TechCaribe

En las páginas que él armó, el nombre visible es Tech Caribe Fest 2025 y Ruta TechCaribe. El alt del logo en el hero dice TechCaribe Expo. El `package.json` se llama `my-app`. Él no tocó ese archivo.

# Título de la ficha

Filtrar la agenda del Tech Caribe Fest por salón

# Qué problema resuelve

El sitio es de TechCaribe, el festival del ecosistema tecnológico y empresarial de la región Caribe. El hero del archivo que él editó marca el evento como gratuito. La tarjeta que él escribió llama Ruta TechCaribe al tramo del 8 al 19 de septiembre y le pone el texto "Mas de 20 eventos". La otra tarjeta llama TechCaribe Fest al 20 de septiembre, en la plaza de la paz. Quien entra quiere saber qué hay en cada zona y en cada salón, y en qué orden. La agenda, las experiencias, las noticias y los patrocinadores responden eso. Esas rutas no piden sesión.

# Qué hice yo

El nav que él dejó muestra el logo `public/Techcaribexdecfestsm.webp` y el enlace "TechCaribe Fest 2025" hacia `/`. El enlace "Ruta Tech Caribe" hacia `/eventos` quedó comentado.

En la portada hay dos tarjetas. La de la ruta enlaza a `/ruta-tech-caribe`. La del fest enlaza a `/fest`. Debajo montó las noticias y los patrocinadores. Entre las tarjetas y las noticias también renderizó una sección que ya estaba en el proyecto. El contenido de esa sección no está en sus commits.

`/ruta-tech-caribe` carga en el cliente. Muestra el hero, el título "El Caribe como el nuevo epicentro Tech de Colombia", las tarjetas de eventos y los patrocinadores. Las tarjetas leen `/api/events`. Él les puso la foto de portada y un orden por cercanía a la fecha actual.

`/fest` muestra el mismo título, cuatro escenarios, el carrusel de experiencias, el cronograma de 2025 y los patrocinadores. En el cronograma se elige una zona. Si la zona tiene subzonas, un clic filtra las actividades por ese nombre. El mismo componente, en `/versiones/2024`, muestra la agenda de 2024 con el año 2024.

En el formulario de registro dejó visible solo el rol participante. Speaker, patrocinador, host y voluntario quedaron comentados. El botón "Quiero asistir" del hero, que apuntaba a `/registro?rol=participante`, también quedó comentado. `isEvents` es verdadero solo si la ruta contiene la palabra `eventos`. `/fest` y `/ruta-tech-caribe` no la contienen.

# Qué construí

Next.js con App Router, `next/image`, `next/link` y `next/dynamic`. React con componentes de cliente y `useState`. TypeScript en `src/types/index.ts`. Clases de Tailwind en el JSX que escribió. Iconos de `lucide-react`. Datos en JSON. El carrusel importa Swiper. Swiper ya estaba en `package.json`. Él no modificó ese archivo. Las versiones de las dependencias no están en sus commits.

En `next.config.mjs` agregó dos hosts para `next/image`: `fomo-app-files.s3.us-east-1.amazonaws.com` y un host de Supabase Storage. Las fotos de experiencias salen de ese Storage.

Los iconos de los escenarios no son componentes. El JSON guarda una cadena como `<MicIcon className='w-5 h-5 text-yellow-400' />`. `ClosingEventSection.tsx` y `ClosingEventSectionLink.tsx` sacan el nombre con una expresión regular y buscan el componente en un mapa.

El reto está en la hora. El commit `35c8fe72` (8 de septiembre de 2025) agrega `timeToMinutes` en `src/components/Schedule.tsx`. La función corta la cadena en el primer espacio, separa hora y minutos con `:`, y suma 12 horas si el periodo es PM y la hora es menor que 12. Trata las 12 AM como 0. Las 12 PM no entran en ese caso: `12 % 12` da 0 y la hora queda en 0 minutos. La agenda 2024 que él pasó a `data/scheduleEvent2024.json` incluye la cadena `12:00 PM - 13:30 PM`. La agenda 2025 no tiene una hora de inicio a las 12. En el cubo, el JSON deja `06:30 PM - 07:00 PM` antes de `05:30 PM - 6:30 PM`. También hay una hora `02:00 PM ` con espacio al final. El orden visible sale de esa función, no del orden del archivo.

En `EventsSection.tsx`, el mismo día, el comentario dice que los eventos pasados van al final. El código ordena por `Math.abs(fecha - ahora)`.

Descartó la agenda escrita dentro de `Schedule.tsx`. El 7 de septiembre la dejó comentada. El 8 de septiembre borró ese bloque. El mismo 7 de septiembre importó `Props` desde `react-modal`. Al día siguiente quitó ese import. Las fotos de prensa entraron en PNG. Luego las pasó a WebP y borró los PNG. Dos rutas del JSON siguieron en `.png` hasta el 18 de septiembre. En el registro comentó cuatro roles y dejó participante. El botón del hero lo mostró siempre el 7 de septiembre y lo comentó el 23. El primer clic de subzona no filtraba. El comentario del código decía que la selección quedaba pendiente. El commit siguiente, el mismo 8 de septiembre, sí filtra.

# Números

Agenda 2025, en `data/scheduleEvent2025.json` al commit del 18 de septiembre: 4 zonas y 40 actividades. Por zona: 6, 9, 20 y 5. Zona Business tiene 2 subzonas. Zona Developer tiene 6. Cubo de Cristal y Teatrino tienen la lista de subzonas vacía.

Agenda 2024, en `data/scheduleEvent2024.json`: 5 zonas y 34 actividades. Por zona: 11, 6, 6, 6 y 5.

Ruta TechCaribe: "8 al 19 de septiembre" y "Mas de 20 eventos". TechCaribe Fest: "20 de septiembre" y "plaza de la paz". Esas cadenas están en `data/stages2025ruta.json`.

Experiencias: 4. Dos usan la hora `05:30 - 07:00 PM` y el lugar Cubo de Cristal. Dos usan el lugar Jardin y la hora vacía.

Happy hour en el cronograma del cubo: `05:30 PM - 6:30 PM` y `06:30 PM - 07:00 PM`.

Patrocinadores al commit del 19 de septiembre, en `data/sponsors.json`: 19 logos y 31 aliados. Por nivel: 2 platino, 6 oro, 2 plata, 9 bronce. Antes de su primer cambio, el mismo archivo tenía 5 patrocinadores (3 platino y 2 oro) y 4 aliados.

Noticias: reemplazó 12 notas por 9. Una descripción dice "más de 4.000 asistentes". Dos enlaces llevan la fecha `2025/09/12`. Uno lleva `2025/09/07`. El JSON no tiene campo de fecha.

El carrusel usa `delay: 5000`.

Precios: No está en sus commits. Cuántas personas se registraron: No está en sus commits.

# Línea de tiempo

- 2025-09-07. Creó `/fest` y `/ruta-tech-caribe`. Pasó agendas, zonas y escenarios a JSON. Agregó el nivel plata en patrocinadores. Dejó el botón "Quiero asistir" fuera de la condición del hero y comentó el enlace del nav hacia `/eventos`.
- 2025-09-08. Ordenó charlas y eventos por hora. El año del cronograma pasó a ser un parámetro: 2025 en el fest y 2024 en la versión anterior. Cambió el texto del nav a "TechCaribe Fest 2025". Borró la agenda comentada dentro del componente.
- 2025-09-08. Organizó las actividades por subzona y el clic pasó a filtrar. Un commit posterior, el mismo día, agregó `cursor-pointer` al botón de la subzona. El merge de `feature/techcaribe2025` de ese día no modifica archivos.
- 2025-09-11. En el registro dejó solo el rol participante. Quitó el borde de las tarjetas de patrocinadores. Actualizó la agenda y las zonas. Agregó el host de Supabase en `next.config.mjs`.
- 2025-09-13. Sumó aliados y sus logos.
- 2025-09-14. Actualizó las actividades del fest y sumó logos.
- 2025-09-16. Agregó el happy hour al cronograma.
- 2025-09-16. Reemplazó las notas de 2024 por 9 notas del fest, reordenó el arreglo y pasó las imágenes a WebP. Borró los PNG. Dos entradas del JSON siguieron apuntando a `.png`.
- 2025-09-17. Cambió el logo del nav por `public/Techcaribexdecfestsm.webp`.
- 2025-09-18. Creó el carrusel de experiencias, actualizó aliados y apuntó las dos notas que faltaban a `.webp`.
- 2025-09-19. Agregó dos logos de aliados.
- 2025-09-23. Comentó el botón "Quiero asistir" del hero.

# Imágenes

No hay capturas de la interfaz en sus commits.

Van con el párrafo del nav: `public/Techcaribexdecfestsm.webp`.

Van con el párrafo de noticias:

- `public/noticias/2025/zonacero.webp`
- `public/noticias/2025/libertad.webp`
- `public/noticias/2025/alternativacaribe.webp`
- `public/noticias/2025/notasdeactualidad.webp`
- `public/noticias/2025/atlantico.webp`
- `public/noticias/2025/cuidmedia.webp`
- `public/noticias/2025/universal.webp`
- `public/noticias/2025/adn.webp`
- `public/noticias/2025/heraldo.webp`

Van con el párrafo de experiencias. Están en `data/experiencias.json`:

- `https://rgrjwdrgnwjvvyhjhcpo.supabase.co/storage/v1/object/public/tech-caribe-fest/speakers2025/9.jpg`
- `https://rgrjwdrgnwjvvyhjhcpo.supabase.co/storage/v1/object/public/tech-caribe-fest/speakers2025/8.jpg`
- `https://rgrjwdrgnwjvvyhjhcpo.supabase.co/storage/v1/object/public/tech-caribe-fest/speakers2025/14.jpg`
- `https://rgrjwdrgnwjvvyhjhcpo.supabase.co/storage/v1/object/public/tech-caribe-fest/speakers2025/13.jpg`

Van con el párrafo de patrocinadores: los archivos de `public/logos/` referenciados en `data/sponsors.json` en su commit del 19 de septiembre. Hay una lista de marcas. No copio los nombres.

# Enlaces

Repositorio: https://github.com/code-centre/tech-caribe

Privado. La API pública de GitHub responde 404 sin autenticación. El remoto local sí apunta a ese repositorio.

Despliegue: https://www.techcaribe.co aparece en el repositorio. No está en sus commits.

# Borrador

Entré al sitio de TechCaribe entre el 7 y el 23 de septiembre de 2025. Armé `/fest` y `/ruta-tech-caribe`. En la portada dejé dos tarjetas. La ruta dice del 8 al 19 de septiembre. El fest dice 20 de septiembre, en la plaza de la paz. No hace falta una cuenta para verlas.

El cronograma salió del componente y quedó en JSON. El 8 de septiembre ordené cada lista con la hora de inicio. La función lee la primera hora de la cadena y distingue AM de PM. Las 12:00 PM quedan en 0 minutos. Esa cadena está en la agenda 2024. En la agenda 2025 no hay una actividad que empiece a las 12. En el cubo, el archivo guarda las 06:30 PM antes de las 05:30 PM.

El mismo día mostré las subzonas. El primer clic no filtraba. El commit siguiente filtra por el nombre de la subzona. La zona developer tiene seis salones y 20 actividades. Si el filtro deja la lista vacía, la pantalla dice que no hay eventos para esa subzona.

El 18 de septiembre monté el carrusel de experiencias. Son cuatro. Dos están en el Cubo de Cristal, de 05:30 a 07:00 PM. Una se llama Happy Hour - DJ Set. El cronograma del cubo tiene una actividad con el mismo título, de 05:30 PM a 6:30 PM. Las otras dos experiencias están en Jardin y no tienen hora. El carrusel usa Swiper. Yo no agregué esa dependencia.

Al cerrar patrocinadores el archivo tenía 2 de platino, 6 de oro, 2 de plata, 9 de bronce y 31 aliados. Antes de mi primer cambio había 5 patrocinadores y 4 aliados. Cambié 12 notas de 2024 por 9 del fest. Pasé las fotos a WebP. El JSON de noticias no tiene fecha. Una nota dice más de 4.000 asistentes.

En el registro dejé solo el rol participante. El 23 de septiembre comenté el botón Quiero asistir del hero. El enlace iba a `/registro?rol=participante`.

# Qué tiene que confirmar el autor

- Si las 40 actividades del fest son del 20 de septiembre. Cada actividad no trae fecha.
- El hero, en una línea que él no cambió, dice "del 8 de septiembre al 20 de septiembre". Sus tarjetas dicen del 8 al 19, y el fest el 20.
- Si el orden de las 9 noticias sigue una fecha. El archivo no tiene ese campo. El enlace del 7 de septiembre quedó de último.
- Si vio la actividad de las 12:00 PM de 2024 al inicio de la lista.
- Si quiere una captura de `/fest`, del filtro por salón o del carrusel. No hay capturas de su parte en el repo.
- Si https://www.techcaribe.co era el despliegue en septiembre de 2025.
- Si el repositorio sigue privado.
