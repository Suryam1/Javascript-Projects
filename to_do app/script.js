let typing=document.querySelector("#typing-area");
let task_list_div=document.querySelector("#task-list");
let val;
let flag=0;
function getTextareaValue(){
    val=typing.value;
    typing.value="";
}

//Add elements in list
function appendDataInDiv(){
    task_list_div.innerHTML +=`
        <li class="task-list-styles">
            <span class="span-styles">${val}
                <div>
                </div>
            </span>
            <div class="all-buttons">
                <input type="checkbox" onClick="checkedFunctionality(this)">
                <i onClick="edit_tasks(this)" class="fas fa-edit"></i>
                <i onClick="delete_tasks(this)" class="fas fa-trash-alt"></i>
            </div>
        </li>`
}

//Add Elements on press of enter key
typing.addEventListener("keydown",function(e){
    if(e.keyCode==13){
        // alert("Enter clicked");
        e.preventDefault();
        getTextareaValue();
        if(val!==""){
            appendDataInDiv();
        }
        else{
            alert("Task cant be empty");
        }
    }
});

//Delete elements from list
function delete_tasks(e){
    e.parentElement.parentElement.remove();
}

//Update Tasks
function edit_tasks(e){
    typing.value=e.parentElement.previousElementSibling.innerText;
    e.parentElement.parentElement.remove();
}

//Add Checked functionlality
function checkedFunctionality(e){
    let selected_list= e.parentElement.previousElementSibling.querySelector("div");
    if(selected_list.hasAttribute("class")){
        selected_list.removeAttribute("class");
    }
    else{
        selected_list.setAttribute("class","visible");
    }
}