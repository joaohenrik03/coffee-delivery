import { DeliveryImageContainer } from './styles'
import deliveryImage from '../../../../assets/delivery-image.png'

export function DeliveryImage() {
  return (
    <DeliveryImageContainer>
      <img
        src={deliveryImage}
        alt="Motoboy em uma moto roxa, transportando uma caixa de café na garupa"
      />
    </DeliveryImageContainer>
  )
}
