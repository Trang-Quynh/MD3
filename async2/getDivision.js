// 1. su dung async await
// async function getDivision(a,b){
//     if(b !== 0){
//         let result = a/b;
//         return result
//     }else{
//         throw new Error('b must be not 0')
//     }
// }
//
// async function main(){
//     try{
//         let result = await getDivision(4,0);
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// main().then()
// 2. Su dung promise then
 function getDivision(a,b){
    return new Promise((resolve,reject)=>{
        if(b !== 0){
            resolve(a/b);
        }else{
            reject('b must be not 0')
        }
    })
 }
 getDivision(4,0).then((value)=>{
     console.log(value)}).catch((err)=>{
     console.log(err)
 })