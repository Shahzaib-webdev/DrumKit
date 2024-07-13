for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickEvent);
}
function clickEvent(){
    alert("hello");
} 