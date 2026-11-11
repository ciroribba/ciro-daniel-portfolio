# ADR-0002 · Arquitectura por features y dominio puro

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

Proyectos, credenciales y laboratorio tienen reglas distintas. Compartir todo por tipo técnico dificulta entender dónde pertenece un cambio.

## Decisión

Agrupar reglas y UI específica dentro de features. Mantener datos editables en content y composición en app. Usar components para presentación compartida y components/ui para primitivas. No crear capas vacías de servicios o repositorios.

## Alternativas consideradas

Solo carpetas globales components/hooks/utils: pierde contexto de producto al crecer. Clean Architecture completa con interfaces por capa: carga adicional para contenido local. Monolito de páginas: duplica reglas.

## Consecuencias y trade-offs

La cercanía entre dominio y UI facilita cambios acotados, mientras los tipos puros permanecen independientes. El contenido importa esos tipos y las páginas inyectan datos. Las fronteras se revisan manualmente; no están impuestas por una regla ESLint específica.

## Evidencia y validación

features/projects/domain, features/credentials/domain y features/lab/domain no importan React/Next. Los tests de dominio y componentes están separados.

## Cuándo revisar

Cuando una regla sea compartida de verdad por varias features o existan fuentes remotas con políticas diferentes.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
