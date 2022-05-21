const input = document.querySelector("#inputValue");
const button1 = document.querySelector("#arrayButton");
const list1 = document.querySelector("#arrayList");
const numberArray1 =[2, 4 , 9 ,11, 4564 ];
const numberArray2=[];
const numberArray3=[];

const numberArray=(e)=>{
    e.preventDefault();
    const inputNumber = input.value ;
    for (item in numberArray1){}
    
    console.log(inputNumber);
    numberArray1.push(inputNumber);
    input.value="";
    console.log(numberArray1);
    const newLi = document.createElement("LI");
    newLi.innerHTML=numberArray;
    list1.append(newLi);
    };
const add2=()=>{
    for (let x=0;  x< numberArray1.length; x++){
        numberArray2[x] = numberArray1[x] + 1 ;
    }
    for (let x=0;  x< numberArray1.length; x++){
        numberArray3[x] = numberArray1[x];
        numberArray3[x] = numberArray3[x] + 5 ;
    }

    console.log("native array: " + numberArray1);
    console.log("array for 1 greater  : " + numberArray2);
    console.log("growin array : " + numberArray3);
}
button1.addEventListener("click", numberArray)

