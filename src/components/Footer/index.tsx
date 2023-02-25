import { FooterContainer, FooterContainerLimiter } from './styles'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContainerLimiter>
        <img
          src={logoCoffeeDelivery}
          alt="Copo de café roxo com um desenho de foguete no meio"
        />

        <p>&copy; 2023 CoffeeDelivery. Todos os direitos reservados</p>
      </FooterContainerLimiter>
    </FooterContainer>
  )
}
