async function findMax(arr){
    if(arr instanceof Array){
        let maxValue = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(maxValue < arr[i]){
                maxValue = arr[i];
            }
        }
        return maxValue
    }else{
        return new Error('input data is not an array')
    }
}
async function check(){
    try{
        let result = await findMax([1,2,3]);
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
check().then(()=> {
    console.log('finished')})