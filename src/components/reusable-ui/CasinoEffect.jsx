import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { theme } from '../../theme';

export default function CasinoEffect({count, className}) {
  return (
    <CasinoEffectStyled>
        <TransitionGroup>
            <CSSTransition classNames={'casinoEffect'} key={count} timeout={300}>
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

    span{
        display: inline-block ;
    }
    ::before {
        background: ${theme.colors.background_dark};
    }

    // New value
    .casinoEffect-enter{
        transform: translateY(100%);
    }
    .casinoEffect-enter-active{
        transform: translateY(0%);
        transition: 0.1s;
    }
    // Old value
    .casinoEffect-exit{
        transform: translateY(0%);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .casinoEffect-exit-active{   
        transform: translateY(-100%);
        transition: 0.1s;
    }
`;


