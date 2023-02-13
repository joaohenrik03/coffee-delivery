import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 1120px;
  margin-inline: auto;
  padding: 8rem 3.2rem;

  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`
