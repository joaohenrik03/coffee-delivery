import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem } from './components/CartItem'
import { ConfineOrder } from './components/ConfineOrder'
import { EmptyCart } from './components/EmptyCart'
import { CartContainer, CartContent, CartItemListContainer } from './styles'

export function Cart() {
  const { cartList } = useContext(CartContext)

  const emptyCart = cartList.length === 0

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>

      <CartContent>
        {emptyCart ? (
          <EmptyCart />
        ) : (
          <div>
            <CartItemListContainer>
              {cartList.map((item) => (
                <CartItem
                  key={item.name}
                  name={item.name}
                  imgUrl={item.imageUrl}
                  price={item.price}
                  selectedQuantity={item.selectedQuantity}
                />
              ))}
            </CartItemListContainer>

            <ConfineOrder />
          </div>
        )}
      </CartContent>
    </CartContainer>
  )
}
