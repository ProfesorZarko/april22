function sortiranje(a, b, c){
    let max;
    if(a>b && a>c){
        max = a;
    }if(b>c){
        max = b;
    }else{
        max = c;
    }
    return(`Najveći broj je ${max}`)
}
console.log(sortiranje(c,69,91));