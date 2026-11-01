// Objeto con todas las traducciones
const translations = {
    es: {
        // Hero Section
        'hero.title': 'Juan Sebastian Gallardo Baena',
        'hero.subtitle': 'Desarrollador web — construyo apps que solucionan problemas y mejoran tu estilo de vida.',
        'hero.meta': 'Barranquilla, Colombia · Abierto a tiempo completo, freelance, remoto o presencial.',
        'hero.skills.react': 'React/Node.js',
        'hero.skills.fullstack': 'Full Stack',
        'hero.skills.python': 'Python',
        'hero.skills.ai': 'IA developer',
        'hero.skills.data': 'Datos',
        'hero.skills.database': 'Bases de datos',
        'hero.skills.viz': 'Visualización',
        'stack.languages': 'Lenguajes',
        'stack.frameworks': 'Frameworks',
        'stack.data': 'Datos',
        'stack.ai': 'IA',
        'stack.cloud': 'Nube',
        'stack.tools': 'Herramientas',
        'stack.docs': 'Documentos',
        'stack.title': 'Stack',
        'about.title': 'Sobre mí',
        'about.description': 'Soy desarrollador web y me gusta armar soluciones digitales que de verdad se usen. Trabajo sobre todo el frontend, con la IA metida en el proceso, buenas prácticas y una solución clara.',
        'about.personal.title': 'Fuera del código',
        'about.personal.description': 'Me gusta el anime y los videojuegos, las películas y las series divertidas, y el deporte: basketball y el gimnasio. Como físico también miro la realidad con objetividad, y me mueve mejorarla para nosotros y para las generaciones que vienen.',
        'about.personal.stack.title': 'Cómo trabajo',
        'about.personal.stack.team': 'Trabajar en equipo',
        'about.personal.stack.learn': 'Aprender rápido',
        'about.personal.stack.solve': 'Resolver problemas',
        'about.personal.stack.innovate': 'Llevar una idea hasta una solución que se use',
        'about.stack.title': 'Stack',
        
        // Projects Section
        'projects.title': 'Proyectos Destacados',
        'projects.view': 'Ver proyecto',
        'projects.repository': 'Repositorio',
        'projects.deployment': 'Despliegue',
        'projects.filter.deployed': 'Desplegado',
        'projects.filter.public': 'Repo público',
        'projects.detail.close': 'Cerrar',
        'projects.detail.authors': 'Autores',
        'projects.detail.features': 'Funcionalidades',
        'projects.detail.timeline': 'Línea de tiempo',
        'projects.detail.prev': 'Anterior',
        'projects.detail.next': 'Siguiente',

        'fitnessgym.description': 'Proyecto final del máster en Big Data para un gimnasio familiar. Limpié y ordené 86.093 asistencias de 2021 a 2026, entrené un modelo de deserción con scikit-learn y dejé la lista de riesgo a la vista del administrador en Total-App.',
        'fitnessgym.detail.close': 'Cerrar',
        'fitnessgym.detail.title': 'Predecir quién deja de ir al gimnasio',
        'fitnessgym.detail.p1': 'Con las planillas de asistencia de un gimnasio familiar en Colombia, de 2021 a 2026, construí un modelo para ordenar a quién conviene contactar. La pregunta es concreta: de quienes vinieron en los 90 días previos al 17 de julio de 2026, quién no regresa en los 45 días siguientes.',
        'fitnessgym.detail.p2': 'El historial completo produce un acierto casi perfecto, porque la etiqueta se arma con la misma recencia que entra como variable. Esa fuga se demostró y se descartó. El modelo que queda es un bosque aleatorio sobre 470 personas, sin búsqueda de hiperparámetros y con una configuración fija, comparado con gradient boosting y regresión logística.',
        'fitnessgym.detail.p3': 'En la prueba de 94 personas el F1 macro es 0,69 y el AUC 0,77. Con el umbral de 0,50 detecta a 47 de los 64 desertores: recall 0,73 y precisión 0,82. Contactar al 20 % de mayor riesgo alcanza al 28,1 % de quienes se van, con un lift de 1,39. El aviso cuesta un pase diario de 3.500 pesos y se compensa si vuelve más del 7 % de los contactados.',
        'fitnessgym.detail.p4': 'La lista no avisa sola al cliente. La lee la administración, en la pestaña Deserción, y la recepción contacta de arriba hacia abajo. Los nombres no salen de este resumen: cada persona queda como un identificador reversible solo con el catálogo local.',
        'fitnessgym.detail.p5': 'El 87,9 % de los ingresos es entrenamiento y mensualidad. Proteínas, agua y el resto del mostrador suman el 12,1 %. Por eso el costo de no detectar a quien se va es una mensualidad de 50.000 pesos, no una venta de mostrador.',
        'fitnessgym.detail.fig.risk': 'Lista de riesgo del corte del 17 de julio de 2026. 470 personas con al menos una visita en los 90 días previos, sin nombres.',
        'fitnessgym.detail.fig.revenue': 'De qué vive el gimnasio: el 87,9 % de los ingresos es entrenamiento y mensualidad.',
        'sharkcaribe.description': 'Aplicación de la Shark Caribe Pitch Competition 2026. Cubre el registro, el pago con Wompi, el envío de boletas por correo con Resend y la gestión de entradas físicas. El frente está en React y Vite; los datos, la autenticación y las funciones de servidor viven en Supabase.',
        'zitterbewegung.description': 'Simulador científico y educativo del efecto Zitterbewegung, la vibración que predice la ecuación de Dirac para un electrón libre. Next.js muestra el dashboard, la vista de la partícula y el mar de Dirac. FastAPI, QuTiP y SciPy calculan la evolución del sistema.',
        'ciced.description': 'Sitio del I Congreso Internacional de Ciencias y Educación, de la Institución Universitaria de Barranquilla. Incluye las páginas del evento, la convocatoria de trabajos con su evaluación y la inscripción a la Olimpiada Padilla Benavidez. Está hecho con Astro, React y Supabase.',
        'totalapp.description': 'Entrenador personal con IA para usar en el celular, dentro del gimnasio. La persona arma su perfil, recibe la rutina del día y la sigue en un chat con cronómetro, series y marcas. Es una PWA en React, Vite y Supabase.',
        'labreport.description': 'Herramienta para docentes. Suben un informe de laboratorio en PDF o Word y la IA lo compara con la plantilla del curso o revisa las respuestas de una guía. Hay roles de administrador y de docente, y los informes quedan guardados para filtrarlos. TanStack Start, Supabase y Gemini.',
        'recon.description': 'Recon lleva los reportes de convivencia de un colegio. El docente deja el caso y rectoría o coordinación le hace seguimiento. Cada colegio entra por su subdominio, la app sigue funcionando sin internet y sincroniza cuando vuelve la conexión. React, TypeScript, Vite y Supabase.',
        'frogboard.description': 'Tablero para organizar las tareas de un hogar. Cada familia comparte tablillas, ve el estado de los demás al momento y reparte misiones. Hecho con React, Vite y Supabase.',
        'lissajous.description': 'Visualizador de curvas de Lissajous. Se mueven las frecuencias, el desfase y las amplitudes, hay figuras listas y la imagen se puede guardar en PNG. Se abre directo en el navegador.',
        'modular.description': 'Visualizador de la circunferencia de multiplicación modular. Pone puntos sobre un círculo y los une según el producto modular: salen cardioides, nefroides y mandalas. El multiplicador se puede animar y la figura se exporta a PNG.',
        'bauly.description': 'Bauly fue finalista de la hackathon de 2025. Es una aplicación para coleccionistas: con una foto, la IA completa la ficha de la pieza. También se puede organizar la colección y compartirla con otras personas.',
        'techcaribe.description': 'Agenda del Tech Caribe Fest. Pasé el cronograma a JSON, ordené cada lista por hora de inicio y dejé el filtro por salón. La zona developer muestra seis salones y 20 actividades.',
        'juancho.description': 'Sitio de la campaña de Juancho Restrepo. Desde la sesión se administran la galería, los blogs y las noticias, con las fotos en Supabase Storage.',
        'tecnocons.description': 'Backend del chat de una inmobiliaria. El agente busca proyectos, manda fotos y brochure, y va actualizando el lead en Supabase mientras la conversación sigue.',
        
        //stockup
        'stockup.title': 'Stockup',
        'stockup.description': 'StockUp es una aplicacion web, personal, desarrollada para gestionar el inventario de tus listas de compras. Potenciado con inteligencia artificial para el analisis de recibos de compra, ademas una facil gestion de los productos y recordatorios de caducidad. Al igual que las compras, las listas de compras pueden ser compartidas con otros usuarios.',
        
        //mantix
        'mantix.title': 'Mantix',
        'mantix.description': 'Mantix es una aplicacion web, desarrollada en grupo, para una empresa de mantenimiento. Mantix ofrece el servicio de organizar, programar, notificar y cargar la informacion a una database. Los formularios para los mantenimientos de los respectivos assets elaborados bajo peticion del cliente, con carga de fotografias del antes y despues del mantenimiento.',
        
        //autograder
        'autograder.title': 'Autograder IA',
        'autograder.description': 'Proyecto final de mi curso de Python. Como profesor tenia el problema de calificar demasiados examenes, por lo que se desarrollo un autograder IA que a traves de la IA de gemini, analiza la fotografia de un examen la compara con las respuestas correctas, calificando al estudiante ademas de brindar un feedback sobre su rendimiento.',
        
        //trainia
        'trainia.title': 'Trainia',
        'trainia.description': 'Proyecto final del curso de desarrollo web. TrainIA es una aplicacion web potenciada por IA para ayudar a entrenar y llevar un control de su rendimiento a los runners. La IA de gemini genere los entrenamiento teniendo en cuenta caracteristicas personales de los usuarios, tiene en cuenta su rendimiento para generar los proximos entrenamientos y ayudarlo a alcanzar sus objetivos.',

        //IA Chatbot
        'chatbot.title': 'IA Chatbot',
        'chatbot.description': 'Proyecto en clase del curso de desarrollo web. Una interfaz para chatear entre usuarios, ademas de acceso a perfiles. Puedes crear usuarios, ademas de una IA con la que si puedes chatear.',

        //Punto y Fama
        'puntoyfama.title': 'Punto y Fama',
        'puntoyfama.description': 'Juego de punto y fama. Desarrollado en python. Consiste en conseguir adivinar el numero de 4 cifras que genera la maquina automaticamente.a traves de pistas que son puntos y famas.',

        //Ahorcado Siglo XXXI
        'ahorcadosigloxxx1.title': 'Ahorcado Siglo XXXI',
        'ahorcadosigloxxx1.description': 'Proyecto en clase del curso de desarrollo web. Una version compleja del clasico juego del ahorcado, con usa estetica futurista, con la posibilidad de jugar contra la maquina o contra un amigo.',

        //despliegue
        'despliegue.title': 'Despliegue',
        //repository
        'repository.title': 'Repositorio',

        // Footer
        'footer.contact': 'Si te gustó lo visto y quieres contactarme:',
        'footer.copyright': '© 2026 Sebastian Gallardo. Todos los derechos reservados.',
        
        // Botones
        'button.toggleBorders': 'Alternar bordes',
        'button.language': 'English',
        'button.theme.blue': 'Tema Azul',
        'button.theme.dark': 'Tema Oscuro',
        'button.theme.green': 'Tema Verde'
    },
    en: {
        // Hero Section
        'hero.title': 'Juan Sebastian Gallardo Baena',
        'hero.subtitle': 'Web Developer — I build apps that solve problems and improve your lifestyle.',
        'hero.meta': 'Barranquilla, Colombia · Open to full-time, freelance, remote, or on-site work.',
        'hero.skills.react': 'React/Node.js',
        'hero.skills.fullstack': 'Full Stack',
        'hero.skills.python': 'Python',
        'hero.skills.ai': 'AI Developer',
        'hero.skills.data': 'Data',
        'hero.skills.database': 'Databases',
        'hero.skills.viz': 'Visualization',
        'stack.languages': 'Languages',
        'stack.frameworks': 'Frameworks',
        'stack.data': 'Data',
        'stack.ai': 'AI',
        'stack.cloud': 'Cloud',
        'stack.tools': 'Tools',
        'stack.docs': 'Documents',
        'stack.title': 'Tech stack',
        'about.title': 'About me',
        'about.description': 'I am a web developer, and I like building digital products people actually use. I focus on the frontend, bring AI into the work when it helps, and care about sound practice and a clear solution.',
        'about.personal.title': 'Off the clock',
        'about.personal.description': 'I like anime and video games, funny movies and series, and sport: basketball and the gym. I trained as a physicist, so I look at the world with a straight eye, and I want to leave it better for us and for the people who come next.',
        'about.personal.stack.title': 'How I work',
        'about.personal.stack.team': 'I work well with a team',
        'about.personal.stack.learn': 'I learn quickly',
        'about.personal.stack.solve': 'I like hard problems',
        'about.personal.stack.innovate': 'I carry an idea through until people can use it',
        'about.stack.title': 'Tech stack',
        
        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.view': 'View project',
        'projects.repository': 'Repository',
        'projects.deployment': 'Deployment',
        'projects.filter.deployed': 'Deployed',
        'projects.filter.public': 'Public repo',
        'projects.detail.close': 'Close',
        'projects.detail.authors': 'Authors',
        'projects.detail.features': 'Features',
        'projects.detail.timeline': 'Timeline',
        'projects.detail.prev': 'Previous',
        'projects.detail.next': 'Next',

        'fitnessgym.description': 'Final project of my Big Data master\'s degree for a family gym. I cleaned and organized 86,093 attendance records from 2021 to 2026, trained a churn model with scikit-learn, and put the risk list in front of the manager inside Total-App.',
        'fitnessgym.detail.close': 'Close',
        'fitnessgym.detail.title': 'Predicting who stops coming to the gym',
        'fitnessgym.detail.p1': 'Using the attendance sheets of a family gym in Colombia, from 2021 to 2026, I built a model that ranks who is worth contacting. The question is specific: among people who came in the 90 days before 17 July 2026, who does not come back in the next 45 days.',
        'fitnessgym.detail.p2': 'The full history produces an almost perfect score, because the label is built from the same recency that enters as a feature. That leak was demonstrated and discarded. The model that remains is a random forest on 470 people, with no hyperparameter search and a fixed configuration, compared with gradient boosting and logistic regression.',
        'fitnessgym.detail.p3': 'On a test of 94 people the macro F1 is 0.69 and the AUC is 0.77. At a threshold of 0.50 it finds 47 of the 64 people who leave: recall 0.73 and precision 0.82. Contacting the 20% at highest risk reaches 28.1% of those who leave, with a lift of 1.39. The notice costs a day pass of 3,500 pesos and pays for itself if more than 7% of the people contacted come back.',
        'fitnessgym.detail.p4': 'The list does not message the client on its own. The administration reads it, on the Churn tab, and the front desk contacts people from the top down. Names do not appear in this summary: each person stays as an identifier that only the local catalog can turn back into a name.',
        'fitnessgym.detail.p5': '87.9% of revenue is training and memberships. Protein, water, and the rest of the counter add up to 12.1%. That is why missing someone who leaves costs a 50,000-peso membership, not a counter sale.',
        'fitnessgym.detail.fig.risk': 'Risk list for the 17 July 2026 cutoff. 470 people with at least one visit in the previous 90 days, with no names.',
        'fitnessgym.detail.fig.revenue': 'What the gym lives on: 87.9% of revenue is training and memberships.',
        'sharkcaribe.description': 'Application for the Shark Caribe Pitch Competition 2026. It handles registration, Wompi payments, ticket emails through Resend, and physical ticket management. The front end is React and Vite; data, auth, and server functions run on Supabase.',
        'zitterbewegung.description': 'Scientific and educational simulator of the Zitterbewegung effect, the trembling motion predicted by the Dirac equation for a free electron. Next.js renders the dashboard, the particle view, and the Dirac sea. FastAPI, QuTiP, and SciPy compute how the system evolves.',
        'ciced.description': 'Site for the First International Congress on Science and Education at the Institución Universitaria de Barranquilla. It includes the event pages, the paper call with its review flow, and registration for the Padilla Benavidez Olympiad. Built with Astro, React, and Supabase.',
        'totalapp.description': 'AI personal trainer meant for a phone at the gym. You set up a profile, get the day’s workout, and follow it in a chat with a timer, sets, and personal records. It is a PWA built with React, Vite, and Supabase.',
        'labreport.description': 'A tool for teachers. They upload a lab report as PDF or Word, and the AI checks it against the course template or reviews the answers to a question guide. Admin and teacher roles are separate, and saved reports can be filtered. TanStack Start, Supabase, and Gemini.',
        'recon.description': 'Recon tracks a school’s coexistence reports. A teacher files the case, and the principal’s office or coordination follows it up. Each school signs in on its own subdomain, the app keeps working offline, and it syncs when the connection returns. React, TypeScript, Vite, and Supabase.',
        'frogboard.description': 'A board for organizing household tasks. Each family shares tablets, sees everyone else’s status as it changes, and assigns missions. Built with React, Vite, and Supabase.',
        'lissajous.description': 'A Lissajous curve visualizer. You change the frequencies, phase, and amplitudes, pick ready-made figures, and save the image as a PNG. It opens straight in the browser.',
        'modular.description': 'A modular multiplication circle visualizer. It places points on a circle and joins them by modular product, drawing cardioids, nephroids, and mandalas. The multiplier can be animated and the figure exported as a PNG.',
        'bauly.description': 'Bauly was a finalist in the 2025 hackathon. It is an app for collectors: from one photo, AI fills in the item card. Collections can also be organized and shared with other people.',
        'techcaribe.description': 'Agenda for Tech Caribe Fest. I moved the schedule into JSON, sorted each list by start time, and added a filter by room. The developer zone shows six rooms and 20 activities.',
        'juancho.description': 'Campaign site for Juancho Restrepo. Once signed in, the gallery, blogs and news are managed from the site, with photos in Supabase Storage.',
        'tecnocons.description': 'Chat backend for a real-estate company. The agent looks up projects, sends photos and a brochure, and keeps the lead updated in Supabase while the conversation continues.',

        //stockup
        'stockup.title': 'Stockup',
        'stockup.description': 'StockUp is a personal web application designed to manage your shopping list inventory. Powered by artificial intelligence for purchase receipt analysis, it also enables easy product management and expiration reminders. Just like shopping lists, your lists can be shared seamlessly with other users.',
        
        //mantix
        'mantix.title': 'Mantix',
        'mantix.description': 'Mantix is a web application developed in a group for a maintenance company. It offers the service of organizing, scheduling, notifying, and uploading information to a database. Forms for maintenance of the respective assets are elaborated based on client requests, with photos of the before and after of the maintenance.',

        // autograder
        'autograder.title': 'Autograder IA',
        'autograder.description': 'Final project of my Python course. As a teacher I had the problem of grading too many exams, so I developed an AI autograder that through the Gemini AI, analyzes the exam photo compares it with the correct answers, grading the student and giving feedback about their performance.',
        
        //trainia
        'trainia.title': 'Trainia',
        'trainia.description': 'Final project of the Web Development course. TrainIA is an AI-powered web application designed to help runners train and track their performance. The Gemini AI engine generates personalized training plans based on each user’s characteristics, monitors their progress, and adapts future sessions to help them achieve their goals.',

        //IA Chatbot
        'chatbot.title': 'IA Chatbot',
        'chatbot.description': 'Class project for the Web Development course. An interface for chatting between users, with access to user profiles. It allows the creation of new accounts, as well as interaction with an integrated AI that users can also chat with.',

        //Punto y fama
        'puntoyfama.title': 'Punto y Fama',
        'puntoyfama.description': '“Punto y Fama” Game. Developed in Python, it challenges the player to guess a 4-digit number automatically generated by the machine. Players receive clues in the form of “points” and “fames” to guide them toward the correct number.',

        //Ahorcado Siglo XXXI
        'ahorcadosigloxxx1.title': 'Ahorcado Siglo XXXI',
        'ahorcadosigloxxx1.description': 'Class project for the Web Development course. A complex version of the classic Hangman game with a futuristic aesthetic, offering the possibility to play either against the computer or against a friend.',

        //despliegue
        'despliegue.title': 'Deployment',
        //repository
        'repository.title': 'Repository',
        
        // Footer
        'footer.contact': 'If you liked what you saw and want to contact me:',
        'footer.copyright': '© 2026 Sebastian Gallardo. All rights reserved.',
        
        // Buttons
        'button.toggleBorders': 'Toggle borders',
        'button.language': 'Español',
        'button.theme.blue': 'Blue Theme',
        'button.theme.dark': 'Dark Theme',
        'button.theme.green': 'Green Theme'
    }
};

// Función para cambiar el idioma
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    // Guardar preferencia
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Actualizar textos
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
            
            // Actualizar placeholders y atributos title/alt
            if (element.placeholder) {
                element.placeholder = translations[lang][key];
            }
            if (element.getAttribute('title')) {
                element.setAttribute('title', translations[lang][key]);
            }
        }
    });
    
    // Actualizar botón de idioma
    const langButton = document.getElementById('language-toggle');
    if (langButton) {
        const newLang = lang === 'es' ? 'en' : 'es';
        langButton.setAttribute('data-lang', newLang);
        langButton.setAttribute('title', lang === 'es' ? 'English' : 'Español');
        langButton.innerHTML = lang === 'es' ? 'EN' : 'ES';
    }
}

// Cargar idioma guardado o usar el predeterminado
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});
