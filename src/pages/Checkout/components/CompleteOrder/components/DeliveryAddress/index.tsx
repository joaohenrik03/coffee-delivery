import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  AddressContainer,
  AddressForm,
  HomeDataEntryContainer,
  HomeLocationDataEntryContainer,
} from './styles'

export function DeliveryAddress() {
  const { register } = useFormContext()

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
        <input type="text" placeholder="CEP" required {...register('cep')} />
        <input type="text" placeholder="Rua" required {...register('road')} />
        <HomeDataEntryContainer>
          <input
            type="text"
            placeholder="Número"
            required
            {...register('number')}
          />
          <input
            type="text"
            placeholder="Complemento"
            required
            {...register('complement')}
          />
        </HomeDataEntryContainer>
        <HomeLocationDataEntryContainer>
          <input
            type="text"
            placeholder="Bairro"
            required
            {...register('district')}
          />
          <input
            type="text"
            placeholder="Cidade"
            required
            {...register('city')}
          />
          <input type="text" placeholder="UF" required {...register('state')} />
        </HomeLocationDataEntryContainer>
      </AddressForm>
    </AddressContainer>
  )
}
