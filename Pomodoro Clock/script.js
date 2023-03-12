let sessionTimeDecrease=document.querySelector("#sessionTimeDecrease");
let sessionTimeIncrease=document.querySelector("#sessionTimeIncrease");
let breakTimeDecrease=document.querySelector("#breakTimeDecrease");
let breakTimeIncrease=document.querySelector("#breakTimeIncrease");
let sessionMin=document.querySelector(".sessionMin");
let breakMin=document.querySelector(".breakMin");
let startPauseButton=document.querySelector(".startPause");
let minute
let second=59;
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");
let flaga=0;
let flagb=0;
let resetButton=document.querySelector(".reset");
let timeout;
let sessionCount=document.querySelector(".sessionCount");

sessionTimeDecrease.addEventListener("click",function(){
    let number;
    if(sessionMin.innerText!="00"){
        number=parseInt(sessionMin.innerText);
        number=number-1;
        if(number<10){
            number ="0"+number;
        }
        sessionMin.innerText=number;
    }
})

breakTimeDecrease.addEventListener("click",function(){
    let number;
    if(breakMin.innerText!="00"){
        number=parseInt(breakMin.innerText);
        number=number-1;
        if(number<10){
            number ="0"+number;
        }
        breakMin.innerText=number;
    }
})

sessionTimeIncrease.addEventListener("click",function(){
    let number;
    if(sessionMin.innerText!="60"){
        number=parseInt(sessionMin.innerText);
        number=number+1;
        if(number<10){
            number ="0"+number;
        }
        sessionMin.innerText=number;
    }
})

breakTimeIncrease.addEventListener("click",function(){
    let number;
    if(breakMin.innerText!="60"){
        number=parseInt(breakMin.innerText);
        number=number+1;
        if(number<10){
            number ="0"+number;
        }
        breakMin.innerText=number;
    }
})


function startTimerFunction(){
    if(minute==0 && second==0){
        alert("Session Time End");
        minute=parseInt(breakMin.innerText);
        minute--;
        second=59;
        flaga=0;
        // flagb=1;
    }
    // if(minute==0 && second==0 && flagb==1){
    //     alert("Break Time End");
    //     let x=parseInt(sessionCount.innerText);
    //     x++;
    //     sessionCount.innerText=x;
    //     minute=parseInt(sessionMin.innerText);
    //     minute--;
    //     second=59;
    //     flaga=0;
    //     flagb=0;
    // }
    if(minute<10 && flaga==0){
        minute="0"+minute;
        flaga=1;
    }
    if(second<10){
        second="0"+second;
    }
    min.innerText=minute;
    sec.innerText=second;
    if(second==0){
        minute--;
        second=60;
        flaga=0;
    }
    second--;
    timeout=setTimeout(startTimerFunction,1000);
}

startPauseButton.addEventListener("click",function(){
    minute=parseInt(sessionMin.innerText);
    if(minute!=0){
        sessionTimeDecrease.setAttribute("disabled","true");
        sessionTimeIncrease.setAttribute("disabled","true");
        breakTimeDecrease.setAttribute("disabled","true");
        breakTimeIncrease.setAttribute("disabled","true");
        minute--;
        startTimerFunction();
        startPauseButton.innerText="Pause"; 
    }
})

resetButton.addEventListener("click",function(){
    clearTimeout(timeout);
    sessionTimeDecrease.setAttribute("disabled","false");
    sessionTimeIncrease.setAttribute("disabled","false");
    breakTimeDecrease.setAttribute("disabled","false");
    breakTimeIncrease.setAttribute("disabled","false");
    startPauseButton.innerText="Start";
    min.innerText="00";
    sec.innerText="00";
    sessionMin.innerText="00";
    breakMin.innerText="00";
    second=59;
})