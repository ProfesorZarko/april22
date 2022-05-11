colors=["red", "yellow", "blue", "orange", "grey"];
const colorButton = document.querySelector("#colorButton");
const filipButton=document.querySelector("#filip2");
const allDivs = document.getElementsByClassName("divovi");

const boje=()=>{
    document.querySelector(".divovi").style.backgroundColor=colors[Math.floor(Math.random()*5)];
}
//const jole=()=>{ console.log.(colors[(Math.floor(Math.random()*5))])};

colorButton.addEventListener("click", boje);
    /*document.querySelector("#firstDiv").style.backgroundColor=colors[Math.floor(Math.random()*5)];
    document.querySelector("#secondDiv").style.backgroundColor=colors[Math.floor(Math.random()*5)];
    document.querySelector("#thirdDiv").style.backgroundColor=colors[Math.floor(Math.random()*5)];
    document.querySelector("#fourthDiv").style.backgroundColor=colors[Math.floor(Math.random()*5)];
    */


atributi =["lep", "lenj", "zanimljiv", "e sada...."]
function filip(){
    console.log("Filip je  " + atributi[(Math.floor(Math.random()*4))]);
    document.querySelector("#filip").innerText = ("Filip je  " + atributi[(Math.floor(Math.random()*4))]);
}
/*filipButton.addEventListener("click", function(e){
    e.preventDefault();
    console.log("funkcija koja opisuje Filipa");
    filip();
});*/
filipButton.addEventListener("click", filip)
document.querySelector("#colorButtonTrt").addEventListener("click",console.log("sine"));