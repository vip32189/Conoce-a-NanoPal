# NanoPal — Landing de acceso

## Enfoque de implementación
Landing estática para GitHub Pages, sin dependencias de build: `index.html` contiene la estructura semántica, `styles.css` concentra la identidad visual y las animaciones, `script.js` añade el año automático y microinteracciones, y `assets/` contiene el logo entregado por el usuario.

## Diseño
- **Movimiento:** editorial juguetón / maximalismo suave, con fondo amarillo banano, tipografía display contundente y una mascota flotante como foco visual.
- **Principios:** contraste alto para los CTAs, jerarquía tipográfica clara, detalles gráficos con personalidad y responsive desde móvil.
- **Paleta:** el amarillo banano comunica energía y cercanía; negro para la descarga Android; amarillo oscuro para la opción de navegador; crema para equilibrar el contraste.
- **Layout:** composición asimétrica de dos columnas en escritorio y flujo vertical en móvil.
- **Firma visual:** mascota flotante, círculos solares concéntricos, burbujas de diálogo y píldora de estado.
- **Interacción:** los botones se elevan y muestran un brillo al pasar el cursor; la animación respeta `prefers-reduced-motion`.
- **Tipografía:** Space Grotesk para titulares y marca; DM Sans para textos auxiliares y botones.
- **Esencia de marca:** NanoPal es un compañero digital alegre para quienes quieren descubrir una experiencia nueva. Personalidad: curioso, cálido, juguetón.
- **Voz:** directa, optimista y cercana. Ejemplos: “Pequeño en tamaño. Gigante en personalidad.” / “Mucho gusto, soy NanoPal”.

## Estructura
- `/index.html`: hero, botones y metadata.
- `/styles.css`: layout, responsive y animaciones.
- `/script.js`: año dinámico y microinteracción.
- `/assets/nanopal_talking-removebg-preview.png`: logo/mascota proporcionado.
- `/manus-routes.json`: manifest de la ruta pública.
