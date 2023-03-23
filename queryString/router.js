// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const server = http.createServer((req, res)=>{
//     console.log(req)
//     let url = req.url;
//     let arrPath = url.split('/');
//     let path = arrPath[1];
//     let chosenHandle;
//     if(router[path] !== undefined){
//         chosenHandle = router[path]// la mot ham
//     }else{
//         chosenHandle = handle.error
//     }
//     chosenHandle(req,res)
//  })
// server.listen(3000, 'localhost', ()=>{
//     console.log('server is running')
// })
//
// // doi tuong la mot web co cac trang html
// let handle = {};
// handle.home = (req,res)=>{// request tra ve file html va response tra ve html
//     fs.readFile('./views/index.html', 'utf8',(err,data)=>{
//         res.write(data);
//         res.end();
//     } )
// }
// handle.login = (req,res)=>{
//     fs.readFile('./views/login.html', 'utf8',(err,data)=>{
//         res.write(data);
//         res.end();
//     } )
// }
//
// handle.error = (req,res)=>{
//     fs.readFile('./views/error.html', 'utf8',(err,data)=>{
//         res.write(data);
//         res.end();
//     } )
// }
//
// let router = {
//     'home':handle.home,
//     'login':handle.login,
// }

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res)=>{
    let arrPath = req.url.split('/');
    let path = arrPath[1];
    console.log(path)
    let chosenHandle;
    if(router[path] !== undefined){
        chosenHandle = router[path];
    }else{
        chosenHandle = handle.error
    }
    chosenHandle(req,res)
})
server.listen(3000,'localhost', ()=>{
    console.log('server is running')
})

let handle = {};
handle.home = (req,res) => {
    fs.readFile('./views/home.html','utf8', (err,data)=>{
        res.write(data);
        res.end()
    })
}

handle.login = (req,res) => {
    fs.readFile('./views/login.html','utf8', (err,data)=>{
        res.write(data);
        res.end()
    })
}
handle.error = (req,res) => {
    fs.readFile('./views/error.html','utf8', (err,data)=>{
        res.write(data);
        res.end()
    })
}

let router = {
    'home': handle.home,
    'login':handle.login
}


