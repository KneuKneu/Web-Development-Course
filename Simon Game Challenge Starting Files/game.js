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


  elementbyIdChangeText('level-title', 'Have FUN!!!!');
  self.setTimeout(function(){
  setLevelNumber();
}, 1300);

  $('.btn').on("click", function() {
    var splittedArray = this.className.split(" ");
    var colour = splittedArray[1];
    animateButtonPress(colour);

      userChoiceColor(colour);
      console.log('tt colour:' + colour);
      var counter = userClickedPattern.length - 1
      console.log('tt userclickedpattern length: ' + counter);

      if (colour === gamePattern[counter]){
        console.log('you guessed correctly!');
        console.log('xx: ' +  counter);
        console.log('xx: ' + gamePattern.length);
        // FIX DEZE IF-Statement!!
        if (counter === gamePattern.length - 1){
          // Reset user clicked buttons
          userClickedPattern = [];
          level += 1
          setLevelNumber();
          console.log('next sequence baby!');
          self.setTimeout(function(){
          nextSequence();
        }, 600);
        }
      }
      else {
        console.log('nope nope nope, start again!')
        resetGame();
      }

    console.log('clicked color is: ' + colour);
    console.log('current color is: ' + randomChosenColour);
  });

    // start first sequence/level
    nextSequence();
    $(document).unbind('keypress');

});

// Functions: 

function setLevelNumber(){
  elementbyIdChangeText('level-title', 'Level ' + level);
}

function userChoiceColor(colour){
  var userChosenColour = colour
  userClickedPattern.push(userChosenColour);
  // Debugging only:
  console.log('user clicked pattern: ' + userClickedPattern);
  console.log('game pattern: ' + gamePattern);

}

function resetGame(){
  level = 0;
  setLevelNumber();
  gamePattern = [];
  userClickedPattern = [];  
  console.log('game is reset succesfully');
}

function nextSequence() {
  // Choose a random color
  randomChosenColour = buttonColours[randomNumber()];
  // Add colour to gamePattern
  gamePattern.push(randomChosenColour);
  //Animation
  $('.' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // Play the sound of the chosen color
  playSound(randomChosenColour);
  // $('.' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
};

function playSound(colour) {
  var audio = new Audio('sounds/' + colour + '.mp3');
  audio.play();
  //debugging only:
  console.log("played sound for: " + colour);
}

function animateButtonPress(currentColour){
  var currentElement = $("." + currentColour);
  currentElement.addClass('pressed');
  self.setTimeout(function(){
    currentElement.removeClass('pressed');
  }, 100);
}

function elementbyIdChangeText(id,text){
    document.getElementById(id).innerHTML = text;
}