console.log("dodatak JS");
function time(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.querySelector("#clock").innerText = h + " : " + m + " : "+ s;
    setTimeout(time, 1000);
    console.log( h + " : " + m + " : "+ s);
}

time();