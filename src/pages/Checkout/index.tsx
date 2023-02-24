import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Cart } from './components/Cart'
import { CompleteOrder } from './components/CompleteOrder'
import { CheckoutContainerForm } from './styles'

export function Checkout() {
  const confirmeOrderForm = useForm()
  const { handleSubmit } = confirmeOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: any) {
    console.log(data)
    console.log('Pedido confirmado')
    navigate('/success', {
      state: data,
    })
  }

  return (
    <CheckoutContainerForm onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...confirmeOrderForm}>
        <CompleteOrder />
        <Cart />
      </FormProvider>
    </CheckoutContainerForm>
  )
}
