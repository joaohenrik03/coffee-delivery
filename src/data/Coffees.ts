import coffeeTradicionalImage from '../assets/coffeesImages/tradicional.png'
import coffeeAmericanoImage from '../assets/coffeesImages/americano.png'
import coffeeArabeImage from '../assets/coffeesImages/arabe.png'
import coffeeChocolateQuenteImage from '../assets/coffeesImages/chocolate-quente.png'
import coffeeComLeiteImage from '../assets/coffeesImages/com-leite.png'
import coffeeCremosoImage from '../assets/coffeesImages/cremoso.png'
import coffeeCubanoImage from '../assets/coffeesImages/cubano.png'
import coffeeGeladoImage from '../assets/coffeesImages/gelado.png'
import coffeeHavaianoImage from '../assets/coffeesImages/havaiano.png'
import coffeeIrlandesImage from '../assets/coffeesImages/irlandes.png'
import coffeeLatteImage from '../assets/coffeesImages/latte.png'
import coffeeMacchiatoImage from '../assets/coffeesImages/macchiato.png'
import coffeeMochaccinoImage from '../assets/coffeesImages/mochaccino.png'
import coffeeCapuccinoImage from '../assets/coffeesImages/capuccino.png'

export interface Coffee {
  imageUrl: string
  name: string
  types: string[]
  price: number
  about: string
}

export const coffees = <Coffee[]>[
  {
    imageUrl: coffeeTradicionalImage,
    name: 'Expresso Tradicional',
    types: ['Tradicional'],
    price: 9.9,
    about: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    imageUrl: coffeeAmericanoImage,
    name: 'Expresso Americano',
    types: ['Tradicional'],
    price: 9.9,
    about: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    imageUrl: coffeeCremosoImage,
    name: 'Expresso Cremoso',
    types: ['Tradicional'],
    price: 9.9,
    about: 'Café expresso tradicional com espuma cremosa',
  },
  {
    imageUrl: coffeeGeladoImage,
    name: 'Expresso Gelado',
    types: ['Tradicional', 'Gelado'],
    price: 9.9,
    about: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    imageUrl: coffeeComLeiteImage,
    name: 'Café com Leite',
    types: ['Tradicional', 'Com leite'],
    price: 9.9,
    about: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  {
    imageUrl: coffeeLatteImage,
    name: 'Latte',
    types: ['Tradicional', 'Com leite'],
    price: 9.9,
    about: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  {
    imageUrl: coffeeCapuccinoImage,
    name: 'Capuccino',
    types: ['Tradicional', 'Com leite'],
    price: 9.9,
    about: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  {
    imageUrl: coffeeMacchiatoImage,
    name: 'Macchiato',
    types: ['Tradicional', 'Com leite'],
    price: 9.9,
    about: 'Café expresso misturado com um pouco de leite quente e espuma',
  },
  {
    imageUrl: coffeeMochaccinoImage,
    name: 'Mocaccino',
    types: ['Tradicional', 'Com leite'],
    price: 9.9,
    about: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  {
    imageUrl: coffeeChocolateQuenteImage,
    name: 'Chocolate Quente',
    types: ['Especial', 'Com leite'],
    price: 9.9,
    about: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    imageUrl: coffeeCubanoImage,
    name: 'Cubano',
    types: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    imageUrl: coffeeHavaianoImage,
    name: 'Havaiano',
    types: ['Especial'],
    price: 9.9,
    about: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    imageUrl: coffeeArabeImage,
    name: 'Árabe',
    types: ['Especial'],
    price: 9.9,
    about: 'Bebida preparada com grãos de café árabe e especiarias',
  },

  {
    imageUrl: coffeeIrlandesImage,
    name: 'Irlandês',
    types: ['Especial', 'Alcoólico'],
    price: 9.9,
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]
