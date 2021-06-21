function placeCaret(element) {
    const range = document.createRange();
    const sel = function() {
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(range);
    };
    element.focus();
    range.selectNodeContents(element);
    range.collapse(false);
    sel();
};
export default placeCaret;