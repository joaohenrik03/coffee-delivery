import { createContext, ReactNode, useState } from 'react'

interface SelectPaymentMethodContextType {
  selectedPaymentMethod: string
  handleSetSelectedPaymentMethod: (newMethod: string) => void
}

export const SelectPaymentMethodContext = createContext(
  {} as SelectPaymentMethodContextType,
)

interface SelectPaymentMethodProps {
  children: ReactNode
}

export function SelectPaymentMethodProvider({
  children,
}: SelectPaymentMethodProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit')

  function handleSetSelectedPaymentMethod(newMethod: string) {
    setSelectedPaymentMethod(newMethod)
  }

  return (
    <SelectPaymentMethodContext.Provider
      value={{ selectedPaymentMethod, handleSetSelectedPaymentMethod }}
    >
      {children}
    </SelectPaymentMethodContext.Provider>
  )
}
