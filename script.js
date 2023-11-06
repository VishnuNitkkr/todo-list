 const inputbox = document.getElementById("inputbox");
 const list = document.getElementById("list");

 function addtask(){
    if(inputbox.value==='')
    alert("You must write something");
     
    else{
        let li = document.createElement("li");
        
        li.innerHTML=inputbox.value;
        list.appendChild(li);
        let img = document.createElement("img");
        img.src = "Cross.png";
        img.innerHTML = '';
        li.appendChild(img);
    }
    inputbox.value = ""; 
    savedata();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);
}

function showtask(){
    list.innerHTML=localStorage.getItem("data");
}

showtask();

