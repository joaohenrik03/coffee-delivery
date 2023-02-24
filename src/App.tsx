import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { PaymentMethodProvider } from './contexts/PaymentMethod'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <PaymentMethodProvider>
            <Router />
            <GlobalStyle />
          </PaymentMethodProvider>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
