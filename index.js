function makesound(){
    let buttonEvent = this.innerHTML
    sound(buttonEvent);
    buttonActive(buttonEvent);
}

function press(event){
    sound(event.key);
    buttonActive(event.key);
}

// Selcting the class drum in a loop

for(let i = 0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", makesound);
}

document.addEventListener("keypress", press)

// Function for sound

function sound(key){
    switch(key){
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            const kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
    }
}

// Animation
function buttonActive(currentkey){
    document.querySelector(`.${currentkey}`).classList.add("pressed")
    setTimeout(function(){document.querySelector(`.${currentkey}`).classList.remove("pressed"),100})
}
