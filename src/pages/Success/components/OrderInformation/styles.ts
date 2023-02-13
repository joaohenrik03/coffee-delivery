import styled from 'styled-components'

export const OrderInformationContainer = styled.div`
  text-align: left;

  strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 3.2rem;
    font-family: 'Baloo 2', cursive;
  }

  & > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;

    margin-bottom: 4rem;
  }

  & > strong,
  p {
    line-height: 2.6rem;
  }
`

export const OrderInformationContent = styled.div`
  padding: 4rem;
  border: 1px solid;

  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 6px 36px 3px 36px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
`

interface InformationProps {
  variant: 'purple' | 'yellow' | 'yellowDark'
}

const INFORMATION_VARIANT = {
  purple: '#8047F8',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
}

export const Information = styled.li<InformationProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => INFORMATION_VARIANT[props.variant]};
    border-radius: 50%;

    padding: 0.8rem;
  }

  svg {
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 700;
    }
  }
`
