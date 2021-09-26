import {currentArticleId} from './currentArticleId';


function commentsApi(){
    const id = process.env.fourscale_id_prod;
    const key = process.env.fourscale_key_prod;

    const article = document.querySelector("article");
    if(article !== null && document.querySelectorAll("#yle-comments-plugin").length == 0) {
        const commentsNode = document.createElement('div');
        commentsNode.setAttribute("id", "yle-comments-plugin");
        article.appendChild(commentsNode);
    
        const articleId = currentArticleId();
        
        if(articleId) {
          if(articleId.includes("3-") && articleId.length > 3 && typeof comments !== 'undefined'){
            comments.core.initialize('production', id, key, 'fi');
            comments.core.mount(articleId)
            
            async function bindTunnus() {
              const tunnus = await window.yleTunnus({
                trackingAppName: '2020-11-featurepohja',
                initiatingApp: 'uutiset',
                environment: 'production'
              })
              // add your own click handlers to implement logIn/logOut functionality in your UI
              // ...
              await comments.core.bindTunnus(tunnus);
            }
  
            bindTunnus();
            
          }
        }
        
    }
    

    
  }

  export default commentsApi;