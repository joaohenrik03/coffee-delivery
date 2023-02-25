import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { EveryoneContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <EveryoneContainer>
        <Outlet />
      </EveryoneContainer>
      <Footer />
    </>
  )
}
