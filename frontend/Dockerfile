FROM node:alpine AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM deps AS dev
WORKDIR /app
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM deps AS build
WORKDIR /app
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
