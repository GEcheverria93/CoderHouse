// Main JavaScript entry point
console.log('Portfolio loaded');

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }

    // Theme toggle button handler
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', function() {
            toggleTheme();
        });
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcons(isDark);
    }

    function updateThemeIcons(isDark) {
        const darkIcon = document.getElementById('theme-toggle-dark-icon');
        const lightIcon = document.getElementById('theme-toggle-light-icon');
        const mobileText = document.getElementById('theme-toggle-mobile-text');
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        
        if (darkIcon && lightIcon) {
            if (isDark) {
                darkIcon.classList.remove('hidden');
                lightIcon.classList.add('hidden');
            } else {
                darkIcon.classList.add('hidden');
                lightIcon.classList.remove('hidden');
            }
        }
        
        if (mobileText) {
            mobileText.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
        }

        if (themeToggle) {
            themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        }

        if (themeToggleMobile) {
            themeToggleMobile.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
        }
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Form handling
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            formStatus.className = 'mb-3 text-blue-600';
            formStatus.textContent = 'Enviando mensaje...';

            // Get form data
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    formStatus.className = 'mb-3 text-green-600';
                    formStatus.textContent = '¡Mensaje enviado! Te responderé pronto.';
                    form.reset();
                } else {
                    // Error
                    const errorData = await response.json();
                    if (errorData && errorData.errors) {
                        formStatus.className = 'mb-3 text-red-600';
                        formStatus.textContent = errorData.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.className = 'mb-3 text-red-600';
                        formStatus.textContent = 'Hubo un error, intentá de nuevo o escribime directo a gabriel.echeverria93@gmail.com';
                    }
                }
            } catch (error) {
                // Network error
                formStatus.className = 'mb-3 text-red-600';
                formStatus.textContent = 'Hubo un error de conexión, intentá de nuevo o escribime directo a gabriel.echeverria93@gmail.com';
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar';
            }
        });
    }
});
