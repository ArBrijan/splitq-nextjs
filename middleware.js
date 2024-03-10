import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { LOGIN_REDIRECT, NOAUTH_REDIRECT, PUBLIC_ROUTES } from "./auth.routes";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

const {auth} = NextAuth(authConfig)

export default auth((req)=>{
   const logged = !!req.auth
   const url = req.nextUrl.pathname
   const isPublic = PUBLIC_ROUTES.includes(url);
   const isAPI = url.startsWith("/api")
   
   
   if(isAPI) return

   if(!isPublic && !logged) return NextResponse.redirect(new URL(NOAUTH_REDIRECT, req.url))
   if(isPublic && logged) return NextResponse.redirect(LOGIN_REDIRECT)
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };