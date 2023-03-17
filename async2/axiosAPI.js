let axios = require('axios');
function getData(){
    return new Promise((resolve)=>{
        resolve(axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'));
    })
}
getData().then(value => {
    console.log(value.data)})