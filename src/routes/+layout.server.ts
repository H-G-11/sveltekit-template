import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession()
  // access token available a session?.token?.token?.account?.access_token
  return {
    session,
  }
}
