dev-up:
	docker compose -p portfolio-dev -f compose.dev.yaml --env-file .env.development up --build -d

dev-start:
	docker compose -p portfolio-dev -f compose.dev.yaml --env-file .env.development up --build -d

dev-stop:
	docker compose -p portfolio-dev stop

dev-down:
	docker compose -p portfolio-dev down

prod-up:
	docker compose -p portfolio-prod -f compose.yaml --env-file .env up --build -d

prod-start:
	docker compose -p portfolio-prod -f compose.yaml --env-file .env up --build -d

prod-stop:
	docker compose -p portfolio-prod stop

prod-down:
	docker compose -p portfolio-prod down
