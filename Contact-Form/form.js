const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const nameError = document.getElementById("nerror");
const mailError = document.getElementById("merror");
const messageError = document.getElementById("msgerror");
const submission = document.getElementById("submission");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if(!validateInputs){
    submission.innerHTML = 'please fill out all the required fields'
  }
  else{
    submission.innerHTML = 'form is submitted'
  }
 
  
  
});





const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const validateInputs =()=>{

    let nameValue = username.value.trim();
  let emailValue = email.value.trim();
  let messValue = message.value.trim();

  if (nameValue === "") {
   
    nameError.innerHTML = "username is required";
  }

  if (emailValue === "") {
    
    mailError.innerHTML = "email is required";
  } else if (!isValidEmail(emailValue)) {
    mailError.innerHTML = "email is not valid";
  }  if (messValue === "") {
    
    messageError.innerHTML = "message is required";
  } 
 
  console.log(nameValue);
  console.log(emailValue);
  console.log(messValue);


  
  setTimeout(() => {
    nameError.innerHTML = "";
    mailError.innerHTML = "";
    messageError.innerHTML = "";
    submission.innerHTML = "";
  }, 3000);
}