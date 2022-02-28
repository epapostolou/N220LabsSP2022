let beepbop = document.getElementById("beepbop")

for (var i = 0; i < 26; i++) {
    if (i % 15 == 0) {
        //if divisible by 3 and 5 - beepbop
        beepbop.innerHTML += "beepbop " + "<br/>"

    }
    else if (i % 3 == 0) {
        //elseif divisible by 3 - beep
        beepbop.innerHTML += "beep " + "<br/>"
        console.log(beepbop.innerHTML)
    }
    else if (i % 5 == 0) {
        //elseif divisible by 5 -bop
        beepbop.innerHTML += "bop " + "<br/>"
        console.log(beepbop.innerHTML)
    }
    else {
        beepbop.innerHTML += i + "<br/>"
    }

}


// Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.
// However,
// When the iterand is divisible by 3, write the word "beep" instead
// When the iterand is divisible by 5, write the word "bop" instead
// When the iterand is divisible by 3 AND 5, write "beepbop" instead