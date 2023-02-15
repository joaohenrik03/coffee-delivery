import { MapPin } from 'phosphor-react'
import {
  AddressContainer,
  AddressForm,
  HomeDataEntryContainer,
  HomeLocationDataEntryContainer,
} from './styles'

export function DeliveryAddress() {
  return (
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
  )
}
