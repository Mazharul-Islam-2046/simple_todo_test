import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserFromDb, saltAndHashPassword } from "./lib/utils"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials) => {
        let user = null
 
        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password as string)
 
        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email as string, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },
    }),],
})