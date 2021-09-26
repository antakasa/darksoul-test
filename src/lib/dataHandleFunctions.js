import fetchIMSimage from "./fetchIMSimage";

export async function formatFetchedData  (d) {
  const type = d.type.replace(" ", "");
  const value = d.value;
  const id = d.id.replace(" ", "");
  //mediaFormat: "image" / mediaFormat: "video" / mediaFormat: "imsImage" / ignore if type includes kone
  const mediaFormat = imageOrVideo(d.id, d.type.includes("kone") || d.type.includes("palautelomake"));

  //reformat style string (for example kuvasuhde:16:9&2:3;) to object 
  let style = {};
  Object.keys(d).includes("style") ? style = styleObject(d.style) : null;

  //fetch imsdata if it's imsImage
  let imsData = mediaFormat == "imsImage" ? await fetchIMSimage(id) : null;

  const aspectRatio = Object.keys(style).includes("kuvasuhde") ? style.kuvasuhde : null;

  const altText = Object.keys(style).includes("alt") ? style.alt[0] : imsData == null ? null : imsData.alt; 
  //save desktop and mobile images as array [urlDesktop, urlMobile]
  let urls = desktopAndMobileUrl(mediaFormat, aspectRatio, id, imsData)

  let dataObj = {type, value, id, mediaFormat, style, imsData, urls, altText}
  return dataObj
}

export function filterData(data,key,searchTerms,nestData){
    let filteredData = [];
    //map throught data
    data.map(d => {
      //if searchTerms are array, map through given possible values
      if(typeof searchTerms == "object") {
        searchTerms.map(searchTerm => {
          //push if value in list
          d[key].includes(searchTerm) && filteredData.push(d)
        })
      //if searchTerms is text
      } else {
        d[key].includes(searchTerms) && filteredData.push(d)
      }
    })

    //nest array into smaller arrays 
    //[[scrolly1data], [scrolly2data]] 
    if(nestData){
      const nestedData = [];
      
      filteredData.map(d => {
        //scrolly1 f. ex.
        const elementNumber = d.type.match(/\d+/)[0]
        //scrolly1 = array[0] in nestedData
        const arrNumber = elementNumber - 1;
        //if array not yet in data then make empty array
        nestedData[arrNumber] = nestedData[arrNumber] == undefined ? [] : nestedData[arrNumber];
        //push karuselli data to nested array
        nestedData[arrNumber].push(d)
        
      })
      filteredData = nestedData;
    }

    return filteredData;
}

export function styleObject(styleString){
    //styles are separeted with ;
    const styleArray = styleString.split(";")
    const styleObject = {};

    //console.log(styleArray)
    styleArray.map(styleString => {
      //style name is separated with :
      //for example "Kuvasuhde:16:9&2:3"
      const styleKey = styleString.split(":")[0];
      let styleValue = styleString.split(":").slice(1).join(":");
      styleValue = styleValue.split("&");
      styleKey.length > 0 ? styleObject[styleKey] = styleValue : null;

    })

    return styleObject
}

export function imageOrVideo(id,ignore){
  
  if (id.length == 0) {
    //if no id then return null
    return null;
  } else if (ignore) {
    return null;
  }

  const type = id.startsWith("http") ? "web" : "ims";
  if(type == "ims") {
    return "imsImage";
  } else {
    const mediaFormat = id.endsWith("mp4") ? "webVideo" : "webImage"
    return mediaFormat;
  }
}

export function desktopAndMobileUrl(mediaFormat, aspectRatio, id, imsData) {
  //console.log(mediaFormat, aspectRatio, imsData)
  if(mediaFormat == "imsImage") {
    //console.log(imsData["16:9"])
    const urlsArray = aspectRatio !== null && imsData !== undefined ? [imsData[aspectRatio[0]], imsData[aspectRatio[1]]] : aspectRatio == null && imsData !== undefined ? [imsData["16:9"], imsData["16:9"]] : [id, id]
    return urlsArray;
  } else if (mediaFormat == "webImage") {
    const urlsArray = aspectRatio !== null ? [aspectRatio[0], aspectRatio[1]] : [id, id]
    return urlsArray
  } else if (mediaFormat == "webVideo") {
    const urlsArray = aspectRatio !== null ? [aspectRatio[0] + "#t=0.1", aspectRatio[1] + "#t=0.1"] : [id  + "#t=0.1", id  + "#t=0.1"]
    return urlsArray
  }
}