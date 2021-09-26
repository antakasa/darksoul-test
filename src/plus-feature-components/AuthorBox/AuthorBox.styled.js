import styled from 'styled-components';

export const AuthorBoxContainer = styled.div`
    max-width: 650px;
    padding: 24px 15px;
    margin: auto;
    color: ${props => props.color};

    @media (prefers-color-scheme: dark) {
        color: ${props => props.colorDark};
    }
`;

export const Title = styled.h4`
    font-family: "Yle Black", "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    margin: 0px 0px 16px;

`;

export const AuthorText = styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    line-height: 21px;

`;