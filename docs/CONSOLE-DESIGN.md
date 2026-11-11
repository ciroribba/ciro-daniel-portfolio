# Consola de ingeniería

Estado implementado · 11 de noviembre de 2026

## Objetivo y alcance

El portfolio presenta el perfil de Senior Frontend Engineer y permite comparar casos por su problema, tecnologías y evidencia disponible. La portada muestra casos destacados tras una introducción breve. El diagrama conceptual se encuentra en Ingeniería, junto a los principios que explica. Proyectos y el Explorador de tecnologías comparten la fila y los controles de búsqueda.

## Temas y tipografía

| Rol                         | Claro     | Oscuro    |
| --------------------------- | --------- | --------- |
| Fondo                       | `#F4F6FA` | `#101217` |
| Superficie                  | `#FFFFFF` | `#1B1F29` |
| Superficie secundaria       | `#E9EDF4` | `#242B36` |
| Texto principal             | `#17202E` | `#F2F4F8` |
| Texto secundario            | `#4D5A6D` | `#AAB4C5` |
| Divisor                     | `#D5DCE7` | `#343C4B` |
| Borde de control            | `#7A8799` | `#78869B` |
| Acento y foco               | `#075A70` | `#67E8F9` |
| Texto sobre acción primaria | `#FFFFFF` | `#101217` |

Geist se aplica a encabezados, cuerpo y controles. IBM Plex Mono se reserva para metadatos, tecnologías, rótulos y conteos. El encabezado de portada escala de 36 a 56 px y el título de caso en listas mide 20 px. Las fuentes WOFF2 latinas se sirven desde `public/fonts/` con `font-display: swap` y sus licencias. El build y las visitas usan los archivos locales.

`next-themes` respeta la preferencia del sistema en la primera visita y persiste la elección manual entre rutas e idiomas. Los temas comparten los mismos componentes y roles de color.

## Componentes y estados

| Componente          | Comportamiento                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cabecera            | Mínimo de 64 px. La ruta activa combina texto semibold y subrayado. El selector de idioma y el control de tema quedan visibles con el menú móvil cerrado.                                                                                                     |
| Portada             | La especialidad se lee en el h1. Tecnologías y ubicación se agrupan en un panel que baja a una columna en móvil. Los casos destacados enlazan directamente a su detalle.                                                                                      |
| Lista de casos      | Una superficie con divisores y filas de 16 px de padding vertical en escritorio. El título y el resumen quedan a la izquierda. Tipo, evidencia y tecnologías quedan a la derecha y se apilan debajo en móvil. La flecha recta acompaña la navegación interna. |
| Tipo y evidencia    | «Experiencia relatada» y «Caso de aprendizaje» describen la naturaleza del caso. «Caso en documentación» o «Repositorio revisado» describen su evidencia. Cada dato tiene su propio campo y texto en ambos idiomas.                                           |
| Filtros y búsqueda  | Botones con borde y selección con marca visible y `aria-pressed`. Los chips de tecnología dentro de la fila son informativos. Búsqueda, filtros y conteo comparten una barra que admite varias líneas en pantallas estrechas.                                 |
| Foco y recuperación | El foco por teclado rodea el campo completo, incluida la lupa. El estado vacío indica los criterios activos. «Limpiar filtros» restablece el listado y devuelve el foco al buscador.                                                                          |

## Criterios de aceptación

- Ver el primer caso destacado completo a 1440 × 1000 px en ambos temas.
- Revisar cabecera, portada, filas y filtros en móvil, con textos en español e inglés y sin desbordamiento horizontal.
- Reproducir `Angular` + `checkout`, comprobar el anuncio de cero resultados y recuperar el catálogo mediante teclado.
- Comprobar el tema inicial del sistema, la persistencia al recargar y el cambio de idioma.
- Revisar contraste de texto, controles y foco. Ejecutar Playwright y axe en escritorio y móvil y verificar la exportación estática con sus fuentes.

## Validación ejecutada

- Chrome a 1440 × 1000 px situó el final del primer caso en el píxel 581 en español y en el 559 en inglés, con ambos temas. Geist e IBM Plex Mono cargaron desde los archivos locales.
- Portada, Proyectos e Ingeniería pasaron la comprobación de desbordamiento horizontal a 320, 390 y 1024 px en ambos idiomas y temas. Axe también revisó Proyectos, Tecnologías, Ingeniería, el caso Angular y el estado vacío en las cuatro combinaciones de tema e idioma.
- El texto secundario alcanzó un mínimo de 5,96:1 en claro y 6,81:1 en oscuro sobre las superficies especificadas. Los bordes de control sobre la superficie principal alcanzaron 3,65:1 y 4,46:1 respectivamente.
- Pasaron formato, lint, TypeScript, nueve pruebas unitarias, 43 pruebas Playwright y el build Node con Turbopack. La prueba exclusiva del menú móvil se ejecutó en móvil. La exportación con Webpack incluyó los dos archivos WOFF2 y sus licencias.

[Sistema de diseño](../design-system.md) · [Internacionalización](../technical-decisions/0009-internationalization.md)
