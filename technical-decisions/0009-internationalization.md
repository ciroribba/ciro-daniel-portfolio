# ADR-0009 · Internacionalización con rutas estáticas

- Estado: Aceptado.
- Fecha: 2026-11-07.
- Relacionado con: PR-10, F-10, ADR-0001, ADR-0003 y ADR-0006.

## Contexto y decisión

El portfolio ofrece español e inglés para las secciones públicas y sus casos de estudio. El español es el idioma predeterminado y conserva las URLs existentes. El inglés usa el prefijo `/en/`. Los enlaces a una página determinan su idioma y funcionan en los modos Node y exportación estática.

Next.js y TypeScript cubren el alcance actual. Se evaluó una biblioteca de mensajes como `next-intl` para gestionar catálogos y formatos complejos. Los textos locales, dos variantes de singular/plural y el formato nativo de fechas se pueden mantener con diccionarios tipados y `Intl.DateTimeFormat`. Los grupos de rutas permiten emitir el atributo `lang` correcto en el HTML inicial y conservar las rutas públicas en español.

## Experiencia

- El selector muestra **Español** y **English** en la cabecera, también con el menú móvil cerrado. El idioma actual tiene un tratamiento visual y se comunica mediante `aria-current`. La otra opción es un enlace con `lang`, `hreflang` y foco visible.
- El selector abre la página equivalente. Por ejemplo, `/projects/angular-learning/` enlaza a `/en/projects/angular-learning/`. El cambio entre layouts raíz carga un documento nuevo. La URL conserva el idioma al recargar, compartir o seguir enlaces internos. Los filtros son estado local y se reinician al cambiar de idioma.
- La preferencia de tema sigue disponible al cambiar de idioma. El selector funciona con teclado y sin JavaScript. La apertura del menú móvil y los controles interactivos requieren JavaScript.
- Un error de renderizado dentro de una sección ofrece reintento en su idioma. Una URL sin coincidencia recibe la página 404 global en español, con acceso a la portada en inglés. La exportación tiene un único `404.html`.

## Implementación

- `src/app/(spanish)/` y `src/app/(english)/en/` conectan sus rutas con vistas compartidas en `src/views/`. Los dos layouts raíz reutilizan `SiteLayout` y fijan el atributo `lang`. Next.js usa `experimental.globalNotFound` para la página 404 con dos layouts raíz.
- `src/i18n/routing.ts` concentra los idiomas, secciones y construcción de URLs. `editorial.ts` contiene la copia de páginas y `ui.ts` la de controles y estados. `satisfies` comprueba que la versión en inglés tenga la misma estructura que la española. Las vistas entregan los mensajes de cada control en el idioma activo mediante props.
- Los catálogos en `src/content/` comparten slugs, identificadores, fechas, tecnologías, enlaces y datos de evidencia. Cada variante inglesa traduce el texto visible. Los títulos en inglés de credenciales son traducciones editoriales. El formato de fecha usa `Intl.DateTimeFormat` con `es-AR` o `en-US` y UTC.
- Los MDX ingleses viven en `src/content/case-studies/en/`. El registro exige un archivo por idioma para cada slug y conserva imports locales explícitos. Ambos grupos de rutas prerenderizan los slugs con `generateStaticParams`.
- Cada ruta de contenido declara canonical propio, alternativas `es`, `en` y `x-default`, y datos Open Graph de su idioma. El sitemap lista ambos idiomas. Definir `NEXT_PUBLIC_SITE_URL` con el origen público antes del build.

## Mantenimiento y validación

Al editar un texto, actualizar ambos diccionarios. Al añadir un caso, registrar sus datos traducidos, los dos MDX y sus imports. Al añadir una sección, registrar la ruta en ambos grupos y actualizar la navegación. Los slugs compartidos forman parte del contrato de URLs.

Ejecutar `npm run check`, `npm run test:e2e` sobre el build Node y `STATIC_EXPORT=true npm run build`. La cobertura de Playwright comprueba el cambio de idioma en un caso desde teclado, navegación y recarga, HTML sin JavaScript, búsqueda localizada, alternates y accesibilidad de las secciones en móvil y escritorio.

Validación ejecutada el 7 de noviembre de 2026. Formato, lint, TypeScript, nueve pruebas unitarias y build Node con Turbopack aprobados. Playwright y axe sobre el build Node con Webpack y Chrome local aprobaron 43 pruebas. La prueba exclusiva del menú móvil se omitió en escritorio y pasó en móvil. El export con Webpack generó las 20 páginas de contenido y se comprobó su HTML inicial, selector, canonical, alternativas, sitemap y `404.html`.

Revisar la decisión si se incorporan mensajes con pluralización compleja, flujos externos de traducción o suficientes idiomas como para que el mantenimiento de rutas sea repetitivo.

[Requisitos](../product-requirements.md) · [Criterios de aceptación](../features.md) · [Guía de i18n de Next.js](https://nextjs.org/docs/app/guides/internationalization)
