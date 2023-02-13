import { FormEvent, useContext, useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { currencyFormatter } from '../../../../utils/CurrencyFormatter'
import { CoffeeCardContainer, CoffeeCardForm } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  imageUrl: string
  name: string
  types: string[]
  price: number
  about: string
}

export function CoffeeCard({
  imageUrl,
  name,
  types,
  price,
  about,
}: CoffeeCardProps) {
  const { addItemToCart } = useContext(CartContext)

  const [selectedQuantity, setSelectedQuantity] = useState(1)

  function handleChangeQuantity(quantity: number) {
    setSelectedQuantity(quantity)
  }

  function handleIncreaseQuantity() {
    setSelectedQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    if (selectedQuantity > 1) {
      setSelectedQuantity((state) => state - 1)
    }
  }

  function handleAddItemToCart(event: FormEvent) {
    event.preventDefault()

    const newCartItemToBeAdded = {
      imageUrl,
      name,
      types,
      price,
      about,
    }

    addItemToCart(newCartItemToBeAdded, selectedQuantity)
    setSelectedQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={imageUrl} alt="" />
      <div>
        {types.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </div>
      <strong>{name}</strong>
      <p>{about}</p>

      <CoffeeCardForm onSubmit={handleAddItemToCart}>
        <label>{currencyFormatter(price)}</label>

        <div>
          <button type="button" onClick={handleDecreaseQuantity}>
            <Minus size={14} weight="bold" />
          </button>

          <input
            type="text"
            value={selectedQuantity}
            onChange={(event) =>
              handleChangeQuantity(Number(event.target.value))
            }
          />

          <button type="button" onClick={handleIncreaseQuantity}>
            <Plus size={14} weight="bold" />
          </button>
        </div>

        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </CoffeeCardForm>
    </CoffeeCardContainer>
  )
}
