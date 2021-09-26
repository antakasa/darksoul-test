import React from 'react';
import * as s from './AuthorBox.styled';
import Markdown from 'markdown-to-jsx';

export default function AuthorBox(props){

    const  { title, authorText } = props;
    const cleanAuthorText = authorText;

    let colors ={};
    if(typeof window === "undefined"){
        colors.plusFeature = {
            dark: { bg: "black", color: "white", color2: "white" },
            light: { bg: "black", color: "white", color2: "white" },
        }
    } else {
        colors.plusFeature = window.plusFeature
    }

    return (
        <s.AuthorBoxContainer
            color={colors.plusFeature.light.color}
            colorDark={colors.plusFeature.dark.color}
        >
            <s.Title>{title}</s.Title>
            <s.AuthorText>
                <Markdown>{cleanAuthorText}</Markdown>
            </s.AuthorText>
        </s.AuthorBoxContainer>
    )
}