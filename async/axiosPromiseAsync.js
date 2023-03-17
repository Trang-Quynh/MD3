
const axios = require("axios");
async function getData(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/todos')
    let todos = data.data;
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].completed === true){
            count++
        }
    }
    console.log(count)
}
getData().then()


axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
    let todos = data.data
    let count = 0;
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].completed === true){
            count++
        }
    }
    console.log(count)
})