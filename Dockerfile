FROM node:lts

WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# build
RUN npm run build

# copy to production
COPY . .

# run
CMD ["node", ".output/server/index.mjs"]