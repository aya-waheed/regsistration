
var user = [];

user = JSON.parse( localStorage.getItem('users'));

var loginEmailInput = document.getElementById('loginEmailInput');
var loginPasswordInput = document.getElementById('loginPasswordInput');

 document.getElementById('login').addEventListener('click' , function(){

    login()

 })



function login(){

 if( loginEmailInput.value =='' && loginPasswordInput.value == ''){

    var alertMessage = document.getElementById('alertMessage');
    alertMessage.classList.remove('d-none');


 }

 else{
 
    checkUser();

 }


}


function checkUser(){

    for(var i = 0 ; i< user.length ; i++){

   if(loginEmailInput.value == user[i].email && loginPasswordInput.value == user[i].password ){

    var currentName = user[i].name; 
    localStorage.setItem('userName' , currentName );

    location = '../home/home.html'


   }


    }


}