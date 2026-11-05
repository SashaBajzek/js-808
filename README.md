## Welcome to the website of JS-808

This project is a drum kit made using React and Redux, built with Vite and Sass and deployed on Netlify.

View this site at [js-808.sashabajzek.com](https://js-808.sashabajzek.com/).

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – build to `dist/` and prerender the page to static HTML
- `npm run preview` – serve the production build locally
- `npm test` – run the tests with Vitest

## How prerendering works

`npm run build` runs three steps:

1. `vite build` builds the browser bundle into `dist/`.
2. `vite build --ssr src/entry-server.jsx` builds a Node version of the app.
3. `scripts/prerender.js` renders the app to HTML and writes it into `dist/index.html`
   in place of the `<!--app-html-->` placeholder.

In the browser, `src/main.jsx` hydrates that HTML instead of rendering from scratch.
Because components also run in Node at build time, don't touch `window` or `document`
during render. Put that code in `componentDidMount` or `useEffect`.

Netlify settings live in `netlify.toml`.
