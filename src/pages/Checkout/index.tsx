/* eslint-disable no-unused-vars */
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { Cart } from './components/Cart'
import { CompleteOrder } from './components/CompleteOrder'
import { CheckoutContainerForm } from './styles'

const PAYMENT_VALUES = ['credit', 'debt', 'money'] as const

const confirmeOrderValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  road: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().min(1, 'Informe o complemento'),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe o Estado'),
  selectedPaymentMethod: zod.enum(PAYMENT_VALUES),
})

export type ConfirmeOrderData = zod.infer<typeof confirmeOrderValidationSchema>

export function Checkout() {
  const confirmeOrderForm = useForm<ConfirmeOrderData>({
    resolver: zodResolver(confirmeOrderValidationSchema),
    defaultValues: {
      cep: '',
      road: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      selectedPaymentMethod: 'credit',
    },
  })

  const { handleSubmit } = confirmeOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmeOrderData) {
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
