let qButtons = document.getElementsByClassName("question");
let dvAnswer = document.getElementById("answer");

//adds event listener to all the buttons
for (let i = 0; i < qButtons.length; i++) {
    qButtons[i].addEventListener("click", showCard);
}

function showCard(event) {
    //gets the data-answer and puts it into the div
    let fact = event.target.getAttribute("data-answer");
    dvAnswer.innerHTML = fact;
}