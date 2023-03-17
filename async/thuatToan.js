let array = [5,6,5,8,9]

function check(arr){
    let count = 0;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if(arr[j] === (arr[i] + 1)){
                count++;
            }
        }
    }
    console.log(count)
    console.log(arr.length - 1)
    if(count === arr.length - 1){
        console.log('day la chuoi tang dan');
        return;
    }
    console.log('khong phai chuoi tang dan')
}
check(array);