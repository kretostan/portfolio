FROM node:alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM deps AS dev
WORKDIR /app
COPY . /app
EXPOSE 3001
CMD ["npm", "run", "dev"]

FROM deps AS build
WORKDIR /app
COPY . /app
RUN npm run build

FROM node:alpine AS prod
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["npm", "start"]
