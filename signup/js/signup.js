
var signNameInput = document.getElementById('signNameInput');
var signEmailInput = document.getElementById('signEmailInput');
var signPasswordInput = document.getElementById('signPasswordInput');
var user = [];

if( localStorage.getItem('users') != null){

    user = JSON.parse(  localStorage.getItem('users') );


}

else{

    user = [];
}

function add(){
 
    if( signNameInput.value == '' & signEmailInput.value == '' & signPasswordInput.value == ''){

      var alertMessage = document.getElementById('alertMessage');
      alertMessage.classList.remove('d-none');

    }

    else{

        var account = {
            name : signNameInput.value ,
            email : signEmailInput.value , 
            password : signPasswordInput.value

        }

        user.push(account);
        localStorage.setItem('users' , JSON.stringify(user));



    }
  




}



