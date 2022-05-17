/* console.log("temperatura js");
axios.get("https://swapi.dev/api/people/1/")
.then(res=>{
    console.log("RESPONSE: ", res);
})
.catch(e=>{
    console.log("ERROR",e);
}) */
console.log("aloo");
const getSWPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1/")
    console.log(res.data);
};

getSWPerson();