console.log("this is april man")

const form=document.querySelector("#shelterForm")

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submited in april")
})