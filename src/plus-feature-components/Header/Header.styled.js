import styled from 'styled-components';
import {orientation, maxWidth} from '../../lib/isDeviceMobile';

export const HeaderContainer = styled.div`
    position: relative;
`;

export const LeadContainer = styled.div`
    max-width: 800px;
    background-color: ${props => props.backgroundColor};
    position: relative;
    margin: auto;
    margin-top: -75px;
    padding: 16px 0px 16px;

    & strong {
        font-weight: 700;
    }

    @media (prefers-color-scheme: dark) {
        background-color: ${props => props.backgroundColorDark};
    }
`;

export const HeaderTitle = styled.h1`
    position: relative;
    text-align: center;
    margin: 8px auto;
    font-size: ${props => props.fontSizing[0]};
    font-weight: 900;
    line-height: 1.25em;
    width: 90%;
    font-family: "Yle Black", "Open Sans", sans-serif;
    color: ${props => props.color};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};;
    }

    @media (max-width: ${maxWidth}px) and (orientation: ${orientation}) {
        font-size: ${props => props.fontSizing.length > 1 ? props.fontSizing[1] : props.fontSizing[0]};
    }
    
`;

export const Tag = styled.h5`
    font-size: 14px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => props.color};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};
    }
`;

export const TagLink = styled.a`
    text-decoration: none;
    color: inherit;  
`;

export const HeaderLead = styled.h4`
    font-size: 20px;
    text-align: center;
    padding: 0px;
    margin: 8px auto;
    font-weight: 300;
    line-height: 30px;
    width: 90%;
    color: ${props => props.color};


    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};
    }
`;

export const PublishedTextContainer = styled.div`
    color: #131415;
    font-size: 14px;
    line-height: 21px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    text-align: center;
    margin: 16px auto 8px auto;
    color: ${props => props.color};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};
    }
`;