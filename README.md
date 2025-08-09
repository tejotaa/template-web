# Template Web - React + TypeScript + Vite + Material-UI + Cypress

Este template proporciona una configuración completa para desarrollar aplicaciones React con TypeScript, Vite, Material-UI, internacionalización y un conjunto robusto de herramientas para testing y desarrollo.

## 🚀 Características

- **React 19** con TypeScript para desarrollo moderno
- **Material-UI v7** para componentes de interfaz
- **React Router v7** para navegación entre páginas
- **Internacionalización** con i18next y react-i18next
- **Tema dinámico** (claro/oscuro) con Material-UI
- **Selector de idioma** (español/inglés)
- **Vite** como build tool para desarrollo rápido con HMR
- **SCSS** para estilos avanzados
- **ESLint** configurado con reglas para React y TypeScript
- **Testing completo** con Vitest y React Testing Library
- **E2E Testing** con Cypress
- **Path aliases** configurados para imports limpios
- **Configuración lista para producción**

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript + Material-UI v7
- **Routing**: React Router v7
- **Estilos**: SCSS + Material-UI Theming + Emotion
- **Internacionalización**: i18next + react-i18next
- **Build Tool**: Vite 7
- **Testing Unitario**: Vitest + React Testing Library + jsdom
- **Testing E2E**: Cypress
- **Linting**: ESLint con configuración para React y TypeScript
- **Desarrollo**: Hot Module Replacement (HMR)

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone <url-del-repositorio>
cd template-web
````

2. Instala las dependencias:

```bash
npm install
```

## 📦 Dependencias Principales

### Dependencias de Producción

- **react**: ^19.1.1 - Framework principal
- **react-dom**: ^19.1.1 - Renderizado en el DOM
- **@mui/material**: ^7.3.1 - Biblioteca de componentes Material-UI
- **@mui/icons-material**: ^7.3.1 - Iconos de Material-UI
- **@emotion/react**: ^11.14.0 - CSS-in-JS para Material-UI
- **@emotion/styled**: ^11.14.1 - Styled components para Material-UI
- **react-router**: ^7.8.0 - Routing para aplicaciones React
- **i18next**: ^25.3.2 - Framework de internacionalización
- **react-i18next**: ^15.6.1 - Integración de i18next con React

### Dependencias de Desarrollo

- **TypeScript**: ~5.9.2 - Tipado estático
- **Vite**: ^7.1.1 - Build tool y servidor de desarrollo
- **ESLint**: ^9.33.0 - Linting y formato de código
- **Vitest**: ^3.2.4 - Framework de testing unitario
- **Cypress**: ^14.5.4 - Testing E2E
- **React Testing Library**: ^16.3.0 - Utilidades para testing de React
- **@vitejs/plugin-react**: ^5.0.0 - Plugin de React para Vite
- **@testing-library/jest-dom**: ^6.6.4 - Matchers de Jest para DOM
- **@testing-library/user-event**: ^14.6.1 - Simulación de eventos de usuario
- **jsdom**: ^26.1.0 - Implementación de DOM para Node.js
- **sass-embedded**: ^1.90.0 - Compilador de SCSS
- **vite-tsconfig-paths**: ^5.1.4 - Soporte para path aliases en Vite
- **vitest-fail-on-console**: ^0.9.0 - Falla tests si hay errores de consola
- **vite-plugin-checker**: ^0.10.2 - Type checking en Vite

## 🚀 Scripts Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo en `http://localhost:5173` con hot reload habilitado y abre automáticamente el navegador.

### Build

```bash
npm run build
```

Compila TypeScript y construye la aplicación para producción en la carpeta `dist/`.

### Preview

```bash
npm run preview
```

Previsualiza la build de producción localmente.

### Testing

```bash
# Tests unitarios
npm run test

# Tests E2E con Cypress
npm run cypress:open

# O ejecutar tests E2E en modo headless
npm run cypress:run

# Tests unitarios con watch mode
npm run test:watch

# Ejecutar todos los tests (vitest + cypress)
npm run test:all

# Coverage de tests
npm run coverage
```

### Linting

```bash
npm run lint
```

Ejecuta ESLint para revisar el código en busca de errores y problemas de estilo.

## 🧪 Testing

### Tests Unitarios

- **Framework**: Vitest con jsdom
- **Librerías**: React Testing Library + Jest DOM
- **Ejemplo**: Tests completos de componentes en `__tests__/app.test.tsx`

### Tests E2E

- **Framework**: Cypress
- **Base URL**: `http://localhost:5173`
- **Configuración**: Viewport personalizado (1000x600)
- **Ejemplo**: Test de funcionalidad completa en `cypress/e2e/app.cy.ts`

## 📁 Estructura del Proyecto

template-web/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── assets/         # Recursos (imágenes, iconos)
│   ├── components/     # Componentes reutilizables
│   │   ├── header/     # Componente de cabecera
│   │   ├── footer/     # Componente de pie de página
│   │   ├── language/   # Selector de idioma
│   │   └── theme/      # Switch de tema
│   ├── layout/         # Layouts de la aplicación
│   ├── pages/          # Páginas principales (Home, About, Contact)
│   ├── themes/         # Configuración de temas (claro/oscuro)
│   ├── utils/          # Utilidades y helpers
│   ├── main.tsx        # Punto de entrada
│   ├── router.tsx      # Configuración de rutas
│   └── main.scss       # Estilos globales
├── translation/        # Internacionalización
│   ├── resources/      # Archivos de idiomas
│   └── index.ts        # Configuración de i18next
├── tests/              # Tests unitarios
│   ├── components/     # Tests de componentes
│   └── pages/          # Tests de páginas
├── cypress/            # Tests E2E
│   ├── e2e/            # Tests end-to-end
│   ├── fixtures/       # Datos de prueba
│   └── support/        # Comandos y configuración
├── cypress.config.ts   # Configuración de Cypress
├── vite.config.ts      # Configuración de Vite y Vitest
├── eslint.config.js    # Configuración de ESLint
└── tsconfig.*.json     # Configuración de TypeScript
```

## ⚙️ Configuración

### Vite

- Puerto de desarrollo: `5173`
- Plugin React habilitado
- Configuración de Vitest integrada
- Soporte para path aliases con `vite-tsconfig-paths`

### ESLint

- Configuración para React y TypeScript
- Reglas para React Hooks
- Soporte para React Refresh

### TypeScript

- Configuración separada para app y node
- Strict mode habilitado
- Soporte para JSX
- Path aliases configurados:
  - `@components/*` → `./src/components/*`
  - `@themes/*` → `./src/themes/*`
  - `@layout` → `./src/layout/agentLayout`
  - `@pages/*` → `./src/pages/*`
  - `@utils/*` → `./src/utils/*`
  - `@translation` → `./translation/index`

### Material-UI

- Tema dinámico (claro/oscuro)
- Configuración con Emotion
- Sistema de theming personalizado
