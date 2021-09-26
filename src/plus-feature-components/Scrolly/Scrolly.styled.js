import styled from 'styled-components';


export const ScrollyContainer = styled.div`
    width: ${props => props.widthProperty};
    position: relative;
    margin-top: 24px;
    margin-bottom: 24px;
    transform: translateX(-50%);
    left: 50%;
    will-change: height;
    display: inline-block;
   
`;

export const StickyImageContainer = styled.div`
    position: sticky;
    height: ${props => props.usingApp ? props.height + "px" : props.safariOnIOS && !props.usingApp ?  "calc(" + props.height + "px - 50px)" : "calc(" + props.height + "px - 50px)"};
    top: ${props => props.usingApp ? "0px" : "50px"};
    display: block;
    overflow: hidden;
   
`;

/*
export const ScrollyContainer = styled.div`
    width: ${props => props.widthProperty};
    position: relative;
    margin-top: 24px;
    margin-bottom: 24px;
    left: 0;
    will-change: scroll-position;
    transition: height 1000000s ease;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
`;
*/


/*
export const StickyImageContainer = styled.div`
    
    position: sticky;
    left: 0;
    min-height: calc(103vh);
    top: ${props => props.top}px;
    display: block;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;

`;
*/

export const TextsContainer = styled.div`
    
`;

export const SingleTextContainer = styled.div`
    position: relative;
    text-align: center;
    background-color: ${props => props.background};
    color:  ${props => props.color};
    width: 30%;
    margin: ${props => props.marginTop} auto auto;
    padding: 15px;
    width: 80vw;
    max-width: 500px;
    line-height: 1.5em;
    font-size: 17px;
    box-shadow: 1px 2px 4px rgba(0,0,0,.3);
    z-index: 2;
    -webkit-transform: translateZ(0);
    opacity: ${props => props.opacity};
    visiblity: ${props => props.visiblity};

    & h4 {
        margin-bottom: 10px;
    }

`;