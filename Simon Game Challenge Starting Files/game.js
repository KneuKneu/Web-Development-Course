var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var userClickedPattern = [];
gamePattern.push(randomChosenColour);
$('.' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$('.' + randomChosenColour).on("click", function() {
  playSound(randomChosenColour);
  handleGame(randomChosenColour);

});

function playSound(colour){
  var audio = new Audio('sounds/' + colour + '.mp3');
  audio.play();
}
function handleGame(colour){
  var userChosenColour = colour;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

// Debugging log values:
// console.log("randomChosenColour: " + randomChosenColour);
// console.log("gamePattern: " + gamePattern[0]);
