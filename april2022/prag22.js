const RandomNumberButton = document.querySelector("#RandomNumberButton");
const milija=()=>{
    const number = Math.floor(Math.random()*8);
    console.log("Slučajni broj je " + number);
    document.innetText
};
RandomNumberButton.addEventListener("click", function(e){
    milija();
});
//RandomNumberButton(onClick).milija();

