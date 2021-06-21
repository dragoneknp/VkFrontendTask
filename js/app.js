import data from "./data";
import makeSmiles from "./makeSmiles";
import makeSmilesCards from "./makeSmilesCards";
import placeCaret from "./placeCaret";
import underlineEmailHashLink from "./underlineEmailHashLink";
import switcherBetweenAllAndRecently from "./switcherBetweenAllAndRecently";
import putSmilesInInput from "./putSmilesInInput";
import openPopup from "./openPopup";
document.addEventListener("DOMContentLoaded", event => {
    event.preventDefault();
    const smileContent = document.querySelector(".popup-wrapper");
    let i = 5;

    data.forEach((item) => {
        smileContent.append(makeSmilesCards(item.items, item.title, i));
    })
  
   const textArea = document.querySelector(".message-content__textarea");
   const popupSection = document.querySelectorAll(".popup-wrapper");
   const recentlyUsed = document.querySelector(".recentlyUse");
   let lastSmiles = [];
   recentlyUsed.textContent = "";
   recentlyUsed.append(makeSmilesCards(lastSmiles));

   putSmilesInInput(textArea, i, smileContent, popupSection, recentlyUsed, lastSmiles);

   switcherBetweenAllAndRecently(textArea, recentlyUsed);
   openPopup(textArea);
   
    underlineEmailHashLink(textArea);
})