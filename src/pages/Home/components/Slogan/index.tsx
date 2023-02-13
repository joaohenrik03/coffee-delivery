import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import {
  Benefits,
  BenefitsContainer,
  BenefitsList,
  SloganContainer,
  SloganContent,
} from './styles'
import coffeeBackgroundImage from '../../../../assets/coffee-background.png'

export function Slogan() {
  return (
    <SloganContainer>
      <SloganContent>
        <BenefitsContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <BenefitsList>
            <Benefits variant="yellowDark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </Benefits>
            <Benefits variant="gray">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </Benefits>
            <Benefits variant="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <span>Entrega rápida e rastreada</span>
            </Benefits>
            <Benefits variant="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <span>O café chega fresquinho até você</span>
            </Benefits>
          </BenefitsList>
        </BenefitsContainer>

        <img src={coffeeBackgroundImage} alt="" />
      </SloganContent>
    </SloganContainer>
  )
}
