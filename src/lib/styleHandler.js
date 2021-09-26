export function styleHandlerWithDefaults(contentType, styles){
    if(contentType == "picture") {
        return {
            "mediaCredits": keySniffer(styles, "kuvatieto", ""),
            "mediaCreditsColor": keySniffer(styles, "kuvatietoväri", "black"),
            "mediaCreditsBackground": keySniffer(styles, "kuvatietotausta", "transparent"),
            "width": keySniffer(styles, "leveys", 100),
            "maxWidth": keySniffer(styles, "maxleveys", "800px"),
            "imageBackground": keySniffer(styles, "kuvatausta", undefined),
            "horizontalObjectPosition": keySniffer(styles, "keskikohta", "50"),
            "feature": keySniffer(styles, "feature", "on")

        }
    } else if (contentType == "video") {
        return {
            "audio": keySniffer(styles, "ääni", false)[0] == "on" ? true : false,
            "preload": keySniffer(styles, "preload", "off")[0] == "on" ? true : false,
            "horizontalObjectPosition": keySniffer(styles, "keskikohta", "50"),
            "autoplay": keySniffer(styles, "autoplay", "on")[0] == "off" ? false : true,
            "iconColor": keySniffer(styles, "ikoniväri", "white"),
            "width": keySniffer(styles, "leveys", 100),
            "maxWidth": keySniffer(styles, "maxleveys", "800px"),
            "mediaCredits": keySniffer(styles, "kuvatieto", ""),
            "mediaCreditsColor": keySniffer(styles, "kuvatietoväri", "black"),
            "mediaCreditsBackground": keySniffer(styles, "kuvatietotausta", "transparent"),
            "controls": keySniffer(styles, "autoplay", "on")[0] == "off" ? true : false,
            "imageBackground": keySniffer(styles, "kuvatausta", undefined),
            "feature": keySniffer(styles, "feature", "on")

        }
    } else if (contentType == "otsikko") {
        return {
            "fontSize": keySniffer(styles, "fonttikoko", "3em"),
            "backgroundColor": keySniffer(styles, "artikkelitausta", "white"),
            "darkmode": keySniffer(styles, "darkmode", "off")
        }
    } else if (contentType == "skrolli") {
        return {
            "textContainerBackground": keySniffer(styles, "tekstitausta", "black"),
            "textColor": keySniffer(styles, "tekstiväri", "white")
        }
    } else if (contentType == "sitaatti") {
        return {
            "textContainerBackground": keySniffer(styles, "tekstitausta", "black"),
            "textColor": keySniffer(styles, "tekstiväri", "#F8F9FA"),
            "fontSize": keySniffer(styles, "fonttikoko", "32px"),

        }
    }
}

//tries to find styling style object, if couldn't find return default
function keySniffer(styleObj, itemName, fallback) {
    const sniffedValue = Object.keys(styleObj).includes(itemName) ? styleObj[itemName] : [fallback];
    return sniffedValue;
}


