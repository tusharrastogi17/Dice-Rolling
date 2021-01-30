
// creting the random no player 1
var randomNumber1=Math.floor((Math.random()*6)+1);

// setting the player 1 img what ever random no will come
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");

// creatiing the random no for the player 2
var randomNumber2=Math.floor((Math.random()*6)+1);

// setting the player 2 img what ever random no will come
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

if( randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="Player 1 wins ";
}
else if( randomNumber1===randomNumber2){
	document.querySelector("h1").innerHTML="Draw !";
}
else{
	document.querySelector("h1").innerHTML="Player 2 wins";
}