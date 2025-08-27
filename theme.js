// Función para aplicar el tema seleccionado
function setTheme(themeName) {
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Actualizar el estado activo de los botones
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === themeName) {
            btn.classList.add('active');
            // Asegurarse de que el color de fondo del botón activo coincida con el tema
            btn.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        } else {
            // Restaurar el color de fondo predeterminado para los botones inactivos
            btn.style.backgroundColor = '';
        }
    });
}

// Función para alternar los bordes
function toggleBorders() {
    document.body.classList.toggle('borders-visible');
    const isVisible = document.body.classList.contains('borders-visible');
    localStorage.setItem('bordersVisible', isVisible);
    
    const borderButton = document.getElementById('toggleBorders');
    if (isVisible) {
        borderButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    } else {
        borderButton.style.backgroundColor = '';
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
            borderButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
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
