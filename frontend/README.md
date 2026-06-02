# Portfolio Frontend

Portfolio frontend application. SPA build in React with TypeScript, Vite and Tailwind CSS.

## Requirements

- Node.js (v22+)
- pnpm or npm
- Docker (optional)

## Installation

```bash
pnpm install
```

## Environment variables


Create `.env.development` or `.env` (for production) file in root directory:

```
VITE_API_URL=http://localhost:3001
```

## Launch

### Development

```bash
pnpm dev
```
Application will be available at this address http://localhost:5173

### Production

```bash
pnpm build
pnpm preview
```

## Docker

Starting with Docker Compose

### Development

Docker image is available in `Dockerfile`. To run frontend in Docker, build the image:

```bash
docker build -t portfolio-frontend .
docker run -p 5173:5173 portfolio-frontend
```

### Production

For complete setup with backend, use the compose files in the root directory of the repository.

## Project structure

```
locales/             # i18n translations (pl.json, en.json)
├── en.json
├── pl.json
public/
src/
├── components/      # React components
│   ├── Contact/     # Contact
│   ├── Home/        # Home page
│   ├── Layout/      # Layout
│   └── UI/          # UI components
├── pages/           # Application pages
├── hooks/           # Custom React hooks
├── assets/          # Resources (images, icons)
├── styles/          # Global CSS styles
├── types/           # TypeScript definitions
├── utils/           # Utility functions       
├── App.tsx          # Main component
├── i18n.ts          # i18n configuration
└── main.tsx         # Entry point
```

## Tools

- React - UI framework
- TypeScript - Static typing
- Vite - Build tool
- Tailwind CSS - Utility-first CSS framework
- i18n - Multi-language support (PL, EN)

## Functionalities

- Responsive design (mobile-first)
- Dark/light theme
- Multilingualism (PL/EN)
- Animated background
- Skills sections
- Projects list
- Contact form

## Lint and format

```bash
pnpm biome:lint
pnpm biome:format
```

## Build

```bash
pnpm build
```

Build will appear in directory `dist/`

## License

Check [LICENSE](https://github.com/Kretostan/portfolio-frontend/blob/main/LICENSE)
