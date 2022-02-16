let inputAdd = document.getElementById("add-input");
let buttonAdd = document.querySelector("#add-button");
let containerAdd = document.querySelector(".contaniner");


buttonAdd.addEventListener("click", ()=>{
    const todoAdd = document.createElement("button");
    todoAdd.innerHTML = inputAdd.value;
    document.querySelector(".container").appendChild(todoAdd);
    

    todoAdd.addEventListener("click",()=>{
        todoAdd.remove();
        const doneList = document.createElement("button");
        doneList.innerHTML = todoAdd.innerHTML;
        document.querySelector(".done").appendChild(doneList);

        doneList.addEventListener("click", () => {
            doneList.remove();
        })
    });
});

