function setup() {
    createCanvas(400, 300);
}
function draw() {
    background(0, 31, 61);
    if (mouseX <= 200) {
        fill('blue');
    }
    else {
        fill('red');
    }
    circle(mouseX, mouseY, 20);
}