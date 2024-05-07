import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';

export default function Title() {
  return (
    <Header>
      <TitleStyled>
        votre commande
      </TitleStyled>
    </Header>
  )
}

const TitleStyled = styled.span`
height: 100%;
display: flex;
align-items: center;
justify-content: space-around;
letter-spacing: 2px;
color: ${theme.colors.primary};
font-size: ${theme.fonts.size.P2};
`;
