// Función para aplicar el tema seleccionado
function setTheme(themeName) {
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Actualizar el estado activo de los botones
    document.querySelectorAll('.theme-btn[data-theme]').forEach(btn => {
        btn.style.backgroundColor = '';
        btn.classList.toggle('active', btn.getAttribute('data-theme') === themeName);
    });
}

// Función para alternar los bordes
function toggleBorders() {
    document.body.classList.toggle('borders-visible');
    const isVisible = document.body.classList.contains('borders-visible');
    localStorage.setItem('bordersVisible', isVisible);
    
    const borderButton = document.getElementById('toggleBorders');
    if (borderButton) {
        borderButton.style.backgroundColor = '';
        borderButton.classList.toggle('active', isVisible);
    }
}

// Función para cargar el tema guardado o usar el predeterminado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setTheme(savedTheme);
}

// Función para cargar el estado de los bordes
function loadBordersState() {
    const bordersVisible = localStorage.getItem('bordersVisible') === 'true';
    if (bordersVisible) {
        document.body.classList.add('borders-visible');
        const borderButton = document.getElementById('toggleBorders');
        if (borderButton) {
            borderButton.style.backgroundColor = '';
            borderButton.classList.add('active');
        }
    }
}

// Evento cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el tema guardado
    loadTheme();
    
    // Cargar el estado de los bordes
    loadBordersState();
    
    // Agregar event listeners a los botones de tema
    document.querySelectorAll('.theme-btn[data-theme]').forEach(button => {
        button.addEventListener('click', (e) => {
            const theme = e.currentTarget.getAttribute('data-theme');
            setTheme(theme);
        });
    });
    
    // Agregar event listener al botón de bordes
    const toggleBordersBtn = document.getElementById('toggleBorders');
    if (toggleBordersBtn) {
        toggleBordersBtn.addEventListener('click', toggleBorders);
    }
});
