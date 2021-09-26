import React from 'react';
import * as s from './BeanEater.styled.js';

function BeanEater(props) {
    const { path } = props;
    return (
        <s.BeanImg src={path} />
    )
}

export default BeanEater;