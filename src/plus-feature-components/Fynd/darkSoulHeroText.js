import React from 'react';
import * as s from './darkSoulHeroText.styled.js';

function DarkSoulHeroText(props) {
  return (
    <s.FullWidthContainer>

       <s.Container isMobile={props.isMobile}>
       <s.Symbol isMobile={props.isMobile}>
        <img src={"https://lusi-dataviz.test.ylestatic.fi/2020-11-featurepohja/fynd/kc-logo.png"}/>
      </s.Symbol>
           <h1 dangerouslySetInnerHTML={{__html: props.text}}></h1></s.Container>
    </s.FullWidthContainer>
  );
}

export default DarkSoulHeroText
