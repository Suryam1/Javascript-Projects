let username=document.querySelector("#username");
let password=document.querySelector("#password");
let submit_button=document.querySelector("#submit_button");
let div=document.querySelector("#added_data");
submit_button.addEventListener("click",function(){
    let username_value=username.value;
    password.type="text"
    let password_value=password.value;
    if(username_value!="" && password_value!=""){
        var str=`<p>${username_value}</p><p>${password_value}</p>`
        div.innerHTML=str;
        password.type='password';
    }   
    else{
        alert("USER Name or password can not be empty");
    }
    username.value="";
    password.value="";
})