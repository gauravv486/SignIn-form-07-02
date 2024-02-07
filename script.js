const form = document.getElementById("form");
const username = document.getElementById("username");
const errormessage = document.getElementById("error-msg");
const password = document.getElementById("password");
const errorpassword = document.getElementById("error-password");
const buttton=document.getElementById("btn");
let flag1=false;
let flag2=false;
let flag3=false;
let flag4=false;

form.addEventListener("submit",function(event){
    event.preventDefault();
    if(username.value=="" || password.value==""){
        alert("Before Submit Please Fill the credentials")
    }
    else if(username.value.length < 3){
        alert("Invalid ID: ID Should be of minimum 3 numbers");
    }
    else if(username.value.length >= 10){
        alert("ID can not exceed more the 10 number")
    }
    else if(flag1==true && flag2==true && flag3==true && flag4==true){
        form.submit();
        alert("Singin Successfull")
    }else{
        alert("Please enter valid Password")
    }
})

username.addEventListener("input", function () {
    let inputvalue = username.value.trim();
     if (/^\d+$/.test(inputvalue)) {
        errormessage.textContent = "";
    } else {
        errormessage.textContent = "ID should contain numbers only! ";
        errormessage.style.fontSize = "15px";
        errormessage.style.color = "red";
        if (inputvalue == "") {
            errormessage.textContent = "";
        }
    }
});


password.addEventListener("input", function () {
    const inputpassword = password.value.trim();
    const specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const lowercasechar = /[a-z]/;
    const uppercasechar = /[A-Z]/;
    const numericvalue =  /\d/;
    const specialcharcheck = document.getElementById("specialchar");
    const lowercasecheck = document.getElementById("lowercase");
    const uppercasecheck = document.getElementById("uppercase");
    const numericvaluecheck = document.getElementById("Numericvalue");
    if (specialchar.test(inputpassword)) {
        specialcharcheck.style.display = "none";
        flag1=true;
    }
    if (lowercasechar.test(inputpassword)) {
        lowercasecheck.style.display = "none";
        flag2=true;
    }
    if (uppercasechar.test(inputpassword)) {
        uppercasecheck.style.display = "none";
        flag3=true;
    }
    if (numericvalue.test(inputpassword)) {
        numericvaluecheck.style.display = "none";   
        flag4=true;         
    } 

    if (!(specialchar.test(inputpassword))) {
        specialcharcheck.style.display = "block";
         flag1=false;
    }
    if (!(lowercasechar.test(inputpassword))) {
        lowercasecheck.style.display = "block";
         flag2=false;
    }
    if (!(uppercasechar.test(inputpassword))) {
        uppercasecheck.style.display = "block";
         flag3=false;
    }
    if (!(numericvalue.test(inputpassword))) {
        numericvaluecheck.style.display = "block";
         flag4=false;
    } 

    if(inputpassword=="")
    {
        specialcharcheck.style.display = "block";
        lowercasecheck.style.display = "block";
        uppercasecheck.style.display = "block";
        numericvaluecheck.style.display ="block";
    }
});


