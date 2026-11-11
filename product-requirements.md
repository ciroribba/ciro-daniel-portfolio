# Product requirements · Ciro Ribba Portfolio

Versión 1.0 · 6 de noviembre de 2026 · Edición de portfolio 2027.

## Propósito

Posicionar a Ciro Ribba como Senior Frontend Engineer con foco en Frontend Engineering y Architecture. Mostrar criterio técnico y capacidad de conectar producto, interfaces y sistemas. Ciencia de Datos e Inteligencia Artificial complementan ese posicionamiento como especializaciones emergentes.

Este documento describe el alcance acordado y distingue la implementación existente de la validación pendiente. “Edición 2027” no implica logros ni titulaciones futuras ya obtenidas.

## Audiencias y necesidades

| Audiencia                       | Pregunta que debe poder resolver                       | Recorrido principal                               |
| ------------------------------- | ------------------------------------------------------ | ------------------------------------------------- |
| Recruiter                       | ¿Qué hace Ciro y dónde está su especialidad?           | Home → About → LinkedIn                           |
| Engineering manager / tech lead | ¿Cómo organiza un frontend y justifica sus decisiones? | Engineering → Projects → caso                     |
| Entrevistador técnico           | ¿Qué conceptos aplica con una tecnología concreta?     | Technology Explorer → caso → evidencia disponible |
| Colaborador de datos/IA         | ¿Cuál es su formación y qué está explorando?           | Lab → Credentials                                 |
| Ciro, editor del portfolio      | ¿Cómo actualizo contenido sin alterar el diseño?       | Datos TypeScript → MDX → validaciones             |

## Jerarquía de posicionamiento

1. Frontend Engineering: React, Next.js, TypeScript, integración de APIs, dashboards, backoffices y checkout.
2. Frontend Architecture: responsabilidades, estado, contratos, documentación y colaboración con backend, producto y QA.
3. Angular: aprendizaje práctico y conceptos explorados; no atribuir experiencia de producción sin evidencia.
4. Ciencia de Datos: Técnico Superior en Ciencia de Datos, finalizado en 2026.
5. Inteligencia Artificial: línea emergente y Licenciatura como formación futura hasta confirmar inicio e institución.

## Alcance funcional

| ID    | Requisito                                                               | Prioridad | Estado del código                        |
| ----- | ----------------------------------------------------------------------- | --------- | ---------------------------------------- |
| PR-01 | Home con posicionamiento, casos destacados y acceso al laboratorio      | P0        | Implementado                             |
| PR-02 | Engineering & Architecture con principios y documentación técnica       | P0        | Implementado                             |
| PR-03 | Catálogo de proyectos y casos MDX con evidencia pendiente explícita     | P0        | Implementado                             |
| PR-04 | Explorador que vincule tecnologías, conceptos y casos                   | P0        | Implementado                             |
| PR-05 | Credenciales separadas en títulos académicos y cursos                   | P0        | Implementado                             |
| PR-06 | Lab con datos sintéticos y propuestas identificadas                     | P1        | Implementado                             |
| PR-07 | About y enlaces a perfiles profesionales                                | P0        | Implementado                             |
| PR-08 | Tema claro/oscuro, navegación responsive y movimiento reducido          | P0        | Implementado; validación móvil pendiente |
| PR-09 | Código, documentación, tests y CI reproducibles                         | P0        | Entregado; E2E pendientes de ejecución   |
| PR-10 | Portfolio en español e inglés con selector visible y enlaces por idioma | P0        | Implementado                             |

P0: necesario para la entrega base. P1: aporta profundidad sin ser un requisito previo para comprender el perfil. Los criterios por feature están en [features.md](features.md).

## Reglas editoriales y de evidencia

- No inventar empleadores, fechas laborales, métricas, resultados, repositorios ni credenciales.
- Diferenciar experiencia relatada por el titular, documento revisado y repositorio auditado.
- Mantener `repository` y `result` en `null` cuando falte evidencia. No reemplazarlos por enlaces `#` o números ilustrativos.
- Las narrativas de casos pueden tener placeholders explícitos: problema concreto, rol, alcance, alternativas, evidencia y resultados.
- Un curso no equivale a un título académico. Una formación prevista no equivale a una formación iniciada.
- No publicar números de identidad ni PDFs personales completos por defecto.
- Los datos sintéticos del laboratorio nunca se presentan como benchmarks ni resultados de clientes.
- La institución Teclab procede de información del titular; el texto extraído del diploma revisado confirma título y fecha, pero no acredita por sí solo la institución. Conservar esa distinción en la documentación de fuentes.

## Requisitos de calidad

| ID     | Objetivo                            | Criterio de aceptación                                                                         | Estado de validación                                              |
| ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| NFR-01 | Accesibilidad, objetivo WCAG 2.2 AA | Teclado, foco, landmarks, nombres, contraste, zoom y revisión con lector de pantalla           | Implementación parcial verificada; auditoría completa pendiente   |
| NFR-02 | Responsive                          | Sin pérdida de contenido ni scroll horizontal involuntario en móvil, tablet y desktop          | Desktop observado; matriz móvil pendiente                         |
| NFR-03 | Rendimiento                         | HTML útil prerenderizado, cliente limitado a interacciones, sin recursos externos innecesarios | Estrategia implementada; Core Web Vitals sin medición             |
| NFR-04 | Mantenibilidad                      | Dominio puro, datos tipados y componentes con responsabilidades delimitadas                    | Estructura implementada                                           |
| NFR-05 | Reproducibilidad                    | Instalación con lockfile, lint, tipos, tests y build aprobados                                 | Instalación y checks locales aprobados                            |
| NFR-06 | SEO básico                          | Títulos, descripciones, sitemap y robots; origen correcto al compilar                          | Base implementada; revisión por ruta antes de publicación pública |

Son objetivos de aceptación, no certificaciones ni métricas alcanzadas.

## Fuera de alcance de esta versión

CMS, autenticación propia, cuentas de visitantes, backend, base de datos, analítica, pagos, formulario de contacto con envío, modelos de IA desplegados y blog general. Los contactos actuales son enlaces a GitHub y LinkedIn.

## Criterio de entrega y publicación

La entrega de código requiere instalación reproducible, README, datos editables, checks de código y build. Para declarar listo el sitio para difusión pública: ejecutar E2E/axe, revisar móvil y lector de pantalla, confirmar enlaces y revisar el contenido. Un caso puede publicarse incompleto si su estado y sus límites quedan visibles; no debe simular un resultado validado.

## Evaluación del producto

Comprobar cualitativamente si una persona puede identificar la especialidad, encontrar un concepto por tecnología, distinguir títulos de cursos y llegar al contacto. No hay analítica instrumentada ni tasas de conversión medidas. Si se decide medir visitas o conversiones, definir finalidad y tratamiento de datos antes de incorporar herramientas.

## Dependencias y pendientes

Ciro debe confirmar alcance personal, fechas y material publicable de los casos, seleccionar repositorios y proporcionar evidencias de resultados. Confirmar el inicio de la Licenciatura cuando ocurra. El informe de ejecución original está en `docs/VALIDATION.md`; este documento no cambia sus resultados.

## Documentos relacionados

- [Arquitectura](architecture.md)
- [Sistema de diseño](design-system.md)
- [Features y aceptación](features.md)
- [Registro de decisiones](technical-decisions/README.md)
