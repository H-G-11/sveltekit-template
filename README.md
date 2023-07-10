# Svelte Front-end

Svelte Website + Dashboard template with Daisy UI.

## How to use

1. Env variables
   You will first need an Auth0 account. Then, you will have to:

- create a new Application (standard one)
  - allow the following redirect uri: http://localhost:4040, https://your-deployment, http://localhost:4040/callback/auth, https://your-deployment/callback/auth
  - allow the following web origins and logout urls: http://localhost:4040, https://your-deployment
  - (remove the localhosts in your production API, this gives steps mainly for a local server)
- create a new API
- create a `.env` file with the following variables:
  - `AUTH0_DOMAIN`
  - `AUTH0_ID`
  - `AUTH0_SECRET`
  - `AUTH0_ISSUER`
  - `AUTH0_REDIRECT_URI`

You will also need to define a secret for your app, so that it can use Auth.js.

- `AUTH_SECRET` must also be defined. You can create one using: `openssl rand -base64 32`

2. Install
   You can now run `npm i`

3. Run locally
   You can run `npm run dev`

4. Deploy
   I am using Vercel but anything is fine obviously :)
