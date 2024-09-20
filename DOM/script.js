
let count = 0
const buttonClicker = () =>{
    document.querySelector("h1").innerHTML = "Bye"
    count++
    console.log(count)
}

let flag = false;

const changeMode = () =>{
    if(flag){
        document.querySelector("body").style.background = "white";
        document.querySelector("h1").style.color = "black";
        flag = false;
    }else{
        
        document.querySelector("body").style.background = "black";
        document.querySelector("h1").style.color = "white";
        flag = true;
    }
}