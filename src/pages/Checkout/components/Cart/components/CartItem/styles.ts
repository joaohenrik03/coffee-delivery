import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  align-items: flex-start;

  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  list-style: none;

  img {
    height: 6.4rem;
    width: 6.4rem;
    margin-right: 2rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.8rem;
  }

  strong {
    margin-left: 5rem;
  }
`

export const ManageCartProductContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  & > button {
    border: 0;
    padding: 0.8rem;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    text-transform: uppercase;
    font-size: 1.2rem;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
  }
`

export const ManageCartProductAmountContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 0.4rem;
  padding: 0.8rem;

  input {
    width: 2rem;

    border: 0;
    background: transparent;

    display: flex;
    align-items: center;

    text-align: center;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: 0;

    svg {
      color: ${(props) => props.theme.purple};
    }

    &:hover {
      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
