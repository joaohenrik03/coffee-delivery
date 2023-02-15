import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethod } from './components/PaymentMethod'
import { CompleteOrderContainer } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>

      <DeliveryAddress />
      <PaymentMethod />
    </CompleteOrderContainer>
  )
}
