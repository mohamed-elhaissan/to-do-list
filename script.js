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
        let img = document.createElement("img");
        img.src = "assestes/delete.svg";
        li.innerHTML = input.value;
        li.appendChild(img);
       ul.appendChild(li);
       input.value = "";
        
    }
})
const img = document.querySelector("img");


ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle("completed")
        setTimeout(function(){
            alert("good work")
        },1000)
    }
}
    
)