import styled from 'styled-components';
import {orientation, maxWidth} from '../../../lib/isDeviceMobile';


export const MobileSource = styled.source`
    position: relative;
    width: 100%;
`;

/*
export const DesktopImgAbs = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    height: ${props => props.height};
    object-fit: ${props => props.objectFit};
    object-position: ${props => props.objectPosition[0] !== undefined ? props.objectPosition[0] : "50"}% 50%;

    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

    @media only screen and (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        object-position: ${props => props.objectPosition[1] !== undefined ? props.objectPosition[1] : "50"}% 50%;
    }
`;
*/

export const DesktopImgAbs = styled.img`
    position: absolute;
    width: 100%;
    object-fit: ${props => props.objectFit};
    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};
    height: ${props => props.height};
    top: ${props => props.top};
    left: ${props => props.left};
    transform: translateY(-50%);
    object-position: ${props => props.objectPosition[0] !== undefined ? props.objectPosition[0] : "50"}% 50%;
    @media only screen and (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        object-position: ${props => props.objectPosition[1] !== undefined ? props.objectPosition[1] : "50"}% 50%;
    }

`;

export const DesktopImgRel = styled.img`
    position: relative;
    max-height: 90vh;
    width: auto;
    max-width: 100%;
    display: block;
    margin: auto;
`;