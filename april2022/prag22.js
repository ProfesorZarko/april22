const form = document.querySelector("#catForm")
const input = document.querySelector("#catName")
const list = document.querySelector("#catList")
form.addEventListener("submit", function(e){
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("LI");
   
    catList.append(newLi);
    console.log(input.value);
});

const RandomNumberButton = document.querySelector("#RandomNumberButton");
const milija=()=>{
    const number = Math.floor(Math.random()*8);
    console.log("Slučajni broj je " + number);
    document.
}
RandomNumberButton.addEventListener("click", function(e){
    milija();
});
//RandomNumberButton(onClick).milija();

