arrayOfNumbers=[5, 9];
const changeButton = document.querySelector("#changeButton");
const input = document.querySelector("#catName");
const button = document.querySelector("#catButton");
const catList = document.querySelector("#catList");
const grayButton = document.querySelector("#grayButton");
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
changeButton.addEventListener("click", function(e){
 e.preventDefault();
 document.querySelector("#first").style.backgroundColor="blue";
 setTimeout(document.querySelector("#first").style.backgroundColor="pink", 3000);
 

 console.log("clicked");
});
grayButton.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#first").style.backgroundColor="gray";
})