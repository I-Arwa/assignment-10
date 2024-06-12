
var signUplink = document.getElementById("signUplink");
var signInbtn = document.getElementById("signInbtn");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");


var inputs = document.querySelector(".inputs");
var msg  = document.querySelector(".msg");
var success = document.querySelector(".success");

var userData = [];



if (localStorage.getItem("userData") !== null) {
  userData = JSON.parse(localStorage.getItem("userData"));
}


signInbtn.addEventListener('click' , function(){
  
  test();
  
  var email = userEmail.value; 
  var password = userPassword.value;
  
  for( var i = 0 ; i < userData.length ; i++ ){

    if(userData[i].email.toLowerCase() == email.toLowerCase() && userData[i].password == password){

      success.classList.remove("d-none");
      msg.classList.add("d-none");

      localStorage.setItem("userName",JSON.stringify(userData[i].name).toUpperCase());
  
      success.innerHTML += '<i class="fa-solid fa-spinner fa-spin"></i>';
  
      setTimeout(function(){ window.location = "./home.html";} ,4000);
      

    
       
    }

    else{
      msg.classList.remove("d-none");
      success.classList.add("d-none");
    }
  }

  checkInputs();

});





function checkInputs(){

  if( userEmail.value == "" || userPassword.value == ""){
      inputs.classList.remove("d-none");
      msg.classList.add("d-none");
  }

  else{
      inputs.classList.add("d-none");
  }
}



function test() {

  const userDataExists = localStorage.getItem('userData') !== null;
  
  if (userDataExists) {
    msg.classList.add("d-none");
    return false;
  } 
  
  else {
    msg.classList.remove("d-none");
    return true;
  }
}






signUplink.addEventListener( 'click' , function(){
  window.location = "./signup.html";
});








