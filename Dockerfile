# Install latest node version
FROM node:lts-alpine

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Compile build
RUN npm run build

# Copy it to production
COPY . . 