import React, { useRef, useEffect, useCallback, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import PictureTag from '../VisualComponents/Picture/PictureTag';
import VideoTag from '../VisualComponents/Video/VideoTag';


import {
    isElementInOrAboveViewport, 
    firstTextBoxViewportFunction, 
    lastTextBoxViewportFunction, 
    onlyOneTextBoxViewportFunction,
    isTextBoxAlmostInViewport,
    viewportSize
} from '../../lib/viewportFunctions';
import {styleHandlerWithDefaults} from '../../lib/styleHandler';
import {isUsingApp} from '../../lib/isUsingApp';
import {appHeightHack} from '../../lib/appHeightHack';

import {stopRelativeAutoplayVideosWhileInScrolly} from '../VisualComponents/Video/videoScrollFunctions';


import Markdown from 'markdown-to-jsx';

import * as s from './Scrolly.styled';

function iOSSafari(userAgent) {
    return /iP(ad|od|hone)/i.test(userAgent) &&
      /WebKit/i.test(userAgent) &&
      !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent));
}


const useIsClient = () => {
    const [isClient, setClient] = useState(false);
  
    useEffect(() => {
      setClient(true)
    }, []);
  
    return isClient;
  }

function changeScrollyHeight() {
    const ref = useRef(null)
    const setRef = useCallback(node => {
      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
      }
      
      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        //change scrolly height based on text container height
        if (typeof window !== "undefined" && window.navigator.userAgent.indexOf("Edg") > -1) {
            node.parentNode.style.height = "calc("+(250+7)+"vh + " + node.offsetHeight +"px)"
        //Firefox on ios -- not necessary
        } /*else if (window.navigator.userAgent.includes("FxiOS")) {
            const height = window.innerHeight
            node.parentNode.style.height = "calc("+(height*3.06)+"px + " + node.offsetHeight +"px)"
        }*/ else {
            node.parentNode.style.height = "calc("+(200+6)+"vh + " + node.offsetHeight +"px)"
        }

        
      }
      
      // Save a reference to the node
      ref.current = node
    }, [])
    
    return [setRef]
}

function isTextboxInViewport(refArray){
    //contains all individual text boxes on scrolly
    const [elementInViewport, setVisibility] = useState({mediaOpacity: [], canPlay: []});

    const arrayLength = refArray.current.length

    useEffect(() => {
        //flips image opacity based on if text is in viewport
        const inViewport = () => {
            //let minDistance = Infinity;

            let data = {mediaOpacity: new Array(arrayLength), canPlay: new Array(arrayLength)}
            refArray.current.map((singleContainer,index) => {

                const lastEl = index == arrayLength - 1;
                data.mediaOpacity[index] = isElementInOrAboveViewport(singleContainer)

                //multiple text box scrolls
                if(arrayLength > 1) {
                    data.canPlay[index] = index == 0 ? firstTextBoxViewportFunction(singleContainer) : lastEl ? lastTextBoxViewportFunction(singleContainer) : isTextBoxAlmostInViewport(singleContainer);
                //if only one text box - apply special rules
                } else {
                    data.canPlay[index] = onlyOneTextBoxViewportFunction(singleContainer)
                }
                
            })

            //only update if new data is different from current state
            JSON.stringify(elementInViewport) !== JSON.stringify(data) && setVisibility({...data})
        };
        inViewport()
        //back up if delete body and #app stylings in basics.css
        typeof window !== "undefined" && window.addEventListener("scroll", inViewport, { passive: true });
        return () => typeof window !== "undefined" && window.removeEventListener("scroll", inViewport);
    }, [elementInViewport]);
    
    return elementInViewport;
}

function allowVideoPlay(scrollyData, index, scrollyEl, elementInViewport) {
    //list of textboxes 
    const playVideoOnTheseTextBoxes = [index]
                    
    //While loop goes through scrolly medias and returns list of indexes with empty id's
    //Purpose: video won't stop even though original scrollyText is not on screen
    let i = index;
    do {
        if(scrollyEl.mediaFormat == "webVideo" && scrollyData[i] !== undefined && scrollyData[i].id == "") {
            playVideoOnTheseTextBoxes.push(i)
        }
        i++;
    }
    while (scrollyData[i] !== undefined && scrollyData[i].id == "")

    //Allow play if showing original text box linked to video or any following text boxes with no linked video
    const allowPlay = playVideoOnTheseTextBoxes.map(textBoxIndex => elementInViewport.canPlay[textBoxIndex]).includes(true)

    return allowPlay
}

function resizeWindow(){
    //contains all individual text boxes on scrolly
    const [height, setHeight] = useState(viewportSize("height") + 2);

    useEffect(() => {
        //flips image opacity based on if text is in viewport
        const resized = () => {
            //+2 makes sure that there are no white borders
            const newHeight = viewportSize("height") + 2;
            newHeight !== height && setHeight(newHeight)
            //newHeight !== height && appHeightHack();
        };
        resized();
        typeof window !== "undefined" && window.addEventListener("resize", resized, { passive: true });
        return () => typeof window !== "undefined" &&  window.removeEventListener("resize", resized);
    }, [height]);
    
    return height;
}


function Scrolly(props){
    const {
        scrollyData, 
        scrollyIndex,
        soundOn,
        setSound
    } = props;

    const [textsContainer] = changeScrollyHeight()

    const height = resizeWindow();
    
    //includes all SingleTextContainers
    const singleTextContainerArray = useRef([]);
    //boolean array [true, false, false]
    const elementInViewport = isTextboxInViewport(singleTextContainerArray)

    //If in scrolly then stop relative videos
    elementInViewport.canPlay.includes(true) && stopRelativeAutoplayVideosWhileInScrolly(".plusVideoRelative");

    //audio icon placement - app has not fixed menu top
    const usingApp = isUsingApp();
    const isClient = useIsClient();
    return(
        <>
            {/* widthProperty can be used for scrolly element in Esko feature and Esko basic news template */}
            <s.ScrollyContainer 
                widthProperty={Object.keys(scrollyData[0].style).includes("leveys") ? scrollyData[0].style.leveys : "100%"}
                >
                <s.StickyImageContainer
                    usingApp={usingApp}
                    //only safari on ios uses this value
                    safariOnIOS={isClient && iOSSafari(window.navigator.userAgent)}
                    height={isClient || height == undefined ? height : "0"}
                >
                {scrollyData.map((scrollyEl,index) => {

                    //Allow play if showing original text box linked to video or any following text boxes with no linked video
                    const allowPlay = allowVideoPlay(scrollyData, index, scrollyEl, elementInViewport)
                
                    return(
                        scrollyEl.mediaFormat == "webVideo"
                        ?
                        <VideoTag 
                            mobileMediaData={scrollyEl.urls[1]}
                            desktopMediaData={scrollyEl.urls[0]}
                            positionAbsolute={true}
                            id={scrollyEl.id}
                            mediaStyling={scrollyEl.style}
                            //audio icon position lower in scrolly - reason yle.fi fixed menu top
                            audioIconPosition={!usingApp ? "15px" : "0px"}
                            //always show first image of scrolly
                            //show image correspondent to textbox
                            showScrollyMedia={index == 0 ? true : elementInViewport.mediaOpacity[index]}
                            scrollyTextFullyInScreen={allowPlay}
                            headerVideo={false}
                            key={"scrollyVideoTag-" + scrollyIndex + "-" + index}
                            soundOn={soundOn}
                            setSound={setSound}
                        />
                        : scrollyEl.mediaFormat == "imsImage" ||  scrollyEl.mediaFormat == "webImage" ?
                        <PictureTag 
                            mobileMediaData={scrollyEl.urls[1]}
                            desktopMediaData={scrollyEl.urls[0]}
                            positionAbsolute={true}
                            id={scrollyEl.id}
                            mediaStyling={scrollyEl.style}
                            altText={scrollyEl.altText}
                            //always show first image of scrolly
                            //show image correspondent to textbox
                            showScrollyMedia={index == 0 ? true : elementInViewport.mediaOpacity[index]}
                            //renderMedia={elementInViewport.showElement[index]}
                            key={"scrollyPictureTag-" + scrollyIndex + "-" + index}
                            index={"scrollyVideoTag-" + scrollyIndex}
                        />
                        :
                        null
                    )
                })
                }
                </s.StickyImageContainer>
                <s.TextsContainer ref={textsContainer}>
                {scrollyData.map((scrollyEl,index) => {
                    const styleThisEl = styleHandlerWithDefaults("skrolli", scrollyEl.style)
                    //console.log(styleThisEl)
                    return(
                        <s.SingleTextContainer 
                            marginTop={index == 0 ? 0 : typeof window !== "undefined" && window.navigator.userAgent.includes("FxiOS") ? viewportSize("height") + "px" : "100vh"} 
                            opacity={scrollyEl.value.length > 0 ? 1 : 0}
                            visibility={scrollyEl.value.length > 0 ? "visible" : "hidden"}
                            background={styleThisEl.textContainerBackground}
                            color={styleThisEl.textColor}
                            //ref is array, only push if ref is not in array
                            ref={ref => 
                                singleTextContainerArray.current.length < scrollyData.length 
                                && singleTextContainerArray.current.push(ref) 
                            }
                            key={"scrollyTextContainer-" + scrollyIndex + "-" + index}
                            >
                            <Markdown>{scrollyEl.value}</Markdown>
                        </s.SingleTextContainer>
                    )
                })
                }
                    
                </s.TextsContainer>
            </s.ScrollyContainer>
        </>
    )
}

export default Scrolly;

