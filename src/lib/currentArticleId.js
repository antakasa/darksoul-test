export function currentArticleId(){
    const articleId =  window.location.pathname.match(/3-(\d+)/) !== null && window.location.pathname.match(/3-(\d+)/)[0]
    return articleId

}