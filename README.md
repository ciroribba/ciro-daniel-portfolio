> Actualización visual Graphite & Lime: ver [REDESIGN](docs/REDESIGN.md).

# Ciro Ribba · Portfolio 2027

Proyecto ejecutable de portfolio profesional con foco principal en **Frontend Engineering & Architecture**. Ciencia de Datos e IA aparecen como especializaciones emergentes. Siete páginas principales, tres case studies MDX y catálogo de credenciales con procedencia documentada.

## Stack

Next.js App Router, React, TypeScript strict/noUncheckedIndexedAccess, Tailwind CSS 4, shadcn/ui (Button Radix adaptado y código local), Motion, MDX, Vitest + Testing Library, Playwright + axe, ESLint, Prettier y GitHub Actions. Dependencias fijadas en package.json y package-lock.json. No se prometen versiones futuras de 2027.

## Instalación

Node.js 24 LTS y npm. En Warp/zsh los comandos son iguales:

```sh
cd ciro-portfolio-2027
npm ci
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000. No requiere claves, base de datos ni servicios externos. `npm ci` utiliza el lockfile incluido. `.nvmrc` es opcional; no necesitás nvm si ya instalaste Node con Homebrew.

## Comandos

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npm run build
npm start
```

Pruebas de navegador, después del build:

```sh
npx playwright install --with-deps chromium
npm run test:e2e
```

Playwright inicia `npm start` automáticamente si no hay servidor. `PW_BASE_URL` permite apuntar a un servidor de QA ya disponible. Ejecutar los E2E contra el build Node, no contra un export con `next start`. `npm run check` agrupa lint, tipos, unitarios y build; formato y E2E son pasos adicionales explícitos.

## Páginas

| Ruta               | Contenido                                   |
| ------------------ | ------------------------------------------- |
| `/`                | Presentación editorial y casos destacados   |
| `/engineering`     | Principios de arquitectura y documentación  |
| `/projects`        | Catálogo filtrable                          |
| `/projects/[slug]` | Narrativas MDX con evidencia pendiente      |
| `/technology`      | Tecnologías → conceptos → proyectos         |
| `/credentials`     | Títulos académicos y certificados de cursos |
| `/lab`             | Demo sintética interactiva y líneas futuras |
| `/about`           | Perfil y enlaces de contacto                |

## Carpetas

```text
.github/workflows/ci.yml
src/
  app/                       # Rutas, metadata, layouts y tokens CSS
    (spanish)/               # Español en las URLs existentes
    (english)/en/            # Inglés bajo /en/
  views/                     # Vistas compartidas
  i18n/                      # Mensajes, rutas y metadata
  components/                # Shell, navegación, tema y composición
    ui/button.tsx            # Primitiva shadcn/ui con tokens propios
  content/                   # Datos editables y procedencia
    profile.ts
    projects.ts
    credentials.ts
    case-studies/*.mdx
  features/
    projects/                # Dominio puro, filtros y registro MDX
    credentials/             # Tipos, fechas y catálogo
    lab/                     # Datos sintéticos, agregación y UI
  lib/utils.ts
  mdx-components.tsx
tests/
  unit/                      # Vitest + Testing Library
  e2e/                       # Playwright desktop/mobile + axe
docs/
  ARCHITECTURE.md
  CONTENT.md
  VALIDATION.md
```

## Despliegue

### Next.js en Vercel u otro proveedor Node

Importar el repositorio, instalar con `npm ci`, build `npm run build`. En un servidor Node ejecutar `npm start` después del build. Configurar `NEXT_PUBLIC_SITE_URL=https://tu-dominio` durante la compilación para metadata, sitemap y robots. No definir STATIC_EXPORT en este modo. La CI valida código; no contiene credenciales ni despliegue automático a cuentas externas.

### Export estático

```sh
STATIC_EXPORT=true NEXT_PUBLIC_SITE_URL=https://tu-dominio npm run build
```

Publicar la carpeta `out/`. El hosting debe servir `ruta/index.html` y `404.html`; todos los case studies conocidos están precompilados. No usar `npm start` para servir este export. Este proyecto no requiere SSR por solicitud; los Server Components generan HTML al compilar. La carpeta `.openai/` identifica exclusivamente la vista privada de Sites y se puede omitir en otro proveedor.

## Idiomas

Español en las rutas originales e inglés bajo `/en/`. El selector de cabecera abre la página equivalente. El flujo para traducir contenido y añadir rutas está en [ADR-0009](technical-decisions/0009-internationalization.md).

## Contenido y personalización

Ver [CONTENT.md](docs/CONTENT.md). Hay datos reales confirmados mediante documentos y experiencia relatada por el titular; los casos pendientes no presentan métricas ni empleadores inventados. El título de Técnico Superior en Ciencia de Datos es de 2026. La Licenciatura en IA permanece en formación futura. El laboratorio está etiquetado con datos sintéticos.

Ver [ARCHITECTURE.md](docs/ARCHITECTURE.md) para decisiones, límites Server/Client y extensión. Ver [VALIDATION.md](docs/VALIDATION.md) para lo efectivamente ejecutado en la entrega. No hay analítica, formulario que simule enviar emails, dependencias de imágenes remotas ni datos sensibles de los diplomas.

## Accesibilidad

Objetivo WCAG 2.2 AA: navegación semántica y por teclado, foco visible, responsive, dark/light con preferencia del sistema, reduced motion, estados vacíos recuperables, anuncios de filtros y tabla accesible. axe y pruebas automáticas no equivalen a una certificación; completar revisión manual con lector de pantalla antes de la publicación pública.
