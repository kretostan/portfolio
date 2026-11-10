### PHONY ###
.PHONY: frontend backend
.PHONY: images-build images-push images-publish

frontend:
	pnpm --filter frontend dev

backend:
	pnpm --filter backend dev

dev-up:
	podman compose -f containers/compose.dev.yaml -p portfolio-dev up -d

dev-stop:
	podman compose -f containers/compose.dev.yaml -p portfolio-dev stop

dev-down:
	podman compose -f containers/compose.dev.yaml -p portfolio-dev down

prod-up:
	podman compose -f containers/compose.yaml -p portfolio-prod up -d

prod-stop:
	podman compose -f containers/compose.yaml -p portfolio-prod stop

prod-down:
	podman compose -f containers/compose.yaml -p portfolio-prod down

images-build:
	podman build -f containers/Dockerfile.backend -t ghcr.io/kretostan/portfolio/backend:test-001 .
	podman build -f containers/Dockerfile.frontend -t ghcr.io/kretostan/portfolio/frontend:test-001 .

images-push:
	podman push ghcr.io/kretostan/portfolio/backend:test-001
	podman push ghcr.io/kretostan/portfolio/frontend:test-001

images-pull:
	podman pull ghcr.io/kretostan/portfolio/backend:test-001
	podman pull ghcr.io/kretostan/portfolio/frontend:test-001

images-clean:
	podman rmi backend:test-001 frontend:test-001
