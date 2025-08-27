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
