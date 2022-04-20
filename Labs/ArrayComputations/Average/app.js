let input = document.getElementById("userInput");
let dvSum = document.getElementById("sum");
let dvAverage = document.getElementById("average");

function sumInput() {
    let numList = input.value;
    //splits the string
    let numSplit = numList.split(",");
    let numSum = 0;
    let numCount = 0;

    for (let i = 0; i < numSplit.length; i++) {
        //adds together the numbers plus one to calculate average
        let number = parseInt(numSplit[i]);
        numSum += number;
        numCount++;
    }

    let numAverage = numSum / numCount;
    dvSum.innerHTML = "The sum is " + numSum;
    dvAverage.innerHTML = "The average is " + numAverage;

    document.body.appendChild(dvSum);
    document.body.appendChild(dvAverage);
    //empties input 
    input.value = "";
}