const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const form = document.getElementById("form");

const name_error = document.getElementById("name_error");

const email_error = document.getElementById("email_error");

const pass_error = document.getElementById("pass_error");
const cpass_error = document.getElementById("cpass_error");


const Toggle = ()=>{
    const pass = document.getElementById("password");

    if(pass.type === "password"){
        pass.type = 'text';
        
    }
    else{
        pass.type = 'password';
    }
}

form.addEventListener("submit", (e) => {
  const email_check =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (name.value === "" || name.value == null) {
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  } else {
    name_error.innerHTML = "";
  }

  if (!email.value.match(email_check)) {
    e.preventDefault();
    email_error.innerHTML = "Valid Email is required";
  } else {
    email_error.innerHTML = "";
  }

  if (password.value.length <= 5) {
    e.preventDefault();
    pass_error.innerHTML = "Password must be more than 6 characters";
  } else {
    pass_error.innerHTML = "";
  }

  if (password.value.length >= 20) {
    e.preventDefault();
    pass_error.innerHTML = "Password cannot be more than 20 characters";
  }

  if (password.value === "password") {
    e.preventDefault();
    pass_error.innerHTML = "Password cannot be password";
  }

  if(!cpassword.value.match(password.value)){
e.preventDefault();
cpass_error.innerHTML = "password must be same "
  }
});
