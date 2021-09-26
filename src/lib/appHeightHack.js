import { isUsingApp } from "./isUsingApp";
import { viewportSize } from "./viewportFunctions";
export function appHeightHack() {

  function iOSSafariOrChrome(userAgent) {
    return /iP(ad|od|hone)/i.test(userAgent) &&
      /WebKit/i.test(userAgent) &&
      !(/(FxiOS|OPiOS|mercury)/i.test(userAgent));
    }

  //adjust scrollable #app container height
  const usingApp = isUsingApp();
  const usingIosSafariOrChrome = iOSSafariOrChrome(window.navigator.userAgent);
  document.querySelector("#app").style.height = usingApp ? "100vh" : usingIosSafariOrChrome ? "calc(" + viewportSize("height") + "px - 50px)" : "calc(100vh - 50px)";
}