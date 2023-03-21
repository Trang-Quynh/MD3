let axios = require('axios');

// async function getTodo(){// bất đồng bộ ở việc in dữ liệu
//     try{
//         let data = await axios.get('https://jsonplaceholder.typicode.com/todos');
//         console.log(data.data)
//     }catch (e){
//         console.log(e)
//     }
// }
// getTodo().then()

function getData(){
    return new Promise((resolve)=>{
                resolve(
                    axios.get('https://jsonplaceholder.typicode.com/todos')
                )
  })
}
getData().then(value => {
    let todos = value.data
    let count = 0;
    for (let i = 0; i < todos.length ; i++) {
        if(todos[i].completed === true){
            count++
        }
    }
    console.log(count);
})



