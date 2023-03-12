let submit_button=document.querySelector(".submit_button");
let username=document.querySelector(".username");
let repos;
let userDeatils;
let user=document.querySelector(".user");
let usernamelogin=document.querySelector(".usernames");
let userImage=document.querySelector(".userImage");
let FollowersCount=document.querySelector(".FollowersCount");
let FollowingCount=document.querySelector(".FollowingCount");
let reposCount=document.querySelector('.reposCount');
let listOfRepos=document.querySelector(".listOfRepos");
let userD=document.querySelector('.userData');


function showRepoDetails(){
    repos.response.forEach(function(value,y,z){
        listOfRepos.innerHTML=listOfRepos.innerHTML+`
            <a><button>${value.name}</button></a>
        `
    })
    // console.log(listOfRepos.children);
    
    for(let i=0;i<listOfRepos.children.length;i++){
        listOfRepos.children[i].href=repos.response[i].html_url;
        listOfRepos.children[i].target="_blank";
    }
}



function showDataOnScreen(){
    // console.log(userDeatils);
    userD.setAttribute("class","userData show")
    let userData={
        username:"",
        usernamelog:"",
        userPic:"",
        userFollowers:"",
        userFollowing:"",
        userReposCount:""
    };
    userData.username=userDeatils.response.name;
    userData.usernamelog=`(@${userDeatils.response.login})`;
    userData.userPic=userDeatils.response.avatar_url;
    userData.userFollowers=userDeatils.response.followers;
    userData.userFollowing=userDeatils.response.following;
    userData.userReposCount=userDeatils.response.public_repos
    user.innerText=userData.username;
    usernamelogin.innerText=userData.usernamelog;
    userImage.setAttribute("src",`${userData.userPic}`);
    FollowersCount.innerText=userData.userFollowers;
    FollowingCount.innerText=userData.userFollowing;
    reposCount.innerText=userData.userReposCount;
    showRepoDetails();
}


submit_button.addEventListener("click",function(e){
    e.preventDefault();
    repos = new XMLHttpRequest();
    repos.open("GET", 'https://api.github.com/users/'+ username.value +'/repos');
    repos.send();
        repos.responseType = "json";
    repos.onload = () => {
    if (repos.readyState == 4 && repos.status == 200) {
        // console.log(repos.response);
        userDeatils= new XMLHttpRequest();
        userDeatils.open("GET", 'https://api.github.com/users/'+ username.value);
        userDeatils.send();
        userDeatils.responseType = "json";
        userDeatils.onload = () => {
            if (userDeatils.readyState == 4 && userDeatils.status == 200) {
                // console.log(userDeatils.response);
                showDataOnScreen();
            } else {
                // console.log(`Error: ${userDeatils.status}`);
            }
            };

    } else {
        // console.log(`Error: ${repos.status}`);
    }
    };
})