let el = document.createElement("div");
let text = "mc"
el.style.backgroundColor = "#32a852"
el.innerHTML = text;

el.onclick = function () {
    text = text + "div"
    el.innerHTML = text;


}

document.body.appendChild(el);


// McDiv'ns
// Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML. After 3 clicks, the div will show "divdivdiv"