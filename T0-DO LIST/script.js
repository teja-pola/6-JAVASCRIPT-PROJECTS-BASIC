const tasktodo =  document.getElementById("task");
const addbtn =  document.getElementById("add");
const listing =  document.getElementById("lists");


addbtn.addEventListener('click',()=>{
    const newtodotext = tasktodo.value;

    if(newtodotext!==""){
        const newtodoitem = document.createElement("li");
        newtodoitem.innerText = newtodotext;
        const deletetodobtn = document.createElement("button");
        deletetodobtn.innerText = "x";
        deletetodobtn.classList.add("delete-todo-btn");
        deletetodobtn.addEventListener('click',function(){
            newtodoitem.remove();
        })

        newtodoitem.appendChild(deletetodobtn);
        listing.appendChild(newtodoitem);
        tasktodo.value= "";
    }
});