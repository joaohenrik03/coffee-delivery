import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'

import {
  FormOfPaymentContainer,
  PaymentContainer,
  TypeOfPaymentButton,
} from './styles'

export function PaymentMethods() {
  const { selectedPaymentMethod, handleSetSelectedPaymentMethod } =
    useContext(CartContext)

  return (
    <PaymentContainer>
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
        <TypeOfPaymentButton
          type="button"
          title="Cartão de crédito"
          onClick={() => handleSetSelectedPaymentMethod('credit')}
          className={'credit'}
          typeCustom={selectedPaymentMethod}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Cartão de débito"
          onClick={() => handleSetSelectedPaymentMethod('debt')}
          className={'debt'}
          typeCustom={selectedPaymentMethod}
        >
          <Bank size={16} />
          Cartão de débito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Dinheiro"
          onClick={() => handleSetSelectedPaymentMethod('money')}
          className={'money'}
          typeCustom={selectedPaymentMethod}
        >
          <Money size={16} />
          Dinheiro
        </TypeOfPaymentButton>
      </FormOfPaymentContainer>
    </PaymentContainer>
  )
}
