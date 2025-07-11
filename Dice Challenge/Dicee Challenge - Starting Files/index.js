var randomNumber1 = Math.floor(Math.random() * 6) + 1; //First random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Second random number between 1-6

// Old code that works but is not very good :P
// document.querySelector('.img1').src = 'http://127.0.0.1:3000/Dice%20Challenge/Dicee%20Challenge%20-%20Starting%20Files/images/dice' + randomNumber1 + '.png';
// document.querySelector('.img2').src = 'http://127.0.0.1:3000/Dice%20Challenge/Dicee%20Challenge%20-%20Starting%20Files/images/dice' + randomNumber2 + '.png';

//Better
// document.querySelector('.img1').src = 'images/dice' + randomNumber1 + '.png';
// document.querySelector('.img2').src = 'images/dice' + randomNumber2 + '.png';

// Alternative with setAttribute
var randomDicePath1 = 'images/dice' + randomNumber1 + '.png'
var randomDicePath2 = 'images/dice' + randomNumber2 + '.png'

document.querySelector('.img1').setAttribute('src',randomDicePath1)
document.querySelector('.img2').setAttribute('src',randomDicePath2)

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 has won! WOOP!🏳️‍⚧️'
} else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 2 has won! Yippie!!🏳️‍🌈'
}else {
    document.querySelector('h1').innerHTML = "It's a draw!"
}