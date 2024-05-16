import {theme} from '../../../../../theme/index';
import styled from 'styled-components';
import Header from '../../../../reusable-ui/Header';

export default function Total({amoutToPay}) {
  return (
    <Header>
      <TotalStyled>
        <span className="title">total</span>
        <span className="amount">{amoutToPay}</span>
      </TotalStyled>
    </Header>
  )
}
 const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 2px;
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P3};
`;

