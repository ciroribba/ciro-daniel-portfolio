# ADR-0004 · Tokens semánticos y shadcn/ui adaptado

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

El portfolio necesita identidad editorial propia y coherencia entre temas sin importar una plantilla completa.

## Decisión

Usar Tailwind CSS con tokens CSS semánticos, tipografías del sistema y Georgia. Mantener el Button shadcn/ui/Radix como código local con CVA; componer el resto de patrones según necesidades reales.

## Alternativas consideradas

Plantilla completa: acelera inicio pero condiciona identidad y contenido. Framework de UI pesado: excesivo para estas interacciones. CSS completamente ad hoc: dificulta consistencia y cambios de tema.

## Consecuencias y trade-offs

Se controla diseño y dependencias. Mantener componentes copiados y licencias es responsabilidad del proyecto. El token radius no gobierna todos los radios y la escala de espaciado no está totalmente tokenizada.

## Evidencia y validación

globals.css, components.json, components/ui/button.tsx y THIRD_PARTY_NOTICES.md. Los valores exactos figuran en design-system.md.

## Cuándo revisar

Si aumenta la variedad de componentes o se necesita compartir un sistema entre varias aplicaciones.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
