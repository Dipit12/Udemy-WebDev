

for(let i = 0; i< document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){
        var audio = new Audio("sounds/" + this.innerHTML + ".mp3");
        audio.part();
    })
}


