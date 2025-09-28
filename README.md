# 2x10's Portfolio

### [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)

### [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment)

## Deployment
Run the installer to build the Docker enviroment:
```bash
bash installer.sh
```
Then configurate the .env file that has been created and configurate it to your needs.
After configurating the enviroment, just re-run the installer and it will be good to go.  
#
Though, in the root of the project, you can also just copy the ``.env.example`` to ``.env``, configurate it and then run ``docker compose up -d`` 
### Reverse Proxy
If you wanna run this behind a reverse proxy server such as nginx, consider something like this for your ``nginx.conf``
```nginx
server 
{
    listen 443 ssl http2;
    server_name your.cool-domain.tld;

    ssl_certificate     /etc/your/key/key.pub;
    ssl_certificate_key /etc/your/key/key;

    location / 
    {
        proxy_pass http://127.0.0.1:3000;
    }
}
```

## If you want to contribute to the project

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```