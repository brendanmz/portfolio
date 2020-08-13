import styled from 'styled-components/macro'
import { theme } from '../../styles/theme'

export const AnchorButton = styled.a`
  color: ${theme.colors.textPrimary};
  display: block;
  text-align: center;
  text-decoration: none;
  border: 1px solid;
  padding: 1rem;
  margin: 2.7rem 0;
  width: 11.75rem;
  font-size: 0.8125rem;
  font-weight: bold;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${theme.colors.textPrimary};
    color: #000;
    border: 1px solid ${theme.colors.textPrimary};
  }
`
