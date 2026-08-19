# Portfolio - Vite+ + StyleX + React

A modern portfolio website built with **Vite+** (unified toolchain), **StyleX** (atomic CSS), and **React 19**.

## Tech Stack

- **Runtime**: React 19.3.1
- **Build Tool**: [Vite+] - Unified web toolchain
- **Styling**: StyleX with atomic CSS
- **TypeScript**: Strict mode enabled
- **Package Manager**: pnpm 12.15.0 (managed by Vite+)

## Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev
# or: vp dev

# Navigate to http://localhost:5173/
```

### Production Build

```bash
# Build for production
pnpm build

# Preview the build locally
pnpm preview

# Clean build artifacts
pnpm clean
```

The production build outputs optimized files to `dist/` directory with:

- Minification enabled (ESBuild)
- Sourcemaps disabled for smaller bundle size
- Chunk splitting for better caching
- File hashing for cache busting


## Project Structure

```
portfolio/
├── src/                    # Application source code
│   ├── components/        # Reusable React components
│   ├── shared-ui/         # Shared StyleX UI components
│   ├── assets/            # Static assets (images, styles)
│   └── App.tsx            # Root application component
├── shared-ui/             # Shared StyleX UI components
├── public/                # Public static files
├── dist/                  # Production build (from npm run build)
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.simple      # Simplified nginx-based build
├── vite.config.ts         # Vite+ configuration (production-ready)
├── tsconfig.json          # TypeScript configuration
└── .env.production        # Production environment variables
```

## Configuration

### Environment Variables

Edit `.env.production` for production settings:

| Variable                             | Description                          |
| ------------------------------------ | ------------------------------------ |
| `VITE_APP_NAME`                      | Application name (exposed to client) |
| `VITE_APP_VERSION`                   | Application version                  |
| `VITE_API_BASE_URL`                  | API proxy base path                  |
| `VITE_ENABLE_ANALYTICS`              | Enable analytics flag                |
| `VITE_ENABLE_DEBUG`                  | Enable debug mode (false in prod)    |
| `VITE_ENABLE_PERFORMANCE_MONITORING` | Enable performance monitoring        |


## Development Guidelines

- Run `vp check` before committing changes for formatting/linting/type-checking
- All lint errors must be fixed before merging
- Type safety is enforced in strict mode

For more information:

- [Vite+ Guide](https://viteplus.dev/guide/)
- [StyleX Documentation](https://stylexjs.com)

## License

MIT
