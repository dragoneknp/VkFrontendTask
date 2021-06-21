import placeCaret from "./placeCaret";
function openPopup(textArea){
    const openPopup = document.querySelector(".message-content__smileIcon");
    openPopup.setAttribute("onresizestart", "return false");
    openPopup.setAttribute("oncontrolselect", "return false");
    const popup = document.querySelector(".popup")
    openPopup.addEventListener("click", (event) => {
      event.preventDefault();
      placeCaret(textArea);
      popup.classList.toggle("open");
      popup.classList.toggle("close");
    })
 }

export default openPopup