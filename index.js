
// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick(){
//     alert("I got clicked!");
// }

var tom1 = new Audio("sounds/tom1.mp3");
var tom2 = new Audio("sounds/tom2.mp3");
var tom3 = new Audio("sounds/tom3.mp3");
var tom4 = new Audio("sounds/tom4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick.mp3");

// Function that plays a sound based on key/button pressed
function playSound(key){
    switch(key){
        case "w": tom1.play();
        break;
        case "a": tom2.play();
        break;
        case "s": tom3.play();
        break;
        case "d": tom4.play();
        break;
        case "j": snare.play();
        break;
        case "k": crash.play();
        break;
        case "l": kick.play();
        break;
        default: console.log(key);
    }
}

// Detecting button click
document.querySelectorAll(".drum").forEach(function(button){
    button.addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
});

// Detecting keyboard down
document.addEventListener("keydown", function(event){
    playSound(event.key);
});
