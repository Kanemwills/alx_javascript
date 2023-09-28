const passwordForm = document.getElementById('passwordForm');
const error = document.getElementById('error')

passwordForm.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    validatePassword();

});
function validatePassword(){
    const password = document.getElementById('password').value;
    if (password.length < 8){
        error.innerText = "Password must be at least 8 characters long";
        return;
    }else if (!password.match(/[A-Z]/)){
        error.innerText = "Password must contain at least one uppercase letter";
        return;
    }else if (!password.match(/[a-z]/)){
        error.innerText = "Password must contains at least one lowercase letter";
        return;
    }else if (!password.match(/[0-9]/)){
        error.innerText = "Password must contain at least one numerical digit";
        return;
    }else if (!password.match(/[!@#$%^&*]/)){
        error.innerText = "Password must contain at least one special character (e.g., !@#$%^&*)";
        return;
    }
    passwordForm.submit();
}
