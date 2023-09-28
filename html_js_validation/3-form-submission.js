const submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit",handleFormSubmit);


function handleFormSubmit(e){
    e.preventDefault();

    const nameField = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const error = document.getElementById("error");


    if (nameField === '' || email === ''){
        error.innerText = "Please fill in all required fields";
        return;
    }
    submitForm.submit();
    error.style.color = "green";
    error.innerText = "Form submitted successfully!"
    
}
