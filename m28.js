
cici=["null", "first", "second", "third"]
shopifyMembers = [1,2, "kornja", "profesor", "Milka", cici[1]];
colors =["blue", "green", "yellow","red", "orange"]
//shopifyMembers.pop("Milka");
shopifyMembers[1]= "stef";
console.log(shopifyMembers);
console.log(colors);
console.log(shopifyMembers[4]);
function jole(i){
    document.querySelector("#exerciseColors").style.backgroundColor=colors[i];
    document.querySelector("#exerciseColors").innerHTML=colors[i];
}
// koJeKo ={
//     "Mare" : "svet",
//     "Fili" : "malta",
//     "profesor": "Mladenovac"
// }

