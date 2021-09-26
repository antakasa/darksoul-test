export function parseDataUrl(){
  let xpath = getElementByXpath("//link[contains(@href, 'featurepohja')]")
    if (xpath!==null) {
      let hashes = xpath.href.split("#");
      hashes.shift() 
      return hashes[0]
    } else {
      return "https://plus.yle.fi/lambda_sheets/yleisfeature/2020-12-pohjan-kehitykseen-feature-esimerkki/data.json";
      //return "https://plus.yle.fi/lambda_sheets/yleisfeature/2021-02-hyotyjat_rokotevastaisuus/data.json"
    }
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

export async function fetchData(url){
    try{
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch(e){
      console.log("dataError", e)
      return [];
    }  
  }