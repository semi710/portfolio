# Show available commands
list:
    @just --list

# Run dev server with Vite on 0.0.0.0
dev:
    npm run dev -- --host 0.0.0.0

# Build for production
build:
    npm run build

# Preview production build
preview:
    npm run preview
