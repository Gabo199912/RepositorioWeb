# Portfolio Template

Plantilla de portafolio en React (Vite), sin backend ni dependencias externas de datos. Solo front.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Cómo personalizarlo

- **Tu info y skills**: edita `src/data/profile.js`.
- **Tus proyectos**: edita `src/data/projects.js` — agrega, quita o reordena los objetos del arreglo. El campo `status` acepta `prod`, `wip` o `archived`.
- **Colores y tipografía**: las variables están todas arriba en `src/App.css`, dentro de `:root`. Cambia `--bg`, `--accent`, etc.
- **Secciones**: la estructura vive en `src/App.jsx` — cada sección (`Hero`, `Projects`, `Stack`, `Contact`) es un componente separado, fácil de reordenar o quitar.

## Cómo desplegarlo

```bash
npm run build
```

Esto genera una carpeta `dist/` estática que puedes subir a Vercel, Netlify, GitHub Pages o cualquier hosting estático.
