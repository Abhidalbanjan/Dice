var randomNumber1;
randomNumber1=Math.ceil(Math.random()*6);
var images=new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", images[randomNumber1]);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
}
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}

