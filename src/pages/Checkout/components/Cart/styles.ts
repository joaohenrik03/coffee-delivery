import styled from 'styled-components'

export const CartContainer = styled.section`
  h2 {
    font-size: 1.8rem;
    line-height: 160%;
  }
`

export const CartContent = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  padding: 4rem;
  margin-top: 1.5rem;
`

export const CartItemListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`
