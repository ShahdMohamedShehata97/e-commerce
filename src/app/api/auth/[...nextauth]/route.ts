// import { nextAuthConfig } from "@/Next-Auth/NextAuth.config";
// import NextAuth from "next-auth";

import { nextAuthConfig } from "@/Next-Auth/NextAuth.config";
import NextAuth from "next-auth";



// const handlers=NextAuth(nextAuthConfig)

// export {handlers as GET,handlers as POST}

const routeHandler= NextAuth(nextAuthConfig)

export {routeHandler as GET, routeHandler as POST}

