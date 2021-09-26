import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import * as s from './VideoTag.styled.js';

function VideoPlay(props){
    const { 
        videoContainer, 
        iconColor, 
        playIconPosition
    } = props;

    const play = useRef(null);

    function flipPlay(){
        if(videoContainer.current !== null) {
            //videos under ref
            const videoChildren = [...videoContainer.current.querySelectorAll('video')]

            videoChildren.map(video => {
                const videoStyle = window.getComputedStyle(video);
                if(videoStyle.display == "block" && video.paused) {
                    video.readyState == 0 && video.load();
                    video.play()
                    play.current.style.opacity = 0;
                } else if (videoStyle.display == "block" && !video.paused) {
                    play.current.style.opacity = 1;
                    video.pause();
                }
            })
        }
    }
    
    return(
        <>
            <s.PlayButton 
                ref={play} 
                onClick={() => flipPlay()}
                style={{display: "block"}}
                className="plusVideoPlayButton"
                playIconPosition={playIconPosition !== undefined ? playIconPosition / 2 - 20 :  undefined}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill={iconColor !== undefined ? iconColor : "white"} width="100" height="100">
                    <path d="M99.6,48.4c-0.3-0.7-0.9-1.3-1.6-1.6L5.2,0.4C3.4-0.5,1.3,0.2,0.4,2C0.1,2.5,0,3,0,3.6v92.9c0,2,1.6,3.6,3.6,3.6c0.6,0,1.1-0.1,1.6-0.4L98,53.2C99.8,52.3,100.5,50.2,99.6,48.4z"></path>
                </svg>
            </s.PlayButton>
        </>
    )
    
}
    
export default VideoPlay;