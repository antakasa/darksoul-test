import React from 'react';
import * as s from './darkSoulSubheader.styled';

function DarkSoulSubheader(props) {
  const { number, header } = props;
  return (
    <s.Container>
      <s.Number>{number}</s.Number>
      <s.Header>{header}</s.Header>
      <s.Symbol>
        <img src={"https://lusi-dataviz.ylestatic.fi/2020-11-featurepohja/fynd/dcvaliotsikkosymboli.png"} />
      </s.Symbol>
    </s.Container>
  );
}

export default DarkSoulSubheader;
