import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import {
  FormOfPaymentContainer,
  PaymentContainer,
  TypeOfPaymentButton,
} from './styles'

export function PaymentMethod() {
  const [typeOfPaymentSelected, setTypeOfPaymentSelected] = useState('credit')

  function updateTypeOfPayment(typeOfPayment: string) {
    setTypeOfPaymentSelected(typeOfPayment)
  }

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
          onClick={() => updateTypeOfPayment('credit')}
          className={'credit'}
          typeCustom={typeOfPaymentSelected}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Cartão de débito"
          onClick={() => updateTypeOfPayment('debt')}
          className={'debt'}
          typeCustom={typeOfPaymentSelected}
        >
          <Bank size={16} />
          Cartão de débito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Dinheiro"
          onClick={() => updateTypeOfPayment('money')}
          className={'money'}
          typeCustom={typeOfPaymentSelected}
        >
          <Money size={16} />
          Dinheiro
        </TypeOfPaymentButton>
      </FormOfPaymentContainer>
    </PaymentContainer>
  )
}
