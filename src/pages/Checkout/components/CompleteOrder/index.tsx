import { DeliveryAddress } from './components/DeliveryAddress'
import { PaymentMethods } from './components/PaymentMethods'
import { CompleteOrderContainer } from './styles'

export function CompleteOrder() {
  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>

      <DeliveryAddress />
      <PaymentMethods />
    </CompleteOrderContainer>
  )
}
