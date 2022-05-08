const form = document.querySelector("#catForm");
const input = document.querySelector("#catName")
const list = document.querySelector("#catList")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value  ;
    console.log(catName);
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    console.log(newLI);
    list.append(newLI);
    input.value ="";
})