let checkLicensePlate = (numberPlate) => {
    let array = ['29', '30', '31', '32', '33', '40'];
    for (let value of array){
        if(numberPlate.startsWith(value)){
            return true;
        }
    }
    return false;
}
const listLicensePlates = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let newList = [];
for (let value of listLicensePlates){
    if(checkLicensePlate(value)){
        newList.push(value);
    }
}
console.log(newList);
