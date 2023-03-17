// function party(isKayoSick){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(!isKayoSick){
//                 resolve(2);
//             }else{
//                 reject('do not have any cake')
//             }
//         })
//     })
// }
// party(false).then(value =>{
//     console.log(value)
// }).catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log('party')
// })

// async function party(isKayoSick){
//     if(!isKayoSick){
//         return 2
//     }else{
//         throw new Error('do not have any cake')
//     }
// }
// async function main(){
//     try{
//         let result = await party(true);
//         console.log(result)
//     }catch (err){
//         console.log(err)
//     }finally {
//         console.log(party())
//     }
// }
// main().then()


