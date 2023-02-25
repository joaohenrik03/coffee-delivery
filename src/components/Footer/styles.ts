import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 3.2rem;

  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.white};
`

export const FooterContainerLimiter = styled.div`
  max-width: 1184px;
  height: 10rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
    text-align: right;
  }
`
