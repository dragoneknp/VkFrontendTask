function makeSmiles(it, cont, i) {
    const link = document.createElement("a");
    link.tabIndex = i;
    i++;
    link.classList.add("smile");
    link.setAttribute("onresizestart", "return false");
    link.setAttribute("oncontrolselect", "return false");
    link.style.cssText = `
        width: 26px;
        height: 26px;
        text-decoration: none;
        display: inline-block;
        `;
    const bg = document.createElement("div");
    bg.classList.add("smile__item");
    bg.textContent = it;
    
    link.append(bg);
    cont.append(link);
}
export default makeSmiles 