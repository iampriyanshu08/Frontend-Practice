const password = document.querySelector("#password");
const message = document.querySelector("#message");
const eye = document.querySelector("#eye");

const UPPERCASE_REGEX = /[A-Z]/;
const LOWERCASE_REGEX = /[a-z]/;
const NUMBER_REGEX = /\d/;
const SYMBOL_REGEX = /[\W_]/;

const WEAK_MESSAGE =
  'Password is: Weak <i class="fa-solid fa-face-frown"></i>';
const MEDIUM_MESSAGE =
  'Password is: Medium <i class="fa-solid fa-face-meh"></i>';
const STRONG_MESSAGE =
  'Password is: Strong <i class="fa-solid fa-face-smile"></i>';

function passwordInput()  {
  let passLength = password.value.length;
  let passValue = password.value;
  message.style.display = "block";


function changeStyle(color) {
  password.style.borderColor = color;
  message.style.color = color;
};


if(passLength<=0){
    message.innerHTML = ''
}else if(passLength<=8){
    message.innerHTML = `${WEAK_MESSAGE} (Must be greater than 8 characters)`;
    changeStyle('red')
}else if(!UPPERCASE_REGEX.test(passValue)){
    message.innerHTML = `${MEDIUM_MESSAGE} (No uppercase letter found)`;
    changeStyle('#ff5925');
}
else if(!LOWERCASE_REGEX.test(passValue)){
    message.innerHTML =`${MEDIUM_MESSAGE}(No lowercase letter found)`;
    changeStyle('#ff5925');
}
else if(!NUMBER_REGEX.test(passValue)){
    message.innerHTML =`${MEDIUM_MESSAGE}(No number found)`;
    changeStyle('#ff5925');
}
else if(!SYMBOL_REGEX.test(passValue)){
    message.innerHTML =`${MEDIUM_MESSAGE}(No special symbol found)`;
    changeStyle('#ff5925');
}
else{
    message.innerHTML = `${STRONG_MESSAGE}`
    changeStyle('green')
}
};

password.addEventListener('input', passwordInput)
eye.addEventListener('click',()=>{
    password.type = password.type==='password' ? 'text' : 'password';
    eye.classList.toggle('fa-eye-slash')
    eye.classList.toggle('fa-eye')
}) 