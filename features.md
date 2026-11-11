# Features y criterios de aceptación

Versión base implementada · 6 de noviembre de 2026.

“Implementada” describe existencia de código. Los escenarios siguientes son criterios de aceptación; no todos tienen una ejecución automatizada aprobada. La evidencia de ejecución original vive en `docs/VALIDATION.md`.

## Mapa de funcionalidades

| ID   | Feature                          | Ruta                                      | Fuente / implementación                              |
| ---- | -------------------------------- | ----------------------------------------- | ---------------------------------------------------- |
| F-01 | Presentación y posicionamiento   | `/`                                       | `src/views/home.tsx`, `src/content/profile.ts`       |
| F-02 | Engineering & Architecture       | `/engineering`                            | Página editorial Server Component                    |
| F-03 | Proyectos y casos                | `/projects`, `/projects/[slug]`           | Feature projects + catálogo + MDX                    |
| F-04 | Technology Explorer              | `/technology`                             | ProjectExplorer con conceptos visibles               |
| F-05 | Credenciales                     | `/credentials`                            | Feature credentials + datos tipados                  |
| F-06 | Data Science & AI Lab            | `/lab`                                    | Feature lab + página editorial                       |
| F-07 | About y contacto                 | `/about`                                  | Perfil, GitHub y LinkedIn                            |
| F-08 | Navegación, tema y accesibilidad | Todas                                     | Componentes compartidos y tokens                     |
| F-09 | Metadata y rutas de error        | Todas                                     | Metadata, sitemap, robots, not-found y error         |
| F-10 | Internacionalización             | Rutas actuales y equivalentes bajo `/en/` | App Router, diccionarios TypeScript y MDX por idioma |

## F-01 · Presentación

**Historia:** como recruiter, quiero reconocer la especialidad principal y acceder al trabajo relevante.

La portada prioriza Senior Frontend Engineer, presenta React/Next.js/Angular/TypeScript, muestra dos casos destacados y enlaza al enfoque de ingeniería y al laboratorio. No incluye una cifra de años o impacto no verificada.

**Aceptación:** al abrir `/`, debe existir un único h1, una descripción de especialidad frontend y enlaces utilizables hacia proyectos y engineering. Ciencia de Datos/IA no debe desplazar la especialidad principal.

## F-02 · Engineering & Architecture

**Historia:** como tech lead, quiero entender el criterio detrás de la implementación.

Presenta dominio, propiedad del estado, contratos y calidad; conecta documentación previa, implementación y entrega. Los principios expresan un enfoque de trabajo, no prueban que todos se hayan aplicado en cada proyecto.

**Aceptación:** debe ser posible leer los principios sin JavaScript y navegar a los casos. La sección no atribuye decisiones a un empleador o resultado sin evidencia.

## F-03 · Proyectos y case studies

**Historia:** como entrevistador, quiero revisar contexto, decisiones y límites de evidencia de un caso.

El catálogo utiliza tecnología y búsqueda combinadas. Los detalles usan MDX local y registro explícito. Hay tres casos: ticketing-checkout, operations-backoffice y angular-learning. No hay enlaces de repositorio ni métricas verificadas en esta versión.

```gherkin
Scenario: Filtrar por tecnología y concepto
  Given el catálogo de proyectos disponible
  When selecciono React y busco " REDUX "
  Then veo el caso operations-backoffice
  And el conteo anuncia un proyecto

Scenario: Recuperar una búsqueda vacía
  Given Angular está seleccionado
  When busco checkout
  Then veo cero proyectos y una acción Limpiar filtros
  When limpio los filtros
  Then se restablece Todas y el texto de búsqueda queda vacío

Scenario: Abrir una narrativa válida
  Given un proyecto con slug y MDX registrado
  When abro su detalle
  Then veo el contexto y la evidencia pendiente
  And no veo métricas inventadas
```

**Límites:** filtros no persistidos ni compartibles por URL; búsqueda sin eliminación de tildes. Añadir un caso requiere catálogo, MDX y registro. El aviso del detalle es fijo para casos en documentación y necesitará adaptación si se incorporan casos verificados.

**Cobertura:** dominio y recuperación del explorador tienen tests Vitest; navegación MDX está definida en Playwright y fue revisada manualmente en el export.

## F-04 · Technology Explorer

**Historia:** como revisor técnico, quiero conectar una herramienta con conceptos y casos concretos.

Reutiliza ProjectExplorer con `showConcepts`. Ofrece Todas, React, Next.js, Angular y TypeScript. Los conceptos se presentan como aplicados o explorados según el caso; Angular se identifica como aprendizaje.

```gherkin
Scenario: Explorar Angular
  Given estoy en Technology Explorer
  When selecciono Angular
  Then veo únicamente el caso de aprendizaje de Angular
  And veo Signals, RxJS, Inyección de dependencias y HttpClient
  And puedo abrir la narrativa del caso
```

No existe auditoría automática de GitHub ni prueba de código asociada a cada concepto. Esa vinculación queda pendiente de seleccionar y revisar repositorios.

## F-05 · Credentials

**Historia:** como evaluador, quiero distinguir formación académica de cursos y revisar su procedencia.

Catálogo inicial: título de Técnico Superior en Ciencia de Datos de 2026 y cuatro cursos documentados. Cada entrada tiene tipo, institución o pendiente, fecha, habilidades y enlace o aviso de enlace pendiente. La formación futura en IA se presenta por separado.

```gherkin
Scenario: Mostrar títulos obtenidos
  Given estoy en Credentials
  When selecciono Títulos académicos
  Then veo Técnico Superior en Ciencia de Datos
  And no se mezcla con certificados de cursos
  And la Licenciatura en IA permanece en la sección Formación futura

Scenario: Credencial sin URL pública
  Given una credencial no tiene verificationUrl
  Then veo Enlace público pendiente
  And no aparece un enlace ficticio de verificación
```

Las habilidades son etiquetas editoriales, no una transcripción completa de los programas. Los enlaces de Udemy fueron transcritos de certificados; su disponibilidad externa no fue comprobada. No se publican los PDFs privados.

**Cobertura:** separación de categorías y formación futura cubierta con Vitest; filtro académico comprobado manualmente.

## F-06 · Lab

**Historia:** como visitante, quiero entender la exploración de datos sin confundir una demo con resultados profesionales.

Demo con seis muestras sintéticas, slider de complejidad de 1 a 6, gráfico, media redondeada y tabla accesible expandible. Las propuestas de exploración de datos e interfaces para IA están marcadas como no implementadas.

```gherkin
Scenario: Explorar mediante teclado
  Given el slider tiene foco
  When pulso Home
  Then se selecciona complejidad máxima 1
  And el resumen muestra una muestra y media 120 ms
  When abro la tabla de datos
  Then puedo leer la muestra A con complejidad 1 y duración 120 ms
```

**Cobertura:** cálculo y selección vacía probados con Vitest; interacción por teclado y tabla revisadas manualmente. No hay inferencia, API de modelos ni conclusiones causales.

## F-07 · About y contacto

**Historia:** como posible colaborador, quiero conocer el recorrido y conectar con Ciro.

El texto combina frontend, documentación técnica, aprendizaje de Angular y formación en datos. Los contactos llevan a los perfiles proporcionados de GitHub y LinkedIn. No hay formulario, envío de mensajes ni descarga de un CV inexistente.

**Aceptación:** links con destino real, indicación de nueva pestaña y `rel="noopener noreferrer"`; no atribuir empleo o fechas sin verificar.

## F-08 · Experiencia transversal

```gherkin
Scenario: Persistir tema
  Given el sitio usa el tema claro
  When cambio al tema oscuro y recargo
  Then el tema oscuro permanece seleccionado

Scenario: Navegación móvil
  Given el viewport muestra el menú móvil cerrado
  When abro la navegación
  Then el botón comunica aria-expanded true
  When navego a Credenciales
  Then veo la página y el menú queda cerrado

Scenario: Cerrar menú con Escape
  Given el foco está dentro del menú móvil abierto
  When pulso Escape
  Then el menú se cierra y el foco vuelve al disparador
```

El contenido editorial sigue visible sin JS; los filtros, el selector manual de tema y el menú móvil requieren JS. No se declara funcionalidad interactiva completa sin JS. El tema respeta preferencia del sistema; Motion respeta reducción de movimiento.

**Cobertura:** tema revisado manualmente; E2E de tema y móvil definidos, no ejecutados. Accesibilidad móvil/lector de pantalla pendiente.

## F-09 · Metadata y recuperación

Metadata base con título, descripción y Open Graph; títulos por página, canonical en secciones/detalles, sitemap y robots. Confirmar origen con `NEXT_PUBLIC_SITE_URL` al compilar. Hay página 404 con retorno al inicio y error boundary con reintento. No existe imagen social personalizada ni test que fuerce el error boundary.

**Aceptación:** slugs desconocidos deben mostrar 404 en el hosting final, no devolver silenciosamente Home. Las rutas conocidas deben poder abrirse directamente, incluyendo casos y recargas.

## F-10 · Internacionalización

Una persona puede leer el portfolio en español desde las rutas existentes y en inglés desde `/en/`. El selector de la cabecera abre la versión equivalente desde cualquier sección o caso de estudio.

**Aceptación**

- Abrir un caso en español, activar **English** con teclado y comprobar que el mismo caso se muestra en inglés. Recargar conserva la variante y sus enlaces internos.
- El selector permanece visible en móvil y funciona como enlace con JavaScript deshabilitado.
- Los filtros, etiquetas accesibles, mensajes vacíos y metadatos acompañan el idioma. Ambos idiomas se publican al exportar.

Ver [ADR-0009](technical-decisions/0009-internationalization.md) para el flujo de edición y las decisiones de rutas.

## Backlog de evolución, no implementado

| ID   | Propuesta                       | Condición para abordarla                                     |
| ---- | ------------------------------- | ------------------------------------------------------------ |
| B-01 | Evidencia técnica por concepto  | Selección y revisión de repositorios autorizados             |
| B-02 | Casos verificados y resultados  | Fuentes, alcance personal y permiso de publicación           |
| B-03 | Filtros compartibles por URL    | Necesidad real de conservar/enviar una selección             |
| B-04 | Nuevos experimentos de datos/IA | Dataset/modelo, objetivo, evaluación y límites definidos     |
| B-05 | CMS                             | Frecuencia de edición o colaboración que justifique el costo |
| B-06 | Auditoría accesible completa    | Ejecutar móvil, lector de pantalla, contraste y axe          |

## Definition of Done para cambios

Actualizar requisito y feature afectada; registrar ADR si cambia una frontera significativa; implementar estados de error/vacío pertinentes; probar el comportamiento modificado; ejecutar lint, tipos y build; ejecutar E2E cuando afecte navegación o interacción; actualizar documentación y reportar cualquier check no ejecutado. No declarar una suite aprobada solo porque existe su configuración.

Ver [requisitos de producto](product-requirements.md) y [arquitectura](architecture.md).
