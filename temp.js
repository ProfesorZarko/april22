/* console.log("temperatura js");
axios.get("https://swapi.dev/api/people/1/")
.then(res=>{
    console.log("RESPONSE: ", res);
})
.catch(e=>{
    console.log("ERROR",e);
}) */
console.log("aloo");
// const getSWPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(res.data);
//     } catch(e){
//         console.log("ERROR",e);
//     }
// };

// getSWPerson(10);
// getSWPerson(5);
const jokeList= document.querySelector("#jokeList")
const getDedJoke = async ()=>{
    const config = {headers:{Accept: 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com", config);
    console.log(res.data.joke)
    const newLI = document.createElement("LI");
    newLI.append(res.data.joke);
    jokeList.append(newLI);
};
document.querySelector("#jokeButton").addEventListener("click", getDedJoke)