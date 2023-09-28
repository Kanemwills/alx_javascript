const dynamicForm = document.getElementById("dynamicForm");
const numFields = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");
const error = document.getElementById("error");

numFields.addEventListener("change", generateInputFields);

dynamicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

function generateInputFields(){
    inputContainer.innerHTML = "";

    numFields = parseInt(numFields.value);

    for (i = 1; i < numFields; i++){
        const inputField = document.createElement('input');
        inputField.type = "text";
        inputField.name = "field" + i;
        inputContainer.appendChild(inputField);
    }
}





function validateForm(){
    const inputFields = inputContainer.querySelectorAll("input");
    for (item of inputFields){
        if (item.value === '') {
            error.innerText = "Please fill in all fields."
            return false;
        }
    }
    dynamicForm.submit();
}
