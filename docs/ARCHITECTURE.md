# Arquitectura y decisiones

## ADR 001 · App Router y renderizado

Next.js real, React y TypeScript strict. Las páginas y el layout son Server Components. Next genera HTML estático para el contenido local. No hay backend, autenticación ni CMS que justifiquen infraestructura adicional. La exportación estática es opcional y usa el mismo código; no es una sustitución por otro framework.

Islas de cliente: navegación móvil/activa, selector de tema, filtros de proyectos/credenciales, demo de datos y animación discreta. ThemeProvider acepta children de servidor; no convierte por sí solo todas las páginas en código cliente.

## ADR 002 · Features y dependencias

`app` compone rutas → `features` contiene dominio y UI → `content` aporta datos tipados. Los componentes de presentación reciben datos por props. El dominio no importa React ni Next. `components/ui` contiene primitivas shadcn/ui adaptadas; `components` contiene elementos del sitio. `lib` solo alberga utilidades realmente compartidas.

No se añadieron repositorios abstractos, contenedores de DI, stores globales ni librerías de fetching: el contenido es local y los filtros tienen estado local. Una futura API requeriría contratos, validación de datos en runtime y una estrategia de cache documentada.

## ADR 003 · Contenido y confianza

MDX compilado exclusivamente desde archivos locales confiables. Registro explícito de imports para evitar resolución dinámica arbitraria. Los metadatos estructurados viven en TypeScript. No se compila MDX aportado por visitantes.

Tres estados editoriales diferentes: experiencia relatada por el titular, documentos de credenciales revisados y propuestas de laboratorio. `repository` y `result` son null hasta contar con evidencia. No se afirman empleadores ni métricas. La formación futura en IA no pertenece al catálogo de títulos obtenidos.

## ADR 004 · Diseño

La dirección visual vigente es [Consola de ingeniería](CONSOLE-DESIGN.md). Tailwind consume los mismos tokens semánticos en claro y oscuro. Geist e IBM Plex Mono se sirven localmente. El diagrama de Ingeniería utiliza HTML y CSS. El botón compartido se compone con shadcn/ui, Radix y CVA.

## ADR 005 · Accesibilidad y movimiento

Landmarks, un h1 por página, skip link, nombres accesibles, foco visible, botones con aria-pressed, anuncios de resultados, navegación móvil con aria-expanded y Escape. La demo ofrece tabla además del gráfico decorativo. Motion respeta reduced motion y el contenido permanece visible sin JS. El objetivo es WCAG 2.2 AA; las pruebas automáticas no sustituyen una auditoría manual completa.

## ADR 006 · Hosting

Modo Node por defecto (`next build`, `next start`), compatible con un proveedor que soporte Next.js. `STATIC_EXPORT=true` genera `out/` para hosting estático. Los slugs MDX se precompilan con generateStaticParams. No se utilizan cookies de servidor, ISR, Server Actions ni optimización de imágenes que impidan exportar.

## ADR 007 · Calidad

Vitest prueba filtrado combinado, vacíos, recuperación de UI, clasificación de credenciales y cálculos. Playwright define navegación, temas persistidos, responsive y axe en desktop/mobile. ESLint, TypeScript, Prettier, tests y build son pasos separados en CI. Las dependencias directas y el lockfile fijan la instalación reproducible.

## Extensión

Para incorporar un proyecto: datos tipados + MDX + registro explícito. Para publicar resultados reales: aportar fuente y alcance, completar nulls y revisar el lenguaje. Para agregar una feature: colocar el dominio puro junto a su UI, evitando depender de otras features cuando una prop basta.
