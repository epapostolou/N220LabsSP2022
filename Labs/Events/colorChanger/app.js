var dvSquares = document.getElementsByClassName('listener');

//adds event listener to each square
for (let i = 0; i < dvSquares.length; ++i) {
    dvSquares[i].addEventListener('click', changeColor)
}

function changeColor() {
    //gets data-color and sets the square to the right color on click
    this.style.backgroundColor = this.getAttribute('data-color');
}