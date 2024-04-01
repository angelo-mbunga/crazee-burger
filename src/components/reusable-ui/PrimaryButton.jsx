import styled from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label, className, onClick}) {
  return (
    <PrimaryButtonStyled>
        <button className={className} onClick={onClick}>{label}</button>
    </PrimaryButtonStyled>
  )
}
const PrimaryButtonStyled = styled.div `
  display: flex;
  position: relative;
  margin: 12px auto;
  width: 66%;

  .login-page-cta {
      width: 100%;
      border-radius: ${theme.borderRadius.round};
      border: none;
      padding: 16px;
      font-size: ${theme.fonts.size.P0};
      text-overflow: ellipsis;
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
  }
  .login-page-cta:hover {
      cursor: pointer;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      outline: 2px solid ${theme.colors.primary};
      outline-offset: -2px;
  }
`