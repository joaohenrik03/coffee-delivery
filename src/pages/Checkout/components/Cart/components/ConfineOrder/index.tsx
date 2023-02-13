import { useContext } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { currencyFormatter } from '../../../../../../utils/CurrencyFormatter'
import { ConfineOrderContainer } from './styles'

export function ConfineOrder() {
  const { totalValueCartItems, cartList } = useContext(CartContext)

  const deliveryValue = 1.5
  const totalDeliveryValue = deliveryValue * cartList.length

  const totalValueCart = totalDeliveryValue + totalValueCartItems

  return (
    <ConfineOrderContainer>
      <div>
        <span>Total de itens</span>
        <span>{currencyFormatter(totalValueCartItems)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>{currencyFormatter(totalDeliveryValue)}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>{currencyFormatter(totalValueCart)}</strong>
      </div>

      <button type="submit">Confirmar pedido</button>
    </ConfineOrderContainer>
  )
}
