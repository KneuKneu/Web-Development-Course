var list = document.querySelectorAll(".drum");

function playSound(event) {
  switch (event) {
    case "w":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "s":
      var s = new Audio("sounds/kick-bass.mp3");
      s.play();
      break;
    case "a":
        var a = new Audio("sounds/snare.mp3");
        a.play();
        break;
    default:
      console.log("Wong Botton!!");
  }
}

function buttonAnimation(currentKey){
  document.querySelector('.' + currentKey)
}
// Adds an addEventListener to every button
for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

document.addEventListener("keydown", function (event) {
  var eventKey = event.key
  playSound(eventKey);
  buttonAnimation(eventKey);
});
