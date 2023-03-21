// let array = [5,6,5,8,9]
//
// function check(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if(arr[j] === (arr[i] + 1)){
//                 count++;
//             }
//         }
//     }
//     console.log(count)
//     console.log(arr.length - 1)
//     if(count === arr.length - 1){
//         console.log('day la chuoi tang dan');
//         return;
//     }
//     console.log('khong phai chuoi tang dan')
// }
// check(array);

//Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
// let arr1 = [1,9,6,10,18,20];
// let arr2 = [6,10,19];
//
// function check(arr1,arr2){
//     let count = 0;
//     for (let i = 0; i < arr2.length; i++) {//mang ngan
//             if(arr1.indexOf(arr2[i]) !== -1){
//                 count ++
//             }
//         }
//     if(count === arr2.length){
//         console.log(`Tat ca phan tu cua ${arr2} nam trong ${arr1}`);
//         return;
//     }
//     console.log(`Tat ca phan tu cua ${arr2} khong nam trong ${arr1}`)
// }
// check(arr1,arr2);
// let arr = [0,0,1,1,2,3]
// let newArr = [];
// newArr.push(arr[0])
// for (let i = 0; i < newArr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//         if(newArr.indexOf(arr[j]) === -1){
//             newArr.push(arr[j]);
//         }
//     }
// }
// for (let i = 0; i < newArr.length; i++) {//to
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {//nho
//         if(newArr[i] === arr[j]){
//             count++;
//         }
//     }
//     console.log(`phan tu ${newArr[i]} xuat hien ${count} lan`)
// }
// let arr = [4,5,4,5,2,3]
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     if(map.has(arr[i]) === true){
//         map.set(arr[i], map.get(arr[i]) + 1);
//         console.log(map.get(arr[i]))
//     }else
//     map.set(arr[i], 1)
// }
// console.log(map)
//cho mảng a in ra nhưng pt xh 1 lan
//cho mang a, in ra mang b chua các pt mang a nhung khong lap
// let arr = [1,2,2,3,3,4,5,6,6];
// let map = new Map()
// for (let i = 0; i < arr.length; i++) {
//     if(map.has(arr[i]) === true){
//         map.delete(arr[i]);
//     }else{
//         map.set(arr[i], 1)
//     }
// }
// console.log(map)
// for(let key of map.keys()){
//     console.log(`${key}`)
// }
//
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], 1)
// }
// let newArr = [];
// for(let key of map.keys()){
//     newArr.push(key)
// }
// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i])
// }


// let array = [40, 100, 1, 6, 35, 10];
// array.sort(function(a, b){return b - a});
// console.log(array)
// console.log(array[1]);

let bai1 =  [40, 100, 1, 6, 35, 10];
    let temp = bai1[0];
    for (let i = 0 ; i < bai1.length - 1; i++) {
        for (let j = i + 1; j < bai1.length; j++) {
            if (bai1[i] < bai1[j]) {
                temp = bai1[j];
                bai1[j] = bai1[i];
                bai1[i] = temp;
            }
        }
}
console.log(bai1[1])


let mang = [1,2,2,2,1,4];
function check(arr) {
    for (let i = 0; i < arr.length -1; i++) {
            if ((arr[i] + arr[i+1]) % 2 === 0) {
                console.log('mang khong co tinh chat le');
                return;
            }
        }
    console.log('mang co tinh chat le')
    }


check(mang)






















