import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1184px;
  margin-inline: auto;
  padding: 3.2rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  a {
    line-height: normal;
    font-size: 1.4rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem;
    border-radius: 6px;

    & {
      position: relative;

      color: ${(props) => props.theme['yellow-dark']};

      background-color: ${(props) => props.theme['yellow-light']};
    }
  }
`

export const StoreLocation = styled.div`
  line-height: normal;
  font-size: 1.4rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  border-radius: 6px;

  color: ${(props) => props.theme['purple-dark']};

  background-color: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`

export const ProductCounterInCart = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -1rem;
  right: -1rem;

  color: ${(props) => props.theme.white};
  font-weight: 700;

  height: 2rem;
  width: 2rem;

  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
`
