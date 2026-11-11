# ADR-0006 · Build Node por defecto y export estático opcional

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

El contenido no requiere servidor por solicitud y debe poder alojarse tanto en una plataforma Next como en hosting estático.

## Decisión

Mantener next build / next start por defecto. Activar output export únicamente con STATIC_EXPORT=true, generar slugs conocidos y publicar out. Configurar NEXT_PUBLIC_SITE_URL al compilar.

## Alternativas consideradas

Export estático obligatorio: limita evolución innecesariamente. Servidor obligatorio: infraestructura sin necesidad actual. Cambiar Next por otro framework para el hosting: contradice el stack solicitado.

## Consecuencias y trade-offs

Un mismo código soporta ambos modos. El export requiere rutas index.html/404.html y no se sirve con next start. Agregar ISR, cookies de servidor o Server Actions obliga a revisar compatibilidad. El control de acceso privado actual pertenece al proveedor y no al frontend exportado.

## Evidencia y validación

Builds Node y estático aprobados; versión privada publicada. El origen debe actualizarse para cada destino. No hay despliegue automático a una cuenta Vercel en CI.

## Cuándo revisar

Al introducir funcionalidad dinámica por solicitud o requisitos de acceso propios.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
