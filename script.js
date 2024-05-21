const input = document.querySelector("input");
const button = document.querySelector("button");

const ul = document.querySelector("ul");
const tasks = document.querySelector(".tasks")

button.addEventListener("click",()=>{
    if(input.value === ""){
        alert("You must Enter Some Task");
    }
    else {
       let li = document.createElement("li");
       let ion = document.createElement("ion-icon");
       ion = ion.setAttribute('name',"checkmark-circle-outline");
        li.innerHTML = input.value;
       ul.appendChild(li);
       ul.appendChild(ion);
        
    }
})