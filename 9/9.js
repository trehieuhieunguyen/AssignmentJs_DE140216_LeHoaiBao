let password = document.getElementById('password');
let confirmPassword = document.getElementById('repassword');

document.getElementById('submit').addEventListener('click', function() {
    if(password.value !== confirmPassword.value) {
        alert('Password and ConfirmPassword does not match');
    }
});