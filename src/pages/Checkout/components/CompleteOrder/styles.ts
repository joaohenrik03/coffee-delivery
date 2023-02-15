import styled from 'styled-components'

export const CompleteOrderContainer = styled.section`
  width: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: 1.8rem;
    line-height: 160%;
  }
`

export const AddressContainer = styled.div`
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
      color: ${(props) => props.theme.yellow};
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

const HomeDataEntryBase = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    background-color: ${(props) => props.theme['base-button']};
    border: 0;
    border-radius: 4px;

    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;

    padding: 1.2rem;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: 1.4rem;
    }

    &:first-child {
      width: 100%;
      max-width: 20rem;
    }
  }
`

export const HomeDataEntryContainer = styled(HomeDataEntryBase)`
  input:first-child {
    width: 100%;
    max-width: 20rem;
  }

  input:last-child {
    flex: 1;
  }
`

export const HomeLocationDataEntryContainer = styled(HomeDataEntryBase)`
  input:first-child {
    width: 100%;
    max-width: 20rem;
  }

  input + input {
    width: 100%;
  }

  input:last-child {
    width: 6rem;
  }
`

export const PaymentContainer = styled.div`
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

  button {
    font-size: 1.2rem;

    width: 17rem;
    padding: 1.6rem;

    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['base-button']};

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.2rem;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
