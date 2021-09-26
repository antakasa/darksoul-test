import React, {useRef, useState, useEffect} from 'react';
import * as s from './AudioTag.styled';
import * as ss from '../SharedVisualStyles.styled.js';
import Markdown from 'markdown-to-jsx';

const handleTimeDrag = (e, audioRef, durationBars, duration, setCurrentTime) => {

    const timeClicked = calcClickedTime(e, durationBars, duration);
    setCurrentTime(timeClicked)
    console.log("drag initiated")
    
    const updateTimeOnMove = eMove => {
        const time = calcClickedTime(eMove, durationBars, duration);
        console.log("dragging")
        setCurrentTime(time);
        audioRef.current.currentTime = time
    };
  
    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("touchmove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
        console.log("drag ended")
        document.removeEventListener("mousemove", updateTimeOnMove);
        document.removeEventListener("touchmove", updateTimeOnMove);
    });

}

function calcClickedTime(e, durationBars, duration) {
    //clicked position
    const clickPositionInPage = e.pageX;
    console.log(clickPositionInPage)
    const bar = durationBars.current;
    //barStart from left
    const barStart = bar.getBoundingClientRect().left;
    const barWidth = bar.offsetWidth;
    //seconds per pixel
    const timePerPixel = duration / barWidth;
    //how many pixels from barstart 
    const clickedPixelsFromLeft = clickPositionInPage - barStart - 8;
    //calc new time
    const newTime = timePerPixel * clickedPixelsFromLeft;
    return newTime

  }
 
export default function AuthorBox(props){

    const  { audioData, mediaText } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    const durationBarsRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.currentTime = currentTime
        audioRef.current.play();
        setIsPlaying(true)
    }
    
    const handlePause = () => {
      audioRef.current.pause();
      setIsPlaying(false)
    }

    const handleDuration = () => {
        const { duration } = audioRef.current;
        setDuration(duration)
    }

    const handleTimeUpdated = () => {
        if (isPlaying && audioRef.current.paused) audioRef.current.play();
        if (!isPlaying && !audioRef.current.paused) audioRef.current.pause();
        setCurrentTime(audioRef.current.currentTime)
    }

    function secondsBeautifier(number) {
        const minutes = parseInt(number / 60)
        let seconds = parseInt(number % 60);
        seconds = seconds.toString().length > 1 ? seconds.toString() : "0" + seconds.toString(); 
        return minutes + ":" + seconds
    }
    
    return (
        <ss.MediaContainerRelative
            tag={"div"}
        >
            <s.Audio 
                ref={audioRef}
                onTimeUpdate={handleTimeUpdated}
                preload="metadata"
                onLoadedMetadata={handleDuration}
                >
                <source src={audioData} type="audio/mpeg" />
                Selaimesi ei tue <code>ääni</code>-elementtiä.
            </s.Audio>
            <s.Controls>
            {<s.Button onClick={isPlaying ? handlePause : handlePlay}>   
                <s.SVG viewBox="0 0 24 24" height="24" width="24" fill="white">
                    {isPlaying ? 
                        <g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20V4Z" fill="#131415"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H6C5.44772 21 5 20.5523 5 20V4Z" fill="#131415"/>
                        </g>
                        :
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.52081 2.12229C5.84189 1.947 6.23305 1.96101 6.54076 2.15882L20.5408 11.1588C20.827 11.3428 21 11.6597 21 12C21 12.3403 20.827 12.6572 20.5408 12.8412L6.54076 21.8412C6.23305 22.039 5.84189 22.053 5.52081 21.8777C5.19974 21.7024 5 21.3658 5 21V3C5 2.63419 5.19974 2.29758 5.52081 2.12229Z" fill="#131415"/>
                    }
                </s.SVG>
            </s.Button>}
            <s.DurationText>
                {secondsBeautifier(currentTime)} / {secondsBeautifier(duration)}
            </s.DurationText>
            <s.DurationBars ref={durationBarsRef}>
                {/*<s.DurationInputBar input type="range" id="timeSeek" name="timeSeek" min="0" max="100" />*/}
                <s.DurationBar color={"#D9D9D9"} style={{width: "100%"}} />
                <s.DurationBar color={"#07CA84"} style={{width: currentTime/duration*100 + "%"}} />
                <s.DurationHandle         
                    onMouseDown={e => 
                        handleTimeDrag(
                            e, 
                            audioRef, 
                            durationBarsRef, 
                            duration, 
                            setCurrentTime
                            )}
                    style={{left:currentTime/duration*100 + "%"}}
                    />
            </s.DurationBars>
            
            </s.Controls>
            <ss.Text 
                emptyElement={mediaText.length == 0}
                color={window.plusFeature.light.color}
                colorDark={window.plusFeature.dark.color}
            >
                <Markdown>{mediaText}</Markdown>
            </ss.Text>  
        </ss.MediaContainerRelative>
    )
}