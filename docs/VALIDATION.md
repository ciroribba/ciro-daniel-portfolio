# Validación de la entrega

Fecha: 6 de noviembre de 2026.

- Instalación de dependencias: completada con npm; lockfile incluido.
- ESLint: sin errores ni warnings del código.
- TypeScript strict: aprobado.
- Vitest: 4 archivos, 9 tests aprobados (dominio y componentes).
- Build de producción Node y export estático: ambos aprobados; páginas y casos MDX precompilados.
- Formato: Prettier aplicado; comprobación incluida en CI.
- Playwright: suite incluida con Chromium desktop/mobile y axe. La descarga de Chromium falló en este entorno (archivo de descarga no válido), por lo que los E2E y axe no se consideran ejecutados/aprobados.
- Revisión manual del build estático en navegador: filtros por tecnología, búsqueda sin resultados, limpiar filtros, navegación al caso MDX, cambio de tema, persistencia tras recarga, filtro de títulos académicos y laboratorio por teclado con tabla accesible verificados. Portada y modo oscuro revisados visualmente.
- La vista de desarrollo del entorno mostró HTML correcto sin respuesta de filtros; el mismo código compilado a producción sí funcionó. Se conserva el flujo estándar de Next.js; revisar `npm run dev` en el equipo local.
- Publicación privada: completada. La URL privada exige iniciar sesión con ChatGPT; la comprobación manual se hizo sobre el mismo export estático mediante la vista de QA.
- Suite Playwright descubierta correctamente: 24 entradas desktop/mobile (una se omite en desktop por ser específica del menú móvil). No se ejecutó por la descarga de Chromium fallida. La revisión móvil y axe quedan pendientes.

No se certifica WCAG ni métricas de Core Web Vitals. Ejecutar la suite E2E en CI o local después de instalar Chromium antes de publicar a una audiencia general.
