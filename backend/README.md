# Portfolio Backend

Portfolio backend application. Server Node.js/Express with skills, projects, and contact handlers.

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

```dotenv
PORT=3001
APP_URL=http://localhost:5173
MONGO_URI=mongodb+srv://user:password@portfolio.ho7q7ao.mongodb.net/portfolio-dev?retryWrites=true&w=majority&appName=Portfolio
JWT_SECRET=your-secret
EMAIL=your-email
EMAIL_PASS=your-password
```

## Launch

### Development

```bash
pnpm dev
```

### Production

```bash
pnpm build
pnpm start
```

### Docker (optional)

Starting with Docker Compose:

#### nginx.conf

The `nginx.conf` file contains reverse proxy configuration for production deployment. It handles:

- Request routing to Node.js backend
- Static file serving
- CORS headers
- SSL/TLS termination (if configured)

#### Development

```bash
docker compose -f compose.dev.yaml up
```

#### Production

```bash
docker compose up -d
```

## Project structure

```
src/
├── controllers/    # Controllers handling business logic
├── routes/         # API routes definitions
├── models/         # Data models
├── types/          # TypeScript definitions
├── util/           # Tools and utility functions
├── emails/         # Mail templates
└── index.ts        # Main source file
```

## Additional Configuration

### Makefile

The `Makefile` provides convenient shortcuts for common development tasks:

```bash
make dev-up      # Start development environment with Docker Compose
make dev-stop    # Stop development containers
make dev-down    # Stop and remove development containers
make prod-up     # Start production environment with Docker Compose
make prod-stop   # Stop production containers
make prod-down   # Stop and remove production containers
```

## API Endpoints

### Skills

- `GET /api/portfolio/skills` - Skills list

### Projects

- GET /api/portfolio/projects` - Projects list

### Contact

- `POST /api/portfolio/send-mail` - Contact message

## Tools

- Biome - Lint and code formatter
- TypeScript - static types
- MongoDB - data base

## Lint and format

```bash
pnpm biome:lint
pnpm biome:format
```

## License

Check [LICENSE](https://github.com/Kretostan/portfolio-backend/blob/main/LICENSE)
