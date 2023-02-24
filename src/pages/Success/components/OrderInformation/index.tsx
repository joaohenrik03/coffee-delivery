import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Information,
  OrderInformationContainer,
  OrderInformationContent,
} from './styles'

export function OrderInformation({ orderInformationState }: any) {
  return (
    <OrderInformationContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderInformationContent>
        <ul>
          <Information variant="purple">
            <span>
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <span>Rua {orderInformationState.road}</span>
              </p>
              <p>
                {orderInformationState.district} - {orderInformationState.city},{' '}
                {orderInformationState.state}
              </p>
            </div>
          </Information>

          <Information variant="yellow">
            <span>
              <Timer weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <span>20 min - 30 min</span>
              </p>
            </div>
          </Information>

          <Information variant="yellowDark">
            <span>
              <CurrencyDollar weight="regular" />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <span>{orderInformationState.selectedPaymentMethod}</span>
              </p>
            </div>
          </Information>
        </ul>
      </OrderInformationContent>
    </OrderInformationContainer>
  )
}
