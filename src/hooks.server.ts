import { SvelteKitAuth } from "@auth/sveltekit"
import Auth0 from "@auth/core/providers/auth0"
import {
  AUTH0_ID,
  AUTH0_SECRET,
  AUTH0_ISSUER,
  AUTH0_REDIRECT_URI,
} from "$env/static/private"
import type { Provider } from "@auth/core/providers"
import type {
  Account,
  Awaitable,
  Profile,
  Session,
  User,
} from "@auth/core/types"
import type { AdapterUser } from "@auth/core/adapters"
import type { JWT } from "@auth/core/jwt"

const callbacks = {
  jwt: async function jwt({
    token,
    account,
    profile,
  }: {
    token: JWT
    account: Account
    profile: Profile
  }) {
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  // redirect: async function redirect({
  //   url,
  //   baseUrl,
  // }: {
  //   url: string
  //   baseUrl: string
  // }) {
  //   console.log({ url, baseUrl })
  //   // Allows relative callback URLs
  //   if (url.startsWith("/")) return `${baseUrl}${url}/callback`
  //   // Allows callback URLs on the same origin
  //   else if (new URL(url).origin === baseUrl) return `${baseUrl}/callback`
  //   return baseUrl
  // },
  session: async function session({
    session,
    token,
    user,
  }: {
    session: Session & { accessToken: string }
    token: JWT
    user: AdapterUser
  }) {
    session.accessToken = token?.accessToken as string
    return session
  },
}

export const handle = SvelteKitAuth({
  trustHost: true,
  providers: [
    Auth0({
      clientId: AUTH0_ID,
      clientSecret: AUTH0_SECRET,
      issuer: AUTH0_ISSUER,
      redirectProxyUrl: AUTH0_REDIRECT_URI,
      style: {
        logo: "/auth0.svg",
        logoDark: "/auth0-dark.svg",
        bg: "#fff",
        text: "#EB5424",
        bgDark: "#EB5424",
        textDark: "#fff",
      },
    }) as Provider,
  ],
  // Does not work for now, to fix later
  // pages: {
  //   signIn: "/signin",
  // },
  // Not ideal but types for callbacks are a nightmare
  callbacks: callbacks as any,
})
