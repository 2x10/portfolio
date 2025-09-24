# ---- Build stage ----
FROM node:lts-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production stage ----
FROM node:lts-alpine AS production-stage

WORKDIR /app

# Copy only the build output
COPY --from=build-stage /app/.output ./.output

EXPOSE 3000

# Start the Nuxt server
CMD ["node", ".output/server/index.mjs"]