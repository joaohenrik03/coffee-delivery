import { useLocation } from 'react-router-dom'
import { DeliveryImage } from './components/DeliveryImage'
import { OrderInformation } from './components/OrderInformation'
import { SuccessContainer } from './styles'

export function Success() {
  const state = useLocation()

  return (
    <SuccessContainer>
      <OrderInformation orderInformationState={state.state} />
      <DeliveryImage />
    </SuccessContainer>
  )
}
