const button = document.querySelector("#button");
const firstDiv = document.querySelector("#firstDiv");
const colors=["red", "green", "blue", "orange", "yellow"];

const changeColors=()=>{
    const i = Math.floor(Math.random()*4)
    console.log(colors[i]);
    randomColor = colors[i];
    return randomColor;
}
button.addEventListener("click", function(e){
    e.preventDefault;
    document.firstDiv.style.backgroundColor = "blue";
    console.log("clicked");
})
const form = document.querySelector("#catForm");
const input = document.querySelector("#catName");

form.addEventListener("submit", function(e){
    e.preventDefault();
    catA = input.value ;
    console.log(catA);
})