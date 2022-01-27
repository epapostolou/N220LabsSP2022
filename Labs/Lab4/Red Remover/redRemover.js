let c;
function setup() {
    createCanvas(400, 400);



}
function removeRed() {
    c.setRed(0);

}
function draw() {
    c = color(170, 200, 150)
    fill(c);
    circle(100, 200, 20)
    removeRed();
    fill(c);
    circle(300, 200, 20)

}