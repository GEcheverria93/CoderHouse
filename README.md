# Portfolio personal

Portfolio personal de Gabriel Echeverría, desarrollado para presentar información profesional, proyectos y un formulario de contacto.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- Tailwind CSS 3
- PostCSS
- Autoprefixer
- Vite
- Formspree para el envío del formulario de contacto

## Funcionalidades

- Sección de presentación personal.
- Sección de proyectos con enlaces a demo y repositorio.
- Formulario de contacto conectado a Formspree.
- Diseño responsive para desktop y dispositivos móviles.
- Menú de navegación responsive.
- Alternancia entre modo claro y oscuro.
- Preferencia de tema guardada en `localStorage`.
- Detección del tema del sistema operativo cuando no existe una preferencia manual.

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación

1. Clonar el repositorio y entrar en la carpeta del proyecto.
2. Instalar las dependencias:

```bash
npm install
```

## Comandos disponibles

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Crear la versión de producción:

```bash
npm run build
```

Previsualizar la versión de producción:

```bash
npm run preview
```

## Estructura principal

```text
Portfolio/
├── index.html              # Estructura principal del portfolio
├── public/images/          # Imágenes y recursos visuales
├── src/
│   ├── js/main.js          # Tema, menú móvil y formulario
│   └── styles/main.css     # Estilos personalizados
├── css/index.css           # Entrada de estilos de Tailwind
├── postcss.config.js       # Configuración de PostCSS
├── tailwind.config.js      # Configuración de Tailwind CSS
├── vite.config.js          # Configuración de Vite
└── package.json            # Scripts y dependencias
```

## Desarrollo

Después de ejecutar `npm run dev`, Vite mostrará en la terminal la URL local para abrir el portfolio en el navegador.

La configuración de Tailwind utiliza la estrategia `class` para el modo oscuro. El estado se aplica sobre el elemento `<html>` mediante la clase `dark`.
