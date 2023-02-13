import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Information,
  OrderInformationContainer,
  OrderInformationContent,
} from './styles'

export function OrderInformation() {
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
                Entrega em Rua <span>João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </Information>
        </ul>
      </OrderInformationContent>
    </OrderInformationContainer>
  )
}
