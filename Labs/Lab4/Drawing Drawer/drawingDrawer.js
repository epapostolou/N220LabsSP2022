
function drawRocket() {
    rect(mouseX, mouseY, 30, 60)
    triangle(mouseX + 15, mouseY - 40, mouseX - 15, mouseY, mouseX + 45, mouseY);
    console.log("rocket");
}
function drawTarget(offset) {
    noFill();
    circle(mouseX - offset, mouseY - offset, 5);
    circle(mouseX - offset, mouseY - offset, 15);
    circle(mouseX - offset, mouseY - offset, 25);

}
function setup() {
    createCanvas(800, 600);


}
function draw() {
    background(250);
    drawRocket();
    drawTarget(50);
    drawTarget(-80);
}