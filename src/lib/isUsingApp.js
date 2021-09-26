export function isUsingApp(){
    if(typeof window === "undefined") return
    const currentUrl = window.location.href;
    return currentUrl.includes("article-renderer") || currentUrl.includes("about:srcdoc") ? true : false;
}