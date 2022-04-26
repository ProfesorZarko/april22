console.log("this is april man")
const form=document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const catList = document.querySelector("#catList");
const tweetForm = document.querySelector("#tweetForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const res = input.value ;
    console.log("submited in april  " + res);
    const newLI = document.createElement("LI");
    newLI.innerText = res;
    catList.append(newLI);
    input.value ="";
})

//  tweetForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     alert("submitted")
// }) 
const firstButton = document.querySelector("#firstChangeButton");

firstButton.onclick = console.log("cici");