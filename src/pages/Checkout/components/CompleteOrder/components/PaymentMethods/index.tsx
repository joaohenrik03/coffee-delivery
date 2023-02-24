import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { PaymentMethodContext } from '../../../../../../contexts/PaymentMethod'

import {
  PaymentMethodsContainer,
  FormOfPaymentContainer,
  PaymentMethodButton,
} from './styles'

export function PaymentMethods() {
  const { selectedPaymentMethod, handleSetSelectedPaymentMethod } =
    useContext(PaymentMethodContext)

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
        <PaymentMethodButton
          type="button"
          title="Cartão de crédito"
          onClick={() => handleSetSelectedPaymentMethod('credit')}
          className={'credit'}
          selectedButton={selectedPaymentMethod}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentMethodButton>
        <PaymentMethodButton
          type="button"
          title="Cartão de débito"
          onClick={() => handleSetSelectedPaymentMethod('debt')}
          className={'debt'}
          selectedButton={selectedPaymentMethod}
        >
          <Bank size={16} />
          Cartão de débito
        </PaymentMethodButton>
        <PaymentMethodButton
          type="button"
          title="Dinheiro"
          onClick={() => handleSetSelectedPaymentMethod('money')}
          className={'money'}
          selectedButton={selectedPaymentMethod}
        >
          <Money size={16} />
          Dinheiro
        </PaymentMethodButton>
      </FormOfPaymentContainer>
    </PaymentMethodsContainer>
  )
}
