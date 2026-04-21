// // import { NextAuthOptions } from "next-auth";
// // import Credentials from "next-auth/providers/credentials";
// // import Facebook from "next-auth/providers/facebook";
// // import Google from "next-auth/providers/google";
// // import { email } from "zod";
// // import {jwtDecode} from 'jwt-decode'

// import { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// // import { email } from "zod";
// // import { email } from 'zod';
// import { jwtDecode } from 'jwt-decode';


// // export const nextAuthConfig:NextAuthOptions={
// //     providers:[
// //       Credentials(
// //         {
// //             name:'Fresh Cart credentials',
// //             credentials:{
// //                 email:{label:'Email', },
// //                 password:{type:'password'}
// //             },

// //             authorize:async function(credentials){

// //                   const res= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
// //             method:'post',
// //             body:JSON.stringify(credentials),
// //             headers:{'content-type':'application/json'}

            

// //         })

// //           const finalRes= await res.json()
// //         console.log(finalRes)

// //         const {name,email}=finalRes.user

                  
// //                if(res.ok){


// //                 const data: {id:string} = jwtDecode(finalRes.token)

              
// //                 return {name,email,id:data.id,tokenCredentials:finalRes.token}
// //                }

// //                return null
// //                }
// //         }
// //       )
// //     ],

// //     callbacks:{
// //       jwt:function(param){

// //         if(param.user)
// //         {
// //           param.token.routeToken=param.user.tokenCredentials
// //           param.token.id=param.user.id


// //         }

// //         // console.log('gwttttttttttt',param)

// //         return param.token


// //       },
// //       session:function(param){

// //         // console.log('sessionnnnnnn',param)

        
        
// //         param.session.user.id=param.token.id
// //         param.session.user.token = param.token.routeToken
// //         return param.session
// //       }

// //     },




// //     jwt:{
// //       maxAge:60*60*24*3
// //     },

// //     pages:{
// //       signIn:'/login'
// //     }
// // }




// export const nextAuthConfig:NextAuthOptions={
//   providers:[

//     Credentials({
//       name:'Login by Fresh Cart',
//       credentials:{
//         email:{type:'email'},
//         password:{type:'password'},
        
//       },

//       authorize: async function(credentials){


//                  const res= await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin',{
//             method:'post',
//             body:JSON.stringify(credentials),
//             headers:{'content-type':'application/json'}

//         })


//         const finalRes= await res.json()

//         if(res.ok){

          
//           const data:{id:string}=jwtDecode(finalRes.token)

//           const {name,email}=finalRes.user
//           return {
            
//             name,
//             email,
//             id:data.id,
//             tokenCredentials:finalRes.token
//           }
//         }


        
//         return null;
//       }
//     })
//   ],

//   callbacks:{
//     jwt:function(param){

//     // console.log('wareny el JWT parameters',param)


//     if(param.user)
//     {
      
//     param.token.routeToken=param.user.tokenCredentials
//     param.token.id=param.user.id
//     }
//     // param.token.id=param.user.id


//       return param.token


//     },


//     session:function(param){
//       // console.log('wareny session parameter',param)

     
//       param.session.user.id = param.token.id
//       param.session.user.token = param.token.routeToken


//       return param.session
//     }


//   }
//   ,

//   jwt:{
//     maxAge:60 * 60 * 24 *3
//   }
//  ,

//   pages:{
//     signIn:'/login',
//   }
// }


import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { jwtDecode } from "jwt-decode"

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Login by Fresh Cart",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "content-type": "application/json" },
          }
        )

        const data = await res.json()

        if (!res.ok) return null

        const decoded: { id: string } = jwtDecode(data.token)

        return {
          id: decoded.id,
          name: data.user.name,
          email: data.user.email,
          tokenCredentials: data.token,
        }
      },
    }),
  ],

  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id
  //       token.routeToken = user.tokenCredentials
  //     }

  //     return token
  //   },

  //   async session({ session, token }) {
  //     session.user.id = token.id as string
  //     session.user.token = token.routeToken as string

  //     return session
  //   },
  // },

  callbacks: {
  jwt({ token, user, trigger, session }) {

    // أول login
    if (user) {
      token.routeToken = user.tokenCredentials
      token.id = user.id
      token.name = user.name
    }

    // لما تعملي update()
    if (trigger === "update") {
      if (session?.name) {
        token.name = session.name
      }
    }

    return token
  },

  session({ session, token }) {
    session.user.id = token.id as string
    session.user.token = token.routeToken
    session.user.name = token.name   // 👈 دي كانت ناقصة غالبًا

    return session
  }
},
  jwt: {
    maxAge: 60 * 60 * 24 * 3,
  },

  pages: {
    signIn: "/login",
  },
}