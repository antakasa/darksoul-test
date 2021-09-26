import styled from 'styled-components';

export const ShareButtonsContainer = styled.div`
    padding-right: 10px;
    text-align: center;
    margin-bottom: 13px;
    position: relative;
    display: ${props => props.isUsingApp ? "none" : "flex"};
`;

export const ShareButton = styled.button`
    width: 48px;
    height: 48px;
    margin: auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;


export const OnlyMobileLink = styled.a`
    display: none;

    @media only screen and (max-width: 700px) {
        display: block;
    }
`;

export const ShareNavi = styled.nav`
    background: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 8px;
    position: absolute;
    top: 48px;
    left: 50%;
    transition: opacity 0.4s ease 0s, transform 0.4s ease 0s, visibility 0.4s ease 0s;
    z-index: 75;
    opacity: 1;
    visibility: ${props => props.showMenu ? "visible" : "hidden"};
    transform: translateY(0px);
`;

export const Ul = styled.ul`
    list-style-type: none;
`;

export const Li = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;

    &:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    &:hover {
        background: rgba(235,235,238,.6);
    }
`;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    color: inherit;
`;

export const SVGandText = styled.div`
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgb(232, 233, 235);
    display: flex;
    padding: 16px 0px;
    margin: 0px 16px;
    width: 140px;
`;

export const SomeText = styled.span`
    color: rgb(0, 0, 0);
    font-size: 12px;
    padding-left: 16px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
`;

export const Path = styled.path`
    
`;