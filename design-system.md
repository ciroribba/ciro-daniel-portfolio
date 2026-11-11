# Design system · Ciro Ribba

Implementación vigente · 11 de noviembre de 2026.

## Dirección visual

Consola de ingeniería. La portada prioriza el perfil y los casos de estudio. El catálogo usa filas compactas con tipo de caso, estado de evidencia y tecnologías. El diagrama de arquitectura acompaña los principios en Ingeniería.

## Tokens y tipografía

`src/app/globals.css` define los tokens semánticos de fondo, superficie, texto, divisor, control, acción y foco. `@theme inline` los expone a Tailwind y `.dark` cambia sus valores. El radio base de panel es de 8 px.

Geist cubre títulos, texto y controles. IBM Plex Mono se reserva para metadatos y etiquetas técnicas. El cuerpo base mide 16 px y el encabezado de portada escala entre 36 y 56 px. Ambas fuentes se sirven desde `public/fonts/`.

La paleta completa y los criterios de validación están en [Consola de ingeniería](docs/CONSOLE-DESIGN.md).

## Layout y responsive

- Contenedor principal de hasta 1280 px, incluidos 56 px de padding lateral en escritorio.
- Hasta 1100 px, el padding lateral baja a 32 px. Hasta 760 px, baja a 16 px y las filas de proyectos apilan su información.
- Desde 1024 px, la navegación se muestra en línea. En resoluciones menores, se abre desde el menú, con idioma y tema accesibles en la cabecera.

## Componentes y contratos visuales

| Componente          | Responsabilidad                                        | Estados                                            |
| ------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| `Button`            | Acción o composición con enlace mediante `asChild`     | default, outline, ghost; disabled, hover, foco     |
| `PageHeading`       | Rótulo, título y descripción de sección                | Contenido estático                                 |
| `ProjectCard`       | Tipo, evidencia, resumen, tecnologías y enlace al caso | Experiencia o aprendizaje, con estado de evidencia |
| `ProjectExplorer`   | Filtros, búsqueda, conteo y criterios activos          | Seleccionado, resultados, vacío recuperable        |
| `CredentialCatalog` | Diferenciar títulos y cursos                           | Todas, académicos, cursos; enlace pendiente        |
| `ArchitectureMap`   | Diagrama conceptual de pensamiento técnico             | Claro y oscuro                                     |
| `DataExperiment`    | Exploración sintética accesible                        | Selección por slider, media, tabla expandida       |
| `Navigation`        | Rutas activas y disclosure móvil                       | Cerrado/abierto, ruta actual                       |

### Botón shadcn/ui

Código local en `src/components/ui/button.tsx`, compuesto con Radix Slot y CVA. Variantes soportadas: `default`, `outline`, `ghost`. Tamaños: `default`, `sm`, `icon`. Altura mínima de 44 px. `asChild` evita anidar un botón dentro de un enlace. Un botón solo con icono debe tener nombre accesible.

No asumir variantes no implementadas como `destructive`, ni añadir un kit completo para una sola interacción. Si aparece una nueva necesidad recurrente, extender primero la API del componente y revisar ambos temas.

## Accesibilidad

Objetivo: WCAG 2.2 AA, pendiente de auditoría completa. Mantener un h1 por página, jerarquía de encabezados, landmarks y enlace “Saltar al contenido”.

- Foco visible con outline de 2 px y separación; nunca quitarlo sin alternativa equivalente.
- Usar botones para filtrar y enlaces para navegar. Los filtros tienen `aria-pressed` y grupo con nombre.
- Anunciar conteos mediante `role="status"` sin mover el foco a cada actualización.
- Menú móvil con `aria-expanded`, `aria-controls`, cierre por Escape y retorno al disparador. Es un disclosure, no un modal con focus trap.
- No comunicar estados solamente por color; acompañar con texto.
- La gráfica de laboratorio es decorativa para tecnologías de asistencia; la tabla ofrece los datos seleccionados.
- Revisar contraste, teclado, zoom, textos largos, lector de pantalla y móvil. Los colores y atributos presentes no equivalen a certificación.

## Tema y movimiento

`next-themes`: preferencia inicial del sistema, elección persistida y atributo `class` en html. Las reglas de tema usan los mismos tokens semánticos. `suppressHydrationWarning` se limita a html por el cambio de tema; no se usa para ocultar errores arbitrarios.

La transición entre páginas usa Motion y respeta `useReducedMotion`. El contenido se prerenderiza visible. CSS desactiva animaciones, transiciones y scroll suave con `prefers-reduced-motion`.

## Voz y contenido

Español claro; términos técnicos en inglés cuando ayudan a identificar el concepto. Describir problemas y decisiones con ejemplos concretos. Usar “Caso en documentación”, “Enlace público pendiente”, “Datos sintéticos” y “Formación futura” donde correspondan. No ocultar la falta de evidencia con lenguaje promocional.

## Extensión y QA

Antes de añadir una variante: comprobar si existe un patrón reutilizable, definir semántica y estados, revisar teclado y temas, y actualizar esta especificación. El estado vacío debe ofrecer recuperación. Los errores deben explicar una acción posible. No mostrar skeletons o spinners si no existe una operación asíncrona que los justifique.

Ver [ADR-004](technical-decisions/0004-design-system.md) y [ADR-005](technical-decisions/0005-accessibility-motion.md).
