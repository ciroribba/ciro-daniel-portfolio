# Graphite & Lime — actualización visual

Basada en el index.html aportado por Ciro: negro #0a0a0a, superficie #111111, acento lima #b8ff63, tipografía sans y líneas finas. Light usa fondo #f7f9f4 y verde #326500 para texto y controles con mejor contraste sobre fondos claros. La preferencia inicial sigue siendo la del sistema; el selector conserva la elección.

## Archivos modificados

- src/app/globals.css: paletas, fuente, superficies, etiquetas pill, interacción y responsive heredado.
- src/components/reveal.tsx: revelado al entrar en viewport, una vez por montaje.
- src/features/projects/components/project-card.tsx: aplica Reveal a cada proyecto.
- src/app/template.tsx: entrada breve al navegar entre páginas.

Motion ya estaba instalado; se amplió su uso sin añadir dependencias. El contenido permanece visible en HTML inicial. prefers-reduced-motion desactiva los desplazamientos y las transiciones decorativas. No hay scroll secuestrado ni animación continua.

## Ejecutar

Descomprimir en una carpeta nueva. npm ci, luego npm run dev. Para producción: npm run build y npm start. El ZIP incluye el proyecto completo, sin node_modules ni builds. No modifica el sitio publicado anteriormente.

## Documentación previa

Esta dirección visual reemplaza la paleta cálida/borgoña de la entrega anterior. Los documentos originales son históricos donde describen esa apariencia. El contenido profesional, credenciales y placeholders permanecen sin cambios.

## Validación de esta actualización

Instalación, ESLint, TypeScript, 9 tests Vitest y build Node aprobados. El setup de tests simula IntersectionObserver porque jsdom no tiene viewport; no valida la animación visual. No se ejecutaron E2E ni revisión visual en navegador para esta actualización.
