import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Markdown from 'markdown-to-jsx';

import * as s from './Header.styled';
import * as ss from '../App.styled';

import HeaderVisuals from './HeaderVisuals/HeaderVisuals'
import ShareButtons from './ShareButtons/ShareButtons'

import ProgressBar from '../VisualComponents/VisualHelpers/ProgressBar'

import {pushErrorTextToDOM} from '../../lib/errorFunctions';
import {styleHandlerWithDefaults} from '../../lib/styleHandler';

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function Header(props){
    const { 
        data, 
        articlePublishedText, 
        eskoHeadline, 
        eskoLead, 
        tag, 
        tagLink,
        uutisetOrUrheilu,
        soundOn,
        setSound
    } = props; //data contains rows "otsikko", "ingressi", "tekijat"


    let ingressi = data.filter(d => d.type == "ingressi")[0]
    ingressi = ingressi !== undefined ? ingressi.value : pushErrorTextToDOM("#ERR: Ingressiä ei löydetty")
    
    const otsikko = data.filter(d => d.type == "otsikko")[0]
    let otsikkoValue = otsikko !== undefined ? otsikko.value : pushErrorTextToDOM("#ERR: Otsikkoa ei löydetty")
    const mediaStyling = otsikko.style;
    const styleOtsikko = styleHandlerWithDefaults("otsikko", mediaStyling)
 
    
    ////////////////////////////
    //CHANGE ARTICLE BG COLOR///
    ////////////////////////////
    const articleContent = typeof document !== "undefined" ? document.querySelector(".yle__article__content") : null;
    if (articleContent !== null && styleOtsikko.backgroundColor[0] !== "white") {

        function overrideColors(query, style, color){
            const els = document.querySelectorAll(query)
            els.forEach(el => el.style[style] = color);
        }
        let window = window || {}
        //if custom article bg color then override dark scheme
        const newBg = styleOtsikko.backgroundColor[0];
        articleContent.style["backgroundColor"] = newBg;
        if(styleOtsikko.darkmode[0] == "off" && window.plusFeature !== {dark: {bg: newBg, color: "black", color2: "black"}, light: {bg: newBg, color: "black", color2: "black"}}) {
            window.plusFeature = {dark: {bg: newBg, color: "black", color2: "black"}, light: {bg: newBg, color: "black", color2: "black"}};

            overrideColors(".yle__article__paragraph", "color", "black")
            overrideColors(".yle__article__link", "color", "black")
            overrideColors(".yle__article__heading", "color", "black")
            overrideColors(".yle__article__list--ul li", "color", "black")

            //paragraphs.style.color = "black";
        
        //IF DARK MODE SET ON
        } else if (styleOtsikko.darkmode[0] == "on" && window.plusFeature !== {dark: {bg: newBg, color: "white", color2: "white"}, light: {bg: newBg, color: "white", color2: "white"}}) {
            
            window.plusFeature = {dark: {bg: newBg, color: "white", color2: "white"}, light: {bg: newBg, color: "white", color2: "white"}};

            overrideColors(".yle__article__paragraph", "color", "white")
            overrideColors(".yle__article__link", "color", "white")
            overrideColors(".yle__article__heading", "color", "white")
            overrideColors(".yle__article__list--ul li", "color", "white")

        }

        //set app background if custom bg color
        const appContainer = document.querySelector("#app")
        if (appContainer !== null && appContainer.style["background-color"]!== newBg) appContainer.style["background-color"] = newBg;
    }

    let headerVisualsProps = {headerChildren: props.children};
    //Case id-column is empty and urls is undefined - push manual class to header
    if (otsikko.urls == undefined) {
        headerVisualsProps = {
            ... headerVisualsProps,
            mediaStyling: mediaStyling,
            emptyHeader: true
        }
    //make standard header visuals
    } else {
        const mediaFormat = otsikko.mediaFormat;
        const desktopMediaData = otsikko.urls[0] !== undefined ? otsikko.urls[0] : pushErrorTextToDOM("#ERR: Ongelma headerin deskarikuvassa - " + otsikko.id)
        const mobileMediaData = otsikko.urls[1] !== undefined ? otsikko.urls[1] : pushErrorTextToDOM("#ERR: Ongelma headerin mobiilikuvassa. Tarkista rajaustiedot " + otsikko.id)
        const altText = otsikko.altText || otsikko.alttext;
       

        headerVisualsProps = {
            ... headerVisualsProps,
            desktopMediaData: desktopMediaData,
            mobileMediaData: mobileMediaData,
            mediaFormat: mediaFormat,
            mediaStyling: mediaStyling,
            emptyHeader: false,
            altText,
            soundOn: soundOn,
            setSound: setSound,
            headerChildren: props.children
        }
    }


    const progressBar = Object.keys(mediaStyling).includes("etenemispalkki") ? mediaStyling.etenemispalkki[0] : false;
   let colors ={};
    if(typeof window === "undefined"){
        colors.plusFeature = {
            dark: { bg: "black", color: "white", color2: "white" },
            light: { bg: "black", color: "white", color2: "white" },
        }
    } else {
        colors.plusFeature = window.plusFeature
    }
    
    return(
        <s.HeaderContainer>
            <HeaderVisuals {...headerVisualsProps} />
            <ss.StyledContentContainer>
                <s.LeadContainer
                    backgroundColor={colors.plusFeature.light.bg}
                    backgroundColorDark={colors.plusFeature.dark.bg}
                >
                    <s.TagLink href={tagLink}>
                        <s.Tag 
                            color={colors.plusFeature.light.color}
                            colorDark={colors.plusFeature.dark.color}
                        >
                            {tag}
                        </s.Tag>
                    </s.TagLink>
                    <s.HeaderTitle 
                        color={colors.plusFeature.light.color}
                        colorDark={colors.plusFeature.dark.color}
                        fontSizing={styleOtsikko.fontSize}>
                            {replaceAll(otsikkoValue,"&shy;","\u00AD")}
                    </s.HeaderTitle>
                    <s.HeaderLead
                        color={colors.plusFeature.light.color}
                        colorDark={colors.plusFeature.dark.color}
                    >
                        <Markdown>{ingressi}</Markdown>
                    </s.HeaderLead>
                    {articlePublishedText.length > 0 && 
                        <s.PublishedTextContainer
                            color={colors.plusFeature.light.color}
                            colorDark={colors.plusFeature.dark.color}
                        >
                            <time>{articlePublishedText}</time>
                        </s.PublishedTextContainer>}
                    {articlePublishedText.length > 0 && <ShareButtons 
                        eskoHeadline={eskoHeadline}
                        eskoLead={eskoLead}
                        uutisetOrUrheilu={uutisetOrUrheilu}
                    />}
                </s.LeadContainer>
            </ss.StyledContentContainer>
            {/*ProgressBar shows progress in article - use querySelector for div including whole article content*/}
            {progressBar !== false && <ProgressBar querySelector={"article"} color={progressBar} />}
        </s.HeaderContainer>
    )
}

export default Header;

