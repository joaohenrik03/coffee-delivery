import { CartContainer, CartContent, CartItemListContainer } from './styles'
import { CartItem } from './components/CartItem'
import { ConfineOrder } from './components/ConfineOrder'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Cart() {
  const { cartList } = useContext(CartContext)

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>

      <CartContent>
        <CartItemListContainer>
          {cartList.map((item) => {
            return (
              <CartItem
                key={item.name}
                name={item.name}
                imgUrl={item.imageUrl}
                price={item.price}
                selectedQuantity={item.selectedQuantity}
              />
            )
          })}
        </CartItemListContainer>

        <ConfineOrder />
      </CartContent>
    </CartContainer>
  )
}
