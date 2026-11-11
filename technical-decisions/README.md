# Technical decisions · ADRs

Los ADRs registran por qué se eligió una solución, alternativas y consecuencias. Los primeros siete amplían las decisiones resumidas en `docs/ARCHITECTURE.md` del proyecto original; el octavo hace explícita la elección de estado local ya implementada.

## Índice

| ADR                                            | Decisión                                                 | Estado                |
| ---------------------------------------------- | -------------------------------------------------------- | --------------------- |
| [ADR-0001](0001-app-router-rendering.md)       | Next.js App Router y renderizado por defecto en servidor | Aceptado para la base |
| [ADR-0002](0002-feature-based-architecture.md) | Arquitectura por features y dominio puro                 | Aceptado para la base |
| [ADR-0003](0003-content-mdx-evidence.md)       | Contenido local tipado, MDX confiable y trazabilidad     | Aceptado para la base |
| [ADR-0004](0004-design-system.md)              | Tokens semánticos y shadcn/ui adaptado                   | Aceptado para la base |
| [ADR-0005](0005-accessibility-motion.md)       | Accesibilidad como requisito y animación progresiva      | Aceptado para la base |
| [ADR-0006](0006-deployment.md)                 | Build Node por defecto y export estático opcional        | Aceptado para la base |
| [ADR-0007](0007-testing-ci.md)                 | Pruebas por comportamiento y CI separada por controles   | Aceptado para la base |
| [ADR-0008](0008-client-state.md)               | Estado local y ausencia de store global                  | Aceptado para la base |
| [ADR-0009](0009-internationalization.md)       | Internacionalización con rutas estáticas                 | Aceptado              |

## Proceso

1. Copiar [template.md](template.md) y usar el siguiente número disponible.
2. Mantener estado Propuesto mientras se comparan opciones.
3. Registrar decisión y motivo; indicar qué evidencia existe y qué falta comprobar.
4. Cambiar a Aceptado cuando se adopte e implemente la decisión correspondiente.
5. Si cambia el criterio, crear un ADR nuevo y marcar el anterior Reemplazado por ADR-NNNN. No borrar el razonamiento histórico.

Estados permitidos: Propuesto, Aceptado, Rechazado, Reemplazado. La fecha indica cuándo se registra/adopta la decisión; no demuestra que un experimento o suite haya pasado.

Usar ADR para cambios de renderizado, límites entre features, fuentes de datos, hosting, seguridad o dependencias significativas. Ajustes de copy y estilos menores pueden documentarse en el PR sin crear un ADR.

## Relación con el resto de la documentación

[Requisitos](../product-requirements.md) describe el propósito; [features](../features.md) los comportamientos; [arquitectura](../architecture.md) la estructura actual; [design system](../design-system.md) los patrones visuales. Los ADRs explican las decisiones que los sostienen.
