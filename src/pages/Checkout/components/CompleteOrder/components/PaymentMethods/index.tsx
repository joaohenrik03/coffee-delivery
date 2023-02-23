import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormOfPaymentContainer,
  PaymentContainer,
  TypeOfPaymentButton,
} from './styles'

export function PaymentMethods() {
  const [methodsPaymentSelected, setMethodsPaymentSelected] = useState('credit')

  const { register } = useFormContext()

  function updatePaymentMethod(newMethod: string) {
    setMethodsPaymentSelected(newMethod)
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
          onClick={() => updatePaymentMethod('credit')}
          className={'credit'}
          typeCustom={methodsPaymentSelected}
        >
          <CreditCard size={16} />
          Cartão de crédito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Cartão de débito"
          onClick={() => updatePaymentMethod('debt')}
          className={'debt'}
          typeCustom={methodsPaymentSelected}
        >
          <Bank size={16} />
          Cartão de débito
        </TypeOfPaymentButton>
        <TypeOfPaymentButton
          type="button"
          title="Dinheiro"
          onClick={() => updatePaymentMethod('money')}
          className={'money'}
          typeCustom={methodsPaymentSelected}
        >
          <Money size={16} />
          Dinheiro
        </TypeOfPaymentButton>
      </FormOfPaymentContainer>
    </PaymentContainer>
  )
}
