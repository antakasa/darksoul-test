import styled, { keyframes } from 'styled-components';

import {orientation, maxWidth} from '../../lib/isDeviceMobile';

const padding = "0px";

export const MediaContainerAbsolute = styled.div`
    as: ${props => props.tag};
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    object-fit: cover;
    height: 100%;
    background-color: ${props => props.imageBackground};
    opacity: ${props => props.showScrollyMedia ? 1 : 0};
    visibility: ${props => props.showScrollyMedia ? "visible" : "hidden"};
    transition: opacity 500ms ease, visibility 0s linear ${props => props.showScrollyMedia ? "" : "500ms"};
    width: 100%;
`;

/*
export const MediaContainerAbsolute = styled.div`
    as: ${props => props.tag};
    position: absolute;
    left: 0;
    
    height: 100vh;
    max-height: 100vh;
    width: 100%;

    background-color: ${props => props.imageBackground};
    animation-name: ${props => props.showScrollyMedia ? fadeIn(props.currentOpacity) : fadeOut(props.currentOpacity)};
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    opacity: 0;
    z-index: ${props => props.zIndex};

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
`;

*/

export const MediaContainerRelative = styled.div`
    as: ${props => props.tag};
    position: relative;
    color: black;
    font-size: 14px;
    margin: ${props => props.contentInFeature ? "12px auto 0" : "auto"};
    line-height: 1.45;
    max-width: ${props => props.contentInFeature ? "800px" : "650px"};
    width: calc(${props => props.contentInFeature ? props.width + "% - " + padding : "100%"});
    display: block;
    padding: ${props => props.contentInFeature ? "0" : "0 15px"};
    padding-top: ${props => props.contentInFeature ? "16px" : "20px"};
    padding-bottom: ${props => props.contentInFeature ? "16px" : "20px"};
    
`;

export const MediaCredits = styled.p`
    position: absolute;
    right: 10px;
    bottom: calc(10px + 3vh);
    text-align: right;
    color: ${props => props.textColor};
    background-color: ${props => props.textBackground};
    padding: 5px;
`;

export const Text = styled.p`
    margin: auto;
    margin-top: 5px;
    width: ${props => props.elWidth !== undefined ? props.elWidth + "px" : "auto"};
    min-width: 150px;
    padding: 16px;
    border-bottom: ${props => props.emptyElement ? "none" : "1px solid rgb(232, 233, 235)"};
    color: ${props => props.color};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};
    }
`;