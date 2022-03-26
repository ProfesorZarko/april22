console.log("evo ga !!!!")
const dugme = document.querySelector("button");
const resetButton = document.querySelector("#resetButton");
const backgraundButton = document.querySelector("#backgroundButton")

var x = "filip";
function nesto(){
document.querySelector("#nesto").innerHTML="evo promene"
}
function reset(){
    document.querySelector("#nesto").innerHTML="A MISLIO SI DA ĆE NEŠTO DA SE VRATI NA POČETAK - mosha";
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    console.log(bgColor);
}


console.log(x + " je promenjiva");
dugme.addEventListener("click", nesto);
backgraundButton.addEventListener("click", random_bg_color);

resetButton.addEventListener("click", reset);