dev-up:
	podman compose -f compose.dev.yaml -p portfolio-dev up -d

dev-stop:
	podman compose -f compose.dev.yaml -p portfolio-dev stop

dev-down:
	podman compose -f compose.dev.yaml -p portfolio-dev down

prod-up:
	podman compose -f compose.yaml -p portfolio up -d

prod-stop:
	podman compose -f compose.yaml -p portfolio stop

prod-down:
	podman compose -f compose.yaml -p portfolio down
