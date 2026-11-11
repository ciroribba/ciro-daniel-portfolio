# ADR-0001 · Next.js App Router y renderizado por defecto en servidor

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

El portfolio combina contenido editorial con pequeñas interacciones. No necesita un servidor de negocio, pero debe conservar un marco claro para crecer.

## Decisión

Usar Next.js App Router real, React y TypeScript strict. Mantener layout y páginas como Server Components, prerenderizar contenido local y declarar use client únicamente en límites interactivos.

## Alternativas consideradas

SPA completa con Vite: válida para una herramienta interactiva, pero no necesaria aquí. Todo cliente en Next: simplifica algunas composiciones a costa de más JavaScript. SSR por solicitud: no aporta valor al contenido local actual.

## Consecuencias y trade-offs

Reduce JavaScript de la presentación estática y permite HTML inicial útil. Obliga a distinguir props serializables, código de navegador y contenido de servidor. Un componente sin use client puede entrar al bundle cliente cuando lo importa una isla interactiva.

## Evidencia y validación

Las rutas de app, generateStaticParams y los builds Node/estático existentes. El contenido de producción fue revisado; el comportamiento de dev debe volver a comprobarse localmente por el problema observado en la vista remota.

## Cuándo revisar

Si aparece contenido por usuario, datos por solicitud o una necesidad de runtime incompatible con export estático.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
