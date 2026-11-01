// Navegación suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                behavior: 'smooth'
            });
            
            const navLinksMenu = document.querySelector('.nav-links');
            if (navLinksMenu && navLinksMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        }
    });
});

// Efecto de scroll para el header
const header = document.querySelector('.header');
let lastScroll = 0;

if (header) {
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll hacia abajo
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll hacia arriba
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});
}

// Añadir clase activa al enlace de navegación actual
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();

// Menú móvil
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.setAttribute('aria-label', 'Menú de navegación');

const nav = document.querySelector('nav');
if (nav) {
nav.appendChild(mobileMenuBtn);

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Cerrar menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });
});
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar acordeones de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        const content = card.querySelector('.project-content');
        const toggle = card.querySelector('.project-toggle');
        
        if (!header || !content) return;
        
        // Función para alternar el acordeón
        const toggleAccordion = (e) => {
            e.stopPropagation();
            
            // Alternar la clase 'active' en la tarjeta
            card.classList.toggle('active');
            
            // Actualizar el ícono
            if (toggle) {
                const icon = toggle.querySelector('.toggle-icon');
                if (icon) {
                    icon.textContent = card.classList.contains('active') ? '×' : '+';
                }
            }
        };
        
        // Event listeners
        header.addEventListener('click', toggleAccordion);
        
        if (toggle) {
            toggle.addEventListener('click', toggleAccordion);
        }
    });
    
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
            document.body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : 'auto';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = mobileMenu.classList.contains('show') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }
    
    // Actualizar año en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Efecto de hover en las tarjetas de proyecto
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

const skillButtons = document.querySelectorAll('.signal[data-skill]');
const availabilityButtons = document.querySelectorAll('.project-filters [data-filter]');
const filterableCards = document.querySelectorAll('.project-card[data-skills]');
let activeSkill = null;
const activeAvailability = new Set();

function applySkillFilter(skill) {
    filterableCards.forEach(card => {
        const skills = (card.dataset.skills || '').split(',');
        const skillOk = !skill || skills.includes(skill);
        const deployedOk = !activeAvailability.has('deployed') || card.dataset.deployed === 'true';
        const publicOk = !activeAvailability.has('public') || card.dataset.public === 'true';
        card.classList.toggle('is-hidden', !(skillOk && deployedOk && publicOk));
    });

    skillButtons.forEach(button => {
        const selected = button.dataset.skill === skill;
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
}

availabilityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const key = button.dataset.filter;
        if (activeAvailability.has(key)) {
            activeAvailability.delete(key);
        } else {
            activeAvailability.add(key);
        }
        const selected = activeAvailability.has(key);
        button.classList.toggle('active', selected);
        button.setAttribute('aria-pressed', selected ? 'true' : 'false');
        applySkillFilter(activeSkill);
    });
});

function currentDetailLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'es';
}

function fillProjectDetail(id) {
    const data = projectDetails[id];
    const dialog = document.getElementById('project-detail');
    if (!data || !dialog) return;
    const lang = currentDetailLang();
    dialog.dataset.current = id;
    dialog.querySelector('.project-dialog-kicker').textContent = data.kicker;
    dialog.querySelector('#project-detail-title').textContent = data.title[lang];
    const copy = dialog.querySelector('.project-dialog-copy');
    copy.replaceChildren();
    (data.paragraphs[lang] || []).forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        copy.appendChild(paragraph);
    });
    const timeline = data.timeline && data.timeline[lang];
    if (!timeline || !timeline.length) return;
    const heading = document.createElement('h3');
    heading.className = 'project-dialog-timeline-title';
    const label = translations[lang] && translations[lang]['projects.detail.timeline'];
    heading.textContent = label || (lang === 'en' ? 'Timeline' : 'Línea de tiempo');
    copy.appendChild(heading);
    const list = document.createElement('ol');
    list.className = 'project-timeline';
    timeline.forEach(item => {
        const line = document.createElement('li');
        line.textContent = item;
        list.appendChild(line);
    });
    copy.appendChild(list);
}

document.querySelectorAll('.project-card[data-detail]').forEach(card => {
    const content = card.querySelector('.project-content');
    if (content && !content.querySelector('.project-open')) {
        const cue = document.createElement('p');
        cue.className = 'project-open';
        cue.dataset.i18n = 'projects.detail.open';
        cue.textContent = 'Ver ficha';
        content.appendChild(cue);
    }

    const openDetail = () => {
        const id = card.dataset.detail;
        const named = document.getElementById('detail-' + id);
        if (named) {
            if (!named.open) named.showModal();
            return;
        }
        fillProjectDetail(id);
        const dialog = document.getElementById('project-detail');
        if (dialog && !dialog.open) dialog.showModal();
    };

    card.addEventListener('click', (event) => {
        if (event.target.closest('a, button')) return;
        openDetail();
    });

    card.addEventListener('keydown', (event) => {
        if (event.target !== card) return;
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        openDetail();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const originalSetLanguage = window.setLanguage;
    if (typeof originalSetLanguage !== 'function') return;
    window.setLanguage = function (lang) {
        originalSetLanguage(lang);
        const dialog = document.getElementById('project-detail');
        if (dialog && dialog.open && dialog.dataset.current) {
            fillProjectDetail(dialog.dataset.current);
        }
    };
});

document.querySelectorAll('.project-dialog').forEach(dialog => {
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
    const closeButton = dialog.querySelector('.project-dialog-close');
    if (closeButton) {
        closeButton.addEventListener('click', () => dialog.close());
    }
});

skillButtons.forEach(button => {
    button.addEventListener('click', () => {
        const skill = button.dataset.skill;
        activeSkill = activeSkill === skill ? null : skill;
        applySkillFilter(activeSkill);

        if (activeSkill) {
            const projects = document.getElementById('proyectos');
            if (projects) {
                projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

const techIcons = {
    python: 'https://cdn.simpleicons.org/python/3776AB',
    javascript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    typescript: 'https://cdn.simpleicons.org/typescript/3178C6',
    react: 'https://cdn.simpleicons.org/react/61DAFB',
    nextjs: 'https://cdn.simpleicons.org/nextdotjs/000000',
    vite: 'https://cdn.simpleicons.org/vite/646CFF',
    astro: 'https://cdn.simpleicons.org/astro/FF5D01',
    tailwind: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    node: 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
    fastapi: 'https://cdn.simpleicons.org/fastapi/009688',
    streamlit: 'https://cdn.simpleicons.org/streamlit/FF4B4B',
    pandas: 'https://cdn.simpleicons.org/pandas/150458',
    numpy: 'https://cdn.simpleicons.org/numpy/013243',
    sklearn: 'https://cdn.simpleicons.org/scikitlearn/F7931E',
    opencv: 'https://cdn.simpleicons.org/opencv/5C3EE8',
    gemini: 'https://cdn.simpleicons.org/googlegemini/8E75B2',
    claude: 'https://cdn.simpleicons.org/claude/D97757',
    cursor: 'https://cdn.simpleicons.org/cursor/000000',
    lovable: 'https://api.iconify.design/logos/lovable-icon.svg',
    firebase: 'https://cdn.simpleicons.org/firebase/FFCA28',
    supabase: 'https://cdn.simpleicons.org/supabase/3ECF8E',
    gcloud: 'https://cdn.simpleicons.org/googlecloud/4285F4',
    vercel: 'https://cdn.simpleicons.org/vercel/000000',
    git: 'https://cdn.simpleicons.org/git/F05032',
    github: 'https://cdn.simpleicons.org/github/181717',
    vscode: 'https://api.iconify.design/logos/visual-studio-code.svg',
    pdf: 'file-pdf',
    word: 'file-word',
    powerpoint: 'file-powerpoint',
    excel: 'file-excel',
    latex: 'https://cdn.simpleicons.org/latex/008080'
};

document.querySelectorAll('.tech[data-tech]').forEach(chip => {
    if (chip.querySelector('img, i')) return;
    const icon = techIcons[chip.dataset.tech];
    if (!icon) return;
    const mark = icon.startsWith('http')
        ? `<img src="${icon}" alt="" width="16" height="16">`
        : `<i class="fas fa-${icon}" aria-hidden="true"></i>`;
    chip.insertAdjacentHTML('afterbegin', mark);
});
