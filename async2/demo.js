let axios = require('axios')
async function getData(){
    let data = await axios.get('http://jsonplaceholder.typicode.com/posts/2');
    console.log(data.data)
}
getData().then()