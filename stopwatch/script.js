let startStopButton=document.querySelector(".startStopButton");
let lapResetButton=document.querySelector(".lapResetButton");
let startStopFlag=0;
let lapResetFlag=0;
let timerDiv=document.querySelector(".showTime");
let min=00;
let sec=00;
let mili=00;
let x;
let lapCounter=1;
let listOuterDiv=document.querySelector(".times");
let listOfItems=document.querySelector(".listOfItems");


//StopWatch Functionality
function stopWatch(){
    mili++;
        if (mili==100){
            sec++;
            mili = 0;
        }
        if (sec==60){
            min++;
            sec = 0;
        }
        let minString = min;
        let secString = sec;
        let miliString = mili;
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (mili < 10) {
            miliString = "0" + miliString;
        }
        document.querySelector('.min').innerText = minString;
        document.querySelector('.sec').innerText = secString;
        document.querySelector('.mili').innerText = miliString;
        x=setTimeout(stopWatch, 10);
}

//Start Stop Timer Functionality
function startStopTimer(){
    if(startStopFlag==0){
        startStopButton.innerText="Stop";
        startStopButton.setAttribute("class","startStopButton bgRed");
        lapResetButton.innerText="Lap";
        startStopFlag=1;
        stopWatch();
    }
    else{
        clearTimeout(x);
        min=00;
        sec=00;
        mili=00;
        startStopButton.innerText="Start";
        startStopButton.setAttribute("class","startStopButton");
        lapResetButton.innerText="Reset";
        startStopFlag=0;
    }
}

//Lap Reset Timer Functionality
function lapResetTimer(){
    if(startStopFlag==1){
        let lapTime=`${document.querySelector('.min').innerText}:${document.querySelector('.sec').innerText}:${document.querySelector('.mili').innerText}`;
        let listOfItems=document.querySelector(".listOfItems");
        listOfItems.innerHTML=listOfItems.innerHTML+`<li class="lapItem">
            <p class="lapName">Lap ${lapCounter}</p>
            <p class="lapTime">${lapTime}</p>
        </li>`
        lapCounter++;
    }
    else if(startStopFlag==0){
        document.querySelector('.min').innerText = "00";
        document.querySelector('.sec').innerText = "00";
        document.querySelector('.mili').innerText = "00";
        min=00;
        sec=00;
        mili=00;
        lapCounter=0;
        listOuterDiv.children[0].remove();
        listOuterDiv.innerHTML=`<ul class="listOfItems"></ul>`
    }
}

// Event listener Functionalities
startStopButton.addEventListener("click",startStopTimer);
lapResetButton.addEventListener("click",lapResetTimer);