const input = document.querySelector("#number");
const button = document.querySelector("#numberButton");
//let listZaIspis = document.querySelector("#listOfNumbers");
let listOfNumbers=[1,2, 7, 60];

const sortingNumbers=(array, number)=>{
    let lowerNumbers =[];
    let otherNumbers=[];
    array.forEach(element => {
        if(element<number){
            lowerNumbers.push(element);
        }else{
            otherNumbers.push(element)
        };
    });
        console.log(lowerNumbers);
        console.log(otherNumbers);
    let listOfNumbers=[...lowerNumbers,number, ...otherNumbers];
    console.log(listOfNumbers);
    return(listOfNumbers);
};
//sortingNumbers(listOfNumbers,20);

button.addEventListener("click", function(e){
    e.preventDefault();
    const brojZaIspisivanje = input.value ;
    //listOfNumbers.push(brojZaIspisivanje);
    //listOfNumbers.sort(function(a, b){return a - b});
    
    //const newLi= document.createElement("LI");
    //newLi.append(brojZaIspisivanje);
    document.querySelector("p").innerText=sortingNumbers(listOfNumbers,brojZaIspisivanje);
})