import coffeeTraditionalImage from '../assets/coffeesImages/traditional.png'
import coffeeAmericanImage from '../assets/coffeesImages/american.png'
import coffeeArabImage from '../assets/coffeesImages/arab.png'
import coffeeHotChocolateImage from '../assets/coffeesImages/hot-chocolate.png'
import coffeeWithMilkImage from '../assets/coffeesImages/with-milk.png'
import coffeeCreamyImage from '../assets/coffeesImages/creamy.png'
import coffeeCubanImage from '../assets/coffeesImages/cuban.png'
import coffeeIceImage from '../assets/coffeesImages/ice.png'
import coffeeHawaiianImage from '../assets/coffeesImages/hawaiian.png'
import coffeeIrishImage from '../assets/coffeesImages/irish.png'
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
    imageUrl: coffeeTraditionalImage,
    name: 'Expresso Tradicional',
    types: ['Tradicional'],
    price: 9.9,
    about: 'O tradicional café feito com água quente e grãos moídos',
  },
  {
    imageUrl: coffeeAmericanImage,
    name: 'Expresso Americano',
    types: ['Tradicional'],
    price: 9.9,
    about: 'Expresso diluído, menos intenso que o tradicional',
  },
  {
    imageUrl: coffeeCreamyImage,
    name: 'Expresso Cremoso',
    types: ['Tradicional'],
    price: 9.9,
    about: 'Café expresso tradicional com espuma cremosa',
  },
  {
    imageUrl: coffeeIceImage,
    name: 'Expresso Gelado',
    types: ['Tradicional', 'Gelado'],
    price: 9.9,
    about: 'Bebida preparada com café expresso e cubos de gelo',
  },
  {
    imageUrl: coffeeWithMilkImage,
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
    imageUrl: coffeeHotChocolateImage,
    name: 'Chocolate Quente',
    types: ['Especial', 'Com leite'],
    price: 9.9,
    about: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  {
    imageUrl: coffeeCubanImage,
    name: 'Cubano',
    types: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.9,
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  {
    imageUrl: coffeeHawaiianImage,
    name: 'Havaiano',
    types: ['Especial'],
    price: 9.9,
    about: 'Bebida adocicada preparada com café e leite de coco',
  },
  {
    imageUrl: coffeeArabImage,
    name: 'Árabe',
    types: ['Especial'],
    price: 9.9,
    about: 'Bebida preparada com grãos de café árabe e especiarias',
  },

  {
    imageUrl: coffeeIrishImage,
    name: 'Irlandês',
    types: ['Especial', 'Alcoólico'],
    price: 9.9,
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
]
