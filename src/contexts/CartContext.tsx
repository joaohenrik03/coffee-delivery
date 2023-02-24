import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../data/Coffees'

interface CartItemListType {
  imageUrl: string
  name: string
  types: string[]
  price: number
  about: string
  selectedQuantity: number
}

interface CartContextType {
  cartList: CartItemListType[]
  amountOfProductsInCart: number
  totalValueCartItems: number
  addItemToCart: (
    newCartItemToBeAdded: Coffee,
    newSelectedQuantity: number,
  ) => void
  removeItemToCart: (nameItemToBeRemoved: string) => void
  updateItemToCart: (
    nameItemToUpdate: string,
    newSelectedQuantity: number,
  ) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartList, setCartList] = useState<CartItemListType[]>(() => {
    const cartListInLocalStorage = localStorage.getItem(
      '@coffee-delivery:cart-list-1.0.0',
    )

    if (cartListInLocalStorage) {
      return JSON.parse(cartListInLocalStorage)
    } else {
      return []
    }
  })

  const [amountOfProductsInCart, setAmountOfProductsInCart] = useState(0)

  const [totalValueCartItems, setTotalValueCartItems] = useState(0)

  useEffect(() => {
    const cartListJson = JSON.stringify(cartList)

    localStorage.setItem('@coffee-delivery:cart-list-1.0.0', cartListJson)
  }, [cartList])

  useEffect(() => {
    const newAmountOfProductsInCart = cartList.reduce(
      (accumulator: number, currentElement: CartItemListType) => {
        accumulator += currentElement.selectedQuantity
        return accumulator
      },
      0,
    )

    setAmountOfProductsInCart(newAmountOfProductsInCart)

    const newTotalValueCartItems = cartList.reduce(
      (accumulator: number, currentElement: CartItemListType) => {
        accumulator += currentElement.selectedQuantity * currentElement.price
        return accumulator
      },
      0,
    )

    setTotalValueCartItems(newTotalValueCartItems)
  }, [cartList])

  function addItemToCart(
    newCartItemToBeAdded: Coffee,
    newSelectedQuantity: number,
  ) {
    const newItem = {
      imageUrl: newCartItemToBeAdded.imageUrl,
      name: newCartItemToBeAdded.name,
      types: newCartItemToBeAdded.types,
      price: newCartItemToBeAdded.price,
      about: newCartItemToBeAdded.about,
      selectedQuantity: newSelectedQuantity,
    }

    const currentCartItemIndex = cartList.findIndex((currentCartItem) => {
      return currentCartItem.name === newCartItemToBeAdded.name
    })

    if (currentCartItemIndex >= 0) {
      const tempCartList = [...cartList]
      tempCartList[currentCartItemIndex].selectedQuantity =
        tempCartList[currentCartItemIndex].selectedQuantity +
        newSelectedQuantity

      setCartList(tempCartList)
    } else {
      setCartList((state) => [...state, newItem])
    }
  }

  function removeItemToCart(nameItemToBeRemoved: string) {
    const newCartList = cartList.filter((item) => {
      return item.name !== nameItemToBeRemoved
    })

    setCartList(newCartList)
  }

  function updateItemToCart(
    nameItemToUpdate: string,
    newSelectedQuantity: number,
  ) {
    const cartItemIndex = cartList.findIndex((item) => {
      return item.name === nameItemToUpdate
    })

    if (cartItemIndex >= 0) {
      const tempCartList = [...cartList]
      tempCartList[cartItemIndex].selectedQuantity = newSelectedQuantity
      setCartList(tempCartList)
    }
  }

  function clearCart() {
    setCartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        amountOfProductsInCart,
        totalValueCartItems,
        addItemToCart,
        removeItemToCart,
        updateItemToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
