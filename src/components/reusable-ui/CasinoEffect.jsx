import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { casinoAnimation } from '../../theme/animations';
import { theme } from '../../theme';

export default function CasinoEffect({count, className, operator}) {
  return (
    <CasinoEffectStyled>
        <TransitionGroup>
            <CSSTransition classNames={'casinoAnimation'} key={count} timeout={300} operator={operator ? operator : null}>
                <span className={className}>{operator} {count}</span>
            </CSSTransition>
        </TransitionGroup>
    </CasinoEffectStyled>
  )
}
const CasinoEffectStyled = styled.div`
    position: relative;
    overflow-y: hidden;
    width: 66%;
    text-align: center;

    ${casinoAnimation}
    
    ::before {
      background: transparent !important;
    }
`;


