export async function fetchFromArticlesApi(articleId) {
    const app_id = process.env.articles_api_id;
    const app_key = process.env.articles_api_key;

    const articleInformation = await getArticleInformation(articleId, app_id, app_key);
    if(Object.keys(articleInformation).includes("data")) {
        return articleInformation.data[0]
    } else {
        return []
    }
        

}

//Contains crop and other information for image
async function getArticleInformation(articleId, app_id, app_key){
    //Example url https://json-storage.api.yle.fi/v1/collection/ims-images-v1/document/36-39-6740315eba7a57d2e87?app_id=HIEKKALAATIKKO&app_key=HIEKKALAATIKKO
    
    const url = `https://articles.api.yle.fi/v2/articles.json?app_id=${app_id}&app_key=${app_key}&id=${articleId}`
    
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