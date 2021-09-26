import styled, { keyframes } from 'styled-components';
import {maxWidth, orientation} from '../../../lib/isDeviceMobile';


/*
export const VideoTagAbsoluteDesktop = styled.video`
    width: 100%;
    height: ${props => props.height};
    position: absolute;
    left: 0;
    max-width: 100%;
    max-height: ${props => props.maxHeight};
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPositionDesktop}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}){
        display: none;
    }

    
`;

*/

/*

export const VideoTagAbsoluteMobile = styled.video`
    width: 100%;
    position: absolute;
    left: 0;
    height: ${props => props.height};
    max-width: 100%;
    max-height: ${props => props.maxHeight};
    display: none;
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPositionMobile !== undefined ? props.objectPositionMobile : "50"}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        display: block;
    }
`;
*/

export const VideoTagAbsoluteDesktop = styled.video`
    width: 100%;
    position: absolute;
    height: ${props => props.height};
    max-width: 100%;
    max-height: ${props => props.maxHeight};
    top: ${props => props.top};
    transform: translateY(-50%);
    object-fit: ${props => props.objectFit};
    display: inline;
    object-position: ${props => props.objectPositionDesktop}% 50%;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}){
        display: none;
    }

    
`;

export const VideoTagAbsoluteMobile = styled.video`
    width: 100%;
    position: absolute;
    height: ${props => props.height};
    top: 50%;
    transform: translateY(-50%);    
    object-fit: cover;
    display: none;
    object-position: ${props => props.objectPositionMobile}% 50%;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        display: block;
    }
`;


export const VideoTagRelativeDesktop = styled.video`
    position: relative;
    
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    display: block;
    margin: 12px auto 0;

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}){
        display: none;
    }
`;

export const VideoTagRelativeMobile = styled.video`
    position: relative;
    max-width: 100%;
    width: auto;
    display: none;
    margin: 12px auto 0;
    max-height: 90vh;
    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}){
        display: block;
    }
`;

export const AudioButton = styled.button`
    -webkit-appearance: none;
    position: absolute;
    top: ${props => props.audioIconPosition !== undefined ? props.audioIconPosition : !props.relative ? "5px" : "35px"};
    right: ${props => props.audioIconPositionRight !== undefined && props.relative ? "calc(50% - " + props.audioIconPositionRight + ")" : "5px"};;

    background: transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px;
    cursor: pointer;
    z-index:2;
`;

export const PlayButton = styled.button`
    top: ${props => props.playIconPosition !== undefined ? props.playIconPosition + "px" : "calc(50% - 50px)"};    
    left: calc(50% - 50px);
    position: absolute;
    background: transparent;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    -webkit-appearance: none;
    z-index:2;

`;