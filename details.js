const projectDetails = {
    shark: {
        kicker: 'Shark Caribe',
        title: {
            es: 'Cobrar varias boletas en un pago y marcar cuál QR ya entró',
            en: 'Charge several tickets in one payment and mark which QR already entered'
        },
        paragraphs: {
            es: [
                'El sitio se presenta como Shark Caribe, Pitch Competition 2026. La gran final está escrita para el 25 de noviembre de 2026, en el Hotel Dann Carlton de Barranquilla. El primer commit, del 22 de julio de 2026, es la primera vista del homepage.',
                'La compra pública no pide cuenta. El modal crea la fila pendiente y abre Wompi. Si el pago queda APPROVED, el webhook marca la boleta como pagada, un trigger pone el número y Resend manda el correo con el QR. El comprador vuelve a la página de resultado.',
                'Comprar varias boletas chocó con dos restricciones UNIQUE, la del correo y la del documento. Una fila pendiente de un pago rechazado también dejaba al comprador fuera. El script las quita y comparte una sola referencia de Wompi entre las boletas de esa compra. El webhook tiene que desplegarse antes de ese SQL.',
                'El inventario físico inserta 100 boletas preferenciales y 100 generales ya en estado pagado. El admin las imprime en una hoja de 32 por 47 cm, con un QR distinto por boleta. Esas filas cuentan como pagadas en los reportes, y el QR responde aunque la boleta no se haya vendido en caja.'
            ],
            en: [
                'The site presents itself as Shark Caribe, Pitch Competition 2026. The final is written for 25 November 2026 at Hotel Dann Carlton in Barranquilla. The first commit, on 22 July 2026, is the first view of the homepage.',
                'The public purchase does not ask for an account. The modal creates the pending row and opens Wompi. If the payment is APPROVED, the webhook marks the ticket as paid, a trigger sets the number, and Resend emails the QR. The buyer returns to the result page.',
                'Buying several tickets collided with two UNIQUE constraints, email and document. A pending row from a rejected payment also locked the buyer out. The script removes them and shares one Wompi reference across the tickets of that purchase. The webhook has to be deployed before that SQL.',
                'Physical inventory inserts 100 preferential and 100 general tickets already marked paid. Admin prints them on a 32 by 47 cm sheet, with a different QR per ticket. Those rows count as paid in the reports, and the QR answers even if the ticket was not sold at the box office.'
            ]
        },
        timeline: {
            es: ['22 de julio de 2026. Primera vista del homepage. En git, los 58 commits figuran con el autor unknown.'],
            en: ['22 July 2026. First view of the homepage. In git, all 58 commits are signed unknown.']
        }
    },
    zitter: {
        kicker: 'Zitterbewegung',
        title: {
            es: 'Girar el acoplamiento Ω, guardar el cuaderno y pasar 32 diapositivas',
            en: 'Turn the Ω coupling, keep the notebook, and step through 32 slides'
        },
        paragraphs: {
            es: [
                'El producto se llama Zitterbewegung Engine Lite v6.0. En el encabezado quedó ZITTERBEWEGUNG_ENGINE v6.0. Se entra sin cuenta. El idioma arranca en español y el tema en oscuro. Los dos se guardan en el navegador.',
                'El 12 de mayo saqué el slider de Ω y puse una perilla de 270°. Se gira con el dedo, con la rueda, con un clic en el arco o con un número en hertz. La imagen iba corrida y le dejé un offset de −75°. Un láser se apaga si Ω está por debajo del 1% y se enciende al subir el valor.',
                'El 14 de mayo añadí el fader vertical y abrí el cuaderno desde la barra inferior. Son cinco misiones. El alumno escribe su nombre y las respuestas. El botón dice Descargar PDF, y el PDF sale del diálogo de impresión. El HTML viaja en un iframe del tamaño de una A4. Chrome no pintaba el documento si el iframe no tenía tamaño, así que dejé un respaldo de 600 ms.',
                'El 21 de agosto monté la presentación. Hay 32 láminas. Se pasa con las flechas, la barra espaciadora o los puntos. F pone la presentación a pantalla completa. Las curvas marcadas VIVO son senos dibujados en el canvas. En el reporte comparativo, con Ω = Ω_SB = 5×10⁴ Hz, el error máximo de Magnus en ⟨S₁⟩ es 0,14 μm. La fidelidad atómica que escribí ahí supera 0,996.',
                'El 22 de agosto una ruta desconocida dejó de quedar en blanco: muestra un 404 y un enlace al simulador. La vista 3D pasó a cargarse solo en el cliente. El 8 de septiembre Vercel no compilaba porque el package.json y el lock no coincidían. Dejé Next en ^15.3.9 y React en ^19.1.2. El build limpio terminó con 3 rutas estáticas.'
            ],
            en: [
                'The product is called Zitterbewegung Engine Lite v6.0. The header reads ZITTERBEWEGUNG_ENGINE v6.0. It opens without an account. Language starts in Spanish and the theme in dark. Both are stored in the browser.',
                'On 12 May I removed the Ω slider and put in a 270° knob. It turns with a finger, the wheel, a click on the arc, or a number in hertz. The image sat off-center, so I left a −75° offset. A laser turns off if Ω is under 1% and turns on as the value rises.',
                'On 14 May I added the vertical fader and opened the notebook from the bottom bar. There are five missions. The student writes a name and the answers. The button says Download PDF, and the PDF comes from the print dialog. The HTML travels in an A4-sized iframe. Chrome would not paint the document if the iframe had no size, so I left a 600 ms fallback.',
                'On 21 August I built the presentation. There are 32 slides. You move with the arrows, the space bar, or the dots. F makes it fullscreen. The curves marked VIVO are sines drawn on a canvas. In the comparative report, with Ω = Ω_SB = 5×10⁴ Hz, the maximum Magnus error in ⟨S₁⟩ is 0.14 μm. The atomic fidelity written there is above 0.996.',
                'On 22 August an unknown route stopped rendering blank: it shows a 404 and a link back to the simulator. The 3D view loads only on the client. On 8 September Vercel would not compile because package.json and the lock did not match. I left Next at ^15.3.9 and React at ^19.1.2. The clean build finished with 3 static routes.'
            ]
        },
        timeline: {
            es: [
                '12 de mayo. Perilla de Ω en lugar del slider.',
                '14 de mayo. Fader vertical y cuaderno de cinco misiones.',
                '21 de agosto. Presentación de 32 láminas.',
                '22 de agosto. Página 404 y vista 3D solo en el cliente.',
                '8 de septiembre. El build de Vercel vuelve a compilar.'
            ],
            en: [
                '12 May. Ω knob instead of the slider.',
                '14 May. Vertical fader and a five-mission notebook.',
                '21 August. 32-slide presentation.',
                '22 August. 404 page, and the 3D view loads only on the client.',
                '8 September. The Vercel build compiles again.'
            ]
        }
    },
    ciced: {
        kicker: 'CICBED 2026',
        title: {
            es: 'Recibir un trabajo sin cuenta y devolverle al autor solo un código',
            en: 'Take a paper without an account and hand the author back only a code'
        },
        paragraphs: {
            es: [
                'El sitio se presenta como CICBED 2026. El nombre largo en el contenido es I Congreso Internacional de Ciencias Básicas y Educación, de la Institución Universitaria de Barranquilla. La carpeta se llama semana-ciencias y el README todavía abre con CICED 2026.',
                'Quien entra ve el logo, la sede y las fechas del 23 al 27 de noviembre de 2026. La convocatoria está abierta. La inscripción de asistentes y las olimpiadas están apagadas. El sitio pide que los buscadores no lo indexen.',
                'Postular no pide cuenta. La persona llena el formulario y recibe un código que empieza por CICBED-2026. El reporte exige un PDF de hasta 20 MB. El póster no. El visitante no puede leer la tabla. Una función de la base inserta el trabajo y devuelve solo el código.',
                'El PDF se sube antes de crear la fila. Si fuera al revés, el autor ya tendría código y el archivo podría no estar. El archivo se nombra con un UUID porque en ese momento el código todavía no existe. El enlace de descarga del panel vence a los 5 minutos.',
                'El 26 de octubre el nombre pasó de CICED a CICBED y la modalidad ponencia pasó a reporte de investigación. Los códigos viejos se dejan. El 30 de septiembre medí el sitio del EIEM 8: una sola página, de unos 47.600 px en el celular. Por eso elegí portada corta y páginas sueltas. En git hay 43 commits y en todos el autor figura como unknown.'
            ],
            en: [
                'The site presents itself as CICBED 2026. The long name in the content is the First International Congress of Basic Sciences and Education, of Institución Universitaria de Barranquilla. The folder is called semana-ciencias and the README still opens with CICED 2026.',
                'A visitor sees the logo, the venue, and the dates 23 to 27 November 2026. The call for papers is open. Attendee registration and the olympiads are off. The site asks search engines not to index it.',
                'Submitting a paper does not ask for an account. The person fills the form and receives a code that starts with CICBED-2026. The report requires a PDF of up to 20 MB. The poster does not. A visitor cannot read the table. A database function inserts the paper and returns only the code.',
                'The PDF is uploaded before the row is created. The other way around, the author would already have a code and the file might be missing. The file is named with a UUID because the code does not exist yet. The panel download link expires after 5 minutes.',
                'On 26 October the name changed from CICED to CICBED and the talk modality became a research report. Old codes stay. On 30 September I measured the EIEM 8 site: one page, about 47,600 px on a phone. That is why I chose a short homepage and separate pages. Git has 43 commits and every author is signed unknown.'
            ]
        },
        timeline: {
            es: [
                '30 de septiembre de 2026. Medición del sitio del EIEM 8.',
                '26 de octubre de 2026. El nombre pasa de CICED a CICBED.',
                '28 de octubre de 2026. La inscripción de olimpiadas sale hacia Microsoft Forms.',
                '31 de octubre de 2026. El enlace de descarga del panel vence a los 5 minutos.'
            ],
            en: [
                '30 September 2026. Measurement of the EIEM 8 site.',
                '26 October 2026. The name changes from CICED to CICBED.',
                '28 October 2026. Olympiad registration moves to Microsoft Forms.',
                '31 October 2026. The panel download link expires after 5 minutes.'
            ]
        }
    },
    totalapp: {
        kicker: 'Total-App',
        title: {
            es: 'Qué toca entrenar hoy, y si el socio en riesgo es esta cuenta',
            en: 'What to train today, and whether the member at risk is this account'
        },
        paragraphs: {
            es: [
                'La app se llama Total-App. El repositorio se llama smart-fit-coach. Es una PWA en español, pensada para el móvil, en el gimnasio. Quien llega crea una cuenta, rellena objetivo, modalidad y límites, y un modelo le devuelve la rutina del día. La ejecuta en un chat, con cronómetro y series.',
                'El modelo de la rutina es google/gemini-3-flash-preview. El del chat es google/gemini-2.5-flash. Los dos salen por el gateway de Lovable. El pago no es un checkout: un administrador marca has_paid. Hasta entonces la persona espera en una pantalla de verificación.',
                'La racha siempre devolvía 1. El entreno de hoy quedaba el primero de la lista, el bucle lo comparaba con ayer y cortaba. new Date sobre una fecha sola, en UTC-5, cae en el día anterior. El cálculo quedó en src/lib/streak.ts, con 15 tests. Los recordatorios tuvieron el mismo tipo de fallo: el día iba en español y el horario en inglés, y no se creó ninguno.',
                'La planilla del gimnasio tenía unos 470 socios. La app tenía 15 cuentas. El modelo que puntúa la deserción no está en este repo. El emparejamiento por nombre solo ordena candidatos. No ata una fila a una cuenta: dos socios pueden llamarse igual.',
                'El diseño del SQL, del onboarding y de los prompts está en este repositorio. Lovable aplica SQL y commitea en main. En git hay 203 commits. 180 son de gpt-engineer-app[bot], 22 de un autor llamado unknown y uno de Lovable.'
            ],
            en: [
                'The app is called Total-App. The repository is called smart-fit-coach. It is a Spanish PWA, meant for a phone, inside the gym. A new user creates an account, fills in a goal, a mode and limits, and a model returns the day’s routine. They run it in a chat, with a timer and sets.',
                'The routine model is google/gemini-3-flash-preview. The chat model is google/gemini-2.5-flash. Both go through the Lovable gateway. Payment is not a checkout: an administrator sets has_paid. Until then the person waits on a verification screen.',
                'The streak always returned 1. Today’s workout stayed first in the list, the loop compared it with yesterday and stopped. new Date on a date-only string, in UTC-5, falls on the previous day. The calculation landed in src/lib/streak.ts, with 15 tests. Reminders had the same kind of failure: the day was in Spanish and the schedule in English, and none were created.',
                'The gym spreadsheet had about 470 members. The app had 15 accounts. The model that scores dropout is not in this repo. Matching by name only ranks candidates. It does not bind a row to an account: two members can share a name.',
                'The SQL, onboarding and prompt design live in this repository. Lovable applies SQL and commits on main. Git has 203 commits. 180 are from gpt-engineer-app[bot], 22 from an author named unknown, and one from Lovable.'
            ]
        },
        timeline: {
            es: ['El punto 30 de MEJORAS.md documenta el fallo de la racha. El punto 28 sigue abierto: el Site URL de Supabase apuntaba al preview de Lovable.'],
            en: ['Point 30 of MEJORAS.md documents the streak bug. Point 28 is still open: the Supabase Site URL pointed at the Lovable preview.']
        }
    },
    lab: {
        kicker: 'Lab Report Navigator',
        title: {
            es: '¿Cumple un informe de laboratorio el formato y las respuestas de la guía?',
            en: 'Does a lab report match the format and the guide’s answers?'
        },
        paragraphs: {
            es: [
                'Construí LabReview para que un docente suba un informe de laboratorio y reciba un dictamen asistido por IA, en español, sobre formato y calidad.',
                'El flujo de formato compara el texto extraído contra la plantilla activa y los criterios de secciones que configura un administrador. El flujo de preguntas cruza el informe con una guía y marca qué ítems quedaron respondidos y con qué observaciones.',
                'Moví la extracción de PDF y Word al navegador para mandar solo texto al servidor. La IA devuelve JSON con el reporte en Markdown y una nota de 0 a 100. Tuve que endurecer el parseo porque el modelo a veces envuelve la respuesta en fences.',
                'Guardé cada análisis con metadatos académicos y filtros en el listado. Los roles separan lo que ve un docente de lo que ve un admin.'
            ],
            en: [
                'I built LabReview so a teacher can upload a lab report and get an AI-assisted verdict, in Spanish, on format and quality.',
                'The format flow compares the extracted text with the active template and the section criteria an administrator configures. The question flow crosses the report with a guide and marks which items were answered, and with what notes.',
                'I moved PDF and Word extraction into the browser so the server only receives text. The model returns JSON with a Markdown report and a score from 0 to 100. I had to harden the parser because the model sometimes wraps the answer in fences.',
                'I stored each analysis with academic metadata and filters on the list. Roles separate what a teacher sees from what an admin sees.'
            ]
        }
    },
    recon: {
        kicker: 'RECON',
        title: {
            es: 'Redactar el reporte de convivencia con la Ley 1620 y el manual del colegio',
            en: 'Draft the coexistence report with Law 1620 and the school handbook'
        },
        paragraphs: {
            es: [
                'El producto se presenta como RECON. El README y la pantalla de pago dicen Docente Alerta. La carpeta del git es docente-alerta. Hace falta cuenta. Quien entra sin sesión cae en /welcome. El login general es para superadmin. El resto entra por el slug del colegio.',
                'El docente elige grado y alumno, escribe los hechos y llama a generate-report. La función usa la Ley 1620 y, si existe, el manual del colegio. Devuelve tipo de falta, artículo y un markdown con formato fijo. El 31 de enero de 2026 quedaron los commits Mejoró generate-report IA e Integró Ley 1620 en prompt.',
                'El 8 de marzo de 2026 se retiró school_settings. El manual pasó a colegios y el pago pasó a has_paid del colegio. Ese día el bot dejó RLS, roles y SuperAdmin. El hook useOfflineReports existe, pero las vistas de nuevo reporte e historial no lo usan. El guardado del formulario va a Supabase en línea.',
                'Quien abre un link /share/:token no necesita cuenta. Puede leer y firmar. El director de grupo ve alerta a las 3 faltas leves, o ante una grave, o ante una gravísima. En git hay cuatro nombres: Lovable, gpt-engineer-app[bot], unknown y Edgardo Baena. 208 de 232 commits son del bot.'
            ],
            en: [
                'The product presents itself as RECON. The README and the payment screen say Docente Alerta. The git folder is docente-alerta. An account is required. A visitor without a session lands on /welcome. The general login is for superadmin. Everyone else enters through the school slug.',
                'The teacher picks a grade and a student, writes the facts and calls generate-report. The function uses Law 1620 and, if it exists, the school handbook. It returns the type of offense, the article and a markdown document with a fixed format. On 31 January 2026 the commits Mejoró generate-report IA and Integró Ley 1620 en prompt landed.',
                'On 8 March 2026 school_settings was removed. The handbook moved to colegios and payment moved to the school’s has_paid. That day the bot left RLS, roles and SuperAdmin. The useOfflineReports hook exists, but the new-report and history views do not use it. The form saves to Supabase online.',
                'Someone who opens a /share/:token link does not need an account. They can read and sign. The homeroom director sees an alert at 3 minor offenses, or on a serious one, or on a very serious one. Git has four names: Lovable, gpt-engineer-app[bot], unknown and Edgardo Baena. 208 of 232 commits are the bot’s.'
            ]
        },
        timeline: {
            es: [
                '31 de enero de 2026. La función generate-report incorpora la Ley 1620.',
                '8 de marzo de 2026. El manual y el pago pasan a la tabla del colegio.',
                'Huecos sin commits: del 14 de febrero al 5 de marzo de 2026, y del 19 de marzo al 25 de mayo de 2026.'
            ],
            en: [
                '31 January 2026. generate-report takes in Law 1620.',
                '8 March 2026. The handbook and payment move to the school table.',
                'Gaps with no commits: 14 February to 5 March 2026, and 19 March to 25 May 2026.'
            ]
        }
    },
    bauly: {
        kicker: 'Bauly',
        title: {
            es: 'Catalogar una colección con una foto y hablar con una IA de coleccionismo',
            en: 'Catalog a collection from a photo and talk to a collecting-aware AI'
        },
        paragraphs: {
            es: [
                'Entré a este proyecto cuando todavía se llamaba Triasure AI. En mi primer commit lo renombré a Bauly y cambié los favicons y la paleta. Después conecté el login con Google: el botón llama a Supabase, la ruta de callback intercambia el código por sesión y, si el usuario es nuevo, crea su fila con el nombre y la foto de la cuenta.',
                'Conecté el chat de la portada a Gemini para preguntas de coleccionismo. Más adelante construí la ruta que recibe una foto, la sube a Gemini y devuelve un JSON con los campos de catálogo según la categoría. Esa ruta vive en el servidor para no exponer la API key.',
                'La mensajería privada fue la parte que más iteré. La primera versión era solo la burbuja, sin conexión. Al conectarla a Firestore el modelo cambió varias veces: el campo de participantes se renombró y la colección pasó de chats a ListChats. Los commits quedaron como “chat parece que ahora si” y “chat ahora si, de verdad que si”.',
                'Construí el perfil de tienda, con banner, catálogo, filtros y un carrusel de ítems en tendencia. Después el sistema de subastas: listado, detalle con cuenta atrás, puja y creación. Para que dos pujas simultáneas no dejaran la subasta inconsistente, un trigger de Postgres solo actualiza la puja más alta si la nueva es estrictamente mayor, y la ruta del servidor repite esa validación.',
                'El panel de administración verifica el rol, usa un cliente de Supabase con la llave de servicio para saltarse las políticas, y tiene migraciones para el baneo y el borrado en papelera de ítems en las trece tablas de categorías.'
            ],
            en: [
                'I joined this project when it was still called Triasure AI. In my first commit I renamed it Bauly and changed the favicons and the palette. Then I connected Google login: the button calls Supabase, the callback route exchanges the code for a session and, if the user is new, creates their row with the name and photo from the account.',
                'I connected the homepage chat to Gemini for collecting questions. Later I built the route that receives a photo, sends it to Gemini and returns JSON with catalog fields for the category. That route lives on the server so the API key stays off the browser.',
                'Private messaging was the part I iterated most. The first version was only the bubble, with no connection. Once it was on Firestore the data model changed several times: the participants field was renamed and the collection went from chats to ListChats. The commits read “chat parece que ahora si” and “chat ahora si, de verdad que si”.',
                'I built the shop profile, with a banner, catalog, filters and a carousel of trending items. Then the auction system: list, detail with a countdown, bidding and creation. So two simultaneous bids would not leave the auction inconsistent, a Postgres trigger only updates the highest bid if the new one is strictly higher, and the server route repeats that check.',
                'The admin panel checks the role, uses a Supabase client with the service key to bypass the policies, and has migrations for bans and soft-deleting items across the thirteen category tables.'
            ]
        }
    },
    stockup: {
        kicker: 'Stock up',
        title: {
            es: 'Qué hay en casa, qué se acabó y qué dice el ticket',
            en: 'What is at home, what ran out, and what the receipt says'
        },
        paragraphs: {
            es: [
                'El sitio se llama StockUp. La portada dice que maneja listas de compras e inventario. Los términos del 17 de septiembre de 2025 hablan de inventario del hogar, listas, caducidad y recordatorios.',
                'La portada entra con Google. El botón pide calendario, correo y perfil. Con sesión de Firebase la portada abre /protected. Sin sesión, /protected vuelve a la portada. Una lista es Personal o Grupo.',
                'Cada artículo guarda nombre, cantidad, unidad, notas, precio y fecha. El interruptor en pantalla dice In stock y Out of stock. En el código el campo se llama inFridge. Si hay precio, la lista suma precio por cantidad y separa lo que está en stock de lo que no.',
                'La foto del ticket va a Gemini 2.5 Flash. El modelo tiene que devolver nombre y precio. Si el precio no pasa de cero, ese producto no entra. Esos productos quedan con caducidad a un mes. Si hay token de calendario, el código crea un evento a un mes, de una hora, en America/Santiago.',
                'El botón Nuevo recordatorio quedó comentado el 26 de septiembre de 2025, en el commit sin calendar. La ruta del formulario manual tiene el insert comentado. La ruta de la foto sigue creando el evento. El primer commit es el starter de Next.js y Supabase, del 2 de junio de 2025. En git hay 45 commits: 44 de sebastian y uno de Jsgallardo82. El layout cita stockup.vercel.app y la política de privacidad cita stockup-theta.vercel.app.'
            ],
            en: [
                'The site is called StockUp. The homepage says it handles shopping lists and inventory. The terms from 17 September 2025 talk about household inventory, lists, expiry and reminders.',
                'The homepage signs in with Google. The button asks for calendar, email and profile. With a Firebase session the homepage opens /protected. Without a session, /protected returns to the homepage. A list is Personal or Group.',
                'Each item stores name, quantity, unit, notes, price and date. The switch on screen says In stock and Out of stock. In the code the field is called inFridge. If there is a price, the list sums price times quantity and splits what is in stock from what is not.',
                'The receipt photo goes to Gemini 2.5 Flash. The model has to return a name and a price. If the price is not above zero, that product does not enter. Those products get an expiry one month out. If there is a calendar token, the code creates a one-hour event one month ahead, in America/Santiago.',
                'The New reminder button was commented out on 26 September 2025, in the commit sin calendar. The manual form route has the insert commented out. The photo route still creates the event. The first commit is the Next.js and Supabase starter, on 2 June 2025. Git has 45 commits: 44 by sebastian and one by Jsgallardo82. The layout cites stockup.vercel.app and the privacy policy cites stockup-theta.vercel.app.'
            ]
        },
        timeline: {
            es: [
                '2 de junio de 2025. Starter de Next.js y Supabase.',
                '17 de septiembre de 2025. Términos de inventario del hogar.',
                '26 de septiembre de 2025. El recordatorio manual queda comentado. La foto del ticket sigue creando el evento.'
            ],
            en: [
                '2 June 2025. Next.js and Supabase starter.',
                '17 September 2025. Household inventory terms.',
                '26 September 2025. The manual reminder is commented out. The receipt photo still creates the event.'
            ]
        }
    },
    mantix: {
        kicker: 'Mantix',
        title: {
            es: 'Saber qué equipo industrial ya se pasó de la fecha de mantenimiento',
            en: 'See which industrial asset is already past its maintenance date'
        },
        paragraphs: {
            es: [
                'Mantix es el nombre de la portada. El panel parte los activos por ubicación. Si la fecha de proximo_mto ya pasó, o no hay fecha, cuenta como fuera de tiempo. Si faltan 30 días o menos, cuenta como próximo. Si faltan más, cuenta como al día.',
                'En mis commits están la estructura inicial, las tarjetas de fases y activos, el enrutado dinámico, el mapeo de fases, el arreglo del hook, el formato del PDF y el botón de descarga del 23 de julio de 2025. El PDF clona la página, le mete CSS y la baja con html2pdf.js.',
                'La tarjeta de mantenimientos completados dice «Último mes». El número es el total con estado completed, sin cortar por fecha. La fecha del próximo mantenimiento en esa pantalla está escrita a mano: 2025-06-30. El gráfico de los seis meses sí lee completed_at.',
                'El trabajo no fue solo mío. En git aparecen también Gabriel Landinez, Luis, Javier Patin y un autor unknown. El último commit, del 25 de enero de 2026, firma unknown y dice “reviviendo a mantix”.'
            ],
            en: [
                'Mantix is the name on the homepage. The panel splits assets by location. If proximo_mto is already past, or there is no date, it counts as overdue. If 30 days or fewer remain, it counts as upcoming. If more remain, it counts as on time.',
                'My commits cover the initial structure, the phase and asset cards, the dynamic routing, the phase mapping, the hook fix, the PDF layout and the download button from 23 July 2025. The PDF clones the page, injects CSS and downloads it with html2pdf.js.',
                'The completed-maintenance card says “Last month”. The number is the total with status completed, with no date cut. The next maintenance date on that screen is written by hand: 2025-06-30. The six-month chart does read completed_at.',
                'The work was not only mine. Git also shows Gabriel Landinez, Luis, Javier Patin and an author named unknown. The last commit, on 25 January 2026, is signed unknown and says “reviviendo a mantix”.'
            ]
        },
        timeline: {
            es: [
                '8 de mayo de 2025. El repo nace desde Vercel.',
                '9 a 12 de mayo de 2025. Estructura, tarjetas y enrutado de fases.',
                '12 de junio y 23 de julio de 2025. Formato del PDF y botón de descarga.'
            ],
            en: [
                '8 May 2025. The repo starts from Vercel.',
                '9 to 12 May 2025. Structure, cards and phase routing.',
                '12 June and 23 July 2025. PDF layout and the download button.'
            ]
        }
    },
    frog: {
        kicker: 'Frog Board',
        title: {
            es: 'Quién de la casa está en casa, y qué misión tiene',
            en: 'Who in the house is home, and what mission they have'
        },
        paragraphs: {
            es: [
                'El proyecto se presenta como Frog Board. La carpeta se llama jiraiya-s-family-board. Una persona se registra con nombre, correo y contraseña. La pantalla le pide verificar el correo. Luego entra al panel. Si no tiene hogar, el texto le dice que cree uno o que se una con un código.',
                'Cada miembro del hogar activo tiene una tablilla. El estado es en casa o fuera. Solo se puede voltear la tablilla propia. El panel escucha los cambios de household_members. Las misiones son personales o asignadas, con prioridad baja, media o alta.',
                'El primer intento de aviso, el 17 de febrero de 2026, metió una ruta de Next.js en un proyecto Vite. Otra ruta solo escribía el aviso en el log. Esas dos, y notifications-fixed.ts, se borraron el 2 de marzo. La función SQL sigue devolviendo verdadero sin enviar nada. El envío que queda está en la función Deno con web-push, retocada el 6 y el 16 de marzo.',
                'El 9 de febrero el hogar era una columna en el perfil. El 16 de marzo pasó a la tabla household_members. Seis commits figuran como unknown.'
            ],
            en: [
                'The project presents itself as Frog Board. The folder is called jiraiya-s-family-board. A person registers with a name, email and password. The screen asks them to verify the email. Then they land on the board. If they have no household, the text tells them to create one or join with a code.',
                'Each member of the active household has a tile. The state is home or away. Only your own tile can be flipped. The board listens to changes on household_members. Missions are personal or assigned, with low, medium or high priority.',
                'The first notification attempt, on 17 February 2026, put a Next.js route inside a Vite project. Another route only wrote the notice to the log. Those two, and notifications-fixed.ts, were deleted on 2 March. The SQL function still returns true without sending anything. The send that remains is in the Deno function with web-push, touched again on 6 and 16 March.',
                'On 9 February the household was a column on the profile. On 16 March it moved to the household_members table. Six commits are signed unknown.'
            ]
        },
        timeline: {
            es: [
                '9 de febrero de 2026. El hogar es una columna del perfil.',
                '17 de febrero de 2026. Primer intento de aviso, en una ruta de Next dentro de Vite.',
                '2 de marzo de 2026. Esas rutas se borran.',
                '16 de marzo de 2026. El hogar pasa a household_members.'
            ],
            en: [
                '9 February 2026. The household is a column on the profile.',
                '17 February 2026. First notification attempt, a Next route inside Vite.',
                '2 March 2026. Those routes are deleted.',
                '16 March 2026. The household moves to household_members.'
            ]
        }
    },
    lissajous: {
        kicker: 'Figuras de Lissajous',
        title: {
            es: 'Ver qué curva cierran dos senos, y cuándo el dibujo se corta',
            en: 'See which curve two sines close, and when the drawing stops'
        },
        paragraphs: {
            es: [
                'Se abre con index.html. El README dice que no hace falta instalar nada. No hay cuenta. La curva sale de dos senos: x = A·sin(a·t + δ) e y = B·sin(b·t). Sin un estado guardado, el código arranca en a = 3, b = 2 y δ = 90°. Hay diez figuras listas, del círculo 1:1 al 7:11.',
                'El punto que el código explica es el cierre. En cierre redondeo a y b a tres decimales. Las vueltas salen del máximo común divisor. Si pasan de 100, el dibujo se corta y el HUD dice que no se cierra.',
                'Girar δ suma grados por segundo. Trazar recorre la curva en los segundos elegidos y marca el punto con las dos proyecciones. Guardar PNG dibuja la curva completa a 1080, 2048 o 4096 px. El nombre del archivo lleva a, b y δ.',
                'Hay un solo commit, del 29 de octubre de 2026. El autor en git es sebastian. El mensaje también nombra a Claude Opus 5.5. Entran cuatro archivos y 716 líneas.'
            ],
            en: [
                'It opens with index.html. The README says nothing needs to be installed. There is no account. The curve comes from two sines: x = A·sin(a·t + δ) and y = B·sin(b·t). With no saved state, the code starts at a = 3, b = 2 and δ = 90°. There are ten ready figures, from the 1:1 circle to 7:11.',
                'The point the code explains is closure. In cierre I round a and b to three decimals. The turns come from the greatest common divisor. If they pass 100, the drawing stops and the HUD says it does not close.',
                'Turning δ adds degrees per second. Trace walks the curve in the chosen seconds and marks the point with both projections. Save PNG draws the full curve at 1080, 2048 or 4096 px. The file name carries a, b and δ.',
                'There is a single commit, on 29 October 2026. The git author is sebastian. The message also names Claude Opus 5.5. Four files and 716 lines go in.'
            ]
        }
    },
    modular: {
        kicker: 'Circunferencia modular',
        title: {
            es: 'Qué figura sale al unir cada punto i con (i · m) mod N',
            en: 'What figure appears when each point i joins (i · m) mod N'
        },
        paragraphs: {
            es: [
                'Se abre con index.html. No hay instalación ni cuenta. Hay N puntos en un círculo. Uno el punto i con (i · m) mod N. Con m = 2 el recuadro dice cardioide. Con m = 3 dice nefroide. Si m es entero, vale al menos 2 y es menor que N/2, el recuadro dice m − 1 lóbulos.',
                'm admite decimales. En app.js el ángulo no se redondea al punto más cercano. El comentario dice que así el decimal se ve suave. m se recorta a seis decimales para no arrastrar un error como 2.0000000001.',
                'Cada cuerda se dibuja sola. El comentario dice que la opacidad se suma en los cruces y por eso brilla la envolvente. Los puntos solo se pintan si N es como mucho 2000. Los números, si N es como mucho 100.',
                'El README dice que dos m iguales módulo N dibujan la misma figura. También si su producto es 1 módulo N. Para m de 2 a 28, el menor N sin figuras repetidas es 48. Hay un solo commit, del 29 de octubre de 2026. El autor en git es sebastian y el mensaje nombra también a Claude Opus 5.5.'
            ],
            en: [
                'It opens with index.html. There is no install and no account. There are N points on a circle. Point i is joined to (i · m) mod N. With m = 2 the box says cardioid. With m = 3 it says nephroid. If m is an integer, at least 2 and less than N/2, the box says m − 1 lobes.',
                'm accepts decimals. In app.js the angle is not rounded to the nearest point. The comment says that is how the decimal looks smooth. m is cut to six decimals so an error like 2.0000000001 does not stick.',
                'Each chord is drawn on its own. The comment says opacity adds up at the crossings, which is why the envelope glows. Points are painted only if N is at most 2000. Numbers, only if N is at most 100.',
                'The README says two values of m that are equal modulo N draw the same figure. Also if their product is 1 modulo N. For m from 2 to 28, the smallest N without repeated figures is 48. There is a single commit, on 29 October 2026. The git author is sebastian and the message also names Claude Opus 5.5.'
            ]
        }
    },
    punto: {
        kicker: 'Punto y fama',
        title: {
            es: 'Adivinar cuatro dígitos distintos y saber cuántos están en su sitio',
            en: 'Guess four different digits and learn how many sit in the right place'
        },
        paragraphs: {
            es: [
                'El juego se llama Punto y Fama. Abrir el programa muestra una ventana de Tkinter. No hay cuenta. Se escriben cuatro números separados por comas y se pulsa Jugar, o Enter.',
                'La partida esconde cuatro dígitos distintos del 0 al 9. Hay 10 intentos. Fama cuenta un dígito en la posición correcta. Punto cuenta un dígito correcto en otra posición. Un acierto de posición no suma punto. Al ganar o al quedarse sin intentos, el programa muestra la secuencia.',
                'El mismo juego está en puntoyfama.py y en puntoyfama.ipynb. El script aún tiene marcas de celda de Jupyter. El notebook fija Python 3.10.10. puntoyfama.spec prepara un ejecutable con PyInstaller. Ese ejecutable no está en el repo.',
                'Hay una sola fecha en git: 6 de octubre de 2025. El autor del commit es sebastian.'
            ],
            en: [
                'The game is called Punto y Fama. Opening the program shows a Tkinter window. There is no account. You type four numbers separated by commas and press Jugar, or Enter.',
                'The round hides four different digits from 0 to 9. There are 10 tries. Fama counts a digit in the correct position. Punto counts a correct digit in another position. A position hit does not also add a punto. On a win, or when the tries run out, the program shows the sequence.',
                'The same game lives in puntoyfama.py and puntoyfama.ipynb. The script still has Jupyter cell marks. The notebook pins Python 3.10.10. puntoyfama.spec prepares a PyInstaller executable. That executable is not in the repo.',
                'Git has a single date: 6 October 2025. The commit author is sebastian.'
            ]
        }
    },
    ahorcado: {
        kicker: 'Ahorcado Siglo XXXI',
        title: {
            es: '¿La letra y la posición alcanzan antes de que el ácido llene la cápsula?',
            en: 'Do the letter and the position land before the acid fills the capsule?'
        },
        paragraphs: {
            es: [
                'El 17 de abril de 2025 el primer commit creó el repo con Create Next App. El autor que figura en git es Juan Gallardo. El 26 de abril el segundo commit, “maquina realizada”, cambió la portada y metió las dos partidas. No hay commits entre esas dos fechas.',
                'La portada pone al jugador como abogado de un amigo condenado a morir en ácido. No hay cuenta. Hay dos botones: Contra máquina y Contra persona. Empezar sortea una cadena de una lista de 25. El jugador escribe una posición y pulsa una letra. Hay 27 letras, de la A a la Z más la Ñ.',
                'Si la letra coincide en esa posición, el código rellena todas las apariciones de esa letra. Si la letra está en la palabra y la posición no, el historial lo anota y el ácido no crece. Si la letra no está, el ácido usa letrasIncorrectas / 6. La victoria compara la solución pegada con la palabra en mayúsculas.',
                'La ruta contra persona repite la lista y el botón Empezar de la máquina. El título de esa página dice “V.S. Maquina”. El estado palabraIngresada no se pinta. Next.js está fijado en 15.3.1, React en 19 y styled-components en 6.1.17. El paquete npm se llama ahorcado_siglo_futuro.'
            ],
            en: [
                'On 17 April 2025 the first commit created the repo with Create Next App. The git author is Juan Gallardo. On 26 April the second commit, “maquina realizada”, changed the cover and added both games. There are no commits between those two dates.',
                'The cover casts the player as the lawyer of a friend sentenced to die in acid. There is no account. There are two buttons: against the machine and against a person. Start draws a string from a list of 25. The player types a position and presses a letter. There are 27 letters, A to Z plus Ñ.',
                'If the letter matches that position, the code fills every occurrence of that letter. If the letter is in the word and the position is not, the history notes it and the acid does not rise. If the letter is absent, the acid uses letrasIncorrectas / 6. Victory compares the joined solution with the word in capitals.',
                'The against-person route repeats the machine’s list and Start button. That page’s title says “V.S. Maquina”. The palabraIngresada state is never painted. Next.js is pinned at 15.3.1, React at 19 and styled-components at 6.1.17. The npm package is named ahorcado_siglo_futuro.'
            ]
        },
        timeline: {
            es: [
                '17 de abril de 2025. Initial commit from Create Next App.',
                '26 de abril de 2025. Portada y las dos partidas.'
            ],
            en: [
                '17 April 2025. Initial commit from Create Next App.',
                '26 April 2025. Cover and both games.'
            ]
        }
    },
    techcaribe: {
        kicker: 'TechCaribe',
        title: {
            es: 'Filtrar la agenda del Tech Caribe Fest por salón',
            en: 'Filter the Tech Caribe Fest agenda by room'
        },
        paragraphs: {
            es: [
                'Entré al sitio de TechCaribe entre el 7 y el 23 de septiembre de 2025. Armé /fest y /ruta-tech-caribe. En la portada dejé dos tarjetas. La ruta dice del 8 al 19 de septiembre. El fest dice 20 de septiembre, en la plaza de la paz. No hace falta una cuenta para verlas.',
                'El cronograma salió del componente y quedó en JSON. El 8 de septiembre ordené cada lista con la hora de inicio. La función lee la primera hora de la cadena y distingue AM de PM. Las 12:00 PM quedan en 0 minutos. Esa cadena está en la agenda 2024. En la agenda 2025 no hay una actividad que empiece a las 12.',
                'El mismo día mostré las subzonas. El primer clic no filtraba. El commit siguiente filtra por el nombre de la subzona. La zona developer tiene seis salones y 20 actividades. Si el filtro deja la lista vacía, la pantalla dice que no hay eventos para esa subzona.',
                'El 18 de septiembre monté el carrusel de experiencias. Son cuatro. El carrusel usa Swiper, que ya estaba en el proyecto. Al cerrar patrocinadores el archivo tenía 2 de platino, 6 de oro, 2 de plata, 9 de bronce y 31 aliados. Antes de mi primer cambio había 5 patrocinadores y 4 aliados. Cambié 12 notas de 2024 por 9 del fest y pasé las fotos a WebP. En el registro dejé solo el rol participante. El 23 de septiembre comenté el botón Quiero asistir del hero.'
            ],
            en: [
                'I joined the TechCaribe site between 7 and 23 September 2025. I built /fest and /ruta-tech-caribe. On the homepage I left two cards. The route says 8 to 19 September. The fest says 20 September, at Plaza de la Paz. No account is needed to see them.',
                'The schedule left the component and landed in JSON. On 8 September I sorted each list by start time. The function reads the first hour in the string and tells AM from PM. 12:00 PM lands at 0 minutes. That string is in the 2024 agenda. The 2025 agenda has no activity starting at 12.',
                'The same day I showed the subzones. The first click did not filter. The next commit filters by the subzone name. The developer zone has six rooms and 20 activities. If the filter leaves the list empty, the screen says there are no events for that subzone.',
                'On 18 September I built the experiences carousel. There are four. The carousel uses Swiper, which was already in the project. When I closed sponsors the file had 2 platinum, 6 gold, 2 silver, 9 bronze and 31 allies. Before my first change there were 5 sponsors and 4 allies. I replaced 12 notes from 2024 with 9 from the fest and moved the photos to WebP. In registration I left only the participant role. On 23 September I commented out the I want to attend button on the hero.'
            ]
        },
        timeline: {
            es: [
                '7 de septiembre de 2025. Rutas /fest y /ruta-tech-caribe.',
                '8 de septiembre de 2025. Orden por hora y filtro de subzona.',
                '18 de septiembre de 2025. Carrusel de cuatro experiencias y fotos en WebP.',
                '23 de septiembre de 2025. El botón Quiero asistir queda comentado.'
            ],
            en: [
                '7 September 2025. Routes /fest and /ruta-tech-caribe.',
                '8 September 2025. Sort by time and the subzone filter.',
                '18 September 2025. Four-experience carousel and photos in WebP.',
                '23 September 2025. The I want to attend button is commented out.'
            ]
        }
    },
    juancho: {
        kicker: 'Juancho Restrepo',
        title: {
            es: 'Administrar galería, blogs y noticias desde el propio sitio',
            en: 'Manage the gallery, blogs and news from the site itself'
        },
        paragraphs: {
            es: [
                'Monté el sitio en React, Vite, TypeScript y Tailwind. Primero salieron header, footer, hero, contacto y un carrusel con posts de muestra. El 12 de diciembre armé las rutas /, /sobre-mi, /proyectos y /galeria. Galería y proyectos salieron del Miro. Después ajusté el layout a móvil.',
                'El 18 de diciembre enganché Supabase. El header abre un modal de login y escucha la sesión. Al día siguiente el hero y el sidebar leen main_info. El formulario de contacto inserta en contactos. La galería lista el bucket website_assets/gallery. El home y proyectos leen blogs. Noticias lee notices. Los arrays de ejemplo quedaron comentados.',
                'El 22 de diciembre, si hay sesión, Galería muestra “editar galería”. Ahí se suben o borran archivos. En el mismo commit quité el registro público del modal. En proyectos, “editar blogs” crea, actualiza o borra filas y sube la imagen a website_assets/blogs. En sobre mí, “Editar noticias” hace lo mismo con notices. El autor del blog o la noticia se guarda con user.id. El home muestra dos blogs, con slice(0, 2).'
            ],
            en: [
                'I built the site in React, Vite, TypeScript and Tailwind. Header, footer, hero, contact and a carousel of sample posts came first. On 12 December I set up the routes /, /sobre-mi, /proyectos and /galeria. Gallery and projects came from the Miro. Then I adjusted the layout for mobile.',
                'On 18 December I hooked up Supabase. The header opens a login modal and listens to the session. The next day the hero and the sidebar read main_info. The contact form inserts into contactos. The gallery lists the website_assets/gallery bucket. Home and projects read blogs. News reads notices. The sample arrays were left commented out.',
                'On 22 December, if there is a session, Gallery shows “edit gallery”. Files are uploaded or deleted there. In the same commit I removed public signup from the modal. On projects, “edit blogs” creates, updates or deletes rows and uploads the image to website_assets/blogs. On about, “Edit news” does the same with notices. The blog or news author is stored as user.id. Home shows two blogs, with slice(0, 2).'
            ]
        },
        timeline: {
            es: [
                '12 de diciembre de 2025. Rutas, galería y proyectos.',
                '18 de diciembre de 2025. Login con Supabase.',
                '19 de diciembre de 2025. Galería, blogs y noticias leen la base.',
                '22 de diciembre de 2025. Edición de galería, blogs y noticias. El registro público sale del modal.'
            ],
            en: [
                '12 December 2025. Routes, gallery and projects.',
                '18 December 2025. Supabase login.',
                '19 December 2025. Gallery, blogs and news read the database.',
                '22 December 2025. Editing for gallery, blogs and news. Public signup leaves the modal.'
            ]
        }
    },
    tecnocons: {
        kicker: 'Tecnocons',
        title: {
            es: 'Convertir el chat web en leads, mientras el agente busca proyectos y manda fotos',
            en: 'Turn the web chat into leads while the agent looks up projects and sends photos'
        },
        paragraphs: {
            es: [
                'Construí un backend de chat para una inmobiliaria que ya tenía Supabase y un CRM en Vite. El front no vive en este repositorio. Aquí está el agente, el API y la lógica que escribe en la tabla leads.',
                'El asistente público se llama Valeria Torres en el prompt. Debe capturar datos del prospecto mientras conversa, buscar proyectos en la base, y mandar fotos o brochure solo si la persona confirma.',
                'El problema que más me costó fue la persistencia progresiva. El modelo a veces respondía bien en texto y el CRM seguía con placeholders. Añadí captura desde las tools del ADK, parseo de respuestas, heurísticas sobre el mensaje del usuario y estado acumulado por sesión antes de hacer PATCH a PostgREST.',
                'Reemplacé el cliente pesado de Supabase por httpx directo a PostgREST y Storage. Separé un agente interno que consulta leads cuando llega un JWT de empleado, distinto del flujo del visitante anónimo. Las fotos salen como URLs firmadas en el campo attachments. El brochure devuelve brochure_url.',
                'Los 11 commits revisados figuran en git con el autor unknown. Con eso no se puede saber, desde el historial, si el trabajo fue de una sola persona.'
            ],
            en: [
                'I built a chat backend for a real-estate company that already had Supabase and a CRM in Vite. The front end does not live in this repository. Here are the agent, the API and the logic that writes the leads table.',
                'The public assistant is named Valeria Torres in the prompt. It has to capture the prospect’s data while talking, look up projects in the database, and send photos or a brochure only if the person confirms.',
                'The problem that cost me the most was progressive persistence. The model sometimes answered well in text while the CRM stayed on placeholders. I added capture from the ADK tools, response parsing, heuristics on the user message and accumulated session state before the PATCH to PostgREST.',
                'I replaced the heavy Supabase client with httpx straight to PostgREST and Storage. I split off an internal agent that queries leads when an employee JWT arrives, separate from the anonymous visitor flow. Photos go out as signed URLs in the attachments field. The brochure returns brochure_url.',
                'The 11 reviewed commits are signed unknown in git. From the history alone, that does not show whether the work was one person’s.'
            ]
        }
    }
};
