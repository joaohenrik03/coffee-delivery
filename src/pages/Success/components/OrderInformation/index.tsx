import { ConfirmeOrderData } from '../../../Checkout'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { paymentMethods } from '../../../Checkout/components/CompleteOrder/components/PaymentMethods'
import {
  Information,
  OrderInformationContainer,
  OrderInformationContent,
} from './styles'

interface OrderInformationProps {
  orderInformationState: ConfirmeOrderData
}

export function OrderInformation({
  orderInformationState,
}: OrderInformationProps) {
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
                Entrega em{' '}
                <span>
                  Rua {orderInformationState.road},{' '}
                  {orderInformationState.number}
                </span>
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
                <span>
                  {
                    paymentMethods[orderInformationState.selectedPaymentMethod]
                      .label
                  }
                </span>
              </p>
            </div>
          </Information>
        </ul>
      </OrderInformationContent>
    </OrderInformationContainer>
  )
}
