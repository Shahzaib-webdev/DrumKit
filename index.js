for(let i=0;i<=6;i++){
    document.querySelectorAll("button")[i].addEventListener("click", clickHandle);
}

function clickHandle(){
    alert("I got clicked");
}