FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY . . 

FROM nginx:alpine

WORKDIR /app

# Copy Nuxt build output
COPY --from=build /app/.output /app/.output

# Copy your nginx config (template with env vars if you want flexibility)
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Install Node so we can run Nuxt inside this image
RUN apk add --no-cache nodejs npm bash gettext

# Expose HTTPS
EXPOSE 443

# Start both Nuxt + Nginx
CMD sh -c "envsubst '\$SERVER_NAME \$SSL_CERT \$SSL_CERT_KEY' < /app/nginx/default.conf.template > /etc/nginx/conf.d/default.conf && node /app/.output/server/index.mjs & nginx -g 'daemon off;'"