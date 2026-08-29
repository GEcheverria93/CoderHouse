// Main JavaScript entry point
console.log('Portfolio loaded');

const translations = {
    es: {
        home: 'Inicio',
        role: 'Desarrollador',
        aboutTitle: 'Sobre mí',
        aboutText: 'Soy una persona activa y en constante capacitación, apasionado por el mundo IT y la programación. Tengo hambre de conocimiento y ninguna barrera frente a lo nuevo: cada tecnología distinta es una oportunidad para seguir creciendo. Me atrae especialmente la lógica detrás del código, esa mezcla de razonamiento y creatividad que permite construir algo desde cero. Lo que más me motiva de programar es ver plasmado en resultados reales todo lo que se puede crear con esfuerzo y disciplina, la misma disciplina que aplico a mi actividad física. Fuera del código, soy gamer y encuentro en los videojuegos otra forma de pensar en sistemas y resolver problemas.',
        projectsTitle: 'Proyectos',
        projectsText: 'Estos son mis proyectos hasta el momento, donde aplico todo lo que fui aprendiendo en el camino.',
        projectTitle: 'Tienda Electrónica',
        projectText: 'Una tienda online completa con catálogo de productos, carrito de compras y funcionalidades de e-commerce básicas. Desarrollada con tecnologías web modernas.',
        backendProjectTitle: 'E-commerce Backend con MongoDB',
        backendProjectText: 'API para e-commerce con autenticación, gestión de productos, carritos y sesiones. Incluye vistas del lado del servidor, documentación y configuración para Docker.',
        demoButton: 'Ver demo',
        codeButton: 'Ver código',
        contactTitle: 'Contacto',
        langToggle: 'ESP/ENG',
        langToggleAria: 'Cambiar a inglés',
        openMenu: 'Abrir menú principal',
        formTitle: 'Contacto',
        formNameLabel: 'Nombre completo',
        formNamePlaceholder: 'Tu nombre',
        formPhoneLabel: 'Teléfono',
        formPhonePlaceholder: 'Tu número de teléfono',
        formEmailLabel: 'Email',
        formEmailPlaceholder: 'tu@email.com',
        formCommentsLabel: 'Comentarios o preguntas',
        formCommentsPlaceholder: 'Escribí tu mensaje...',
        formSubmit: 'Enviar',
        themeToggleAriaDark: 'Activar modo oscuro',
        themeToggleAriaLight: 'Activar modo claro',
        themeMobileDark: 'Modo oscuro',
        themeMobileLight: 'Modo claro',
        formSending: 'Enviando...',
        formSendingMsg: 'Enviando mensaje...',
        formSuccess: '¡Mensaje enviado! Te responderé pronto.',
        formError: 'Hubo un error, intentá de nuevo o escribime directo a gabriel.echeverria93@gmail.com',
        formNetworkError: 'Hubo un error de conexión, intentá de nuevo o escribime directo a gabriel.echeverria93@gmail.com'
    },
    en: {
        home: 'Home',
        role: 'Developer',
        aboutTitle: 'About me',
        aboutText: "I'm an active and constantly learning person, passionate about the IT world and programming. I have a hunger for knowledge and no barriers in front of what's new: every different technology is an opportunity to keep growing. I'm especially drawn to the logic behind code, that mix of reasoning and creativity that lets you build something from scratch. What motivates me most about programming is seeing everything you can create with effort and discipline reflected in real results — the same discipline I apply to my physical activity. Outside of code, I'm a gamer and I find in video games another way of thinking about systems and solving problems.",
        projectsTitle: 'Projects',
        projectsText: "These are my projects so far, where I apply everything I've been learning along the way.",
        projectTitle: 'Electronics Store',
        projectText: 'A complete online store with a product catalog, shopping cart and basic e-commerce features. Built with modern web technologies.',
        backendProjectTitle: 'E-commerce Backend with MongoDB',
        backendProjectText: 'An e-commerce API with authentication, product, cart and session management. It includes server-side views, documentation and Docker configuration.',
        demoButton: 'View demo',
        codeButton: 'View code',
        contactTitle: 'Contact',
        langToggle: 'ESP/ENG',
        langToggleAria: 'Switch to Spanish',
        openMenu: 'Open main menu',
        formTitle: 'Contact',
        formNameLabel: 'Full name',
        formNamePlaceholder: 'Your name',
        formPhoneLabel: 'Phone',
        formPhonePlaceholder: 'Your phone number',
        formEmailLabel: 'Email',
        formEmailPlaceholder: 'you@email.com',
        formCommentsLabel: 'Comments or questions',
        formCommentsPlaceholder: 'Write your message...',
        formSubmit: 'Send',
        themeToggleAriaDark: 'Enable dark mode',
        themeToggleAriaLight: 'Enable light mode',
        themeMobileDark: 'Dark mode',
        themeMobileLight: 'Light mode',
        formSending: 'Sending...',
        formSendingMsg: 'Sending message...',
        formSuccess: 'Message sent! I will get back to you soon.',
        formError: 'There was an error, try again or write me directly at gabriel.echeverria93@gmail.com',
        formNetworkError: 'There was a connection error, try again or write me directly at gabriel.echeverria93@gmail.com'
    }
};

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentLang = localStorage.getItem('lang') || 'es';

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
            mobileText.textContent = isDark ? translations[currentLang].themeMobileLight : translations[currentLang].themeMobileDark;
        }

        if (themeToggle) {
            themeToggle.setAttribute('aria-label', isDark ? translations[currentLang].themeToggleAriaLight : translations[currentLang].themeToggleAriaDark);
        }

        if (themeToggleMobile) {
            themeToggleMobile.setAttribute('aria-label', isDark ? translations[currentLang].themeToggleAriaLight : translations[currentLang].themeToggleAriaDark);
        }
    }

    function applyLanguage(lang) {
        currentLang = translations[lang] ? lang : 'es';
        localStorage.setItem('lang', currentLang);
        document.documentElement.lang = currentLang === 'en' ? 'en' : 'es';

        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key] !== undefined) {
                el.textContent = translations[currentLang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[currentLang] && translations[currentLang][key] !== undefined) {
                el.setAttribute('placeholder', translations[currentLang][key]);
            }
        });

        const isDark = document.documentElement.classList.contains('dark');
        updateThemeIcons(isDark);

        if (langToggle) langToggle.setAttribute('aria-label', translations[currentLang].langToggleAria);
        if (langToggleMobile) langToggleMobile.setAttribute('aria-label', translations[currentLang].langToggleAria);
    }

    // Language toggle buttons
    const langToggle = document.getElementById('language-toggle');
    const langToggleMobile = document.getElementById('language-toggle-mobile');

    function toggleLanguage() {
        applyLanguage(currentLang === 'en' ? 'es' : 'en');
    }

    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', toggleLanguage);
    }

    applyLanguage(currentLang);

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
            submitBtn.textContent = translations[currentLang].formSending;
            formStatus.className = 'mb-3 text-blue-600';
            formStatus.textContent = translations[currentLang].formSendingMsg;

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
                    formStatus.textContent = translations[currentLang].formSuccess;
                    form.reset();
                } else {
                    // Error
                    const errorData = await response.json();
                    if (errorData && errorData.errors) {
                        formStatus.className = 'mb-3 text-red-600';
                        formStatus.textContent = errorData.errors.map(error => error.message).join(', ');
                    } else {
                        formStatus.className = 'mb-3 text-red-600';
                        formStatus.textContent = translations[currentLang].formError;
                    }
                }
            } catch (error) {
                // Network error
                formStatus.className = 'mb-3 text-red-600';
                formStatus.textContent = translations[currentLang].formNetworkError;
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = translations[currentLang].formSubmit;
            }
        });
    }
});
