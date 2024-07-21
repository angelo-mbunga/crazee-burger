import {css} from 'styled-components';
import { theme } from '.';

export const fadeUpAmimation = css`
    ::before {
        background: transparent !important;
    }
    .fadeUpEffect-appear {
        opacity: 0.1;
        transform: translateY(100%);
    }
    .fadeUpEffect-appear-active {
        opacity: 1;
        transform: translateY(0);
        transition: all 500ms;
    } 
`
export const casinoAnimation = css`
    span{
        display: inline-block ;
    }
    ::before {
        background: ${theme.colors.background_dark} !important;
    }
    // New value
    .casinoAnimation-enter{
        transform: translateY(100%);
    }
    .casinoAnimation-enter-active{
        transform: translateY(0%);
        transition: 0.1s;
    }
    // Old value
    .casinoAnimation-exit{
        transform: translateY(0%);
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .casinoAnimation-exit-active{   
        transform: translateY(-100%);
        transition: 0.1s;
    }
`
export const fadeLeftRightAmimation = css`
    .fadeLeftRightAnimation-enter{
        transform: translateX(100px);
        opacity: 0%; 
    }
    .fadeLeftRightAnimation-enter-active{
        transform: translateX(0px);
        opacity: 100%; 
        transition: 0.4s;
        ::before  {
        background: ${theme.colors.background_white};
        }
    }
  
    .fadeLeftRightAnimation-appear{
        transform: translateX(100px);
        opacity: 0%; 
    }
    .fadeLeftRightAnimation-appear-active{
        transform: translateX(0px);
        opacity: 100%; 
        transition: 0.4s;
        ::before  {
        background: ${theme.colors.background_white};
        }
    }

    .fadeLeftRightAnimation-exit{
        transform: translateX(0px);
        opacity: 100%; 
    }
    .fadeLeftRightAnimation-exit-active{
        transform: translateX(-100px);
        opacity: 0%; 
        transition: 0.4s;
        ::before  {
        background: ${theme.colors.background_white};
        }
    } 
`