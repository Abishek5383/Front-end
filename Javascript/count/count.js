const dec = document.getElementById("dec");
const res = document.getElementById("res");
const inc = document.getElementById("inc");
const num = document.getElementById("num");

let count=0;
inc.onclick = function(){
    count++;
    num.textContent=count;
}
res.onclick = function(){
    count=0;
    num.textContent=count;
}
dec.onclick = function(){
    count--;
    num.textContent=count;
}