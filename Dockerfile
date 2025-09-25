FROM node:lts-alpine 

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# build
RUN npm run build

# run
CMD ["node", ".output/server/index.mjs"]