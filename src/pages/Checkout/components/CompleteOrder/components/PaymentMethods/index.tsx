import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  PaymentMethodsContainer,
  FormOfPaymentContainer,
  PaymentMethodInput,
} from './styles'

export function PaymentMethods() {
  const { register, watch } = useFormContext()

  const updatedSelectedPaymentMethod = watch('selectedPaymentMethod')

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
        <PaymentMethodInput
          className={'credit'}
          customInput={updatedSelectedPaymentMethod}
        >
          <input
            type="radio"
            value={'credit'}
            className={'credit'}
            {...register('selectedPaymentMethod')}
          />
          <label>
            <CreditCard size={16} />
            Cartão de crédito
          </label>
        </PaymentMethodInput>
        <PaymentMethodInput
          className={'debt'}
          customInput={updatedSelectedPaymentMethod}
        >
          <input
            type="radio"
            value={'debt'}
            className={'debt'}
            {...register('selectedPaymentMethod')}
          />
          <label>
            <Bank size={16} />
            Cartão de débito
          </label>
        </PaymentMethodInput>
        <PaymentMethodInput
          className={'money'}
          customInput={updatedSelectedPaymentMethod}
        >
          <input
            type="radio"
            value={'money'}
            className={'money'}
            {...register('selectedPaymentMethod')}
          />
          <label>
            <Money size={16} />
            Dinheiro
          </label>
        </PaymentMethodInput>
      </FormOfPaymentContainer>
    </PaymentMethodsContainer>
  )
}
