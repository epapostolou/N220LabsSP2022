var dvOutput = document.querySelector("#rgbCode");
var btnOne = document.querySelector("#btnOne");
var btnTwo = document.querySelector("#btnTwo");
var btnThree = document.querySelector("#btnThree");
var btnFour = document.querySelector("#btnFour");
var btnFive = document.querySelector("#btnFive");
var btnSix = document.querySelector("#btnSix");
var btnSeven = document.querySelector("#btnSeven");
var btnEight = document.querySelector("#btnEight");
var btnNine = document.querySelector("#btnNine");
var colorDiv = document.querySelector("#colorDiv");

var redVal = 0;
var blueVal = 0;
var greenVal = 0;


//event listeners
btnOne.addEventListener("click", btnClick1);
btnTwo.addEventListener("click", btnClick2);
btnThree.addEventListener("click", btnClick3);
btnFour.addEventListener("click", btnClick4);
btnFive.addEventListener("click", btnClick5);
btnSix.addEventListener("click", btnClick6);
btnSeven.addEventListener("click", btnClick7);
btnEight.addEventListener("click", btnClick8);
btnNine.addEventListener("click", btnClick9);

//adds to color value and updates background color
function btnClick1(event) {
    redVal = redVal + 1;
    colorChange();
}

function btnClick2(event) {
    blueVal = blueVal + 1;
    colorChange();
}

function btnClick3(event) {
    greenVal = greenVal + 1;
    colorChange();
}

function btnClick4(event) {
    redVal = redVal + 5;
    colorChange();
}

function btnClick5(event) {
    blueVal = blueVal + 5;
    colorChange();
}

function btnClick6(event) {
    greenVal = greenVal + 5;
    colorChange();
}

function btnClick7(event) {
    redVal = redVal + 10;
    colorChange();
}

function btnClick8(event) {
    blueVal = blueVal + 10;
    colorChange();
}

function btnClick9(event) {
    greenVal = greenVal + 10;
    colorChange();
}

//displays updated color and numbers
function colorChange() {
    colorDiv.style.backgroundColor = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
    dvOutput.innerHTML = "Current Color: rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
}