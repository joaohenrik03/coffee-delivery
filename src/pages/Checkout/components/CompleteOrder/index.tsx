import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  CompleteOrderContainer,
  FormOfPaymentContainer,
  HomeDataEntryContainer,
  HomeLocationDataEntryContainer,
  PaymentContainer,
} from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>

      <AddressContainer>
        <header>
          <span>
            <MapPin size={22} />
          </span>
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <AddressForm>
          <input type="text" placeholder="CEP" required />
          <input type="text" placeholder="Rua" required />
          <HomeDataEntryContainer>
            <input type="text" placeholder="Número" required />
            <input type="text" placeholder="Complemento" required />
          </HomeDataEntryContainer>
          <HomeLocationDataEntryContainer>
            <input type="text" placeholder="Bairro" required />
            <input type="text" placeholder="Cidade" required />
            <input type="text" placeholder="UF" required />
          </HomeLocationDataEntryContainer>
        </AddressForm>
      </AddressContainer>

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
          <button type="button">
            <CreditCard size={16} />
            Cartão de crédito
          </button>
          <button type="button">
            <Bank size={16} />
            Cartão de débito
          </button>
          <button type="button">
            <Money size={16} />
            Dinheiro
          </button>
        </FormOfPaymentContainer>
      </PaymentContainer>
    </CompleteOrderContainer>
  )
}
