// Neu khong co try catch thi cac cau lenh sau khong duoc thuc hien
// catch block khong co dieu kien: xu ly bat ky loi nao duoc nem ra tu try
// catch block co dieu kien: su dung khoi catch cho tung loai exception
// nhan dang ngoai le
var fs = require('fs');

try{
    // file not presenet
    var data = fs.readFileSync('sample.html');
    throw ('loi !!')
} catch (err){
    console.log(err);
}

console.log("Continuing with other statements..");