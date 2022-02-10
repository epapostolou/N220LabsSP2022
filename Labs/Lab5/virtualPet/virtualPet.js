let pet = {
    X: 400,
    Y: 200,
    Size: 40,
    offsetX: 5,
}

function setup() {
    createCanvas(800, 400)
}

function draw() {
    background("orange")

    if (mouseIsPressed === true && pet.offsetX >= 0) {
        pet.offsetX = pet.offsetX - 1;
    }
    else {
        pet.offsetX = pet.offsetX + 1;
    }


    circle(mouseX + pet.offsetX, mouseY, pet.Size);
    console.log(pet.offsetX);

}



// Create an object with properties for the x, y, and size of a circle. Add one more property: offsetX

// In the draw function,

//       if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero

//      if the mouse is up - add 1 to offsetX

//       draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.

// ( use if(mousePressed) { to check if the mouse is down. )