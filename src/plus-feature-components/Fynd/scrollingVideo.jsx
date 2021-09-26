import React, { useEffect, useRef, useState } from 'react';
import { isDeviceMobile } from '../../lib/isDeviceMobile';
import * as s from './scollingVideo.styled';
import PropTypes from 'prop-types';

ScrollingVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
let disableScroll = true;
function ScrollingVideo(props) {
  const videoRef = useRef();
  const heightSetterRef = useRef();
  const [height, setHeight] = useState(null);
  const [showTitle, setShowTitle] = useState(false)

  const playbackConst = 500; // lower the number, faster the playback.
  const limitedScrolling = ScrollingSpeedLimiter();

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
      vid.loop = props.delay === null || !props.delay;
     let isMounted = true;
    if (props.delay) {
      vid.addEventListener('ended', endHandler, false);
      function endHandler(e) {
        setTimeout(function () {
          vid.play();
        }, parseInt(props.delay) * 1000);
      }
    }

    if (false && props.titleDelay) {
      vid.addEventListener('timeupdate', progressHandler, false);
      function progressHandler(e) {
      if(vid.currentTime > props.titleDelay) {
        setShowTitle(true)
        vid.removeEventListener('timeupdate', progressHandler, false);
      }
      }
    }

    
    if(vid.readyState > 1) vid.play();
    vid.addEventListener('loadedmetadata', function () {
      // play & pause needed to make video visible in mobile devices
      if (disableScroll) {
        if(props.isHeader) {
        if (document.readyState === 'complete') {
          vid.play();
        } else {
          window.addEventListener('load', () =>  vid.play());
        }
      }


        setHeight(window.innerHeight);


        return;
      }

      if (isMounted) setHeight(Math.floor(vid.duration) * playbackConst + window.innerHeight);
      vid.play();
      vid.pause();
      scrollPlay({ videoRef, heightSetterRef, playbackConst, limitedScrolling });
    });

    return () => {
      isMounted = false;
    };
  }, [videoRef.current]);

  return (
    <s.HeightSetter ref={heightSetterRef} height={height || "100vh"}>
      <s.StickyHolder>
        {props.children}
        <s.VideoElement
          ref={videoRef}
          preload="auto"
          muted
          autoPlay={!props.isHeader}
          disableRemotePlayback
          type="video/mp4"
          src={props.url}
          playsInline
          style={{ height: '99vh' }}
        ></s.VideoElement>
      </s.StickyHolder>
    </s.HeightSetter>
  );
}

function scrollPlay(params) {
  const { videoRef, heightSetterRef, playbackConst, limitedScrolling } = params;

  const vid = videoRef.current;
  if (!vid || !heightSetterRef.current) return;

  let frameNumber = checkHeight(heightSetterRef.current.offsetTop, frameNumber || 0, playbackConst);

  const jumpInVideo = (time) => {
    vid.currentTime = time;
  };

  const videoAboveViewport = frameNumber > vid.duration + 1;
  const videoBelowViewport = frameNumber < 0;

  if (videoAboveViewport || videoBelowViewport) {
    if (videoBelowViewport) {
      limitedScrolling.reset(0);
      jumpInVideo(0);
    }

    if (videoAboveViewport) {
      limitedScrolling.reset(vid.duration);
      jumpInVideo(vid.duration);
    }

    window.setTimeout(() => {
      window.requestAnimationFrame(() => scrollPlay(params));
    }, 100);
    return;
  }

  const capped = limitedScrolling.set(frameNumber, vid.duration);

  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  const throttledFirefox = throttle(40); // This is used to throttle jumps in video in FF
  const throttledMobile = throttle(50); // This is used to throttle jumps in video in Mobile
  const throttledWindowCheck = throttle(500); // For testing purposes, e.g. console.logging

  if (isFirefox || isDeviceMobile()) {
    isFirefox
      ? throttledFirefox(() => jumpInVideo(capped))
      : throttledMobile(() => jumpInVideo(capped));
  } else {
    jumpInVideo(capped);
  }
  window.requestAnimationFrame(() => scrollPlay(params));
}

function throttle(delay) {
  var timeoutHandler = null;
  return function (callback) {
    if (timeoutHandler == null) {
      timeoutHandler = setTimeout(function () {
        callback();
        timeoutHandler = null;
      }, delay);
    }
  };
}

function checkHeight(elementYOffset, frameNumber, playbackConst) {
  let scrollLine = window.pageYOffset;
  let howMuchScrolled = scrollLine - elementYOffset === 0 ? 1 : scrollLine - elementYOffset;
  const frame = howMuchScrolled / playbackConst;
  return frame;
}

function ScrollingSpeedLimiter() {
  let previousFrameNumber;

  const differenceTwoNumbers = function (a, b) {
    return Math.abs(a - b);
  };

  return {
    set: (frameNumber, vidDuration) => {
      previousFrameNumber = previousFrameNumber > 0 ? previousFrameNumber : 0;

      const diff = differenceTwoNumbers(frameNumber, previousFrameNumber);

      const acceptedDiff = 0.04;

      if (diff > acceptedDiff) {
        if (frameNumber > previousFrameNumber) {
          frameNumber = previousFrameNumber + acceptedDiff;
        } else {
          frameNumber = previousFrameNumber - acceptedDiff;
        }
      }

      if (frameNumber > vidDuration - 0.1) frameNumber = vidDuration - 0.1;
      if (frameNumber < 0) frameNumber = 0;

      previousFrameNumber = frameNumber;

      return frameNumber;
    },
    reset: (time) => {
      previousFrameNumber = time;
    },
  };
}

export default ScrollingVideo;
