const btn=document.getElementById("btn");
const num=document.getElementById("num");
const min=1;
const max=6;
let random;

btn.onclick = function(){
random=Math.floor(Math.random()*(max)+min);
num.textContent=random;
}