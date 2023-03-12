let counter=0;
const student_data=[];
let insertInTables=document.querySelector("#tables");
let lists=document.querySelectorAll("input");
let button=document.querySelector("button");
let student_object={};
function clearVal(){
    student_object={
        name:'',
        course:'',
        roll_number:'',
        marks:{
            web_programming:'',
            computer_graphics:'',
            system_programming:'',
            computer_networks:'',
            database_management_system:''
        }
    };
}

function addElementsInArray(){
    student_data.push(student_object);
    clearVal();
    console.log(student_data);
    console.log(student_object);
}

lists[8].addEventListener("click",addElementsInObject);
function addElementsInObject(){
    clearVal();
    student_object.name=`${lists[0].value}`;
    student_object.course=`${lists[1].value}`;
    student_object.roll_number=`${lists[2].value}`;
    student_object.marks.web_programming=`${lists[3].value}`;
    student_object.marks.computer_graphics=`${lists[4].value}`;
    student_object.marks.system_programming=`${lists[5].value}`;
    student_object.marks.computer_networks=`${lists[6].value}`;
    student_object.marks.database_management_system=`${lists[7].value}`;
    addElementsInArray();
    let row=document.createElement("tr");
    insertInTables.appendChild(row)
    row.innerHTML=`
        <tr>
            <td>${student_data[counter].name}</td>
            <td>${student_data[counter].course}</td>
            <td>${student_data[counter].roll_number}</td>
            <td>${student_data[counter].marks.web_programming}</td>
            <td>${student_data[counter].marks.computer_graphics}</td>
            <td>${student_data[counter].marks.system_programming}</td>
            <td>${student_data[counter].marks.computer_networks}</td>
            <td>${student_data[counter].marks.database_management_system}</td>
        </tr>
    `
    counter++;
}


