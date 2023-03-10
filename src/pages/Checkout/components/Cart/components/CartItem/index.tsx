import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../../../contexts/CartContext'
import { MySwal } from '../../../../../Home'
import { currencyFormatter } from '../../../../../../utils/CurrencyFormatter'
import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CartItemContainer,
  ManageCartProductAmountContainer,
  ManageCartProductContainer,
} from './styles'

interface CartItemProps {
  imgUrl: string
  name: string
  price: number
  selectedQuantity: number
}

export function CartItem({
  imgUrl,
  name,
  price,
  selectedQuantity,
}: CartItemProps) {
  const { removeItemToCart, updateItemToCart } = useContext(CartContext)

  const [selectedQuantityItem, setSelectedQuantityItem] =
    useState(selectedQuantity)

  const minimumAmount = selectedQuantity === 1 ? 'minimum' : 'notMinimum'

  function handleChangeQuantity(quantity: number) {
    setSelectedQuantityItem(quantity)
  }

  function handleIncreaseQuantity() {
    setSelectedQuantityItem((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (selectedQuantityItem > 1) {
      setSelectedQuantityItem((state) => state - 1)
    }
  }

  // Update item cart function
  useEffect(() => {
    updateItemToCart(name, selectedQuantityItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, selectedQuantityItem])

  function handleRemoveItemToCart() {
    MySwal.fire({
      title: 'Deseja remover o produto do carrinho?',
      text: 'Você não será capaz de reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8047F8',
      cancelButtonColor: '#D33',
      confirmButtonText: 'Sim, remover!',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire('Removido!', 'Produto foi removido do carrinho.', 'success')
        removeItemToCart(name)
      }
    })
  }

  return (
    <CartItemContainer>
      <img src={imgUrl} alt="" />
      <div>
        <p>{name}</p>
        <ManageCartProductContainer>
          <ManageCartProductAmountContainer>
            <button
              type="button"
              onClick={handleDecreaseQuantity}
              className={minimumAmount}
            >
              <Minus size={14} weight="bold" />
            </button>

            <input
              type="number"
              value={selectedQuantityItem}
              onChange={(event) =>
                handleChangeQuantity(Number(event.target.value))
              }
            />

            <button type="button" onClick={handleIncreaseQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </ManageCartProductAmountContainer>

          <button onClick={handleRemoveItemToCart} type="button">
            <Trash size={16} color="#8047F8" />
            Remover
          </button>
        </ManageCartProductContainer>
      </div>

      <strong>{currencyFormatter(price)}</strong>
    </CartItemContainer>
  )
}
