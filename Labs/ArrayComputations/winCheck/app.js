let input = document.getElementById("userInput");
let dvResult = document.getElementById("result")

function checkWin() {
    let numList = input.value;
    let numSplit = numList.split(",");
    let winCon = 0;
    let result = "Not a winner"

    for (let i = 0; i < numSplit.length; i++) {
        //converts string into a number
        let number = parseInt(numSplit[i]);

        //checks if 1, if so, add to the win condition
        if (number == 1) {
            winCon++;
        } else if (winCon == 3) {
            result = "Winner!";
        } else {
            winCon = 0;
            result = "Not a winner";
        }
    }


    dvResult.innerHTML = result;
    document.body.appendChild(dvResult);
    //empties input
    input.value = "";
}