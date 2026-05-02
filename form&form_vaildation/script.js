let email=document.querySelector("#email");
let password=document.querySelector("#password");
let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passans=passwordRegex.test(password.value);

    if(!emailans){
        document.querySelector("#email-error").textContent="Email is invalid";
        //set display to none
    }
    if(!passans){
        document.querySelector("#password-error").textContent="Password is invalid";
        //display is none
    }
})
