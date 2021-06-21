
function underlineEmailHashLink(textArea){
    const regExpForEmail = /@\w+\.\w+/mgi;
    const regExpForHashTag = /#\w+/mgi;
    const regExpForMention = /@\w+/mgi
    const regExpForLinks = /^(http|https):\/\/[^ "]/;


    textArea.addEventListener("focusout", (event) => {
          const arr = textArea.textContent.split(" ");
          const newArr = arr.filter((item) => {
              
              return (item.match(regExpForEmail) || item.match(regExpForHashTag) || item.match(regExpForMention) || item.match(regExpForLinks))
          })
          
          
          newArr.forEach((item) => {
              item = item.trim();
              // check if it already wrapped
              if (textArea.innerHTML[textArea.innerHTML.indexOf(item) - 1] !== ">"){
                textArea.innerHTML = textArea.innerHTML.replace(item, `<a class="highlighted">${item}</a>`);
              }
              
          })
    textArea.addEventListener("focusin", () => {
      textArea.innerHTML = textArea.textContent;
    })
          
          
          
    })
  
  }
  
export default underlineEmailHashLink