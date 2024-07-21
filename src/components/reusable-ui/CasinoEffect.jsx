import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { casinoAnimation } from '../../theme/animations';

export default function CasinoEffect({count, className}) {
  return (
    <CasinoEffectStyled>
        <TransitionGroup>
            <CSSTransition classNames={'casinoAnimation'} key={count} timeout={300}>
                <span className={className}>{count}</span>
            </CSSTransition>
        </TransitionGroup>
    </CasinoEffectStyled>
  )
}
const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    width: 33%;
    text-align: center;

    ${casinoAnimation}
`;


