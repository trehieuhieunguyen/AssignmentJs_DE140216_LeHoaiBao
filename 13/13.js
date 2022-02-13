let password = document.getElementById('password');
let confirmPassword = document.getElementById('repassword');
let name1 = document.getElementById('name');
let sinh = document.getElementById('namsinh');
let email = document.getElementById('email');
let username = document.getElementById('username');
document.getElementById('submit').addEventListener('click', function() {
    if(name1.value === "" || sinh.value === "" || email.value === "" || username.value === "" ){
        alert('please enter value have (*)')
    }else
    if(Number.isInteger(Number.parseInt(sinh.value))==false){
        alert('please enter year is number')
    }else
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false)
  {
    alert("You have entered an invalid email address!")
  }else
    if(password.value !== confirmPassword.value) {
        alert('Password and ConfirmPassword does not match');
    }else{
        alert('ok');
    }
});