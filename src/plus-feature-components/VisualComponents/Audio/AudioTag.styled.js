import styled from 'styled-components';

export const Audio = styled.audio`
    user-select: none;
`;

export const Controls = styled.div`
    position: relative;
    display: flex;
    width: calc(100%);
    height: 60px;
    max-width: 650px;
    margin: 12px auto 0;
    background-color: #f5f5f5;
    padding: 0 8px;

`;

export const Button = styled.button`
    background-color: #f5f5f5;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    display: block;
    padding: 0 8px;

`;

export const DurationText = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 60px;
    padding-right: 8px;
    user-select: none;
`;

export const DurationBars = styled.div`
    width: fit-content;
    flex-grow: 100;
    margin: 27px 8px 0px 8px;
    position: relative;
`;

export const DurationBar = styled.div`
    background-color: ${props => props.color};
    height: 3px;
    position: absolute;
    width: ${props => props.width};
`;

export const DurationHandle = styled.div`
    background-color: black;
    height: 16px;
    width: 16px;
    border-radius: 100%;
    position: absolute;
    left: ${props => props.left};
    margin-top: -6px;
    cursor: pointer;

`;


export const SVG = styled.svg`
    vertical-align: middle;
    margin-left: 5px;
    transform: ${props => props.visible ? "rotate(180deg)" :  "rotate(0deg)"};

`;