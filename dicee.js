var arr = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

var random1 = arr[Math.floor(Math.random() * arr.length)];
var random2 = arr[Math.floor(Math.random() * arr.length)];

var dice1 = document
  .querySelector(".img1")
  .setAttribute("src",  random1);
  
var dice2 = document
  .querySelector(".img2")
  .setAttribute("src", random2);


if (random1 > random2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
} else if (random1 == random2){
    document.querySelector("h1").innerHTML = "Match Draw!"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
