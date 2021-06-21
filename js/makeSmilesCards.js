import makeSmiles from "./makeSmiles";
function makeSmilesCards(array, title_="Недавние", i) {
    const div = document.createElement("div");
    div.classList.add("popup-section");
    const title = document.createElement("div");
    title.classList.add("popup-section__title");
    title.textContent = title_;
    const tempPopupSection = document.createElement("div");
    tempPopupSection.classList.add("popup-section__content");
    
    if (array.length === 0){
        div.append(title);
        div.append(tempPopupSection);
        return div;
    }
    
     array.forEach((item) => {
         makeSmiles(item, tempPopupSection, i);
     })
     
     div.append(title);
     div.append(tempPopupSection);
     return div;
}
export default makeSmilesCards