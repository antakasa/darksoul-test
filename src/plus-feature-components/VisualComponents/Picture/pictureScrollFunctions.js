import {useEffect} from 'react';

import { isElementVisibleInViewport } from '../../../lib/viewportFunctions';


export function animateImage(ref, positionAbsolute){
    useEffect(() => {
        const closeToViewport = async () => {
            if(ref.current !== null) {
               //Enter animation
               if(!positionAbsolute && isElementVisibleInViewport(ref.current) && !ref.current.classList.contains("animatePlusFeatureVisual")) {
                   ref.current.classList.add("animatePlusFeatureVisual")
               }
            }
        };
        document.getElementById("app").addEventListener("scroll", closeToViewport, { passive: true });
        return () => document.getElementById("app").removeEventListener("scroll", closeToViewport);
    }, [])     
}