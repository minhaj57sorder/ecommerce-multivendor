
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(credentials?.username == 'minhaj' && credentials?.password == 'minhaj'){
            return {
                id: '1',
                username: 'minhaj'
            }
        }
        return null
      }
    })
  ]
}