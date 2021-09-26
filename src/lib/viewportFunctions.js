export function viewportSize(dimension) {
    if(typeof window === "undefined") return 0
    const canUseVisualViewport = typeof visualViewport !== "undefined";
    let value;
    if(dimension == "height") {
        value = canUseVisualViewport ? visualViewport.height : window.innerHeight;
    } else if (dimension == "width") {
        value = canUseVisualViewport ? visualViewport.width : window.innerWidth;
    }
    return value;
}

export function isElementInOrAboveViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.bottom <= (viewportSize("height") + rect.height || document.documentElement.clientHeight + rect.height) &&
      rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

export function isElementVisibleInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top - viewportSize("height") <= 0
    )
}

export function isVideoInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

export function elementDistanceFromViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        Math.abs(rect.top)
    );
}

export function isElementFullyInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= rect.height * -1 &&
        rect.left >= 0 &&
        rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

export function firstTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return (
        //text box is partially visible on top
        rect.top >= rect.height * -1 &&
        rect.left >= 0 &&
        //text box is partially visible on bottom
        rect.bottom <= (viewportSize("height") * 1.3 || document.documentElement.clientHeight * 1.3) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

export function lastTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return (
        //text box is partially visible on top
        rect.top >= viewportSize("height") * -.5 &&
        rect.left >= 0 &&
        //text box is partially visible on bottom
        rect.bottom <= (viewportSize("height") || document.documentElement.clientHeight) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

//use first and last textbox rules
export function onlyOneTextBoxViewportFunction(el) {
    var rect = el.getBoundingClientRect();
    return (
        //text box is partially visible on top
        rect.top >= viewportSize("height") * -.5 &&
        rect.left >= 0 &&
        //text box is partially visible on bottom
        rect.bottom <= (viewportSize("height") * 1.3 || document.documentElement.clientHeight * 1.3) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}



export function isTextBoxAlmostInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        //text box is partially visible on top
        rect.top >= rect.height * -1 &&
        rect.left >= 0 &&
        //text box is partially visible on bottom
        rect.bottom <= (viewportSize("height") + rect.height || document.documentElement.clientHeight + rect.height) &&
        rect.right <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}

  
export function isElementCloseToViewport(el, screenWidthBuffer) {
  var rect = el.getBoundingClientRect();

  var nearEnough;

  if(rect.left >= 0 && rect.top <= viewportSize("height") * (1 + screenWidthBuffer)) {
      nearEnough = true;
  } else if (rect.left >= 0 && Math.abs(rect.top) <= viewportSize("height") * (1 + screenWidthBuffer)) {
      nearEnough = true;
  } else {
      nearEnough = false;
  }
  
  return nearEnough
}

export function videoRelativeCloseToViewport(el, buffer) {
    var rect = el.getBoundingClientRect();

    var top = rect.top
    var windowHeight = viewportSize("height")
    var elHeight = rect.height

    if(rect.left >= 0 && top < windowHeight * buffer && elHeight * buffer * -1 < top) {
        return true;
    } else {
        return false;
    }

}

export function isElementFullyInViewportWithPadding(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom - 25 <= (viewportSize("height") || document.documentElement.clientHeight) &&
        rect.right  - 25 <= (viewportSize("width") || document.documentElement.clientWidth)
    );
}