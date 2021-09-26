import React, {useState, useRef, useEffect, useCallback} from 'react';
import * as s from './ShareButtons.styled';
import {isUsingApp} from '../../../lib/isUsingApp'


function changeSomeButtonUrl(someHref) {
    const ref = useRef(null)
    const setRef = useCallback(node => {
      if (ref.current) {
        // Make sure to cleanup any events/references added to the last instance
      }
      
      if (node) {
        // Check if a node is actually passed. Otherwise node would be null.
        // You can now do what you need to, addEventListeners, measure, etc.
        node.href = someHref;
        //change icon visibility - no icons in yle.fi app
        //node.style.display = currentUrl.includes("article-renderer") ? "none" : "block";
      }
      
      // Save a reference to the node
      ref.current = node
    }, [])
    
    return [setRef]
}

function closeMenu(setShowMenu, ref){

    useEffect(() => {
        //flips image opacity based on if text is in viewport
        const clickedOutsideMenu = (event) => {
            if(ref.current !== null) {
                if(event.target !== ref.current && event.target.parentNode !== ref.current) {
                    setShowMenu(false)
                }
            }
        };
        window.addEventListener("mouseup", clickedOutsideMenu, { passive: true });
        return () => window.removeEventListener("mouseup", clickedOutsideMenu);
    }, []);
    
}



function ShareIcon(props) {
    const {fill} = props;
    
    return (
        <svg height="24" role="img" viewBox="0 0 24 24" width="24">
            <s.Path fill={fill} d="M12.7071 2.29289C12.3166 1.90237 11.6834 1.90237 11.2929 2.29289L6.29289 7.29289C5.90237 7.68342 5.90237 8.31658 6.29289 8.70711C6.68342 9.09763 7.31658 9.09763 7.70711 8.70711L11 5.41421V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V5.41421L16.2929 8.70711C16.6834 9.09763 17.3166 9.09763 17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L12.7071 2.29289ZM4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V19C2 19.7956 2.31608 20.5587 2.87866 21.1213C3.44128 21.684 4.20437 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V19C20 19.2652 19.8947 19.5195 19.7071 19.7071C19.5195 19.8947 19.2652 20 19 20H5C4.73477 20 4.48043 19.8946 4.29292 19.7071C4.10534 19.5195 4 19.2652 4 19V15Z"></s.Path>
        </svg>
    )
}

const Twitter = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M23.1539 5.13092C22.3301 5.49231 21.4523 5.73185 20.537 5.84815C21.4786 5.286 22.1972 4.40262 22.535 3.33785C21.6572 3.86123 20.6879 4.23092 19.655 4.43723C18.8215 3.54969 17.6335 3 16.3375 3C13.823 3 11.7987 5.04092 11.7987 7.54292C11.7987 7.90292 11.8292 8.24908 11.9039 8.57862C8.1281 8.39446 4.78702 6.58477 2.54256 3.828C2.15072 4.50785 1.92087 5.286 1.92087 6.12369C1.92087 7.69662 2.73087 9.09092 3.93825 9.89815C3.20856 9.88431 2.49272 9.67246 1.88625 9.33877C1.88625 9.35262 1.88625 9.37062 1.88625 9.38862C1.88625 11.5957 3.46056 13.4289 5.52502 13.8512C5.15533 13.9523 4.75241 14.0008 4.33425 14.0008C4.04348 14.0008 3.74995 13.9842 3.47441 13.9232C4.06287 15.7218 5.73272 17.0442 7.71825 17.0871C6.17302 18.2958 4.21102 19.0242 2.08702 19.0242C1.82417 19.0242 1.70746 19.3895 1.93968 19.5126C3.73883 20.4667 5.78588 21 7.96748 21C16.325 21 20.8943 14.0769 20.8943 8.076C20.8943 7.87523 20.8873 7.68139 20.8776 7.48892C21.779 6.84923 22.5364 6.05031 23.1539 5.13092Z"></path></svg>
const Facebook = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.286 3H14.07c-2.18 0-3.65 1.31-3.64 3.643V9.07H8v2.43h2.42l.009 8.5h2.428v-8.5h2.064l.365-2.429h-2.429V6.984c0-1.555.694-1.555 1.85-1.555h.579V3z"></path></svg>
const Whatsapp = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19.1939 4.80609C17.3844 2.99652 14.9785 2 12.4194 2C9.86035 2 7.45441 2.99652 5.64484 4.80609C3.83527 6.61566 2.83879 9.02152 2.83879 11.5806C2.83879 13.2016 3.24914 14.7946 4.02805 16.2057L2 22L7.79426 19.972C9.20535 20.7508 10.7983 21.1612 12.4194 21.1612C14.9784 21.1612 17.3844 20.1646 19.1939 18.3551C21.0034 16.5456 22 14.1397 22 11.5806C22 9.02148 21.0034 6.61562 19.1939 4.80609ZM17.1557 15.1396L16.0496 16.2457C15.1334 17.162 12.5336 16.0478 10.2429 13.7571C7.95219 11.4664 6.83801 8.86668 7.7543 7.95039L8.86031 6.84438C9.08938 6.61531 9.46078 6.61531 9.68984 6.84438L11.0724 8.22691C11.3014 8.45598 11.3014 8.82738 11.0724 9.05645L10.2429 9.88598C11.0475 11.5847 12.4153 12.9525 14.114 13.7571L14.9436 12.9276C15.1726 12.6985 15.544 12.6985 15.7731 12.9276L17.1556 14.3101C17.3847 14.5392 17.3847 14.9106 17.1557 15.1396Z"></path></svg>
const LinkedIn = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2.3999 4.7039C2.3999 3.4319 3.4319 2.3999 4.7039 2.3999C5.9759 2.3999 7.0079 3.4319 7.0079 4.7039C7.0079 5.9759 5.9759 7.0319 4.7039 7.0319C3.4319 7.0319 2.3999 5.9759 2.3999 4.7039ZM16.8239 8.47192C20.8559 8.47192 21.5999 11.0867 21.5999 14.5679L21.7447 20.5517C21.7583 21.1133 21.3068 21.5759 20.745 21.5759H18.6159C18.0636 21.5759 17.6159 21.1282 17.6159 20.5759V15.3359C17.6159 13.8479 17.5919 11.9519 15.5519 11.9519C13.4879 11.9519 13.1759 13.5599 13.1759 15.2399V20.5999C13.1759 21.1522 12.7282 21.5999 12.1759 21.5999H10.1919C9.63962 21.5999 9.19189 21.1522 9.19189 20.5999V9.78392C9.19189 9.23164 9.63962 8.78392 10.1919 8.78392H12.0079C12.5602 8.78392 13.0079 9.23164 13.0079 9.78392V10.5359H13.0559C13.5839 9.52793 14.8799 8.47192 16.8239 8.47192ZM2.71191 9.78394C2.71191 9.23165 3.15963 8.78394 3.71191 8.78394H5.69591C6.2482 8.78394 6.69591 9.23165 6.69591 9.78394V20.5999C6.69591 21.1522 6.2482 21.5999 5.69591 21.5999H3.71191C3.15963 21.5999 2.71191 21.1522 2.71191 20.5999V9.78394Z"></path></svg>
const Email = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M1 5.99732L1 18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.01662L23.0001 6.00217C23.0002 5.99397 23.0001 5.98577 22.9999 5.97757C22.9878 4.33554 21.6448 3 20 3H4C2.34861 3 1.00146 4.34626 1 5.99732ZM3.10657 5.55396C3.27195 5.22693 3.61203 5 4 5H20C20.388 5 20.7281 5.22696 20.8935 5.55404L12.0001 11.7794L3.10657 5.55396ZM21 7.92077V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92069L11.4266 13.8193C11.7709 14.0603 12.2292 14.0603 12.5735 13.8193L21 7.92077Z"></path></svg>
const Copy = () => <svg aria-label="" fill="#000000" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M3.17157 9.17157C3.92172 8.42143 4.93913 8 6 8H9C9.55229 8 10 7.55228 10 7C10 6.44772 9.55229 6 9 6H6C4.4087 6 2.88258 6.63214 1.75736 7.75736C0.632141 8.88258 0 10.4087 0 12C0 13.5913 0.632141 15.1174 1.75736 16.2426C2.31451 16.7998 2.97595 17.2417 3.7039 17.5433C4.43185 17.8448 5.21207 18 6 18H9C9.55229 18 10 17.5523 10 17C10 16.4477 9.55229 16 9 16H6C5.47471 16 4.95457 15.8965 4.46927 15.6955C3.98396 15.4945 3.54301 15.1999 3.17157 14.8284C2.42143 14.0783 2 13.0609 2 12C2 10.9391 2.42143 9.92172 3.17157 9.17157ZM15 6C14.4477 6 14 6.44772 14 7C14 7.55228 14.4477 8 15 8H18C18.5253 8 19.0454 8.10346 19.5307 8.30448C20.016 8.5055 20.457 8.80014 20.8284 9.17157C21.1999 9.54301 21.4945 9.98396 21.6955 10.4693C21.8965 10.9546 22 11.4747 22 12C22 12.5253 21.8965 13.0454 21.6955 13.5307C21.4945 14.016 21.1999 14.457 20.8284 14.8284C20.457 15.1999 20.016 15.4945 19.5307 15.6955C19.0454 15.8965 18.5253 16 18 16H15C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H18C18.7879 18 19.5681 17.8448 20.2961 17.5433C21.0241 17.2417 21.6855 16.7998 22.2426 16.2426C22.7998 15.6855 23.2417 15.0241 23.5433 14.2961C23.8448 13.5681 24 12.7879 24 12C24 11.2121 23.8448 10.4319 23.5433 9.7039C23.2417 8.97595 22.7998 8.31451 22.2426 7.75736C21.6855 7.20021 21.0241 6.75825 20.2961 6.45672C19.5681 6.15519 18.7879 6 18 6H15ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z"></path></svg>

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

export default function ShareButtons(props){
    const {eskoHeadline, eskoLead, uutisetOrUrheilu} = props;

    const [showMenu, setShowMenu] = useState(false)

    const currentUrl = window.location.href;
   
    const shareWhatsapp = currentUrl + "?utm_source=whatsapp-share&utm_medium=social";
    const whatsappCopy = eskoHeadline;
    const whatsappHref= "whatsapp://send?text=" + encodeURIComponent(whatsappCopy) + encodeURIComponent(' ') + shareWhatsapp + "&display=popup&ref=plugin&src=like&kid_directed_site=0";
    const [whatsappEl] = changeSomeButtonUrl(whatsappHref)

    const shareTwitter = currentUrl + "?utm_source=twitter-share&utm_medium=social";
    const twitterCopy = uutisetOrUrheilu == "uutiset" ? eskoHeadline + " #yleuutiset" : eskoHeadline + " #yleurheilu";
    const twitterHref= "https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(shareTwitter) + "&ref_src=twsrc%5Etfw&text=" + encodeURIComponent(twitterCopy) + "&tw_p=tweetbutton&url=" + encodeURIComponent(shareTwitter);
    const [twitterEl] = changeSomeButtonUrl(twitterHref)

    const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&display=popup&ref=plugin&src=like&kid_directed_site=0`
    const [facebookEl] = changeSomeButtonUrl(facebookHref)

    const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    const [linkedInEl] = changeSomeButtonUrl(linkedInHref)

    const emailHref = `mailto:?subject=${encodeURIComponent(eskoHeadline)}&body=${encodeURIComponent(eskoLead)}%0D%0A%0D%0A${encodeURIComponent(currentUrl)}`
    const [emailEl] = changeSomeButtonUrl(emailHref)

    const shareMenu = useRef(null);
    closeMenu(setShowMenu, shareMenu)

    return(
        <s.ShareButtonsContainer isUsingApp={isUsingApp()}>
            <s.ShareButton onClick={() => setShowMenu(!showMenu)}>
                <ShareIcon fill={window.matchMedia('(prefers-color-scheme: dark)').matches ? window.plusFeature.dark.color : window.plusFeature.light.color} />
            </s.ShareButton>
            <s.ShareNavi showMenu={showMenu} ref={shareMenu}>
                <s.Ul role="menubar" aria-label="Jaa artikkeli">
                    <s.Li role="none">
                        <s.Link ref={twitterEl} target="_blank" href="" role="menuitem" aria-label="Jaa artikkeli Twitterissä">
                            <s.SVGandText>
                                <Twitter />
                                <s.SomeText>Twitter</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                    <s.Li role="none">
                        <s.Link ref={facebookEl} target="_blank" role="menuitem" aria-label="Jaa artikkeli Facebookissa">
                            <s.SVGandText>
                                <Facebook />
                                <s.SomeText>Facebook</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                    <s.Li role="none">
                        <s.Link ref={whatsappEl} role="menuitem" aria-label="Jaa artikkeli Whatsappissa">
                            <s.SVGandText>
                                <Whatsapp />
                                <s.SomeText>Whatsapp</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                    <s.Li role="none">
                        <s.Link ref={linkedInEl} target="_blank" role="menuitem" aria-label="Jaa artikkeli Linkedinissä">
                            <s.SVGandText>
                                <LinkedIn />
                                <s.SomeText>Linkedin</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                    <s.Li role="none">
                        <s.Link ref={emailEl} role="menuitem" aria-label="Jaa artikkeli sähköpostilla">
                            <s.SVGandText>
                                <Email />
                                <s.SomeText>Sähköposti</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                    <s.Li role="none">
                        <s.Link onClick={() => copyToClipboard(currentUrl)} role="menuitem" aria-label="Kopioi linkki">
                            <s.SVGandText>
                                <Copy />
                                <s.SomeText>Kopioi linkki</s.SomeText>
                            </s.SVGandText>
                        </s.Link>
                    </s.Li>
                </s.Ul>
                
            </s.ShareNavi>
        </s.ShareButtonsContainer>
    )
}