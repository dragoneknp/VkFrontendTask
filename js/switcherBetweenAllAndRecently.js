import placeCaret from "./placeCaret";
function switcherBetweenAllAndRecently(textArea, recentlyUsed){
    const switcher = document.querySelector(".popup-footer");
    switcher.setAttribute("onresizestart", "return false");
    switcher.setAttribute("oncontrolselect", "return false");
    const allSmiles = document.querySelector(".allSmiles");
    const imgAllSmiles = document.querySelector(".popup-footer__allsmiles");
    const imgRecentlyUsed = document.querySelector(".popup-footer__recentlyseen")
    switcher.addEventListener("click", (event) => {
        event.preventDefault();
        
        if (event.target.nodeName === "IMG"){
            placeCaret(textArea);
            
            
            if (event.target.parentElement.classList.contains("popup-footer__allsmiles")){
                allSmiles.classList.add("visible");
                allSmiles.classList.remove("hidden");
                recentlyUsed.classList.remove("visible");
                recentlyUsed.classList.add("hidden");
                imgAllSmiles.classList.add("onfocus");
                imgRecentlyUsed.classList.remove("onfocus");
            }
            else{
                recentlyUsed.classList.add("visible");
                recentlyUsed.classList.remove("hidden");
                allSmiles.classList.remove("visible");
                allSmiles.classList.add("hidden");
                imgRecentlyUsed.classList.add("onfocus");
                imgAllSmiles.classList.remove("onfocus");
            }
        }
    })
 }
 export default switcherBetweenAllAndRecently