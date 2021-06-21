import placeCaret from "./placeCaret";
import makeSmilesCards from "./makeSmilesCards";
function putSmilesInInput(textArea, i, smileContent, popupSection, recentlyUsed, lastSmiles){
    popupSection.forEach((item) => {
      item.addEventListener("click", (event) => {
          
          event.preventDefault();
          if (event.target.classList.contains("smile__item")){
              
              textArea.innerHTML += event.target.innerHTML;
              placeCaret(textArea);
              lastSmiles.unshift(event.target.innerHTML);
              lastSmiles = [...new Set(lastSmiles)].sort();
              
              lastSmiles.length = (lastSmiles.length < 25) ? lastSmiles.length : 25;

              recentlyUsed.textContent = "";
              recentlyUsed.append(makeSmilesCards(lastSmiles));
          }
          
          
        
          
          
     })
     item.addEventListener("keydown", (event) => {
         
      if (event.target.childNodes[0].classList.contains("smile__item") && event.key == "Enter"){
          event.preventDefault();
          textArea.textContent += event.target.childNodes[0].textContent;
          placeCaret(textArea);    
          lastSmiles.unshift(event.target.innerHTML);
          lastSmiles = [...new Set(lastSmiles)].sort();
          lastSmiles.length = (lastSmiles.length < 25) ? lastSmiles.length : 25;  

          recentlyUsed.textContent = "";
          recentlyUsed.append(makeSmilesCards(lastSmiles)); 
      }
      
      
  })
     })
  }
export default putSmilesInInput