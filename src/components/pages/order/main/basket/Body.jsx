import {theme} from '../../../../../theme/index';
import styled from 'styled-components';

export default function Body({products}) {
  return (
    <BodyStyled>
        { products
            ? <span className='emptyMessage'>Votre panier est plein</span>
            : <span className='emptyMessage'>Votre panier est vide</span>
        } 
    </BodyStyled>
  )
}
const BodyStyled = styled.span`
    background-color: ${theme.colors.background_white};
    flex: 1;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);

    .emptyMessage {
        font-size: ${theme.fonts.size.P3};
        color: ${theme.colors.greyDark};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;