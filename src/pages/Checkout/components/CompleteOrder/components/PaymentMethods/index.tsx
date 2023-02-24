import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodsContainer, FormOfPaymentContainer } from './styles'

export const paymentMethods = {
  credit: {
    title: 'credit',
    icon: <CreditCard size={16} />,
    label: 'Cartão de Crédito',
  },
  debt: {
    title: 'debt',
    icon: <Bank size={16} />,
    label: 'Cartão de Débito',
  },
  money: {
    title: 'money',
    icon: <Money size={16} />,
    label: 'Dinheiro',
  },
} as const

export function PaymentMethods() {
  return (
    <PaymentMethodsContainer>
      <header>
        <span>
          <CurrencyDollar size={22} />
        </span>
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>

      <FormOfPaymentContainer>
        {Object.entries(paymentMethods).map(([key, { title, icon, label }]) => {
          return (
            <PaymentMethodInput
              key={title}
              title={title}
              icon={icon}
              label={label}
            />
          )
        })}
      </FormOfPaymentContainer>
    </PaymentMethodsContainer>
  )
}
