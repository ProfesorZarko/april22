arrayOfNumbers=[5, 9];
const input = document.querySelector("#catName");
const button = document.querySelector("#catButton");
const catList = document.querySelector("#catList");
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
    let arrayToPrint =[...lowerNumber,number, ... otherNumber];
    //arrayOfNumbers = arrayToPrint;
    return(arrayToPrint);
    //console.log(arrayToPrint);
}

button.addEventListener("click", function(e){
    e.preventDefault();
    arrayOfNumbers = [1, 5,6,11,22, 30, 44, 49]
    const number = input.value ;
    const newLI = document.createElement("LI");
    newLI.innerText = insertNumber(arrayOfNumbers, number);;
    catList.append(newLI);
    console.log(number);
    input.value="";
    
});
