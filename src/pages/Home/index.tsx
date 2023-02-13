import { coffees } from '../../data/Coffees'
import { Slogan } from './components/Slogan'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeesContainer, CoffeesList } from './styles'

export function Home() {
  return (
    <>
      <Slogan />

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <CoffeesList>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.name}
                imageUrl={coffee.imageUrl}
                name={coffee.name}
                types={coffee.types}
                price={coffee.price}
                about={coffee.about}
              />
            )
          })}
        </CoffeesList>
      </CoffeesContainer>
    </>
  )
}
