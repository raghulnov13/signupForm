const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const namefield = document.getElementById("namefield");
const title = document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}