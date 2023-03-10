import { FormEvent, useContext, useState } from 'react'
import { MySwal } from '../..'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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

  const minimumAmount = selectedQuantity === 1 ? 'minimum' : 'notMinimum'

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

    MySwal.fire({
      icon: 'success',
      title: 'Sucesso!',
      text: 'Produto adicionado no carrinho.',
      showConfirmButton: false,
      timer: 1300,
    })
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
        <label>
          R${' '}
          <span>
            {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </span>
        </label>

        <div>
          <button
            type="button"
            onClick={handleDecreaseQuantity}
            className={minimumAmount}
          >
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
