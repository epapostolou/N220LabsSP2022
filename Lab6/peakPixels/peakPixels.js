let dvSquare = document.createElement("div");
let size = 100

dvSquare.style.backgroundColor = "#32a852"
dvSquare.style.width = size + "px"
dvSquare.style.height = size + "px"
function bigger() {
    size = size * 1.1
}
dvSquare.onclick = function () {
    size = size * 1.1
    dvSquare.style.width = size + "px"
    dvSquare.style.height = size + "px"
};

document.body.appendChild(dvSquare);
console.log(dvSquare);