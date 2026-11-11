# Cómo agregar esta documentación

Descomprimir el ZIP en la raíz de `ciro-portfolio-2027`, junto a `package.json`. El ZIP contiene archivos directamente, sin una carpeta contenedora adicional:

```text
product-requirements.md
architecture.md
design-system.md
features.md
technical-decisions/
  README.md
  0001-app-router-rendering.md
  0002-feature-based-architecture.md
  0003-content-mdx-evidence.md
  0004-design-system.md
  0005-accessibility-motion.md
  0006-deployment.md
  0007-testing-ci.md
  0008-client-state.md
  template.md
INTEGRATION.md
```

No requiere instalar dependencias ni modifica código. El paquete complementa el proyecto original; no contiene otro portfolio ni reemplaza su ZIP.

## Documentación existente

Se preservan `docs/ARCHITECTURE.md`, `docs/CONTENT.md` y `docs/VALIDATION.md`. El primero queda como resumen histórico; `architecture.md` describe la arquitectura detallada y `technical-decisions/` contiene el registro ampliado. `docs/CONTENT.md` conserva procedencia editorial y `docs/VALIDATION.md` conserva las comprobaciones efectivamente realizadas.

Evitar mantener futuras decisiones en dos lugares: usar `technical-decisions/` para nuevos ADRs y, cuando cambie el resumen antiguo, convertirlo en un enlace al documento canónico. Este paquete no altera archivos existentes.

## Bloque opcional para el README principal

```markdown
## Documentación de producto e ingeniería

- [Requisitos de producto](product-requirements.md)
- [Arquitectura](architecture.md)
- [Sistema de diseño](design-system.md)
- [Features y criterios de aceptación](features.md)
- [Decisiones técnicas — ADRs](technical-decisions/README.md)
```

Los enlaces entre los documentos del paquete son relativos y funcionan después de extraerlos juntos. Las rutas de código en texto se refieren al proyecto original. Los documentos son una fotografía del código entregado el 6 de noviembre de 2026; actualizar los estados cuando se implementen o validen cambios.
