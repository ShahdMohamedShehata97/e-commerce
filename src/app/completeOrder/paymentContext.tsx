// 'use client'

// import { useState } from 'react'
// import PaymentWay from '../_components/PayMentWay/PaymentWay'
// import OrderSummeryButton from './OrderSummeryButton'
// // import OrderSummaryButton from './OrderSummaryButton'

// export default function CheckoutClientWrapper() {

//   const [paymentMethod, setPaymentMethod] = useState<'cash' | 'online'>('cash')

//   return (
//     <>
//       {/* payment */}
//       <PaymentWay
//         selected={paymentMethod}
//         onChange={setPaymentMethod}
//       />

//       {/* summary button */}
//       <OrderSummeryButton paymentMethod={paymentMethod} />
      
//     </>
//   )
// }



'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// type PaymentType = 'cash' | 'online'
type PaymentType = 'cash' | 'online' | null

export type PaymentContextType = {
  payment: PaymentType
  updatePayment: (value: PaymentType) => void
}

const PaymentContext = createContext<PaymentContextType | null>(null)

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [payment, setPayment] = useState<PaymentType>(null)

function updatePayment(pay:PaymentType){
  setPayment(pay)
}

  return (
    <PaymentContext.Provider value={{ payment, updatePayment }}>
      {children}
    </PaymentContext.Provider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)

  if (!context) {
    throw new Error('usePayment must be used inside PaymentProvider')
  }

  return context
}