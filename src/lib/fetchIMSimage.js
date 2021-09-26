import {pushErrorTextToDOM} from './errorFunctions';

/////////////////
//MAIN FUNCTION//
/////////////////

async function fetchIMSimage(IMSid, bgColor){
    const app_id = process.env.app_id_prod;
    const app_key = process.env.app_key_prod;

    const imageInformation = await getImageInformation(IMSid, app_id, app_key);
    //console.log(imageInformation)
    if(Object.keys(imageInformation).includes("data")) {
        const formattedData = await formatImageInformation(imageInformation, bgColor);
        return formattedData;
    } else {
        pushErrorTextToDOM("#ERR - Ei kelvollinen IMS-id:" + IMSid)
    }
    
    
}


//Contains crop and other information for image
async function getImageInformation(IMSid, app_id, app_key){
    //Example url https://json-storage.api.yle.fi/v1/collection/ims-images-v1/document/36-39-6740315eba7a57d2e87?app_id=HIEKKALAATIKKO&app_key=HIEKKALAATIKKO
    //console.log(app_id)
    const url = `https://json-storage.api.yle.fi/v1/collection/ims-images-v1/document/36-${IMSid}?app_id=${app_id}&app_key=${app_key}`
    //console.log(url)
    try {
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        return data;
    } catch(e){
        console.log("dataError", e)
        return ;  
    }
}

//return crop and alt text from data
async function formatImageInformation(data, bgColor){

    //console.log(data.data)
    let altTag = Object.keys(data.data).includes("alt") && data.data.alt.filter(d => d.language == "fin")
    let imageInformation = {type: "img", bgColor: bgColor, alt: altTag.length > 0 ? altTag[0].value : null};
    
    const aspectRatios = ["16:9","2:3","1:1","5:2"];

    aspectRatios.map(async ratio => imageInformation[ratio] = await imsUrl(data, ratio))
    imageInformation["o"] = `https://images.cdn.yle.fi/image/upload/f_auto,q_auto,h_1080/v1614062693/${data.data.publicId}.jpg`

    return imageInformation;

}

//Get ims url for image
async function imsUrl(data, ratio){


    //console.log(data.data)
    //Cropping
    const cropInfo = data.data.crops.filter(d => d.name == ratio)

    if(cropInfo.length > 0) {

        const xPos = cropInfo[0].coordinates.x;
        const yPos = cropInfo[0].coordinates.y;
        const width = cropInfo[0].coordinates.width;
        const height = cropInfo[0].coordinates.height;

        //Scale image to fullHD
        const scaleWidth = 1920/width;
        const scaleHeight = 1080/height;
        const scale = scaleHeight < scaleWidth ? scaleHeight : scaleWidth;

        const outputWidth = Math.round(width*scale);
        const outputHeight = Math.round(height*scale);

        //ID
        const imageID = data.data.publicId;

        const url = `https://images.cdn.yle.fi/image/upload/w_${width},h_${height},x_${xPos},y_${yPos},f_auto,fl_lossy,q_auto:best,c_crop/w_${outputWidth},h_${outputHeight},dpr_1/${imageID}.jpg`
        return url;

    }
}

export default fetchIMSimage;