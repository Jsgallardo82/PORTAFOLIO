const portfolioAuthor = {
    name: 'Juan Sebastian Gallardo Baena',
    url: 'https://github.com/Jsgallardo82'
};

const projectDetails = {
    fitness: {
        kicker: 'Fitness Total Gym',
        title: {
            es: 'Predecir quién deja de ir al gimnasio',
            en: 'Predicting who stops coming to the gym'
        },
        authors: [portfolioAuthor],
        images: [
            {
                src: 'assets/images/lista_riesgo.png',
                alt: {
                    es: 'Lista de riesgo del corte del 17 de julio de 2026, sin nombres',
                    en: 'Risk list for the 17 July 2026 cutoff, with no names'
                },
                caption: {
                    es: 'Lista de riesgo del corte del 17 de julio de 2026. 470 personas con al menos una visita en los 90 días previos, sin nombres.',
                    en: 'Risk list for the 17 July 2026 cutoff. 470 people with at least one visit in the previous 90 days, with no names.'
                }
            },
            {
                src: 'assets/images/productos.png',
                alt: {
                    es: 'Ingresos del gimnasio: entrenamientos y mensualidad frente al mostrador',
                    en: 'Gym revenue: training and memberships against the counter'
                },
                caption: {
                    es: 'De qué vive el gimnasio: el 87,9 % de los ingresos es entrenamiento y mensualidad.',
                    en: 'What the gym lives on: 87.9% of revenue is training and memberships.'
                }
            }
        ],
        description: {
            es: 'Con las planillas de asistencia de un gimnasio familiar en Colombia, de 2021 a 2026, construí un modelo para ordenar a quién conviene contactar. La pregunta es concreta: de quienes vinieron en los 90 días previos al 17 de julio de 2026, quién no regresa en los 45 días siguientes. El historial completo produce un acierto casi perfecto, porque la etiqueta se arma con la misma recencia que entra como variable. Esa fuga se demostró y se descartó.',
            en: 'Using the attendance sheets of a family gym in Colombia, from 2021 to 2026, I built a model that ranks who is worth contacting. The question is specific: among people who came in the 90 days before 17 July 2026, who does not come back in the next 45 days. The full history produces an almost perfect score, because the label is built from the same recency that enters as a feature. That leak was demonstrated and discarded.'
        },
        features: {
            es: [
                'El modelo que queda es un bosque aleatorio sobre 470 personas, sin búsqueda de hiperparámetros y con una configuración fija, comparado con gradient boosting y regresión logística.',
                'En la prueba de 94 personas el F1 macro es 0,69 y el AUC 0,77. Con el umbral de 0,50 detecta a 47 de los 64 desertores: recall 0,73 y precisión 0,82.',
                'Contactar al 20 % de mayor riesgo alcanza al 28,1 % de quienes se van, con un lift de 1,39. El aviso cuesta un pase diario de 3.500 pesos y se compensa si vuelve más del 7 % de los contactados.',
                'La lista la lee la administración, en la pestaña Deserción, y la recepción contacta de arriba hacia abajo. Cada persona queda como un identificador.',
                'El 87,9 % de los ingresos es entrenamiento y mensualidad. El costo de no detectar a quien se va es una mensualidad de 50.000 pesos.'
            ],
            en: [
                'The model that remains is a random forest on 470 people, with no hyperparameter search and a fixed configuration, compared with gradient boosting and logistic regression.',
                'On a test of 94 people the macro F1 is 0.69 and the AUC is 0.77. At a threshold of 0.50 it finds 47 of the 64 people who leave: recall 0.73 and precision 0.82.',
                'Contacting the 20% at highest risk reaches 28.1% of those who leave, with a lift of 1.39. The notice costs a day pass of 3,500 pesos and pays for itself if more than 7% of the people contacted come back.',
                'Administration reads the list on the Churn tab, and the front desk contacts people from the top down. Each person stays as an identifier.',
                '87.9% of revenue is training and memberships. Missing someone who leaves costs a 50,000-peso membership.'
            ]
        },
        links: []
    },
    shark: {
        kicker: 'Shark Caribe',
        title: {
            es: 'Cobrar varias boletas en un pago y marcar cuál QR ya entró',
            en: 'Charge several tickets in one payment and mark which QR already entered'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El sitio cobra las boletas de Shark Caribe, Pitch Competition 2026. La gran final está escrita para el 25 de noviembre de 2026, en el Hotel Dann Carlton de Barranquilla. La compra pública no pide cuenta: el modal abre Wompi y, si el pago queda aprobado, manda el QR por correo.',
            en: 'The site sells tickets for Shark Caribe, Pitch Competition 2026. The final is written for 25 November 2026 at Hotel Dann Carlton in Barranquilla. The public purchase does not ask for an account: the modal opens Wompi and, if the payment is approved, emails the QR.'
        },
        features: {
            es: [
                'Si el pago queda APPROVED, el webhook marca la boleta como pagada, un trigger pone el número y Resend manda el correo con el QR.',
                'Varias boletas de una misma compra comparten una sola referencia de Wompi. Antes, el correo y el documento eran únicos, y un pago rechazado dejaba al comprador fuera.',
                'El inventario físico inserta 100 boletas preferenciales y 100 generales ya pagadas. El admin las imprime en una hoja de 32 por 47 cm, con un QR distinto por boleta.',
                'El QR responde aunque la boleta no se haya vendido en caja, y esas filas cuentan como pagadas en los reportes.'
            ],
            en: [
                'If the payment is APPROVED, the webhook marks the ticket paid, a trigger sets the number, and Resend emails the QR.',
                'Several tickets in one purchase share a single Wompi reference. Before, email and document were unique, and a rejected payment locked the buyer out.',
                'Physical inventory inserts 100 preferential and 100 general tickets already marked paid. Admin prints them on a 32 by 47 cm sheet, with a different QR per ticket.',
                'The QR answers even if the ticket was not sold at the box office, and those rows count as paid in the reports.'
            ]
        },
        timeline: {
            es: ['22 de julio de 2026. Primera vista del homepage.'],
            en: ['22 July 2026. First view of the homepage.']
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/SharkCaribeHome' },
            { kind: 'deploy', href: 'https://www.sharkcaribe.co/' }
        ]
    },
    zitter: {
        kicker: 'Zitterbewegung',
        title: {
            es: 'Girar el acoplamiento Ω, guardar el cuaderno y pasar 32 diapositivas',
            en: 'Turn the Ω coupling, keep the notebook, and step through 32 slides'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Zitterbewegung Engine Lite v6.0 abre el simulador sin cuenta. El idioma arranca en español y el tema en oscuro. Saqué el slider de Ω y dejé una perilla, un cuaderno de cinco misiones y una presentación de 32 láminas.',
            en: 'Zitterbewegung Engine Lite v6.0 opens the simulator without an account. Language starts in Spanish and the theme in dark. I removed the Ω slider and left a knob, a five-mission notebook, and a 32-slide presentation.'
        },
        features: {
            es: [
                'La perilla de 270° se gira con el dedo, la rueda, un clic en el arco o un número en hertz. Un láser se apaga si Ω está por debajo del 1 %.',
                'El cuaderno pide el nombre y las respuestas. El PDF sale del diálogo de impresión, en un iframe del tamaño de una A4.',
                'La presentación se pasa con las flechas, la barra espaciadora o los puntos. F la pone a pantalla completa.',
                'En el reporte comparativo, con Ω = Ω_SB = 5×10⁴ Hz, el error máximo de Magnus en ⟨S₁⟩ es 0,14 μm. La fidelidad atómica escrita ahí supera 0,996.',
                'Una ruta desconocida muestra un 404 con enlace al simulador. La vista 3D se carga solo en el cliente.'
            ],
            en: [
                'The 270° knob turns with a finger, the wheel, a click on the arc, or a number in hertz. A laser turns off if Ω is under 1%.',
                'The notebook asks for a name and the answers. The PDF comes from the print dialog, in an A4-sized iframe.',
                'The presentation moves with the arrows, the space bar, or the dots. F makes it fullscreen.',
                'In the comparative report, with Ω = Ω_SB = 5×10⁴ Hz, the maximum Magnus error in ⟨S₁⟩ is 0.14 μm. The atomic fidelity written there is above 0.996.',
                'An unknown route shows a 404 with a link back to the simulator. The 3D view loads only on the client.'
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
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/proyecto-py-js' }
        ]
    },
    ciced: {
        kicker: 'CICBED 2026',
        title: {
            es: 'Recibir un trabajo sin cuenta y devolverle al autor solo un código',
            en: 'Take a paper without an account and hand the author back only a code'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El sitio se presenta como CICBED 2026, el I Congreso Internacional de Ciencias Básicas y Educación de la Institución Universitaria de Barranquilla. Quien entra ve el logo, la sede y las fechas del 23 al 27 de noviembre de 2026. Postular no pide cuenta: la persona llena el formulario y recibe un código.',
            en: 'The site presents itself as CICBED 2026, the First International Congress of Basic Sciences and Education of Institución Universitaria de Barranquilla. A visitor sees the logo, the venue, and the dates 23 to 27 November 2026. Submitting a paper does not ask for an account: the person fills the form and receives a code.'
        },
        features: {
            es: [
                'El código empieza por CICBED-2026. El reporte exige un PDF de hasta 20 MB. El póster no. El visitante no puede leer la tabla.',
                'El PDF se sube antes de crear la fila y se nombra con un UUID, porque el código todavía no existe. El enlace de descarga del panel vence a los 5 minutos.',
                'La convocatoria está abierta. La inscripción de asistentes y las olimpiadas están apagadas. El sitio pide que los buscadores no lo indexen.',
                'El 26 de octubre el nombre pasó de CICED a CICBED. Los códigos viejos se dejan.'
            ],
            en: [
                'The code starts with CICBED-2026. The report requires a PDF of up to 20 MB. The poster does not. A visitor cannot read the table.',
                'The PDF is uploaded before the row is created and named with a UUID, because the code does not exist yet. The panel download link expires after 5 minutes.',
                'The call for papers is open. Attendee registration and the olympiads are off. The site asks search engines not to index it.',
                'On 26 October the name changed from CICED to CICBED. Old codes stay.'
            ]
        },
        timeline: {
            es: [
                '30 de septiembre de 2026. Medición del sitio del EIEM 8: una sola página, de unos 47.600 px en el celular.',
                '26 de octubre de 2026. El nombre pasa de CICED a CICBED.',
                '28 de octubre de 2026. La inscripción de olimpiadas sale hacia Microsoft Forms.',
                '31 de octubre de 2026. El enlace de descarga del panel vence a los 5 minutos.'
            ],
            en: [
                '30 September 2026. Measurement of the EIEM 8 site: one page, about 47,600 px on a phone.',
                '26 October 2026. The name changes from CICED to CICBED.',
                '28 October 2026. Olympiad registration moves to Microsoft Forms.',
                '31 October 2026. The panel download link expires after 5 minutes.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://cicbed.vercel.app/' }
        ]
    },
    totalapp: {
        kicker: 'Total-App',
        title: {
            es: 'Qué toca entrenar hoy, y si el socio en riesgo es esta cuenta',
            en: 'What to train today, and whether the member at risk is this account'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Total-App es una PWA en español para el celular, dentro del gimnasio. Quien llega crea una cuenta, rellena objetivo, modalidad y límites, y un modelo le devuelve la rutina del día para seguirla en un chat, con cronómetro y series.',
            en: 'Total-App is a Spanish PWA for a phone, inside the gym. A new user creates an account, fills in a goal, a mode and limits, and a model returns the day’s routine to follow in a chat, with a timer and sets.'
        },
        features: {
            es: [
                'La rutina usa google/gemini-3-flash-preview y el chat usa google/gemini-2.5-flash. Los dos salen por el gateway de Lovable.',
                'El pago no es un checkout. Un administrador marca has_paid. Hasta entonces la persona espera en una pantalla de verificación.',
                'La racha dejó de devolver siempre 1. new Date sobre una fecha sola, en UTC-5, caía en el día anterior. El cálculo quedó en src/lib/streak.ts, con 15 tests.',
                'La planilla del gimnasio tenía unos 470 socios y la app 15 cuentas. El emparejamiento por nombre solo ordena candidatos: no ata una fila a una cuenta.'
            ],
            en: [
                'The routine uses google/gemini-3-flash-preview and the chat uses google/gemini-2.5-flash. Both go through the Lovable gateway.',
                'Payment is not a checkout. An administrator sets has_paid. Until then the person waits on a verification screen.',
                'The streak stopped always returning 1. new Date on a date-only string, in UTC-5, fell on the previous day. The calculation landed in src/lib/streak.ts, with 15 tests.',
                'The gym spreadsheet had about 470 members and the app had 15 accounts. Matching by name only ranks candidates: it does not bind a row to an account.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://totalcoach.vercel.app/' }
        ]
    },
    lab: {
        kicker: 'Lab Report Navigator',
        title: {
            es: '¿Cumple un informe de laboratorio el formato y las respuestas de la guía?',
            en: 'Does a lab report match the format and the guide’s answers?'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'LabReview recibe el informe de laboratorio de un docente y devuelve un dictamen en español, asistido por IA, sobre el formato y sobre las respuestas de la guía.',
            en: 'LabReview takes a teacher’s lab report and returns a verdict in Spanish, assisted by AI, on the format and on the answers to the guide.'
        },
        features: {
            es: [
                'El flujo de formato compara el texto extraído con la plantilla activa y los criterios de secciones que configura un administrador.',
                'El flujo de preguntas cruza el informe con una guía y marca qué ítems quedaron respondidos.',
                'La extracción de PDF y Word ocurre en el navegador. Al servidor viaja solo el texto.',
                'La IA devuelve JSON con el reporte en Markdown y una nota de 0 a 100. El parseo acepta respuestas envueltas en fences.',
                'Cada análisis se guarda con metadatos académicos. Los roles separan lo que ve un docente de lo que ve un admin.'
            ],
            en: [
                'The format flow compares the extracted text with the active template and the section criteria an administrator configures.',
                'The question flow crosses the report with a guide and marks which items were answered.',
                'PDF and Word extraction happens in the browser. Only the text travels to the server.',
                'The model returns JSON with a Markdown report and a score from 0 to 100. The parser accepts answers wrapped in fences.',
                'Each analysis is stored with academic metadata. Roles separate what a teacher sees from what an admin sees.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://lab-report-navigator.vercel.app/' }
        ]
    },
    recon: {
        kicker: 'RECON',
        title: {
            es: 'Redactar el reporte de convivencia con la Ley 1620 y el manual del colegio',
            en: 'Draft the coexistence report with Law 1620 and the school handbook'
        },
        authors: [portfolioAuthor, { name: 'Edgardo Baena' }],
        description: {
            es: 'RECON redacta el reporte de convivencia de un colegio con la Ley 1620 y, si existe, el manual. El docente elige grado y alumno, escribe los hechos, y la función devuelve el tipo de falta, el artículo y un markdown con formato fijo.',
            en: 'RECON drafts a school coexistence report with Law 1620 and, if it exists, the handbook. The teacher picks a grade and a student, writes the facts, and the function returns the type of offense, the article, and a markdown document with a fixed format.'
        },
        features: {
            es: [
                'Hace falta cuenta. El login general es para superadmin. El resto entra por el slug del colegio.',
                'Quien abre un enlace /share/:token no necesita cuenta: puede leer y firmar.',
                'El director de grupo ve alerta a las 3 faltas leves, o ante una grave, o ante una gravísima.',
                'El manual y el pago viven en la tabla del colegio. El formulario guarda en Supabase en línea.'
            ],
            en: [
                'An account is required. The general login is for superadmin. Everyone else enters through the school slug.',
                'Someone who opens a /share/:token link does not need an account: they can read and sign.',
                'The homeroom director sees an alert at 3 minor offenses, or on a serious one, or on a very serious one.',
                'The handbook and the payment live on the school table. The form saves to Supabase online.'
            ]
        },
        timeline: {
            es: [
                '31 de enero de 2026. La función generate-report incorpora la Ley 1620.',
                '8 de marzo de 2026. El manual y el pago pasan a la tabla del colegio.'
            ],
            en: [
                '31 January 2026. generate-report takes in Law 1620.',
                '8 March 2026. The handbook and payment move to the school table.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://recon-xi.vercel.app/' }
        ]
    },
    bauly: {
        kicker: 'Bauly',
        title: {
            es: 'Catalogar una colección con una foto y hablar con una IA de coleccionismo',
            en: 'Catalog a collection from a photo and talk to a collecting-aware AI'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Entré cuando el proyecto todavía se llamaba Triasure AI. Lo renombré a Bauly, conecté el login con Google y dejé que una foto, o una pregunta de coleccionismo, armaran la ficha y la conversación.',
            en: 'I joined when the project was still called Triasure AI. I renamed it Bauly, connected Google login, and let a photo, or a collecting question, build the catalog card and the conversation.'
        },
        features: {
            es: [
                'El login llama a Supabase. Si el usuario es nuevo, se crea su fila con el nombre y la foto de Google.',
                'El chat de la portada responde con Gemini. Otra ruta recibe una foto y devuelve el JSON del catálogo desde el servidor, para no exponer la API key.',
                'La mensajería privada quedó en Firestore, en la colección ListChats.',
                'El perfil de tienda tiene banner, catálogo, filtros y un carrusel de ítems en tendencia.',
                'Las subastas tienen listado, cuenta atrás, puja y creación. Un trigger de Postgres solo actualiza la puja si la nueva es estrictamente mayor.',
                'El panel de administración verifica el rol, banea usuarios y manda ítems a la papelera en las trece tablas de categorías.'
            ],
            en: [
                'Login calls Supabase. If the user is new, their row is created with the name and photo from Google.',
                'The homepage chat answers with Gemini. Another route receives a photo and returns the catalog JSON from the server, so the API key stays off the browser.',
                'Private messaging landed in Firestore, in the ListChats collection.',
                'The shop profile has a banner, a catalog, filters, and a carousel of trending items.',
                'Auctions have a list, a countdown, bidding, and creation. A Postgres trigger updates the bid only if the new one is strictly higher.',
                'The admin panel checks the role, bans users, and soft-deletes items across the thirteen category tables.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://bauly.co/' }
        ]
    },
    stockup: {
        kicker: 'Stock up',
        title: {
            es: 'Qué hay en casa, qué se acabó y qué dice el ticket',
            en: 'What is at home, what ran out, and what the receipt says'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'StockUp lleva el inventario de las listas de compras de una casa. La portada entra con Google y, con sesión, abre el inventario. Una foto del ticket carga los productos.',
            en: 'StockUp keeps the inventory of a household’s shopping lists. The homepage signs in with Google and, with a session, opens the inventory. A photo of the receipt loads the products.'
        },
        features: {
            es: [
                'Cada artículo guarda nombre, cantidad, unidad, notas, precio y fecha. La lista suma precio por cantidad y separa lo que está en stock.',
                'La foto del ticket va a Gemini 2.5 Flash. Si el precio no pasa de cero, ese producto no entra. La caducidad queda a un mes.',
                'Si hay token de calendario, la foto crea un evento de una hora, a un mes, en America/Santiago.',
                'El botón de recordatorio manual quedó comentado. La ruta de la foto sigue creando el evento.'
            ],
            en: [
                'Each item stores name, quantity, unit, notes, price, and date. The list sums price times quantity and splits what is in stock.',
                'The receipt photo goes to Gemini 2.5 Flash. If the price is not above zero, that product does not enter. Expiry is set one month out.',
                'If there is a calendar token, the photo creates a one-hour event one month ahead, in America/Santiago.',
                'The manual reminder button was commented out. The photo route still creates the event.'
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
        },
        links: [
            { kind: 'deploy', href: 'https://stockup-theta.vercel.app/' }
        ]
    },
    mantix: {
        kicker: 'Mantix',
        title: {
            es: 'Saber qué equipo industrial ya se pasó de la fecha de mantenimiento',
            en: 'See which industrial asset is already past its maintenance date'
        },
        authors: [
            portfolioAuthor,
            { name: 'Gabriel Landinez' },
            { name: 'Luis' },
            { name: 'Javier Patin' }
        ],
        description: {
            es: 'Mantix muestra qué equipo industrial ya se pasó de la fecha de mantenimiento. El panel parte los activos por ubicación, y el técnico abre el que corresponde a su planta. En mis commits están la estructura, las tarjetas, el enrutado de fases y la descarga del PDF.',
            en: 'Mantix shows which industrial asset is already past its maintenance date. The panel splits assets by location, and the technician opens the one that matches their plant. My commits cover the structure, the cards, the phase routing, and the PDF download.'
        },
        features: {
            es: [
                'Si proximo_mto ya pasó, o no hay fecha, el activo cuenta como fuera de tiempo. Si faltan 30 días o menos, cuenta como próximo.',
                'El PDF de la orden clona la página y la baja con html2pdf.js.',
                'La tarjeta de mantenimientos completados dice «Último mes» y muestra el total con estado completed, sin cortar por fecha.',
                'La fecha del próximo mantenimiento en esa pantalla está escrita a mano: 2025-06-30. El gráfico de seis meses sí lee completed_at.'
            ],
            en: [
                'If proximo_mto is already past, or there is no date, the asset counts as overdue. If 30 days or fewer remain, it counts as upcoming.',
                'The order PDF clones the page and downloads it with html2pdf.js.',
                'The completed-maintenance card says “Last month” and shows the total with status completed, with no date cut.',
                'The next maintenance date on that screen is written by hand: 2025-06-30. The six-month chart does read completed_at.'
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
                '9 to 12 May 2025. Structure, cards, and phase routing.',
                '12 June and 23 July 2025. PDF layout and the download button.'
            ]
        },
        links: [
            { kind: 'deploy', href: 'https://mantix.vercel.app/' }
        ]
    },
    frog: {
        kicker: 'Frog Board',
        title: {
            es: 'Quién de la casa está en casa, y qué misión tiene',
            en: 'Who in the house is home, and what mission they have'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Frog Board muestra quién de la casa está en casa y qué misión tiene. Una persona se registra, verifica el correo y entra al panel. Si no tiene hogar, crea uno o se une con un código.',
            en: 'Frog Board shows who in the house is home and what mission they have. A person registers, verifies their email, and lands on the board. If they have no household, they create one or join with a code.'
        },
        features: {
            es: [
                'Cada miembro tiene una tablilla: en casa o fuera. Solo se puede voltear la propia.',
                'Las misiones son personales o asignadas, con prioridad baja, media o alta.',
                'El aviso que quedó envía con web-push desde una función Deno. La función SQL devuelve verdadero sin enviar nada.',
                'El hogar pasó de una columna del perfil a la tabla household_members.'
            ],
            en: [
                'Each member has a tile: home or away. Only your own tile can be flipped.',
                'Missions are personal or assigned, with low, medium, or high priority.',
                'The notification that remains sends with web-push from a Deno function. The SQL function returns true without sending anything.',
                'The household moved from a column on the profile to the household_members table.'
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
        },
        links: [
            { kind: 'deploy', href: 'https://jiraiya-s-family-board.vercel.app/' }
        ]
    },
    techcaribe: {
        kicker: 'TechCaribe',
        title: {
            es: 'Filtrar la agenda del Tech Caribe Fest por salón',
            en: 'Filter the Tech Caribe Fest agenda by room'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'En el sitio de TechCaribe armé la agenda del fest y de la ruta. En la portada hay dos tarjetas: la ruta del 8 al 19 de septiembre y el fest el 20 de septiembre, en la plaza de la paz. No hace falta cuenta para verlas.',
            en: 'On the TechCaribe site I built the fest and route agendas. The homepage has two cards: the route from 8 to 19 September and the fest on 20 September, at Plaza de la Paz. No account is needed to see them.'
        },
        features: {
            es: [
                'El cronograma vive en JSON y cada lista se ordena por la hora de inicio, distinguiendo AM de PM.',
                'El filtro de subzona deja ver un salón. La zona developer tiene seis salones y 20 actividades. Si la lista queda vacía, la pantalla lo dice.',
                'El carrusel de experiencias muestra cuatro. Usa Swiper, que ya estaba en el proyecto.',
                'Al cerrar patrocinadores había 2 de platino, 6 de oro, 2 de plata, 9 de bronce y 31 aliados. Las fotos de prensa pasaron a WebP.',
                'En el registro quedó solo el rol participante.'
            ],
            en: [
                'The schedule lives in JSON and each list is sorted by start time, telling AM from PM.',
                'The subzone filter shows one room. The developer zone has six rooms and 20 activities. If the list is empty, the screen says so.',
                'The experiences carousel shows four. It uses Swiper, which was already in the project.',
                'When sponsors were closed there were 2 platinum, 6 gold, 2 silver, 9 bronze, and 31 allies. Press photos moved to WebP.',
                'Registration kept only the participant role.'
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
        },
        links: [
            { kind: 'deploy', href: 'https://www.techcaribe.co' }
        ]
    },
    juancho: {
        kicker: 'Juancho Restrepo',
        title: {
            es: 'Administrar galería, blogs y noticias desde el propio sitio',
            en: 'Manage the gallery, blogs and news from the site itself'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El sitio de Juancho Restrepo muestra la campaña y, con sesión, deja administrar la galería, los blogs y las noticias sin salir de la página.',
            en: 'The Juancho Restrepo site shows the campaign and, with a session, lets the gallery, blogs, and news be managed without leaving the page.'
        },
        features: {
            es: [
                'Las rutas son /, /sobre-mi, /proyectos y /galeria.',
                'El header abre el login de Supabase. Sin sesión no aparecen los botones de edición, y el registro público salió del modal.',
                'Galería sube y borra archivos en website_assets/gallery. Blogs y noticias crean, actualizan o borran filas y suben la imagen a Storage.',
                'El autor se guarda con user.id. El home muestra dos blogs.'
            ],
            en: [
                'The routes are /, /sobre-mi, /proyectos, and /galeria.',
                'The header opens the Supabase login. Without a session the edit buttons stay hidden, and public signup left the modal.',
                'Gallery uploads and deletes files in website_assets/gallery. Blogs and news create, update, or delete rows and upload the image to Storage.',
                'The author is stored as user.id. Home shows two blogs.'
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
                '12 December 2025. Routes, gallery, and projects.',
                '18 December 2025. Supabase login.',
                '19 December 2025. Gallery, blogs, and news read the database.',
                '22 December 2025. Editing for gallery, blogs, and news. Public signup leaves the modal.'
            ]
        },
        links: [
            { kind: 'repo', href: 'https://github.com/code-centre/Web-Site-Juancho' },
            { kind: 'deploy', href: 'https://code-centre.github.io/Web-Site-Juancho' }
        ]
    },
    tecnocons: {
        kicker: 'Tecnocons',
        title: {
            es: 'Convertir el chat web en leads, mientras el agente busca proyectos y manda fotos',
            en: 'Turn the web chat into leads while the agent looks up projects and sends photos'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El backend convierte el chat web de una inmobiliaria en leads de Supabase. El asistente se llama Valeria Torres en el prompt: pide los datos, busca proyectos y manda fotos o brochure solo si la persona confirma. El front del CRM no vive en este repositorio.',
            en: 'The backend turns a real-estate company’s web chat into Supabase leads. The assistant is named Valeria Torres in the prompt: it asks for the data, looks up projects, and sends photos or a brochure only if the person confirms. The CRM front end does not live in this repository.'
        },
        features: {
            es: [
                'La captura sale de las tools del agente, del texto de la respuesta, de heurísticas sobre el mensaje y del estado de la sesión, y después hace PATCH a PostgREST.',
                'El cliente de Supabase quedó reemplazado por httpx directo a PostgREST y Storage.',
                'Un agente interno consulta leads cuando llega un JWT de empleado. El visitante anónimo sigue otro flujo.',
                'Las fotos salen como URLs firmadas en attachments. El brochure devuelve brochure_url.'
            ],
            en: [
                'Capture comes from the agent tools, the reply text, heuristics on the message, and the session state, and then it PATCHes PostgREST.',
                'The Supabase client was replaced by httpx straight to PostgREST and Storage.',
                'An internal agent queries leads when an employee JWT arrives. The anonymous visitor follows a different flow.',
                'Photos go out as signed URLs in attachments. The brochure returns brochure_url.'
            ]
        },
        links: []
    },
    lissajous: {
        kicker: 'Figuras de Lissajous',
        title: {
            es: 'Ver qué curva cierran dos senos, y cuándo el dibujo se corta',
            en: 'See which curve two sines close, and when the drawing stops'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El visualizador abre curvas de Lissajous en el navegador, sin instalación y sin cuenta. Dos senos arman la figura, y el código dice cuándo el dibujo se cierra y cuándo se corta.',
            en: 'The visualizer opens Lissajous curves in the browser, with no install and no account. Two sines build the figure, and the code says when the drawing closes and when it stops.'
        },
        features: {
            es: [
                'Sin un estado guardado arranca en a = 3, b = 2 y δ = 90°. Hay diez figuras listas, del círculo 1:1 al 7:11.',
                'El cierre redondea a y b a tres decimales. Si las vueltas pasan de 100, el dibujo se corta.',
                'Girar δ suma grados por segundo. Trazar recorre la curva y marca el punto con las dos proyecciones.',
                'Guardar PNG dibuja la curva a 1080, 2048 o 4096 px.'
            ],
            en: [
                'With no saved state it starts at a = 3, b = 2, and δ = 90°. There are ten ready figures, from the 1:1 circle to 7:11.',
                'Closure rounds a and b to three decimals. If the turns pass 100, the drawing stops.',
                'Turning δ adds degrees per second. Trace walks the curve and marks the point with both projections.',
                'Save PNG draws the curve at 1080, 2048, or 4096 px.'
            ]
        },
        timeline: {
            es: ['29 de octubre de 2026. Un commit, cuatro archivos y 716 líneas.'],
            en: ['29 October 2026. One commit, four files, and 716 lines.']
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/figuras-lissajous' }
        ]
    },
    modular: {
        kicker: 'Circunferencia modular',
        title: {
            es: 'Qué figura sale al unir cada punto i con (i · m) mod N',
            en: 'What figure appears when each point i joins (i · m) mod N'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'El visualizador pone N puntos en un círculo y une cada punto i con (i · m) mod N. Se abre con index.html, sin instalación y sin cuenta.',
            en: 'The visualizer places N points on a circle and joins each point i to (i · m) mod N. It opens with index.html, with no install and no account.'
        },
        features: {
            es: [
                'Con m = 2 la figura es una cardioide. Con m = 3, una nefroide. Si m es entero y cabe en el rango, el recuadro dice m − 1 lóbulos.',
                'm admite decimales. El ángulo no se redondea al punto más cercano, y m se recorta a seis decimales.',
                'Cada cuerda se dibuja sola, y la opacidad se suma en los cruces.',
                'Los puntos se pintan si N es como mucho 2000. Los números, si N es como mucho 100.'
            ],
            en: [
                'With m = 2 the figure is a cardioid. With m = 3, a nephroid. If m is an integer and fits the range, the box says m − 1 lobes.',
                'm accepts decimals. The angle is not rounded to the nearest point, and m is cut to six decimals.',
                'Each chord is drawn on its own, and opacity adds up at the crossings.',
                'Points are painted if N is at most 2000. Numbers, if N is at most 100.'
            ]
        },
        timeline: {
            es: ['29 de octubre de 2026. Un solo commit.'],
            en: ['29 October 2026. A single commit.']
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/circunferencia-modular' }
        ]
    },
    punto: {
        kicker: 'Punto y fama',
        title: {
            es: 'Adivinar cuatro dígitos distintos y saber cuántos están en su sitio',
            en: 'Guess four different digits and learn how many sit in the right place'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Punto y Fama esconde cuatro dígitos distintos y dice, en cada intento, cuántos están en su sitio. Se abre en una ventana de Tkinter, sin cuenta.',
            en: 'Punto y Fama hides four different digits and, on each try, says how many sit in the right place. It opens in a Tkinter window, with no account.'
        },
        features: {
            es: [
                'Se escriben cuatro números separados por comas y se pulsa Jugar, o Enter. Hay 10 intentos.',
                'Fama cuenta un dígito en la posición correcta. Punto cuenta un dígito correcto en otra posición. Un acierto de posición no suma punto.',
                'Al ganar o al quedarse sin intentos, el programa muestra la secuencia.',
                'El mismo juego está en el script y en el notebook. El spec prepara un ejecutable con PyInstaller.'
            ],
            en: [
                'You type four numbers separated by commas and press Jugar, or Enter. There are 10 tries.',
                'Fama counts a digit in the correct position. Punto counts a correct digit in another position. A position hit does not also add a punto.',
                'On a win, or when the tries run out, the program shows the sequence.',
                'The same game lives in the script and in the notebook. The spec prepares a PyInstaller executable.'
            ]
        },
        timeline: {
            es: ['6 de octubre de 2025. Un solo commit.'],
            en: ['6 October 2025. A single commit.']
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/puntoyfama' }
        ]
    },
    ahorcado: {
        kicker: 'Ahorcado Siglo XXXI',
        title: {
            es: '¿La letra y la posición alcanzan antes de que el ácido llene la cápsula?',
            en: 'Do the letter and the position land before the acid fills the capsule?'
        },
        authors: [portfolioAuthor],
        description: {
            es: 'Ahorcado Siglo XXXI pone al jugador como abogado de un amigo condenado a morir en ácido. Hay que acertar la letra y la posición antes de que el ácido llene la cápsula.',
            en: 'Ahorcado Siglo XXXI casts the player as the lawyer of a friend sentenced to die in acid. The letter and the position have to land before the acid fills the capsule.'
        },
        features: {
            es: [
                'La portada tiene dos botones: Contra máquina y Contra persona. Empezar sortea una palabra de una lista de 25.',
                'El jugador escribe una posición y pulsa una letra. Hay 27 letras, de la A a la Z más la Ñ.',
                'Si la letra coincide en esa posición, se rellenan todas sus apariciones. Si está en la palabra y la posición no, el ácido no crece. Si no está, el ácido avanza.',
                'La victoria compara la solución pegada con la palabra en mayúsculas.'
            ],
            en: [
                'The cover has two buttons: against the machine and against a person. Start draws a word from a list of 25.',
                'The player types a position and presses a letter. There are 27 letters, A to Z plus Ñ.',
                'If the letter matches that position, every occurrence is filled. If it is in the word and the position is not, the acid does not rise. If it is absent, the acid advances.',
                'Victory compares the joined solution with the word in capitals.'
            ]
        },
        timeline: {
            es: [
                '17 de abril de 2025. El repo nace con Create Next App.',
                '26 de abril de 2025. Portada y las dos partidas.'
            ],
            en: [
                '17 April 2025. The repo starts with Create Next App.',
                '26 April 2025. Cover and both games.'
            ]
        },
        links: [
            { kind: 'repo', href: 'https://github.com/Jsgallardo82/ahorcadosigloxxxi' },
            { kind: 'deploy', href: 'https://ahorcadosigloxxxi.vercel.app/' }
        ]
    }
};
