# ADR-0008 · Estado local y ausencia de store global

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

Filtros y selección de la demo no se comparten entre rutas ni se sincronizan con un servidor.

## Decisión

Usar useState junto a cada interacción y funciones de dominio puras para filtrar/agregar. Usar next-themes para la preferencia persistente. No añadir Redux, Zustand ni una librería de server state sin necesidad actual.

## Alternativas consideradas

Store global: añade coordinación para estado efímero. URL como estado: útil si hay requisitos de compartir selección, todavía no acordados. Cache de servidor: no hay consultas remotas que gestionar.

## Consecuencias y trade-offs

La lógica es pequeña y explícita. Recargar o abandonar la ruta reinicia filtros; no hay links a una selección concreta. Si esa limitación cambia, modificar la fuente de verdad de forma deliberada.

## Evidencia y validación

ProjectExplorer, CredentialCatalog y DataExperiment usan estado local. Tests de filtrado y cálculo verifican reglas; el tema se comprobó tras recarga.

## Cuándo revisar

Cuando filtros deban compartirse por URL, un flujo abarque varias rutas o aparezca estado remoto con cache/invalidation.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
