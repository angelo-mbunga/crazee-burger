import {css, keyframes} from 'styled-components';
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
export const fadeLeftAmimation = css`
    .fadeLeftAmimation-enter {
        opacity: 0.01;
        transform: translateX(120px);
    }
    .fadeLeftAmimation-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: all 300ms ease-out;
    } 
    .fadeLeftAmimation-exit {
        opacity: 1;
        transform: translateX(0);
    }
    .fadeLeftAmimation-exit-active {
        opacity: 0.01;
        transition: all 300ms ease-out;
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
export const fadeRightAnimation = keyframes`
    0% {
        position: absolute;
        z-index: -1;
        opacity: 0;
        transform: translateX(100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`
export const fadeInFromTop = keyframes`
    0% {
        position: absolute;
        z-index: -1;
        opacity: 0;
        transform: translateY(-40%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`