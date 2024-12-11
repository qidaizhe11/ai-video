
import NextAuth from "next-auth"
import { authConfig } from "@/server/auth"

export const { auth: middleware } = NextAuth(authConfig)
