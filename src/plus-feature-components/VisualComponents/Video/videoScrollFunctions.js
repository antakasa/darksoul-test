import {useEffect} from 'react';
import {isElementCloseToViewport, videoRelativeCloseToViewport, isElementVisibleInViewport} from '../../../lib/viewportFunctions';


export function playPauseVideo(ref, controls, scrollyTextFullyInScreen, positionAbsolute, headerVideo){
    useEffect(() => {

        const closeToViewport = async () => {
            if(ref.current !== null  && !controls) {
                const containerStyle = window.getComputedStyle(ref.current);

                //videos under ref
                const videoChildren = [...ref.current.querySelectorAll('video')]

                ////////////////
                //CASE SCROLLY//
                ////////////////

                if(positionAbsolute && isElementCloseToViewport(ref.current, 1) && !headerVideo) {
                    await Promise.all(videoChildren.map(video => {
                        const videoStyle = window.getComputedStyle(video);
                        //play paused videos that are visible - only play desktop video on desktop
                        if(video.paused && videoStyle.display !== "none" && containerStyle.display !== "none") {
                            //load video close enough to viewport
                            video.readyState == 0 && video.load();
                            //play video when in viewport
                            scrollyTextFullyInScreen ? video.play() : null;
                        //pause video if scrollyText is not fully in screen
                        } else if (!video.paused && !scrollyTextFullyInScreen) {
                            video.pause();
                        }
                    }))

                /////////////////
                //CASE RELATIVE//
                /////////////////

                } else if (!positionAbsolute && videoRelativeCloseToViewport(ref.current, .85) || headerVideo && videoRelativeCloseToViewport(ref.current, .85)) {
                    await Promise.all(videoChildren.map(video => {
                        const videoStyle = window.getComputedStyle(video);
                        
                        //play paused videos that are visible - only play desktop video on desktop
                        if(video.paused && videoStyle.display !== "none" && containerStyle.display !== "none") {
                            //load video close enough to viewport
                            video.readyState == 0 && video.load();
                            //play video when in viewport
                            video.play();
                        }
                    }))
                } else if (!positionAbsolute && !videoRelativeCloseToViewport(ref.current, .85) || headerVideo && !videoRelativeCloseToViewport(ref.current, .85)) {
                    await Promise.all(videoChildren.map(video => {
                        video.pause();
                    }))
                }
            ////////////////////////
            //VIDEOS WITH CONTROLS//
            ////////////////////////
            
            } else if (ref.current !== null  && controls) {
                if (!videoRelativeCloseToViewport(ref.current, .85) || !scrollyTextFullyInScreen && positionAbsolute) {
                    //console.log(scrollyTextFullyInScreen, ref.current)
                    //videos under ref
                    const videoChildren = [...ref.current.querySelectorAll('video')]
                    //console.log(ref.current, new Date())
                    await Promise.all(videoChildren.map(video => {
                        //video pause is promise
                        !video.paused && video.pause()
                        const button = ref.current.querySelector(".plusVideoPlayButton")
                        button.style.opacity = 1;
                    }))
                }
            }

            //Enter animation
            if(!positionAbsolute && isElementVisibleInViewport(ref.current) && !ref.current.classList.contains("animatePlusFeatureVisual")) {
                ref.current.classList.add("animatePlusFeatureVisual")
            }
        };
        window.addEventListener("scroll", closeToViewport, { passive: true });
        //document.getElementById("app").addEventListener("scroll", closeToViewport, { passive: true });
        return () => window.removeEventListener("scroll", closeToViewport);
        //return () => document.getElementById("app").removeEventListener("scroll", closeToViewport);
    }, [scrollyTextFullyInScreen]);
    
}

export function stopRelativeAutoplayVideosWhileInScrolly(className) {
    const videoChildren = [...document.querySelectorAll(className + ' video')]
    videoChildren.map(video => {
        !video.paused && video.pause()
    })
}