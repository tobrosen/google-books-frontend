import {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions : NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GithubProvider({
        clientId: process.env.GITHUB_APP_CLIENT_ID ?? "",
        clientSecret: process.env.GITHUB_APP_CLIENT_SECRET ?? "",
        })
    ],
    callbacks: {
        async session({session, token}){
            return {...session, user: {...session.user, id: token.sub}}
        }
    }
}