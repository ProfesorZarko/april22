arrayOfNumbers = [1, 5,6,11,22, 30, 44, 49]

const insertNumber=(array, number)=>{
    lowerNumber=[];
    otherNumber = [];
    array.forEach(element => {
        if (element<number) {
            lowerNumber.push(element);
        }else{
            otherNumber.push(element);
        }
    });
    console.log(lowerNumber);
    console.log(otherNumber);
    arrayToPrint =[...lowerNumber,number, ... otherNumber];
    console.log(arrayToPrint);
}

insertNumber(arrayOfNumbers, 710);