let languages={
    Python:0,
    Javascript:4,
    C:7,
    CPP:77,
    Java:8
}

let expected={
    data:{output: "", langid: "0", code: "", errors: " "}
};
let lineNumbers=document.querySelector(".lineNumbers");
let writingArea=document.querySelector(".writingArea");
let enterCount=1;
let  languageSelectField=document.querySelector(".languageSelectField");
let selectedLanguage=0;
let compileButton=document.querySelector(".compileButton");
let codeIdValue;
let codeDetailsResponse;
let outputResult=document.querySelector(".output");
let outputResultValue;
let variableX;

languageSelectField.addEventListener("click",function(){
    selectedLanguage = languageSelectField.value;
    console.log(selectedLanguage);
})

let data={
    code:"",
    langId:""
}

writingArea.addEventListener("keydown",function(e){
    if(e.keyCode==13 && enterCount<15){
        enterCount++;
    }
    else if(e.keyCode==13 && enterCount>=15){
        enterCount++;
        lineNumbers.innerHTML=lineNumbers.innerHTML+`<li></li>`;
    }
})


if(outputResultValue!=""){
    clearTimeout(variableX);
}
function getResultFromAPI(){
    let codeDetails=new XMLHttpRequest()
    codeDetails.open("GET",`https://codequotient.com/api/codeResult/${codeIdValue}`)
    codeDetails.send();
    codeDetails.responseType="json";
    codeDetails.onload=()=>{
        if(codeDetails.readyState==4 && codeDetails.status==200){
            codeDetailsResponse=JSON.parse(codeDetails.response.data);
            console.log(codeDetailsResponse);
            if(codeDetailsResponse.code==data.code){
                console.log(codeDetailsResponse);
                console.log("In If condition");
                if(codeDetailsResponse.output==""){
                    outputResultValue=codeDetailsResponse.errors;
                }
                else{
                    outputResultValue=codeDetailsResponse.output;
                }
                console.log(outputResultValue);
                outputResult.innerText=outputResultValue;
                clearTimeout(variableX);
            }
            else{
                variableX=setTimeout(getResultFromAPI,2000);
            }
        }
    }
}


function sendDataToAPI(){
    selectedLanguage=languageSelectField.value
    data.code=writingArea.value;
    data.langId=selectedLanguage;
    console.log(data);
    let sendingObject=new XMLHttpRequest();
    let stringData=JSON.stringify(data);
    sendingObject.open("POST", 'https://codequotient.com/api/executeCode');
    sendingObject.setRequestHeader("Content-type", "application/json");
    sendingObject.send(stringData);
    console.log(stringData);
        sendingObject.responseType = "json";
    sendingObject.onload = () => {
    if (sendingObject.readyState == 4 && sendingObject.status == 200) {
        console.log(sendingObject.response)
        codeIdValue=sendingObject.response.codeId;
        setTimeout(getResultFromAPI,100);
    } 
    else {
        // console.log(`Error: ${sendingObject.status}`);
    }
  };
}

compileButton.addEventListener("click",sendDataToAPI);