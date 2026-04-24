'use server'

import { AddressType } from "@/api/types"
import { decodeAuthenticatedUserToken } from "../utils"


export async function getSpecificAddress(id: string):Promise<AddressType | null > {

  const userToken = await decodeAuthenticatedUserToken()

  if (!userToken) return null

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
      {
        headers: {
          token: userToken // أو Authorization حسب الـ API
        }
      }
    )

    if (!res.ok) {
      return null
    }

    const finalRes = await res.json()

    console.log('specific address:', finalRes)

    return finalRes.data

  } catch (error) {
    console.error("API error:", error)
    return null
  }
}