const Trt = document.querySelector("#firstChangeButton2");

cici=["null", "first", "second", "third"]
shopifyMembers = [1,2, "kornja", "profesor", "Milka", cici[1]];
colors =["blue", "green", "yellow","red", "orange"]
//shopifyMembers.pop("Milka");
shopifyMembers[1]= "stef";
console.log(shopifyMembers);
console.log(colors);
console.log(shopifyMembers[4]);
function jole(){
    const i = Math.floor(Math.random()*4);
    document.querySelector("#exerciseColors").style.backgroundColor=colors[i];
    document.querySelector("#exerciseColors").innerHTML=colors[i];
}
Trt.addEventListener("click", jole);

// koJeKo ={
//     "Mare" : "svet",
//     "Fili" : "malta",
//     "profesor": "Mladenovac"
// }

