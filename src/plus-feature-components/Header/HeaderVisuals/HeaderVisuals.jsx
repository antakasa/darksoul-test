import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import * as s from './HeaderVisuals.styled';
import PictureTag from '../../VisualComponents/Picture/PictureTag'
import VideoTag from '../../VisualComponents/Video/VideoTag'
import SwipingFinger from '../../VisualComponents/VisualHelpers/SwipingFinger'

import {pushErrorTextToDOM} from '../../../lib/errorFunctions';


//pushes selected id or class to header
function pushContentToHeader(emptyContainer, newHeaderSelector){
    useEffect(() => {
        
        if(emptyContainer.current !== null) {
            const newHeaderElement = document.querySelector(newHeaderSelector)
            if(newHeaderElement !== null) {
                newHeaderElement.style["marginTop"] = "-80px";
                emptyContainer.current.appendChild(newHeaderElement)
                
            } else {
                pushErrorTextToDOM("#ERR: Ei onnistuttu lisäämään sisältöä " + newHeaderSelector + " artikkelin alkuun");
            }
        }
      }, [emptyContainer]);
}

function HeaderVisuals(props){
    const { 
        mediaFormat, 
        mobileMediaData, 
        desktopMediaData, 
        mediaStyling, 
        emptyHeader, 
        altText,
        soundOn,
        setSound
    } = props;
    const emptyContainer = useRef(null);
   

    //if header visual is empty then embed new class to header
    if(emptyHeader){

        const newHeaderSelector = Object.keys(mediaStyling).includes("sisältö") ? mediaStyling.sisältö[0] : undefined
        newHeaderSelector !== undefined && pushContentToHeader(emptyContainer, newHeaderSelector);
    }

    const showIcon = Object.keys(mediaStyling).includes("ikoni") ? mediaStyling.ikoni[0] : false;

    return (
        <>
        {emptyHeader ?
        <s.VisualEmptyContainer
            ref={emptyContainer} 
        >
            {props.headerChildren && React.cloneElement(props.headerChildren)}
        </s.VisualEmptyContainer>
        :
        mediaFormat == "imsImage" || mediaFormat == "webImage"
        ?
        <s.VisualContainer>
            <PictureTag 
                mobileMediaData={mobileMediaData}
                desktopMediaData={desktopMediaData}
                positionAbsolute={true}
                mediaStyling={mediaStyling}
                headerPicture={true}
                altText={altText}
            />
        </s.VisualContainer>
        : mediaFormat == "webVideo"
        ?
        <s.VisualContainer>
            <VideoTag 
                mobileMediaData={mobileMediaData}
                desktopMediaData={desktopMediaData}
                positionAbsolute={true}
                mediaStyling={mediaStyling}
                audioIconPosition="20px"
                //video in header should be preloaded
                headerVideo={true}
                soundOn={soundOn}
                setSound={setSound}
            />
        </s.VisualContainer>
        :
        null}        
        {/*SwipingFinger is guide to start scrolling at the start of the article*/}
        {showIcon && <SwipingFinger color={showIcon} />}
        
        </>
    )
}

export default HeaderVisuals;

HeaderVisuals.propTypes = {
    mediaFormat: PropTypes.string, //imsImage, webImage, webVideo 
    mobileMediaData: PropTypes.string, //mobile media url 
    desktopMediaData: PropTypes.string, //desktop media url
    mediaStyling: PropTypes.object, //array containing all styling from sheets
    emptyHeader: PropTypes.bool, //push scrolly/etc. to header 
    altText: PropTypes.string //alt text for search robots and screen readers
}