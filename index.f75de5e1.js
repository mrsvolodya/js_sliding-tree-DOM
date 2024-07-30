"use strict";
const li = Array.from(document.querySelectorAll("li"));
li.forEach((item)=>{
    if (item.querySelector("ul") !== null) {
        const span = document.createElement("span");
        const text = document.createTextNode(item.firstChild.textContent);
        span.appendChild(text);
        item.firstChild.textContent = "";
        item.insertAdjacentElement("afterbegin", span);
    }
});
function checkCssProperty(element) {
    const style = window.getComputedStyle(element);
    return style.getPropertyValue("display") === "none";
}
document.querySelector(".tree").addEventListener("click", (e)=>{
    const element = e.target.parentElement.querySelector("ul");
    if (checkCssProperty(element)) element.style.cssText = `display: block`;
    else element.style.cssText = `display: none`;
});

//# sourceMappingURL=index.f75de5e1.js.map
