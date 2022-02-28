let el = document.createElement("div");
el.style.width = "100px";
el.style.height = "100px"
el.style.backgroundColor = "#0726db"

el.onmouseover = function () {
    el.style.backgroundColor = "#050505"
}
el.onmouseout = function () {
    el.style.backgroundColor = "#0726db"

}

document.body.appendChild(el)

// Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.