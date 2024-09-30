const axios = require("axios")

async function main(){
    const response = await axios.get("https://dummyjson.com/todos/")
    console.log(response.data)
}

main();

