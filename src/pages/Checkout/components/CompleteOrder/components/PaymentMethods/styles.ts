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

export interface PaymentMethodInputProps {
  customInput: string
}

export const PaymentMethodInput = styled.div<PaymentMethodInputProps>`
  font-size: 1.2rem;

  position: relative;

  width: 17rem;
  padding: 1.6rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['base-button']};
  overflow: hidden;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  &.${(props) => props.customInput} {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }

  input[type='radio'] {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    -webkit-appearance: none;
    cursor: pointer;
  }
`
