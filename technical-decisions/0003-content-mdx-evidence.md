# ADR-0003 · Contenido local tipado, MDX confiable y trazabilidad

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

Los casos necesitan narrativas extensas y metadatos filtrables. Parte de la experiencia procede del titular y parte de documentos, con evidencia todavía incompleta.

## Decisión

Usar TypeScript para catálogos y MDX local para casos. Resolver MDX con imports explícitos. Mantener null donde falte evidencia; separar documentos revisados, experiencia relatada y formación futura. No compilar MDX de visitantes.

## Alternativas consideradas

CMS: añade infraestructura y validación innecesarias para la frecuencia actual. JSON solamente: suficiente para catálogos, limitado para narrativa editorial. MDX remoto arbitrario: amplía superficie de ejecución y confianza.

## Consecuencias y trade-offs

La edición es revisable en Git y no depende de servicios. Requiere recompilar al publicar cambios y mantener sincronizados catálogo/registro/MDX. Las etiquetas de evidencia no sustituyen una revisión humana. El detalle aún tiene aviso fijo de caso en documentación.

## Evidencia y validación

src/content, registro de casos y docs/CONTENT.md. Diploma y cuatro certificados revisados; repositorios y métricas no verificados.

## Cuándo revisar

Si editores no técnicos necesitan publicación frecuente o si crecen los casos verificados; definir entonces validación runtime, migración y permisos.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
