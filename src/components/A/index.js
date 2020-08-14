import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const A = styled.a`
  color: ${theme.colors.textSecondary};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #aaa;
  }
`
