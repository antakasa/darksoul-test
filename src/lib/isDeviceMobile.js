import { viewportSize } from "./viewportFunctions";

export const maxWidth = 550;
export const orientation = "portrait";

export function isDeviceMobile(){
    const screenWidth = viewportSize("width");
    const screenHeight = viewportSize("height");
    const mobile = screenHeight > screenWidth && screenWidth <= maxWidth ? true : false;
    return mobile;
}
