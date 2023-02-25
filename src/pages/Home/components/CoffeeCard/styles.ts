import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  max-width: 256px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 3px 36px;

  img {
    height: 12rem;
    width: 12rem;

    object-fit: cover;

    margin-top: -4rem;
    margin-bottom: 1.2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    flex-wrap: wrap;

    span {
      border-radius: 100px;
      background-color: ${(props) => props.theme['yellow-light']};

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme['yellow-dark']};
      text-transform: uppercase;
      font-size: 1rem;
      line-height: normal;
      font-weight: 700;

      padding: 0.4rem 0.8rem;
      margin-bottom: 1.6rem;
    }
  }

  strong {
    font-size: 2rem;
    line-height: 160%;

    margin-bottom: 0.8rem;
  }

  p {
    text-align: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-label']};

    margin-bottom: 3.3rem;
  }
`

export const CoffeeCardForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  label {
    font-size: 1.4rem;

    span {
      font-family: 'Baloo 2', cursive;
      font-size: 2.4rem;
      color: ${(props) => props.theme['base-text']};
      line-height: normal;

      margin-right: 1.5rem;
    }
  }

  & > div {
    width: 7.2rem;
    height: 3.8rem;
    padding: 0.8rem;

    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    display: flex;
    gap: 0.4rem;

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
      border: 0;
      background-color: ${(props) => props.theme['base-button']};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        svg {
          color: ${(props) => props.theme['purple-dark']};
        }
      }

      &.minimum {
        cursor: not-allowed;
      }

      &.notMinimum {
        cursor: pointer;
      }
    }
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.theme['purple-dark']};
    transition: 0.2s;
    border: 0;

    padding: 0.8rem;
    border-radius: 6px;

    color: ${(props) => props.theme['base-card']};

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
