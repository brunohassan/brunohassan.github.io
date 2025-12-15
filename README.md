## Bruno Mouazzem — Portfolio (Vite + React)

A minimal, fast personal site built with Vite and React.

### Prerequisites
- Node.js 18+ (recommended 20/22)

### Run locally (dev)
```bash
npm install
npm run dev
```

### Build for production
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Serve the built site with Python (optional)
If you prefer a simple static server after building:
```bash
python3 -m http.server 8000 --directory dist
```
Open http://localhost:8000

### Deployment (GitHub Pages)
This repository includes a GitHub Actions workflow that builds the site and deploys the `dist/` folder to GitHub Pages on every push to `main`.

- Custom domain is supported via the `CNAME` file at the repo root.
