//async: function nay luon tra ve mot promise (promise nay co the duoc thuc hien or khong trong function nay);
//await: doi promise o async tra ve ket qua de thuc hien buoc tiep theo (success or fail)
async function f(){
    let promise = new Promise((resolve)=>{
        setTimeout(() => {
            resolve('done')
        },1000)
    })
    let result = await promise;
    console.log(result)
}
f()