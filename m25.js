console.log("alo bre")
const form = document.querySelector("#catForm")
const input = document.querySelector("#catName")
const catList = document.querySelector("#catList")
const starWarPerson = document.querySelector("#starWarPerson");
const jokeButton = document.querySelector("#jokeButton");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newLI = document.createElement("LI");
    newLI.innerText = input.value ;
    catList.append(newLI);
    input.value="";
})

const getStarWarsPerson = async() =>{
    const person  = Math.floor(Math.random()*14 +1);
    console.log(person);
    const res = await axios.get(`https://swapi.dev/api/people/${person}/`);
    starWarPerson.innerHTML=res.data.name;
    console.log(res);
}

const getDedJoke = async() =>{
    const config = {headers: {accept:'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/api", config)
    console.log(res.data.joke);
}
