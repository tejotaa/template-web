# Template Web - React + TypeScript + Vite + Cypress

Este template proporciona una configuración completa para desarrollar aplicaciones React con TypeScript, Vite y un conjunto robusto de herramientas para testing y desarrollo.

## 🚀 Características

- **React 19** con TypeScript para desarrollo moderno
- **Vite** como build tool para desarrollo rápido con HMR
- **ESLint** configurado con reglas para React y TypeScript
- **Testing completo** con Vitest y React Testing Library
- **E2E Testing** con Cypress
- **Configuración lista para producción**

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
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
```

2. Instala las dependencias:

```bash
npm install
```

## 📦 Dependencias Principales

### Dependencias de Producción

- **react**: ^19.1.0 - Framework principal
- **react-dom**: ^19.1.0 - Renderizado en el DOM

### Dependencias de Desarrollo

- **TypeScript**: ~5.8.3 - Tipado estático
- **Vite**: ^7.0.4 - Build tool y servidor de desarrollo
- **ESLint**: ^9.30.1 - Linting y formato de código
- **Vitest**: ^3.2.4 - Framework de testing unitario
- **Cypress**: ^14.5.2 - Testing E2E
- **React Testing Library**: ^16.3.0 - Utilidades para testing de React
- **@vitejs/plugin-react**: ^4.6.0 - Plugin de React para Vite
- **@testing-library/jest-dom**: ^6.6.3 - Matchers de Jest para DOM
- **@testing-library/user-event**: ^14.6.1 - Simulación de eventos de usuario
- **jsdom**: ^26.1.0 - Implementación de DOM para Node.js
- **vitest-fail-on-console**: ^0.7.1 - Falla tests si hay errores de consola
- **vite-plugin-checker**: ^0.5.0 - Type checking en Vite

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
npm run e2e
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

```
template-web/
├── public/               # Archivos estáticos
├── src/                  # Código fuente
│   ├── assets/           # Recursos (imágenes, iconos)
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos del componente principal
│   ├── main.tsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── __tests__/            # Tests unitarios
│   ├── setup.ts          # Configuración de testing
│   └── app.test.tsx      # Tests del componente App
├── cypress/              # Tests E2E
│   ├── e2e/              # Tests end-to-end
│   ├── fixtures/         # Datos de prueba
│   └── support/          # Comandos y configuración
├── cypress.config.ts     # Configuración de Cypress
├── vite.config.ts        # Configuración de Vite y Vitest
├── eslint.config.js      # Configuración de ESLint
└── tsconfig.*.json       # Configuración de TypeScript
```

## ⚙️ Configuración

### Vite

- Puerto de desarrollo: `5173`
- Plugin React habilitado
- Configuración de Vitest integrada

### ESLint

- Configuración para React y TypeScript
- Reglas para React Hooks
- Soporte para React Refresh

### TypeScript

- Configuración separada para app y node
- Strict mode habilitado
- Soporte para JSX
