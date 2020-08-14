import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const StyledFooter = styled.footer`
  color: ${theme.colors.textSecondary};
  padding: 3rem 0 1rem;
  border-top: 1px solid #b0b0b0;

  & > * {
    padding-right: 0.7rem;
  }
`
