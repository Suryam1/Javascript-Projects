let inputArea=document.querySelector(".inputArea");
let uppercase=document.querySelector(".uppercase");
let digits=document.querySelector(".digits");

uppercase.addEventListener("click",function(){
    let value=inputArea.value;
    let counter=0;
    for(let x=0;x<value.length;x++){
        if(value[x]>='A' && value[x]<='Z'){
            counter++;
        }
    }
    alert(counter);
});

digits.addEventListener("click",function(){
    let value=inputArea.value;
    let counter=0;
    for(let x=0;x<value.length;x++){
        if(value[x]>='1' && value[x]<='9'){
            counter++;
        }
    }
    alert(counter);
});