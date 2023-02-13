import styled from 'styled-components'

export const ConfineOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:first-child {
      font-size: 1.4rem;
    }

    strong {
      font-size: 2rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    padding: 1.2rem;
    margin-top: 1.2rem;

    border: 0;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 6px;
    transition: 0.2s;

    color: ${(props) => props.theme.white};
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 700;

    &:hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
