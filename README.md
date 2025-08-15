# ohmyluz — Landing Electricista 24/7 (HTML + CSS)

Ohmyluz es una plantilla **estática** para servicios eléctricos (24/7), con bloques editables y un estilo distinto a Pagiopro.

## Estructura de carpetas
```
ohmyluz/
├─ index.html
├─ assets/
│  ├─ css/theme.css
│  ├─ js/app.js
│  └─ img/logo-ohmyluz.svg
└─ src/
   └─ blocks/        # bloques en archivos separados para edición modular
      ├─ 01-header.html
      ├─ 02-hero.html
      ├─ 03-servicios.html
      ├─ 04-zonas.html
      ├─ 05-tarifa.html
      ├─ 06-opiniones.html
      ├─ 07-faqs.html
      ├─ 08-contacto.html
      └─ 09-footer.html
```

## Personalización rápida
- Colores y estilo: edita `assets/css/theme.css`.
- Teléfono/WhatsApp: actualiza enlaces en `index.html` y `assets/js/app.js`.
- Mapa: cambia el parámetro `q=` del `<iframe>` (ciudad/barrio).
- SEO: `<title>`, `<meta name="description">` y JSON-LD al final del `index.html`.

## Deploy
- **Azure Static Web Apps** (recomendado) o cualquier hosting estático.
- Opcional: CDN/DNS/SSL con Cloudflare.

## Licencia
MIT (ver `LICENSE`). Marca/branding a definir por el usuario.
