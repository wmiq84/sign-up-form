const button = document.querySelector("button")
const pw = document.querySelector("#password") 
const confirm_pw = document.querySelector("#confirm_password") 

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (password.value !== confirm_password.value) {
        alert("Passwords do not match");
    } else {
        document.querySelector("form").submit();
    }
});