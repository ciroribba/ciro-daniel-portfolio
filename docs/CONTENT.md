# Edición y evidencia

## Fuentes utilizadas

- Perfil y experiencia: información aportada por Ciro en esta conversación y contexto disponible. No se realizó una auditoría de empleadores ni repositorios. Los links a GitHub/LinkedIn son enlaces de contacto; no se atribuye contenido que no fue leído.
- `titulo_ds.pdf`: documento revisado; finalización el 14 de octubre de 2026, Técnico Superior en Ciencia de Datos. Institución Teclab aportada por el titular. El texto extraído no identifica la institución; confirmar visualmente el diploma antes de usarlo como evidencia institucional independiente.
- Cuatro certificados Udemy leídos: SDD y Agentes IA (14/10/2026), React Desde Cero (13/10/2026), Angular: De cero a experto (09/10/2026), Gherkin para Product Owner (28/09/2026). URLs transcritas de los documentos, no se verificó la disponibilidad del sitio externo.
- Otros archivos existentes no se incorporaron porque no se extrajo información suficiente. No se deduce contenido de sus nombres.

No se incluyen PDFs, números de identidad, domicilios ni otros datos personales de los diplomas en el código público.

## Archivos editables

| Contenido                       | Archivo                                       |
| ------------------------------- | --------------------------------------------- |
| Nombre, contacto y navegación   | src/content/profile.ts                        |
| Proyectos y conceptos           | src/content/projects.ts                       |
| Narrativas de casos             | src/content/case-studies/*.mdx                |
| Registro de casos MDX           | src/features/projects/case-study-registry.tsx |
| Títulos y cursos                | src/content/credentials.ts                    |
| Datos ficticios del laboratorio | src/features/lab/domain/experiment.ts         |
| Tokens visuales                 | src/app/globals.css                           |

Los textos de secciones generales se editan en las respectivas páginas Server Component. No hay CMS. Las habilidades de certificados son etiquetas temáticas, no programas académicos completos verificados.

## Agregar un caso

1. Agregar el objeto en `projects.ts` con slug único. Mantener null los campos sin evidencia.
2. Crear un MDX local y registrarlo en `case-study-registry.tsx`.
3. Documentar problema, rol, decisiones, alternativas, resultado y evidencia, distinguiendo confirmado y pendiente.
4. Ejecutar `npm run check` y revisar la ruta generada.

## Antes de hacer público el portfolio

Completar fechas y alcance personal de casos, seleccionar repositorios autorizados, confirmar institución y comienzo de la Licenciatura solo cuando ocurra. Sustituir el estado de los casos únicamente al verificar su evidencia. No cambiar la formación futura a obtenida por el mero paso del tiempo. La etiqueta “edición 2027” es una dirección de portfolio, no una fecha de logro.
