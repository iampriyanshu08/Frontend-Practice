const slider = document.getElementById("slider");
const length = document.getElementById("passLen");
const passShow = document.getElementById("showPass");
const capital = document.getElementById("capital");
const small = document.getElementById("small");
const num = document.getElementById("num");
const special = document.getElementById("special");
const btn = document.getElementById("gen");
const copy = document.getElementById("copy");
const reset = document.getElementById("reset");
const condition = document.getElementById("condition");

//showing the value of slider
length.textContent = slider.value;
slider.addEventListener("input", () => {
  length.textContent = slider.value;
if(slider.value<=4) {
    result = condition.innerText = " very weak"
    condition.style.backgroundColor = 'red'
}
else if(slider.value>4 && slider.value<=7) {
   result = condition.innerText = 'weak'
    condition.style.backgroundColor = 'red'
}
else if(slider.value>7 && slider.value<=9) {
   result = condition.innerText = 'good'
    condition.style.backgroundColor = 'green'
}
else if(slider.value>9 && slider.value<=11) {
   result = condition.innerText = 'strong'
    condition.style.backgroundColor = 'red'
}
else if(slider.value>11 ) {
   result = condition.innerText = ' very strong'
    condition.style.backgroundColor = 'green'
}
else {
   result = condition.innerText = ""
}
setTimeout(()=>{
condition.innerText= ""
},20000)
});


btn.addEventListener("click", () => {
  passShow.value = genPass();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialChars = '`!@#$%^&*()+{}|=:;"<>';
//func to generate pass
const genPass = () => {
  let store = "";
  let allChars = "";
  allChars += capital.checked ? upperChars : "";
  allChars += small.checked ? lowerChars : "";
  allChars += num.checked ? numbers : "";
  allChars += special.checked ? specialChars : "";

  for (let i = 1; i < slider.value; i++) {
    store += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return store;
};

copy.addEventListener("click", () => {
  if (passShow.value != "" || passShow.value.length>=1) {
    alert("copy to clipboard");
    navigator.clipboard.writeText(passShow.value);
    
    

    

  }
});

reset.addEventListener("click", function(){
    window.location.reload();
})
