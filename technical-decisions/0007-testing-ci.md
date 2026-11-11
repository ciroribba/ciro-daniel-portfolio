# ADR-0007 · Pruebas por comportamiento y CI separada por controles

- Estado: aceptado para la versión base.
- Fecha del registro: 6 de noviembre de 2026.
- Naturaleza: registro retrospectivo de decisiones implementadas; no implica una aprobación formal de un comité externo.
- Alcance: portfolio Ciro Ribba 2027.

## Contexto

El sitio tiene filtros, clasificación de credenciales y una demo con cálculos; los riesgos son de comportamiento, contenido y navegación.

## Decisión

Usar Vitest/Testing Library para dominio e interacción, Playwright con Chromium desktop/mobile y axe para E2E. Separar formato, ESLint, TypeScript, unitarios, build y E2E en GitHub Actions. Fijar dependencias y lockfile.

## Alternativas consideradas

Solo snapshots: no demuestra comportamiento. Solo E2E: feedback lento para reglas puras. Solo build: no detecta regresiones funcionales.

## Consecuencias y trade-offs

La CI explicita qué se valida. Requiere instalar Chromium y no reemplaza revisión accesible manual. npm run check no incluye format:check ni test:e2e; ambos son pasos adicionales.

## Evidencia y validación

9 tests Vitest aprobados; lint, tipos, formato y builds aprobados. Playwright descubre 24 entradas, pero no se ejecutó por fallo de descarga de Chromium. La CI está configurada; no se afirma que haya corrido en GitHub.

## Cuándo revisar

Si cambian los flujos de negocio, se incorporan APIs o surge un riesgo que no cubren las pruebas actuales.

## Relacionados

[Índice de ADRs](README.md) · [Arquitectura](../architecture.md) · [Features](../features.md)
