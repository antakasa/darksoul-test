import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import * as s from './PictureTag.styled.js';
import * as ss from '../SharedVisualStyles.styled.js';

import {maxWidth, orientation} from '../../../lib/isDeviceMobile';
import {isUsingApp} from '../../../lib/isUsingApp';
import {styleHandlerWithDefaults} from '../../../lib/styleHandler';
import {animateImage} from './pictureScrollFunctions';

import {pushErrorTextToDOM} from '../../../lib/errorFunctions';

import Markdown from 'markdown-to-jsx';

//Helps to description text under picture
function returnPictureWidth(ref, pictureWidth, setPictureWidth){

    const calcPictureWidth = (ref) => {
        if(ref.current !== null) {

            const picContainer = ref.current.querySelector('img')
            let newPicWidth = picContainer.getBoundingClientRect().width;
            newPicWidth == 0 && setTimeout(() => calcPictureWidth(ref),500)
            newPicWidth !== pictureWidth && setPictureWidth(newPicWidth);
            
        }
    }

    useEffect(() => {
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => calcPictureWidth(ref), 150);
        };
        if(typeof window !== "undefined") { 
        window.addEventListener("resize", resizeListener, { passive: true });
        setTimeout(() => calcPictureWidth(ref),500)
        //console.log(initialRun)
        //initialRun && setTimeout(() => calcPictureWidth(ref),1500)
        return () => window.removeEventListener("resize", resizeListener);
        }
    },[pictureWidth])
}

function PictureTag(props){
    const { 
        mobileMediaData, 
        desktopMediaData, 
        positionAbsolute, 
        id, 
        mediaText, 
        mediaStyling, 
        showScrollyMedia, 
        altText, 
        headerPicture
    } = props;
    const pictureTag = useRef(null);
    const pictureTagRelative = useRef(null);

    const [pictureWidth, setPictureWidth] = useState(undefined);

    //when using app, yle menu takes space 50px
    const usingApp = isUsingApp();
    const menuHeight = 50;
    //for maxWidth and left - padding when object-fit: scale down
    const widthPadding = 20;

    const styleThisEl = styleHandlerWithDefaults("picture", mediaStyling)

    animateImage(pictureTagRelative,positionAbsolute)
    let colors = {} 
    if(typeof window === "undefined"){
        colors.plusFeature = {
            dark: { bg: "black", color: "white", color2: "white" },
            light: { bg: "black", color: "white", color2: "white" },
        }
    } else {
        colors.plusFeature = window.plusFeature
    }

    return (
        positionAbsolute == true
        ?
        <ss.MediaContainerAbsolute
            as="picture" 
            onError={() => pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id)}
            width={styleThisEl.width[0]}
            //animation in scrolly fadeIn/fadeOut
            showScrollyMedia={showScrollyMedia || showScrollyMedia == undefined ? true : false}
            //renderMedia={renderMedia}
            imageBackground={styleThisEl.imageBackground[0]}
            ref={pictureTag}
            >
            <s.MobileSource
                srcSet={mobileMediaData == undefined ? pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id) : mobileMediaData} 
                media={"(orientation:" + orientation + ") and (max-width:" + maxWidth + "px)"}
            />
            <s.DesktopImgAbs 
                src={desktopMediaData} 
                //height={styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false ? "100%" : "auto"}
                height={"100%"}
                objectPosition={[styleThisEl.horizontalObjectPosition[0], styleThisEl.horizontalObjectPosition[1]]}
                /*scaleDown keeps whole image in screen while maintaining aspect ratio - menuHeight helps to render under menu element */
                objectFit={styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false ? "cover" : "scale-down"}
                maxHeight={styleThisEl.imageBackground[0] == undefined && !usingApp && !headerPicture || styleThisEl.imageBackground[0]  && usingApp == false 
                    //? "calc(100% - " + menuHeight + "px)" 
                    ? "calc(100%)" 
                    : "100%"
                }
                top={styleThisEl.imageBackground[0] == undefined && !usingApp && !headerPicture || styleThisEl.imageBackground[0] && usingApp == false
                    ? "calc(50%)" 
                    : "50%"
                }
                maxWidth={styleThisEl.imageBackground[0] == undefined || styleThisEl.imageBackground[0] == false
                    ? "100%"
                    //: "calc(100% - " + widthPadding + "px)" 
                    : "100%"
                }
                left={0}
                alt={altText !== null ? altText : pushErrorTextToDOM("#ERR - altText puuttuu kuvasta: " + id + ". Lisää tiedot IMSiin tai sheetsiin.", id)}
            />
            {styleThisEl.mediaCredits.length > 0 && <ss.MediaCredits textColor={styleThisEl.mediaCreditsColor[0]} textBackground={styleThisEl.mediaCreditsBackground[0]}>{styleThisEl.mediaCredits[0]}</ss.MediaCredits>}
        </ss.MediaContainerAbsolute>
        :
        <ss.MediaContainerRelative 
            as="picture"
            onError={() => pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id)}
            width={styleThisEl.width[0]}
            maxWidth={styleThisEl.maxWidth[0]}
            //control opacity only in scrolly
            showScrollyMedia={showScrollyMedia || showScrollyMedia == undefined ? true : false}
            ref={pictureTagRelative}
            contentInFeature={styleThisEl.feature[0] == "on"}
            >
            <s.MobileSource 
                srcSet={mobileMediaData == undefined ? pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id) : mobileMediaData}
                media={"(orientation:" + orientation + ") and (max-width:" + maxWidth + "px)"}
            />
            <s.DesktopImgRel 
                src={desktopMediaData} 
                alt={altText !== null ? altText : pushErrorTextToDOM("#ERR - altText puuttuu kuvasta: " + id + ". Lisää tiedot IMSiin tai sheetsiin.", id)} 
                onLoad={returnPictureWidth(pictureTagRelative, pictureWidth, setPictureWidth)}    
            />
            <ss.Text 
                elWidth={pictureWidth} 
                emptyElement={mediaText.length == 0}
                color={colors.plusFeature.light.color}
                colorDark={colors.plusFeature.dark.color}
                >
                    <Markdown>{mediaText}</Markdown>
            </ss.Text>            
        </ss.MediaContainerRelative>
    )
}

export default PictureTag;

PictureTag.propTypes = {
    mobileMediaData: PropTypes.string, //mobile media url 
    desktopMediaData: PropTypes.string,  //desktop media url
    id: PropTypes.string, //media url for error handling
    positionAbsolute: PropTypes.bool, //position absolute in scrolly
    mediaText: PropTypes.string, //text under video in position relative
    mediaStyling: PropTypes.object, //array containing all styling from sheets
    showScrollyMedia: PropTypes.bool,  //boolean from Scrolly deciding whether to show media 
    headerPicture: PropTypes.bool, //style differently if as headerpicture
    altText: PropTypes.string //alt text for search robots and screen readers
}