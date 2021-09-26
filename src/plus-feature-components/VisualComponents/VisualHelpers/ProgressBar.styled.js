import styled, { keyframes } from 'styled-components';

export const Bar = styled.div`
    width: ${props => props.currentProgress};
    background-color: ${props => props.color};
    height: 3px;
    position: fixed;
    z-index: 100;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    width: 500ms ease-in-out;
`;