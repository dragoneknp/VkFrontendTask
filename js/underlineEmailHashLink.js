
function underlineEmailHashLink(textArea){
    const regExpForEmail = /@\w+\.\w+/mgi;
    const regExpForHashTag = /#\w+/mgi;
    const regExpForMention = /@\w+/mgi
    const regExpForLinks = /^(http|https):\/\/[^ "]/;

    
    textArea.addEventListener("focusout", (event) => {
          
          const arr = textArea.textContent.split(" ");
          
          const newArr = arr.filter((item) => {
              item = item.trim();
              return (item.match(regExpForEmail) || item.match(regExpForHashTag) || item.match(regExpForMention) || item.match(regExpForLinks))
          })
          
          
          newArr.forEach((item) => {
              item = item.trim();
              // check if it already wrapped
              
              textArea.innerHTML = textArea.innerHTML.replaceAll(item, `<a class="highlighted">${item}</a>`);
              
              
          })
    textArea.addEventListener("focusin", () => {
      
      newArr.forEach((item) => {
        
        textArea.innerHTML = textArea.innerHTML.replaceAll(`<a class="highlighted">${item}</a>`, item);
      })  
      
    })
          
          
          
    })
  
  }
  
export default underlineEmailHashLink