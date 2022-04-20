let userInput = document.getElementById("sentence");
let dvFound = document.getElementById("found");
let dvWordCount = document.getElementById("wordCount");

function sentenceSplit() {
    let sentence = userInput.value;
    //splits the sentence at every space
    let splitSentence = sentence.split(" ");
    let wordCount = 0;
    let isFound = "not found";

    for (let i = 0; i < splitSentence.length; i++) {
        //checks for bad words, tallies amount of bad words found
        if (splitSentence[i] == "clear") {
            wordCount++;
            isFound = "Found";
        } else if (splitSentence[i] == "water") {
            wordCount++;
            isFound = "Found";
        } else if (splitSentence[i] == "tires") {
            wordCount++;
            isFound = "Found";
        }
        else {
            isFound = "Not found";
        }

    }

    dvFound.innerHTML = isFound;
    dvWordCount.innerHTML = wordCount + " bad words found.";

    document.body.appendChild(dvFound);
    document.body.appendChild(dvWordCount);
    //empties input
    userInput.value = "";
}