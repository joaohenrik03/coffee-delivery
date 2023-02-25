import styled from 'styled-components'

export interface PaymentMethodInputProps {
  customInput: string
}

export const PaymentMethodInputContainer = styled.div<PaymentMethodInputProps>`
  font-size: 1.2rem;

  position: relative;

  width: 16rem;
  height: 5rem;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: left;

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
