export function createNewNode(inputQuery, outputId){
    const inputNode = document.querySelector(inputQuery);
    if(inputNode !== null && document.querySelectorAll("#" + outputId).length == 0) {
        const outputNode = document.createElement('div');
        outputNode.setAttribute("id", outputId);
        inputNode.appendChild(outputNode);
    }
}
    