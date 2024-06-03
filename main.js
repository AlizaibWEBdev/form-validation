document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = document.getElementsByTagName("input");
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");
    let cpasswordError = document.getElementById("rewrite-error");
    let name = inputs[0].value;
    let email = inputs[1].value;
    let password = inputs[2].value;
    let cpassword = inputs[3].value;


    if (name.length < 3) {
        nameError.innerText = "please enter name minimum of 3 chrachter"
        inputs[0].style.border = "1px solid red";
        return;
    } else {
        inputs[0].style.border = "none";
        nameError.innerText = ""
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "please enter valid email"
        inputs[1].style.border = "1px solid red";
        return;
    } else {
        inputs[1].style.border = "none";
        emailError.innerText = ""
    }


    if (password.length < 8) {
        passwordError.innerText = "please enter password minimum of 8 chrachter"
        inputs[2].style.border = "1px solid red";
        return;
    } else {
        inputs[2].style.border = "none";
        passwordError.innerText = ""
    }


    if (cpassword !== password) {
        cpasswordError.innerText = "password dose not match"
        inputs[3].style.border = "1px solid red";
        return;
    } else {
        inputs[3].style.border = "none";
        cpasswordError.innerText = ""
    }

    
    document.getElementsByTagName("form")[0].submit();


})