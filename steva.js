const input = document.querySelector("#nextNumber");
const button = document.querySelector("button");
const numberArray1 =["11"];

const numberArray=(e)=>{
    e.preventDefault();
    const inputNumber = input.value ;
    console.log(inputNumber);
    numberArray1.push(inputNumber);
    input.value="";
    console.log(numberArray1);
    };

button.addEventListener("click", numberArray)

