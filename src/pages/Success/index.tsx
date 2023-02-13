import { DeliveryImage } from './components/DeliveryImage'
import { OrderInformation } from './components/OrderInformation'
import { SuccessContainer } from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <OrderInformation />
      <DeliveryImage />
    </SuccessContainer>
  )
}
