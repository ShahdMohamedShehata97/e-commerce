'use server'

import { decodeAuthenticatedUserToken } from "@/app/utils";
import { ChangePasswordType, ProfileType } from "./profileType";

// export async function updateUserData(data: ProfileType){

// const userToken = await decodeAuthenticatedUserToken()
// if(userToken){
//     try{

//         const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,{
//             method:'put',
//             headers:{token:userToken,
//               'content-type':'application/json'
//             },
//             body:JSON.stringify(data)
//         })

//         if(res.ok){
//             const finalRes = await res.json()
//             console.log('upppppp',finalRes)
//             return finalRes
//         }

//     }
//     catch(error){
//         console.log(error)
//     }
// }


// }

export async function updateUserData(data: ProfileType) {
  const userToken = await decodeAuthenticatedUserToken()

  if (!userToken) {
    return { ok: false, message: "No token" }
  }

  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/users/updateMe/",
      {
        method: "PUT",
        headers: {
          token: userToken,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )

    const finalRes = await res.json()

    return {
      ok: res.ok,
      data: finalRes,
    }

  } catch (error) {
    console.log(error)
    return { ok: false, message: "Something went wrong" }
  }
}


export async function changePassword(data:ChangePasswordType){

 const userToken = await decodeAuthenticatedUserToken()

 if(userToken){
 
  try{
     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,{
    method:'put',
    headers:{token:userToken,'content-type':'application/json'},
    body: JSON.stringify(data)
  })

  if(res.ok){
    const finalRes = await res.json()


    console.log('change Password',finalRes)


    return finalRes
  }


else {
  return null
}}
catch(error){
  console.log(error)
}

 }

 else{

   return new Error('Session Ended')

 }


}