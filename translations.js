// Objeto con todas las traducciones
const translations = {
    es: {
        // Hero Section
        'hero.title': 'Juan Sebastian Gallardo Baena',
        'hero.subtitle': 'Desarrollador web junior — construyo apps que solucionan problemas y mejoran tu estilo de vida.',
        'hero.skills.react': 'React/Node.js',
        'hero.skills.fullstack': 'Full Stack',
        'hero.skills.python': 'Python',
        'hero.skills.ai': 'IA developer',
        
        // Projects Section
        'projects.title': 'Proyectos Destacados',
        'projects.view': 'Ver proyecto',
        'projects.repository': 'Repositorio',
        'projects.deployment': 'Despliegue',

        //triasure
        'triasure.title': 'Triasure',
        'triasure.description': 'Proyecto finalista de la hackathon del 2025, aplicacion web potenciada por IA para coleccionistas de distintos nichos. Los usuarios pueden cargar fotografias de sus colecciones, y con la ayuda de la IA, se analizan y se valorizan, ademas se pueden compartir con otros usuarios. Para crear una comunidad de personas con gustos en comun.',
        
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
        'footer.copyright': '© 2025 Sebastian Gallardo. Todos los derechos reservados.',
        
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
        'hero.subtitle': 'Junior Web Developer — I build apps that solve problems and improve your lifestyle.',
        'hero.skills.react': 'React/Node.js',
        'hero.skills.fullstack': 'Full Stack',
        'hero.skills.python': 'Python',
        'hero.skills.ai': 'AI Developer',
        
        // Projects Section
        'projects.title': 'Featured Projects',
        'projects.view': 'View project',
        'projects.repository': 'Repository',
        'projects.deployment': 'Deployment',

        //triasure
        'triasure.title': 'Triasure',
        'triasure.description': 'Finalist project of the 2025 Hackathon, a web application powered by AI for collectors across different niches. Users can upload photos of their collections, which are then analyzed and appraised with the help of AI. Collections can also be shared with other users, fostering a community of people with common interests.',

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
        'footer.copyright': '© 2025 Sebastian Gallardo. All rights reserved.',
        
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
