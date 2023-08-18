import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
  display: flex;
  max-width: 1000px;
  margin-left: 4rem;

  img {
    display: flex;
    height: calc(100vh - 7rem);
  }
`

export const Main =  styled.main`
 min-height: calc(100vh - 7rem);
 display: flex;
 justify-content: center;
 align-items: center;
 `
