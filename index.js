

// document.querySelector(".img1").src = "images/dice1.png";
// document.querySelector(".img2").src = "images/dice2.png";

var randomNum1 = Math.floor(Math.random() * 6) + 1;

var imgRando = "images/dice" + randomNum1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", imgRando);

//image 2

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imgRando2 = "images/dice" + randomNum2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", imgRando2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = 'Player 1 wins';

}

else if (randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML = 'Draw';
}

else{
    document.querySelector("h1").innerHTML = 'Player 2 wins';
}