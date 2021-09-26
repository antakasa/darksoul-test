import React, {useEffect, useState} from 'react';
import * as s from './ProgressBar.styled.js';
import {isUsingApp} from '../../../lib/isUsingApp'
import {viewportSize} from '../../../lib/viewportFunctions'

function scrollFunction(querySelector){
    const [scrollProgress, setScrollProgress] = useState(false);

    useEffect(() => {
        const progressInQuery = (querySelector) => {
            const el = document.querySelector(querySelector)
            if(el !== null) {
                const commentsEl = document.querySelector("#yle-comments-plugin")
                const commentsHeight = commentsEl !== null ? commentsEl.getBoundingClientRect().height : 0;
                let progress = window.scrollY / (el["scrollHeight"] - viewportSize("height") - commentsHeight)
                progress = progress * 100;
                progress = progress < 100 ? progress + "%" : "100%";
                setScrollProgress(progress)
            }
            
        }
        //document.getElementById("app").addEventListener("scroll", () => progressInQuery(querySelector), { passive: true });
        window.addEventListener("scroll", () => progressInQuery(querySelector), { passive: true });
        //return () => document.getElementById("app").removeEventListener("scroll", progressInQuery);
        return () => window.removeEventListener("scroll", progressInQuery);
    },[scrollProgress])
    return scrollProgress
}

function ProgressBar(props){

    const { color, querySelector } = props;
    const scrollProgress = scrollFunction(querySelector);

    const mainElement = document.querySelector(querySelector);
    const progressInMain = document.querySelector(querySelector + " > .featureProgressBar");
    const progressElement = document.querySelector(".featureProgressBar");


    progressElement !== null && progressInMain == null && mainElement.appendChild(progressElement)

    //no margin in Yle.fi app
    const marginTop = isUsingApp() ? "0px" : "50px"
    
    return <s.Bar className="featureProgressBar" style={{width: scrollProgress, top: marginTop}} color={color} />

}

export default ProgressBar;

