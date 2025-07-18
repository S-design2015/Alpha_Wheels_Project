let name=document.getElementById('name');
let mail=document.getElementById('mail');
let phone=document.getElementById('phone');

let nameErr=document.querySelector('.nameErr')
let mailErr=document.querySelector('.mailErr')
let phoneErr=document.querySelector('.phoneErr')

name.addEventListener('input',nameValidate)
mail.addEventListener('input',mailValidate)
phone.addEventListener('input', phoneValidate)

function nameValidate(){
    let data=name.value;
    if(data.length<1){
        nameErr.innerHTML="Required field"
    }
    else if(data.length<10)
    {
        nameErr.innerHTML="Minimum 10 characters"
    }
    else{
        nameErr.innerHTML=""
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

function phoneValidate(){
    let data=phone.value;
    if(data.length<1){
        phoneErrErr.innerHTML="Required field"
    }
    else if(data.length<10)
    {
        phoneErr.innerHTML="Minimum 10 characters"
    }
    else{
        phoneErr.innerHTML=""
    }
}
