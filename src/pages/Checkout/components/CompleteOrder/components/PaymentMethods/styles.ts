import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 4rem;

  @media (max-width: 374px) {
    padding: 2rem;
  }

  header {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 3.2rem;

    span {
      color: ${(props) => props.theme.purple};
    }

    h3 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }

    p {
      font-size: 1.4rem;
    }
  }
`

export const FormOfPaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`
