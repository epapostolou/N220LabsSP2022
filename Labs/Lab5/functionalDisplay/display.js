let display = {
    width: 80,
    height: 60,
    color: "#104291",
    xPos: 200,
    yPos: 150,

}
function setup() {
    createCanvas(400, 300);

}
function rectangle(newColor) {
    display.color = newColor
    fill(display.color)
    rect(display.xPos, display.yPos, display.width, display.height);
}
function draw() {
    rectangle("#a436c2");
    console.log(display.color);
}