document.getElementById("count-el").innerText=115;

let count = 0;
let countE1 = document.getElementById("count-el");
function increment(){
    count = count + 1;
    countE1.innerText = count;
}

function save(){
   let countStr = count + " - ";
    let message = document.getElementById("message-e1");
    message.textContent = countStr;
    count = 0; 
}

let myname = "People";
let greeting = "Good day, " + myname + "!";

welcomeE1.innerHTML = greeting;
//console.log(count)