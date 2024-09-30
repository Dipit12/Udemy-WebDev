
function main(){
    fetch("https://dummyjson.com/todos/")
    .then(async response =>{
       const data = await response.json();
       console.log(data["todos"].length)
    })
}

main()