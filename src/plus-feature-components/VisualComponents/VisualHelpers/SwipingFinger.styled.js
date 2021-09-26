import styled, { keyframes } from 'styled-components';

const showAnimation = keyframes`
    0% { transform: translateY(0px) }
    50% { transform: translateY(10px) }
    100% { transform: translateY(0px) }
`


const hideAnimation = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; } 
`

export const SVGel = styled.svg`
    display: block;
    margin: auto;
    transform: rotate(-45deg);
`;

export const IconAndText = styled.div`
    position: absolute;
    z-index: 2;
    top: 45vh;
    transition: opacity 500ms ease;
    width: 100%;
    animation-name: ${props => props.showGuide ? showAnimation : hideAnimation};
    animation-iteration-count: ${props => props.showGuide ? "infinite" : "1"};
    animation-fill-mode: forwards;
    animation-duration: 1000ms;
    animation-timing-function: cubic-bezier(0.550, 0.085, 0.680, 0.530);
    opacity: 1;
`;

export const InfoText = styled.p`
    color: ${props => props.color};
    text-align: center;
`;
