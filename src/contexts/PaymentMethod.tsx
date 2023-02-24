import { createContext, ReactNode, useState } from 'react'

interface PaymentMethodContextType {
  selectedPaymentMethod: string
  handleSetSelectedPaymentMethod: (newMethod: string) => void
}

export const PaymentMethodContext = createContext(
  {} as PaymentMethodContextType,
)

interface PaymentMethodProps {
  children: ReactNode
}

export function PaymentMethodProvider({ children }: PaymentMethodProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit')

  function handleSetSelectedPaymentMethod(newMethod: string) {
    setSelectedPaymentMethod(newMethod)
  }

  return (
    <PaymentMethodContext.Provider
      value={{ selectedPaymentMethod, handleSetSelectedPaymentMethod }}
    >
      {children}
    </PaymentMethodContext.Provider>
  )
}
