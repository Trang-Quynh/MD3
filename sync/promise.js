// 1. Khoi tao promise
// 2. Tao executor
//tham so truyen vao la mot function object constructor
let promise = new Promise(
    //executor co tham so la hai function
    function(resolve, reject){
        // logic xu ly neu
        // success: resolve()
        // fail: reject()
        // resolve([{id: 1, name: 'Javascript'}]);
        reject('loi')
    }
);
// neu success se nhay vao then
promise
.then(function (course){
    console.log(course)
})
.catch(function (err){
    console.log(err)
})

.finally(function (){
    console.log(`Done`)
})