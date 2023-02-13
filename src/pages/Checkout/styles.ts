import styled from 'styled-components'

export const CheckoutContainerForm = styled.form`
  max-width: 1120px;
  padding-top: 4rem;
  padding-inline: 3.2rem;
  margin-inline: auto;
  margin-bottom: 16rem;

  display: grid;
  grid-template-columns: 1fr 44.8rem;
  gap: 3.2rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 30.5rem;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
`
