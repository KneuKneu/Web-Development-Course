//// OLD CODE - DON'T TOUCH!

// Static variables
var buttonColours = ["red","blue","green","yellow"];
// Variables
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour = "";
var level = 0;
var gameStarted = false // needed?

// Game starts after the user presses ANY button (required by Chrome to play a sound...)
$(document).keypress(function() {
  gameStarted = true; // needed?
  // Debuggin only!
  console.log('auw! That hurt!!');

  document.getElementById('level-title').innerHTML = 'Have FUN!';
  self.setTimeout(function(){
  document.getElementById('level-title').innerHTML = 'Level ' + level;
}, 1300);

  nextSequence();

  $('.btn').on("click", function() {
    var splittedArray = this.className.split(" ");
    playSound(splittedArray[1]);
    userChoiceColor(splittedArray[1]);
    animatePress(splittedArray[1]);
    nextSequence();
    console.log('current color is: ' + randomChosenColour);
  });
  
$(document).unbind('keypress');

});

// Functions:

function nextSequence() {
  // Choose a random color
  randomChosenColour = buttonColours[randomNumber()];
  // Add colour to gamePattern
  gamePattern.push(randomChosenColour);
  //Animation
  $('.' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  //Increase level by one
  level += 1
  // Play the sound of the chosen color
  playSound(randomChosenColour);
  // $('.' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function playSound(colour){
  var audio = new Audio('sounds/' + colour + '.mp3');
  audio.play();
}
function userChoiceColor(colour){
  var userChosenColour = colour
  userClickedPattern.push(userChosenColour);
  // Debugging only:
  console.log('user clicked pattern: ' + userClickedPattern);
  console.log('game pattern: ' + gamePattern);

  checkAnswer();
}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

function animatePress(currentColour){
  console.log(currentColour);
  var currentElement = $("." + currentColour);
  currentElement.addClass('pressed');
  self.setTimeout(function(){
    currentElement.removeClass('pressed');
  }, 100);
}

function checkAnswer() {
  while (userClickedPattern.length !== gamePattern.length){
  console.log(gamePattern[userClickedPattern.length - 1]);
  console.log(userClickedPattern[userClickedPattern.length - 1]);
  if(gamePattern[userClickedPattern.length - 1] === userClickedPattern[userClickedPattern.length - 1]){
    console.log('well done');
  }
  else {
    console.log('you are very stupid!');
    gameStarted = false;
    document.getElementById('level-title').innerHTML = 'You suck! TRY AGAIN!';
  }
  console.log('loop the loop');
}
console.log('end of the while loop');
userClickedPattern = [];
}

// function resetGame(){
//   gamePattern = [];
//   userClickedPattern = [];
// }

// Debugging log values:
// console.log("randomChosenColour: " + randomChosenColour);
// console.log("gamePattern: " + gamePattern[0]);
