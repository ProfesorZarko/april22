console.log("28. mart");
const form = document.querySelector("#catForm");
const catButton = document.querySelector("#catButton");
const input = document.querySelector("#catName");
const list = document.querySelector("#availableCats");
const middleExercise = document.querySelector("#middleExrecise");
const colors =["red", "blue", "green", "orange"];
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value ;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
   input.value ="";
})
const backgroundColor =()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb({$r},{$g},{$b})`;
}
//catButton.onClick.backgroundColor2();
const grad = "MladenovacPalanka";
const duzina = console.log(grad.length);

function imefunkcijeFilip(){
    console.log("radi tetku ti poljubim");
    console.log(grad[Math.floor(Math.random()*grad.length)]);
    middleExercise.innerText=grad[Math.floor(Math.random()*grad.length)];
    document.querySelector("#middleExrecise").style.backgroundColor=backgroundColor();
}
//imefunkcijeFilip();