'use client'

import { PaymentProvider } from './paymentContext'
import AddressContextProvider from './addressContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PaymentProvider>
      <AddressContextProvider>
        {children}
      </AddressContextProvider>
    </PaymentProvider>
  )
}