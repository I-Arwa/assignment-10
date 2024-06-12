
var signInlink = document.getElementById("signInlink");
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var signUpbtn = document.getElementById("signUpbtn");


var success = document.querySelector(".success");
var inputs = document.querySelector(".inputs");
var exists = document.querySelector(".exists");


var nameMsg = document.querySelector(".nameMsg");
var emailMsg = document.querySelector(".emailMsg");
var passwordMsg = document.querySelector(".passwordMsg");


var userData = [];


if (localStorage.getItem("userData") !== null) {
    userData = JSON.parse(localStorage.getItem("userData"));
}


// sign up btn -- 

signUpbtn.addEventListener('click', function(){

    signup();
    checkInputs();
});


// signup function 

function signup(){

    var user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };

    if( emailExists() ==  false){
        exists.classList.remove("d-none");
        success.classList.add("d-none");
    }

    else if( validName()== true && validEmail() == true && validPassword() == true){
        userData.push(user);
    localStorage.setItem("userData", JSON.stringify(userData));

    success.classList.remove("d-none");
    exists.classList.add("d-none");

    success.innerHTML += '<i class="fa-solid fa-spinner fa-spin"></i>';

    setTimeout(function(){ window.location = "./index.html";} ,4000);

    }

}








function emailExists(){
    for( var i=0; i < userData.length ; i++ ){

        if(userData[i].email.toLowerCase() ==userEmail.value.toLowerCase()){

            return  false;

        }
    }
}




function checkInputs(){

    if( userName.value == "" || userEmail.value == "" || userPassword.value == ""){
        inputs.classList.remove("d-none");
        exists.classList.add("d-none");
    }

    else{
        inputs.classList.add("d-none");
    }
}






// Validate userName
function validName() {
    var regex = /^[a-z][a-z0-9_-]*$/i;
    var name = userName.value;

    if (regex.test(name) == true) {
        nameMsg.classList.add("d-none");
        return true;
    } else {
        nameMsg.classList.remove("d-none");
        return false;
    }
}



// Validate email
function validEmail() {
    var regex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
    var email = userEmail.value;

    if (regex.test(email) == true) {
        emailMsg.classList.add("d-none");
        
        return true;
    } else {
        emailMsg.classList.remove("d-none");
        return false;
    }
}


// Validate password
function validPassword() {
    var regex = /^.{6,}$/;
    var password = userPassword.value;

    if (regex.test(password) == true) {
        passwordMsg.classList.add("d-none");
        return true;
    } else {
        passwordMsg.classList.remove("d-none");
        return false;
    }
}


// signin page --

signInlink.addEventListener( "click" , function(){
    window.location = "./index.html";
});









