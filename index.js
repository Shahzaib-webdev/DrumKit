// detecting button press

let drumLength = document.querySelectorAll(".drum").length;
for(let i=0;i<drumLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickEvent);
}
function clickEvent(){

    let keys = this.innerHTML;
    keyPress(keys);
    buttonAnimation(keys);

} 



// for responding to keypress or keyboard press


document.addEventListener("keypress", function(event){
    keyPress(event.key);
    buttonAnimation(event.key);
});
function keyPress(key){

    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;  
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        default:
            break;
    }
    
}


// onclick button animation 

function buttonAnimation (currentKey)
{
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout ( function() {
        activeButton.classList.remove("pressed");
    }, 200 )
}
