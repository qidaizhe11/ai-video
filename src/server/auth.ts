import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  // callbacks: {
  //   session({ session, user }) {
  //     session.user.id = user.id
  //     return session
  //   },
  // },
  pages: {
    signIn: '/login',
  },
  ...authConfig,
})

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}
