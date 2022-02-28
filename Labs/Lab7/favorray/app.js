let array = ["Counter Strike: Global Offensive", "Smite", "The Binding of Isaac: Rebirth", "Enter the Gungeon", "Dark Souls 3"]
let favorite = document.getElementById("list")

for (let i = 0; i < array.length; i++) {
    favorite.innerHTML += array[i] + " Is my #" + (i + 1) + " most played game on steam! <br>"

}



//Create a string array. List at least 5 of your favorite things in that array.
//Write a loop tjat writes to a div element each of them,
//with the string "is one of my favorite things" after it.
//for instance one line in the div might say "Pizza, is one of my favorite things."