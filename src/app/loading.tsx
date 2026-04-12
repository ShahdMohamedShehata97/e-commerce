import React from 'react'
import { BounceLoader, ClipLoader } from 'react-spinners'

export default function loading() {
  return (
    <div  className='flex justify-center min-h-screen items-center'>
       <ClipLoader color='green' />
    </div>
  )
}
