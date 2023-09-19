function welcome(firstname, lastName){
    let fullName = firstname + ' ' + lastName;
    function displayFullName(){
        alert(`Welcome ${fullName}!`)
    }
    displayFullName();
}
