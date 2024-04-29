function Click1(){  

let c1 = document.getElementById("CN1");

if (c1.style.display == "none"){
  c1.style.display  = "block";
}else{
c1.style.display  = "none";
}
}

function Click2(){
let c1 = document.getElementById("CN2");
if (c1.style.display == "none"){
  c1.style.display  = "block";
}else{
c1.style.display  = "none";
}
}

function Open_TankCalRound(){
let c1 = document.getElementById("O1");
let c2 = document.getElementById("O2");
if (c1.style.display == "none"){
 c2.style.display  = "none"; 
 c1.style.display  = "block";
}else{
c1.style.display  = "none";
}
}
function Open_TankCalRact(){

let c1 = document.getElementById("O2");
let c2 = document.getElementById("O1");
c2.style.display  = "none"; 
if (c1.style.display == "none"){
 c1.style.display  = "block";
 
}else{
c1.style.display  = "none";
}
}
