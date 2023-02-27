import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { PaymentMethodInputContainer } from './styles'

interface PaymentMethodInputProps {
  title: 'credit' | 'debt' | 'money'
  icon: ReactNode
  label: string
}

export function PaymentMethodInput({
  title,
  icon,
  label,
}: PaymentMethodInputProps) {
  const { register, watch } = useFormContext()

  const updatedSelectedPaymentMethod = watch('selectedPaymentMethod')

  return (
    <PaymentMethodInputContainer
      className={title}
      customInput={updatedSelectedPaymentMethod}
    >
      <input
        type="radio"
        title={label}
        value={title}
        className={title}
        {...register('selectedPaymentMethod')}
      />
      <label>
        {icon}
        {label}
      </label>
    </PaymentMethodInputContainer>
  )
}
