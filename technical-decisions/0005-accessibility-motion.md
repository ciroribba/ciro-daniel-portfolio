# ADR-0005 · Accesibilidad como requisito y animación progresiva

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

El sitio debe poder explorarse con teclado y preferencias de tema/movimiento, sin hacer depender la lectura de una animación.

## Decisión

Usar semántica HTML, foco visible, skip link, etiquetas y estados ARIA. Filtros con conteos anunciados, menú disclosure y tabla alternativa al gráfico. Usar Motion de manera discreta y respetar reduced motion.

## Alternativas consideradas

Movimiento decorativo continuo: distrae y aumenta complejidad. Contenido inicialmente invisible hasta hidratar: degrada lectura si JS falla. Componentes no semánticos para acciones: requieren reimplementar comportamiento.

## Consecuencias y trade-offs

Mejora acceso y claridad; exige revisión manual además de tests. El menú móvil y los filtros todavía dependen de JS. El objetivo WCAG 2.2 AA no se declara certificado.

## Evidencia y validación

Interacciones de producción revisadas manualmente y suite Playwright/axe definida. E2E, auditoría con lector de pantalla y revisión móvil pendientes.

## Cuándo revisar

Si se añaden modales, edición compleja, gráficos nuevos o patrones de navegación que requieran otra gestión de foco.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
