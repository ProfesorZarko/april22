console.log("radi");
const button=document.querySelector("#colorButtonTrt");
const buttonBlue=document.querySelector("#colorButtonTrt2");
const firstDiv= document.querySelector("#firstDiv");
const secondDiv= document.querySelector("#secondDiv");
const colors =["red", "pink", "grey", "blue", "orange"];

const seks=()=>{console.log("elegancija")};
const divovi=document.querySelector(".divovi");
function changeColorRed(){
    console.log("crveno");
    firstDiv.style.backgroundColor="red"; 
    secondDiv.style.backgroundColor="red";
    document.querySelector("#thirdDiv").style.backgroundColor="red";
};
function changeColorBlue(){
    console.log("blue");
    const randomColor=Math.floor(Math.random()*5);
    firstDiv.style.backgroundColor=colors[randomColor];
    secondDiv.style.backgroundColor=colors[randomColor];
    document.querySelector("#thirdDiv").style.backgroundColor=colors[randomColor];
    document.querySelector("#fourthDiv").style.backgroundColor=colors[randomColor];
};

button.addEventListener("click", changeColorRed);
buttonBlue.addEventListener("click", changeColorBlue);