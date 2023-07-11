# Sveltekit Template

Svelte Website & Dashboard template with:
- User authentication using [Auth0](https://auth0.com/)
- [Sveltekit](https://kit.svelte.dev/) stack
- Design with [Daisy UI](https://daisyui.com/) (based on [TailwindCSS](https://tailwindcss.com/))
- Types with Typescript
- [Vite](https://vitejs.dev/) tooling

## Should you use it?

I love Svelte for its simplicity. Coming from Backend and having worked with React for a year, Svelte feels like a dream.

Sveltekit makes it very easy to have **excellent performance** with very little optimization, but the main advantage according to me is the developer experience.

This project can be helpful to early-stage start-ups and freelancers with limited front-end knowledge, who want to ship things fast in production without compromising on quality.

Daisy UI makes it easy to have a good generic UI without much effort.

## How to improve further

If I were to do this project again, I would take a free website design on Figma, and implement it with TailwindCSS.

Also, if I were to use it in the real world, I would build another API in Python with FastAPI that would communicate with Sveltekit's backend. 

This is a matter of personal taste, as Typescript can do the job just as well.

The authentication between Sveltekit and FastAPI could then work in 2 different ways:
- using access tokens generated by Auth0 and available in the user object
- using basic credentials since, unlike a SPA, the credentials would live in SvelteKit's backend and would be protected.

I would go for the first option, even if this might be overkill.

Also, you will notice that I externalized the login page. This is due to the fact that as of today, `@auth/sveltekit` is experimental and some things cannot be done as far as I tried and searched online.

## How to use

1. Env variables

You will first need an Auth0 account. Then, you will have to:
- create a new Application (standard one)
  - allow the following redirect URI: http://localhost:4040, https://your-deployment, http://localhost:4040/callback/auth, https://your-deployment/callback/auth
  - allow the following web origins and logout URLs: http://localhost:4040, https://your-deployment
  - (remove the localhosts in your production API, this gives steps mainly for a local server)
- create a new API
- create a `.env` file with the following variables:
  - `AUTH0_DOMAIN`
  - `AUTH0_ID`
  - `AUTH0_SECRET`
  - `AUTH0_ISSUER`
  - `AUTH0_REDIRECT_URI`

You will also need to define a secret for your app so that it can use Auth.js.

- `AUTH_SECRET` must also be defined. You can create one using: `openssl rand -base64 32`

2. Install

You can now run `npm i`

3. Run locally

You can run `npm run dev`, or `npm run build` and `npm run preview`

4. Deploy

I am using Vercel but anything is fine

## What about performance?

You can find the latest performance [here](https://pagespeed.web.dev/analysis/https-sveltekit-template-theta-vercel-app/l0etl5u0oo)

Here are the results:
- For Desktop:
![image](https://github.com/HuguesGallier/sveltekit-template/assets/44944809/2c90d991-c2ac-41ea-9213-68408ddb0dff)

- For Mobile:
![image](https://github.com/HuguesGallier/sveltekit-template/assets/44944809/412c8641-9aa1-4cbe-8d02-7dba277f62e7)

What I find sick is that I did very little optimization:
- Images are lazy loaded
- Heavy components are imported asynchronously

## Thanks for reading
