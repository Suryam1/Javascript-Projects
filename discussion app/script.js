let submit_button=document.querySelector(".submit_button_right");
let ques=document.querySelector(".subject_field");
let discription=document.querySelector(".Question");
let question_section=document.querySelector(".questions_section");
let right_panel=document.querySelector(".right_panel");
let list_of_all_questions=[];
let right_panel1=document.querySelector(".right_panel1");
let questions_search=document.querySelector(".questions_search");
let counter=0;

//Question Submitted 
submit_button.addEventListener("click",function(e){
    let question={
        subject:"",
        details:""
    };
    question.subject=ques.value;
    question.details=discription.value;
    list_of_all_questions.push(question);
    question_section.innerHTML+=`
        <li class="quest" onclick="showResolvePage(this)">
            <h3 class="quest_heading">${ques.value}</h3>
            <p class="quest_discription">${discription.value}</p>
        </li>`
    ques.value="";
    discription.value="";
    console.log(list_of_all_questions);
})

//Show Resolve Page On Click Of Question
function showResolvePage(e){
    console.log(right_panel);
    right_panel.setAttribute("class","right_panel display_none");
    let right=document.createElement("div");
    right_panel1.appendChild(right);
    right.innerHTML=`
        <h3>Question</h3>
        <ul class="response_page_question">
            <li class="quest">
                <h3 class="quest_heading">${e.children[0].innerText}</h3>
                <p class="quest_discription">${e.children[1].innerText}</p>
            </li>
            <div class="button_divs">
                <span class="counter_class">${counter}</span>
                <button onclick="increaseCounter()">Upvote</button>
                <button onclick="decreaseCounter()">Downvote</button>
            </div>
        </ul>
        <button onclick="remove_resolve(this)">Resolve</button>
        <h4>Response</h4>
        <ul class="response_list">

        </ul>
        <h4>Add Response</h4>
        <input type="text" class="text1" value="" placeholder="Enter Name"></input>
        <br>
        <textarea class="textarea1" value="" placeholder="Enter Comment!"></textarea>
        <br>
        <button onclick="addIntoResponse()">Submit</button>`
}

//Increase UpVote Counter Of Question
function increaseCounter(){
    let counter_class=document.querySelector(".counter_class");
    counter++;
    counter_class.innerText=counter;
}


//Decrease UpVote Counter Of Question
function decreaseCounter(){
    let counter_class=document.querySelector(".counter_class");
    counter--;
    counter_class.innerText=counter;
}


//Remove Question and Resolve Page On Click Of Resolve Button
function remove_resolve(e){
    e.parentElement.remove();
    right_panel.setAttribute("class","right_panel")
    let x=e.parentElement.children[1].children[0].children[0].innerText;
    list_of_all_questions.forEach(function(values1,q,w){
        if(values1.subject==x){
            values1.resolve="Yes";
            list_of_all_questions.splice(q,1);
        }
    })
    question_section.innerHTML="";
    list_of_all_questions.forEach(function(value2,q,w){
            question_section.innerHTML+=`
            <li class="quest" onclick="showResolvePage(this)">
                <h3 class="quest_heading">${value2.subject}</h3>
                <p class="quest_discription">${value2.details}</p>
            </li>`
    })
    console.log(list_of_all_questions);
}


//Function To Add Responses On A Question
function addIntoResponse(){
    let name=document.querySelector(".text1");
    let comment=document.querySelector(".textarea1");
    let response_list=document.querySelector(".response_list");
    response_list.innerHTML+=`
    <li class="quest" onclick="showResolvePage(this)">
            <h3 class="quest_heading">${name.value}</h3>
            <p class="quest_discription">${comment.value}</p>
    </li>`
    name.value="";
    comment.value="";
}


//Search Bar Implementation
questions_search.addEventListener("keyup",function(e){
    let sub_string=questions_search.value;
    sub_string=sub_string.toLowerCase();
    let filtered_list_of_questions=[];
    list_of_all_questions.forEach(function(value3,q,w){
        if(value3.subject.toLowerCase().includes(sub_string)){
            filtered_list_of_questions.push(value3);
        }
    })
    console.log(filtered_list_of_questions);
    if(sub_string.length==0){
        question_section.innerHTML="";
        list_of_all_questions.forEach(function(value2,q,w){
                question_section.innerHTML+=`
                <li class="quest" onclick="showResolvePage(this)">
                    <h3 class="quest_heading">${value2.subject}</h3>
                    <p class="quest_discription">${value2.details}</p>
                </li>`
        })
    }
    else if(filtered_list_of_questions.length==0){
        question_section.innerHTML="";
        question_section.innerHTML="No Result Found";
    }
    else{
        question_section.innerHTML="";
        filtered_list_of_questions.forEach(function(value2,q,w){
                question_section.innerHTML+=`
                <li class="quest" onclick="showResolvePage(this)">
                    <h3 class="quest_heading">${value2.subject}</h3>
                    <p class="quest_discription">${value2.details}</p>
                </li>`
        })
    }
})