const niz = [1, 2, 3, 4, 5, 11, 100]  
const sortedInsert = (array, number) => {   
    const lowerNumbers = []   
    const otherNumbers = []    
    array.forEach(element => {
             if (element < number) {
                        lowerNumbers.push(element)
                         } else {       
                        otherNumbers.push(element)     
                        }
                        });   
    return [...lowerNumbers, number, ...otherNumbers] ;
}


console.log(sortedInsert(niz, 20))
console.log(sortedInsert(niz, 2))
console.log(sortedInsert(niz, 15))