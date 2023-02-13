import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  NavContainer,
  ProductCounterInCart,
  StoreLocation,
} from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  const { amountOfProductsInCart } = useContext(CartContext)

  const emptyCart = amountOfProductsInCart <= 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Copo de café roxo com um desenho de foguete no meio"
        />
      </Link>

      <NavContainer>
        <StoreLocation title="Ijuí, RS">
          <MapPin size={22} weight="fill" />
          Ijuí, RS
        </StoreLocation>

        <NavLink to="/checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />

          {!emptyCart && (
            <ProductCounterInCart>
              <strong>{amountOfProductsInCart}</strong>
            </ProductCounterInCart>
          )}
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
