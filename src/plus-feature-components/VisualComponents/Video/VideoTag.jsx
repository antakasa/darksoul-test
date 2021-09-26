import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import * as s from './VideoTag.styled.js';
import * as ss from '../SharedVisualStyles.styled.js';

import {styleHandlerWithDefaults} from '../../../lib/styleHandler';

import VideoAudio from './VideoAudio';
import VideoPlay from './VideoPlay';

import Markdown from 'markdown-to-jsx';

import {playPauseVideo} from './videoScrollFunctions';
import {isDeviceMobile} from '../../../lib/isDeviceMobile';
import {pushErrorTextToDOM} from '../../../lib/errorFunctions';


//Helps to position icons and description text under video
function returnVideoSpecs(ref, videoSpecs, setVideoSpecs){

    const calcVideoSpecs = (ref) => {
        if(ref.current !== null) {
            let newVideoWidth = 0;
            let newVideoPadding = 0;
            let newVideoHeight = 0;
            const videoChildren = [...ref.current.querySelectorAll('video')]
            const containerLeft = ref.current.getBoundingClientRect().left;
            videoChildren.map(vid => {
                
                const videoRect = vid.getBoundingClientRect();
                newVideoWidth = videoRect.width > newVideoWidth ? videoRect.width : newVideoWidth;
                const calcVideoPadding = videoRect.left - containerLeft;
                newVideoPadding = videoRect.left > 0 ? calcVideoPadding : newVideoPadding;
                const videoHeight = videoRect.height;
                newVideoHeight = videoHeight > newVideoHeight ? videoHeight : newVideoHeight;
            })
            newVideoWidth == 0 && setTimeout(() => calcVideoSpecs(ref),500)
            newVideoWidth !== videoSpecs[0] && setVideoSpecs([newVideoWidth, newVideoPadding, newVideoHeight]);
        }
    }
    
    useLayoutEffect(() => {

        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => calcVideoSpecs(ref), 150);
        };

        window.addEventListener("resize", resizeListener, { passive: true });
        setTimeout(() => calcVideoSpecs(ref, videoSpecs, setVideoSpecs),1500)
        return () => window.removeEventListener("resize", resizeListener);
    },[videoSpecs])
}

function VideoTag(props){
    const { 
        mobileMediaData, 
        desktopMediaData, 
        positionAbsolute, 
        id, 
        mediaText, 
        mediaStyling, 
        showScrollyMedia, 
        audioIconPosition, 
        scrollyTextFullyInScreen,
        headerVideo,
        setSound,
        soundOn
    } = props;

    const videoRef = useRef(null);
    const styleThisEl = styleHandlerWithDefaults("video", mediaStyling)

    const mobile = isDeviceMobile();
    playPauseVideo(videoRef, styleThisEl.controls, scrollyTextFullyInScreen, positionAbsolute, headerVideo);

    //let videoSpecs = returnVideoSpecs(videoRef);
    const [videoSpecs, setVideoSpecs] = useState([]);
    //when using app, yle menu takes space 50px
    //const usingApp = isUsingApp();
    //const menuHeight = 50;
    
    const videoProps = 
        {
            preload: styleThisEl.preload || headerVideo ? "auto" : "metadata", 
            autoPlay: styleThisEl.preload && !styleThisEl.controls || headerVideo ? true : false,
            muted: true,
            playsInline: true,
            loop: true,
            height: styleThisEl.imageBackground[0] == undefined && positionAbsolute ? "100%" : "auto",
            /*scaleDown keeps whole image in screen while maintaining aspect ratio - menuHeight helps to render under menu element */
            objectFit: styleThisEl.imageBackground[0] == undefined && positionAbsolute ? "cover" : "scale-down",
            //maxHeight: positionAbsolute && !usingApp && !headerVideo ? "calc(100% - " + menuHeight + "px)" : "100%",
            maxHeight: "100%",
            top: "50%",
            //top: positionAbsolute && !usingApp && !headerVideo ? "calc(50% + " + Number(menuHeight/2) + "px)"  : "50%",
            onError: () => pushErrorTextToDOM("#ERR - ei kelvollinen URL: " + desktopMediaData + " tai " + mobileMediaData + ". Tarkista rajaustiedot kuvasta: " + id),
            onLoad: returnVideoSpecs(videoRef, videoSpecs, setVideoSpecs)

        };

    //Two videos are loaded - preload and autoplay only desktop OR mobile
    const disableAutoplay = 
        {
            preload: "metadata", 
            autoPlay: false
        }
    return (
        //Absolute position in scrollys and header - relative between paragraphs
        positionAbsolute == true
        ?
        <ss.MediaContainerAbsolute
            as="div"
            showScrollyMedia={showScrollyMedia || showScrollyMedia == undefined ? true : false}
            ref={videoRef}
            imageBackground={styleThisEl.imageBackground[0] == false || styleThisEl.imageBackground[0] == undefined ? "white" : styleThisEl.imageBackground[0]}
            
        >
            <s.VideoTagAbsoluteDesktop  {...videoProps} {...(mobile && disableAutoplay)} 
                objectPositionDesktop={styleThisEl.horizontalObjectPosition[0]} 
                poster={desktopMediaData.replace("#t=0.1","") + ".poster.jpg"}>
                <source src={desktopMediaData} type="video/mp4" />
            </s.VideoTagAbsoluteDesktop>
            <s.VideoTagAbsoluteMobile {...videoProps}  {...(!mobile && disableAutoplay)} 
                objectPositionMobile={styleThisEl.horizontalObjectPosition[1]} 
                poster={mobileMediaData.replace("#t=0.1","") + ".poster.jpg"}>
                <source src={mobileMediaData} type="video/mp4" />
            </s.VideoTagAbsoluteMobile>
                {styleThisEl.audio && 
                    <VideoAudio 
                        audioIconPosition={audioIconPosition} 
                        audioIconPositionRight={videoSpecs[1]} 
                        iconColor={styleThisEl.iconColor[0]} 
                        relative={!positionAbsolute} 
                        soundOn={soundOn}
                        setSound={setSound}
                    />}
                {styleThisEl.controls && 
                    <VideoPlay 
                        playIconPosition={undefined} 
                        iconColor={styleThisEl.iconColor[0]} 
                        videoContainer={videoRef} 

                    />}
                {styleThisEl.mediaCredits.length > 0 && 
                    <ss.MediaCredits 
                        textColor={styleThisEl.mediaCreditsColor[0]}
                        textBackground={styleThisEl.mediaCreditsBackground[0]}
                    >{styleThisEl.mediaCredits[0]}
                    </ss.MediaCredits>}
        </ss.MediaContainerAbsolute>
        :
        <ss.MediaContainerRelative
            as="div"
            showScrollyMedia={showScrollyMedia || showScrollyMedia == undefined ? true : false}
            width={styleThisEl.width[0]}
            maxWidth={styleThisEl.maxWidth[0]}
            ref={videoRef}
            contentInFeature={styleThisEl.feature[0] == "on"}
            className="plusVideoRelative"
        >
            <s.VideoTagRelativeDesktop  
                {...videoProps} {...(mobile && disableAutoplay)} 
                poster={desktopMediaData.replace("#t=0.1","") + ".poster.jpg"}>
                <source src={desktopMediaData} type="video/mp4" />
                <ss.Text><Markdown>{mediaText}</Markdown></ss.Text>
            </s.VideoTagRelativeDesktop>
            <s.VideoTagRelativeMobile  
                {...videoProps} {...(!mobile && disableAutoplay)} 
                poster={mobileMediaData.replace("#t=0.1","") + ".poster.jpg"}>
                <source src={mobileMediaData} type="video/mp4" />
                
            </s.VideoTagRelativeMobile>
            <ss.Text 
                elWidth={videoSpecs[0]} 
                emptyElement={mediaText.length == 0} 
                color={window.plusFeature.light.color}
                colorDark={window.plusFeature.dark.color}
                >
                    <Markdown>{mediaText}</Markdown>
                </ss.Text>
                {styleThisEl.audio && 
                    <VideoAudio 
                        audioIconPosition={audioIconPosition} 
                        audioIconPositionRight={videoSpecs[0] / 2} 
                        iconColor={styleThisEl.iconColor[0]} 
                        videoContainer={videoRef} 
                        relative={true}
                        soundOn={soundOn}
                        setSound={setSound}
                    />}
                {styleThisEl.controls && 
                    <VideoPlay 
                        iconColor={styleThisEl.iconColor[0]} 
                        playIconPosition={videoSpecs[2]} 
                        videoContainer={videoRef} 
                    />}
        </ss.MediaContainerRelative>
    )
}

export default VideoTag;

VideoTag.propTypes = {
    mobileMediaData: PropTypes.string, //mobile media url 
    desktopMediaData: PropTypes.string,  //desktop media url
    id: PropTypes.string, //media url for error handling
    positionAbsolute: PropTypes.bool, //position absolute in scrolly
    mediaText: PropTypes.string, //text under video in position relative
    mediaStyling: PropTypes.object, //array containing all styling from sheets
    showScrollyMedia: PropTypes.bool,  //boolean from Scrolly deciding whether to show media 
    audioIconPosition: PropTypes.string, //for example 60px from top
    scrollyTextFullyInScreen: PropTypes.bool, //boolean from Scrolly deciding whether to play video
    headerVideo: PropTypes.bool //header video should be preloaded and auto playing
}