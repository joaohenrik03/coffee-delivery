import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cart } from './components/Cart'
import { CompleteOrder } from './components/CompleteOrder'
import { CheckoutContainerForm } from './styles'

export function Checkout() {
  const navigate = useNavigate()

  function handleConfirmOrder(event: FormEvent) {
    event.preventDefault()

    console.log('Pedido confirmado')
    navigate('/success')
  }

  return (
    <CheckoutContainerForm onSubmit={handleConfirmOrder}>
      <CompleteOrder />
      <Cart />
    </CheckoutContainerForm>
  )
}
