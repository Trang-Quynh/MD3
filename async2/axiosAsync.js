let axios = require('axios')
async function getData(){
    let data = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log(data.data)
}
getData().then()