# pisure.github.io

Portafolio personal de Aaron Espinoza, migrado a Vue 3 y Vite.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+ (recomendado: Node 24).

```bash
npm install
npm run dev
```

Para generar y previsualizar el sitio de producción:

```bash
npm run build
npm run preview
```

Los componentes están en `src/components`, los estilos en `css/style.css` y las imágenes en `public/img`. El botÃ³n de contacto copia el correo y el reproductor utiliza Spotify.

## GitHub Pages

El flujo `.github/workflows/deploy.yml` compila y despliega al hacer push a `main`. En la configuración de Pages del repositorio, selecciona **GitHub Actions** como fuente. El archivo `public/CNAME` conserva `www.psure.lol` en la compilación. La URL canónica es `https://www.psure.lol/`; comprueba que los DNS y la redirección entre ambas variantes estén configurados como deseas. No se despliega automáticamente hasta subir los cambios.
