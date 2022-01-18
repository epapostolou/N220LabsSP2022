//Evan Apostolou
//1/18/2022
//n220

function setup() {
    createCanvas(800, 600);
    //make base face (circle with skin tone)
    fill(212, 167, 108);
    circle(400, 300, 300);
    //draw eyes
    fill(255, 255, 255);
    circle(350, 250, 30);
    circle(450, 250, 30);
    //draw lips
    stroke(117, 21, 52);
    strokeWeight(25);
    fill(212, 167, 108);
    arc(400, 350, 50, 50, 0, PI);
}


