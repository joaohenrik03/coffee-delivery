import styled from 'styled-components'
import backgroundImg from '../../../../assets/background.svg'

export const SloganContainer = styled.section`
  padding-block: 10rem;
  background: url(${backgroundImg});

  @media (max-width: 1184px) {
    padding-block: 5rem;
  }
`

export const SloganContent = styled.div`
  max-width: 1120px;
  margin-inline: auto;

  display: flex;
  gap: 5.6rem;
  align-items: center;
  justify-content: center;

  img {
    max-width: 47.6rem;

    @media (max-width: 424px) {
      max-width: 30.6rem;
    }
  }

  @media (max-width: 1184px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    padding-inline: 3.2rem;
  }
`

export const BenefitsContainer = styled.div`
  div {
    max-width: 588px;

    h1 {
      font-size: 4.8rem;
      font-weight: 800;
      line-height: 160%;
    }

    p {
      margin-top: 1.6rem;
      margin-bottom: 6.6rem;

      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  list-style: none;
`

interface BenefitsProps {
  variant: 'yellowDark' | 'gray' | 'yellow' | 'purple'
}

const benefitsVariants = {
  yellowDark: 'rgba(196, 127, 23, 1)',
  gray: 'rgba(87, 79, 77, 1)',
  yellow: 'rgba(219, 172, 44, 1)',
  purple: 'rgba(128, 71, 248, 1)',
} as const

export const Benefits = styled.li<BenefitsProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span:first-child {
    background-color: red;
    border-radius: 50%;
    background-color: ${(props) => benefitsVariants[props.variant]};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem;
  }

  span:last-child {
  }
`
