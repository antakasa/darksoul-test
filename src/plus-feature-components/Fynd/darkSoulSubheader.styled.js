import styled from 'styled-components';

export const Container = styled.div`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  top: 0;
`;

export const Number = styled.p`
  margin-top: 250px;
  letter-spacing: 2;
`;

export const Header = styled.p`
  letter-spacing: 9;
  font-weight: bold;
  margin-top: -10px; 
`;

export const Symbol = styled.div`
  margin-top: -10px;
  margin-bottom: 20px;
  display: inline-block;
  margin-left: -5px;

  & img {
    width: 100px;
    height: auto;
  }
`;
