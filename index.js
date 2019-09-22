
// Function that plays a sound based on key/button pressed
function playSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}

// Function that animates the button when a key/button is pressed
function buttonAnimation(key){
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}

// Detecting button click
document.querySelectorAll(".drum").forEach(function(button){
    button.addEventListener("click", function(){
        var key = this.innerHTML;
        playSound(key);
        buttonAnimation(key);
    });
});

// Detecting keyboard down
document.addEventListener("keydown", function(event){
    var key = event.key;
    playSound(key);
    buttonAnimation(key);
});




/********* Playing around with OOP ideas *********/


// // Constructor function for creating new drum objects

// function Drum(key, imageUrl, soundUrl){
//     this.key = key;
//     this.image = imageUrl;
//     this.sound = new Audio(soundUrl);
//     this.play = function(){
//         this.sound.play();
//     }
// }

// // drumSet object contains a method for adding instrument elements to the page

// var drumSet = {
//     addInstrument : function(instrument){
//         // create the button element for the instrument
//         var btn = document.createElement("button");
//         btn.textContent = instrument.key;
//         btn.classList.add(instrument.key, "drum");
//         document.querySelector(".set").appendChild(btn);
//
//         // add background image for the button
//         var styleSheet = btn.sheet;
//         styleSheet.insertRule("." +instrument.key+ "  {background-image: url('" + instrument.image + "')};");
//     }
// }
