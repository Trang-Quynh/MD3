function first(){
    let error = false
    console.log(error === false)
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            if(error===false){
                resolve('done first')
            }else{
                reject('error')
            }
        },2000))
}
function second(){
    let error = false
    console.log(error === false)
    return new Promise((resolve,reject)=>
        setTimeout(()=>{
            if(error === false){
                resolve('done second')
            }else{
                reject('error')
            }
        },1000))
}
// first().then(value=>{
//     console.log(value)});
// second().then(value=>{
//     console.log(value)});
//done second
//done first

// first().then((value) => {
//     console.log(value)
//     second().then((value) => {
//         console.log(value)})
// })
//done first
//done second

async function main(){
    let dataFirst = await first()
    console.log(dataFirst);
    let dataSecond = await second();
    console.log(dataSecond)
}
main().then()
