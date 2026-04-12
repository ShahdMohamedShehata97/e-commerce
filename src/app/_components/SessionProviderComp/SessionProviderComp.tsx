'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
// import { Children } from './../../../../node_modules/preact/compat/src/Children';

export default function SessionProviderComp({children}:{children:ReactNode}) {
  return (
   <SessionProvider >
    {children}
    
   </SessionProvider>
  )
}
