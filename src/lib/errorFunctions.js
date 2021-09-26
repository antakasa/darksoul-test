export function pushErrorTextToDOM(errorText, id){
    if(typeof document === "undefined") return 
    const el = document.querySelector("#plus-featurepohja-errorlist");
    if(el) {
        if(window.plusFeatureErrors == undefined) window.plusFeatureErrors = [];
        !window.plusFeatureErrors.includes(errorText) && window.plusFeatureErrors.push(errorText)
        el.innerHTML = "<br/>";
        window.plusFeatureErrors.map(eText => {
            el.innerHTML = el.innerHTML + eText + "<br/><br/>";
        })
        if(window.location.href.includes("localhost") || window.location.href.includes("esko.yle.fi")) el.style.display = "block"
    }
    
}
