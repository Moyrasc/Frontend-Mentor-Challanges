const form = document.querySelector("button");
const emailInput = document.querySelector(".email-box");
const errorText = document.querySelector(".email-error");
const errorIcon = document.querySelector(".error-icon");


const setError = () => {
    emailInput.classList.add("email-error");
    errorText.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
}
const setSucces = () =>{
    emailInput.classList.remove("email-error-border");
    errorText.classList.add("hidden");
    errorIcon.classList.add("hidden");

}
const validateEmail = (email) => {
    let reg =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(reg.test(String(email).toLowerCase()));
    return reg.test(String(email).toLowerCase());
}
const checkEmail = () =>{
    const emailValue = emailInput.value.trim();
    if(emailValue === " "|| !validateEmail(emailValue)){
        setError();
    }else if(validateEmail(emailValue)){
        setSucces();
    }
}
form.addEventListener("click",(e)=>{
    e.preventDefault();
    checkEmail();
})