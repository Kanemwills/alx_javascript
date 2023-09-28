
const error = document.getElementById("error");
const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (e) => {
    //prevent default action
    e.preventDefault();
    validateEmail();
})

function validateEmail(){
    const email = document.getElementById("email").value;

    if (!email.match((/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i))){
        error.innerText = "Please enter a valid email address";
        return;
    }
    emailForm.submit();
}
