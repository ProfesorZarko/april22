const button5 = document.querySelector("#dugme");
const mile = document.querySelector("#firstDiv");
const colors=["red", "green", "blue", "orange", "yellow"];

const changeColors=()=>{
    const i = Math.floor(Math.random()*4)
    console.log(colors[i]);
    randomColor = colors[i];
    return randomColor;
};
const bu=()=>{
      console.log("clicked");
      mile.style.backgroundColor = "blue";
}
button5.addEventListener("onclick", function(e){
    e.preventDefault();
    //mile.style.backgroundColor="red";
    console.log("treba da pokrene bu")
})

const form = document.querySelector("#catForm");
const input = document.querySelector("#catName");
const catList = document.querySelector("#catList");

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("submitted");
    const catA = input.value ;
    const newLI = document.createElement("LI");
    newLI.innerText = catA;
    catList.append(newLI);
    console.log(catA);
});
const getSWPerson = async (id)=>{
    try{
        const res=await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }catch(e){
        console.log("ERROR, e");
    }
};