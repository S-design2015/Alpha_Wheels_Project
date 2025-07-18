let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let mail=document.getElementById('mail');
let address=document.getElementById('address');
let driving=document.getElementById('driving');
let pass=document.getElementById('pwd');
let cpass=document.getElementById('cpwd');

let fnameErr=document.querySelector('.fnameErr')
let lnameErr=document.querySelector('.lnameErr')
let mailErr=document.querySelector('.mailErr')
let addressErr=document.querySelector('.addressErr')
let drivingErr=document.querySelector('.drivingErr')
let pErr=document.querySelector('.pwdErr')
let cpErr=document.querySelector('.cpwdErr')

fname.addEventListener('input',fnameValidate)
lname.addEventListener('input',lnameValidate)
mail.addEventListener('input',mailValidate)
address.addEventListener('input', addressValidate)
driving.addEventListener('input', drivingValidate)
pass.addEventListener('input', passValidate)
cpass.addEventListener('input', cpassValidate)

function fnameValidate(){
    let data=fname.value;
    if(data.length<1){
        fnameErr.innerHTML="Required field"
    }
    else if(data.length<10)
    {
        fnameErr.innerHTML="Minimum 10 characters"
    }
    else{
        fnameErr.innerHTML=""
    }
}

function lnameValidate(){
    let data=lname.value;
    if(data.length<1){
        lnameErr.innerHTML="Required field"
    }
    else if(data.length<10)
    {
        lnameErr.innerHTML="Minimum 10 characters"
    }
    else{
        lnameErr.innerHTML=""
    }
}

function mailValidate(){
    let data=mail.value;
    if(data.length<1)
    {
        mailErr.innerHTML="Required field"
    }
    else if(data.length<10)
    {
        mailErr.innerHTML="Minimum 10 characters"
    }
    else{
        mailErr.innerHTML=""
    }
}

function addressValidate(){
    let data=address.value;
    if(data.length<1){
        addressErr.innerHTML="Required field"
    }
    else if (data.length<10)
    {
        addressErr.innerHTML="Minimum 15 characters"
    }
    else{
        addressErr.innerHTML=""
    }
}

function passValidate(){
    let data=pass.value;
    if(data.length<1){
        pErr.innerHTML="Required field"
    }
    else if(data.length<8)
    {
        pErr.innerHTML="Minimum 8 characters"
    }
    else{
        pErr.innerHTML=""
    }
}

function cpassValidate(){
    let data=pass.value;
    let data1=cpass.value;
    if(data1.length<1)
    {
        cpErr.innerHTML="Required field"
    }
    else if(data1.length<8)
    {
        cpErr.innerHTML="Minimum 8 characters"
    }
    else if(data==data1)
    {
        cpErr.innerHTML="Password matches"
    }
    else{
        cpErr.innerHTML="Password mismatches"
    }
}