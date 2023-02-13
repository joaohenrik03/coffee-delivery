import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 3.2rem;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${(props) => props.theme.white};
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
`

export const HeaderContainerLimiter = styled.div`
  max-width: 1184px;
  height: 10rem;
  margin-inline: auto;

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
