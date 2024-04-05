for(let i=0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandle);
}

function clickHandle(){
    var audio = new AUdio("/sounds/crash.mp3")
}