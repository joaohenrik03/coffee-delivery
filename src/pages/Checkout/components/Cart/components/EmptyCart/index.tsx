import { CircleWavyWarning } from 'phosphor-react'
import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h2>
        <CircleWavyWarning size={24} color="#35313d" weight="bold" />
        Ops, carrinho vazio...
      </h2>
      <p>Não há itens em seu carrinho de compras.</p>
    </EmptyCartContainer>
  )
}
