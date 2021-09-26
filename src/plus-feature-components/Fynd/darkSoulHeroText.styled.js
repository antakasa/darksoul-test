import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  font-weight: bold;
  max-width: 600px;
  height: 100%;
  & h1 {
    line-height: 1.1;
    font-size: 40px;
    font-weight: bold;
    font-family: 'EB Garamond';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    text-align: center;
    & span {
      display: block;
   }
    ${props => !props.isMobile &&
    `
    font-size: 5em;
    left: 50%;
    transform: translate(-50%, -50%);
    `}
  }
`;

export const FullWidthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Symbol = styled.div`
  z-index: 2;
  margin-bottom: 50px;
  display: block;
  & img {
    height: 5vh;
    ${props => props.isMobile ? "padding-top: 12vh" : "padding-top: 14px"}
  }
`;